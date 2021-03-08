import React from "react";
import firebase from "firebase/app";
import Layout from "@theme/Layout";
import { AuthProvider, useUser } from "../../components/auth/Authneticated";
import { Button, Divider, Grid } from "@material-ui/core";
import styles from "./styles.module.css";
import LoginForm from "../../components/auth/LoginForm";
import { RedirectQuery } from "../../components/util/RedirectQuery";
import { auth } from "../../util/firebase";

const LoginPage: React.FC = () => {
  const user = useUser();

  if (user) {
    return <RedirectQuery />;
  }

  async function signInWithGoogle() {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  return (
    <Layout>
      <AuthProvider>
        <Grid
          container
          direction={"row"}
          justify={"center"}
          alignItems={"center"}
          className={styles.container}
        >
          <Grid item xs={12} lg={3}>
            <div>
              <Button variant="contained" fullWidth onClick={signInWithGoogle}>
                Sign in with google
              </Button>
            </div>

            <div style={{ marginTop: 24 }} />

            <Divider></Divider>

            <div style={{ marginTop: 36 }} />

            <LoginForm></LoginForm>

            <div style={{ marginTop: 72 }} />
          </Grid>
        </Grid>
      </AuthProvider>
    </Layout>
  );
};

export default LoginPage;
