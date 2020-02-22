
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Link, TextField } from "@material-ui/core";
import { auth } from "../firebase";

export default (props: any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    auth.onAuthStateChanged(u => {u && props.history.push("/")});
  }, []);

  async function signin() {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      props.history.push("/");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Fragment>
      <Container>
        <TextField style={{ margin: 8 }} variant="outlined" value={email} name="email" label="Email" onChange={(e: any) => {setEmail(e.target.value)}}/>
        <TextField style={{ margin: 8 }} variant="outlined" value={password} name="password" label="Password" type="password" onChange={(e: any) => {setPassword(e.target.value)}}/>
        <Button style={{ margin: 8, padding: 15 }} variant="outlined" onClick={() => signin()} >Login</Button>
      </Container>
    </Fragment>
  );
};