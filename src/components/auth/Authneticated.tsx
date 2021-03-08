import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import { auth, firestore } from "../../util/firebase";

export interface UserData {}

export interface User {
  reload: () => void;
  fbUser: firebase.User;
  data: UserData;
}

interface State {
  loading: boolean;
  user: User | null;
}

const def = {
  loading: true,
  user: null,
};
const UserContext = createContext<State>(def);

export const AuthProvider: React.FC = (props) => {
  const [fbUser, setFbUser] = useState<firebase.User | null | undefined>();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setFbUser(user);
      if (!user) {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!fbUser) {
      return;
    }

    const unsubscribe = firestore
      .collection("users")
      .doc(fbUser.uid)
      .onSnapshot(async (ds) => {
        const data: UserData = (ds.data() as any) ?? {};

        setUser({
          data,
          fbUser,
          async reload() {
            await fbUser.reload();
          },
        });
      });

    return () => {
      unsubscribe();
    };
  }, [fbUser]);

  return (
    <UserContext.Provider
      value={{
        loading: user === undefined,
        user: user ?? null,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

/**
 * Get current user.
 *
 * @returns `undefined` while loading, `null` if it's loaded but not authenticated.
 */
export function useUser(): User | null | undefined {
  const v = useContext(UserContext);
  if (v.loading) return undefined;
  return v.user;
}
