import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Link, TextField } from "@material-ui/core";
import { auth } from "../firebase";

export default (props: any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm_password, setConfirmPassword] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {user && props.history.push("/")});
  }, []);

  async function signup() {
    try {
      if (password === confirm_password) {
        await auth.createUserWithEmailAndPassword(email, password)
        const user: any = auth.currentUser
        if (user) await user.updateProfile({ displayName: displayName })
        props.history.push("/login");
      } else {
        alert("password and confirm_password is not same")
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Fragment>
      <Container>
        <TextField style={{ margin: 8 }} variant="outlined" value={email} name="email" label="Email" onChange={(e: any) => {setEmail(e.target.value)}}/>
        <TextField style={{ margin: 8 }} variant="outlined" value={password} name="password" label="Password" type="password" onChange={(e: any) => {setPassword(e.target.value)}}/>
        <TextField style={{ margin: 8 }} variant="outlined" value={confirm_password} name="confirm_password" label="Confirm Password" type="password" onChange={(e: any) => {setConfirmPassword(e.target.value)}}/>
        <TextField style={{ margin: 8 }} variant="outlined" value={displayName} name="displayName" label="DisplayName" onChange={(e: any) => {setDisplayName(e.target.value)}}/>
        <Button style={{ margin: 8, padding: 15 }} variant="outlined" onClick={() => signup()} >Sign up</Button>
        <Link style={{ margin: 16, padding: 16 }} href="/login">Login</Link>
      </Container>
    </Fragment>
  );
};