import BrowserOnly from "@docusaurus/BrowserOnly";
import { Button, Divider, Grid } from "@material-ui/core";
import Layout from "@theme/Layout";
import firebase from "firebase/app";
import React from "react";

import { AuthProvider } from "../../components/auth/Authneticated";
import LoginForm from "../../components/auth/LoginForm";
import { auth } from "../../util/firebase";
import styles from "./styles.module.css";

const LoginPage: React.FC = () => {
  async function signInWithGoogle() {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  return (
    <BrowserOnly fallback={<div>Login page</div>}>
      {() => {
        return (
          <Layout title={`Sign in`}>
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
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={signInWithGoogle}
                    >
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
      }}
    </BrowserOnly>
  );
};

export default LoginPage;
