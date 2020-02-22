import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { auth } from "../firebase";

export default (props: any) => {
  const [user, setUser] = useState<object>({});

  useEffect(() => {
    auth.onAuthStateChanged(u => {u ? setUser(u) : props.history.push("/login");});
  }, []);

  async function logout(e: any) {
    await auth.signOut()
    props.history.push("/login")
  }

  return (
    <Fragment>
      <Container>
        <Typography>Here is the user's information</Typography>
        <Typography variant="caption" component="pre">{JSON.stringify(user, null, 4)}</Typography>
        <Button fullWidth onClick={(e) => logout(e)}>Logout</Button>
      </Container>
    </Fragment>
  );
};
