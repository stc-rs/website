import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useFormState } from "react-use-form-state";
import { auth } from "../../util/firebase";

interface Fields {
  email: string;
  pw: string;
  pw2: string;
}

const LoginForm: React.FC = () => {
  const [form, { email, password }] = useFormState<Fields>();
  const [register, setRegister] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (register) {
      if (form.values.pw !== form.values.pw2) {
        alert("Passsword check is different from password");
        return;
      }

      try {
        await auth.createUserWithEmailAndPassword(
          form.values.email,
          form.values.pw
        );
      } catch (e) {
        alert(`Failed to sign up: ${e}`);
      }
    } else {
      try {
        await auth.signInWithEmailAndPassword(
          form.values.email,
          form.values.pw
        );
      } catch (e) {
        alert(`Failed to sign in: ${e}`);
      }
    }
  }

  return (
    <form action="post" onSubmit={submit}>
      <div>
        <TextField
          variant="outlined"
          fullWidth
          label={`Email`}
          {...email("email")}
          autoComplete={"username"}
        />
        <div style={{ marginTop: 12 }} />
        <TextField
          variant="outlined"
          fullWidth
          label={`Password`}
          {...password("pw")}
          autoComplete={register ? "new-password" : "current-password"}
        />
        {register && (
          <>
            <div style={{ marginTop: 12 }} />
            <TextField
              variant="outlined"
              fullWidth
              label={`Password check`}
              type="password"
              {...password("pw2")}
              autoComplete={"new-password"}
            />
          </>
        )}

        <div style={{ marginTop: 6 }} />

        <Grid container direction={"row"} justify="flex-end">
          <Grid item>
            <Button onClick={() => setRegister((v) => !v)}>
              {register ? "Go back" : "Sign Up"}
            </Button>
          </Grid>
        </Grid>

        <div style={{ marginTop: 18 }} />
        <Button variant="contained" fullWidth type="submit">
          {register ? `Sign Up` : `Sign In`}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
