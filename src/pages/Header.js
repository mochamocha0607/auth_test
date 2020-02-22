import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { auth } from "../firebase";

const UserInfo = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged(u => {u && setUser(u)});
  }, []);

  async function logout(e) {
    if (window.confirm("ログアウトしますか？")) {
      await auth.signOut()
      await setUser({})
    }
  }

  if (user.displayName) {
    return <Button color="inherit" onClick={(e) => logout(e)}>{user.displayName}</Button>
  } else {
    return (
      <div>
        <Link style={{ margin: 16, color: "#fff" }} href="/login">ログイン</Link>
        <Link style={{ margin: 16, color: "#fff" }} href="/signup">登録</Link>
      </div>
    );
  }

}

export default (props) => {
  return (
    <div style={{flexGrow: 1, marginBottom: 32}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            <Link style={{ color: "#fff" }} href="/">
                もちゃもちゃ
            </Link>
          </Typography>
          <UserInfo/>
        </Toolbar>
      </AppBar>
    </div>
  );
}