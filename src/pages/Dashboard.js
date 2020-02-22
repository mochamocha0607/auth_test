import React, { useState, useEffect } from 'react';
import { db } from "../firebase";

import { CssBaseline, Container, Paper } from '@material-ui/core';
import Chart from './Chart';

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("scores").orderBy("date").limit(100).get().then((response) => {
      const scores = []
      response.forEach((doc) => {
        scores.push(doc.data())
      })
      setData(scores)
    })
  }, []);

  return (
    <div style={{display: 'flex'}}>
      <CssBaseline />

      <main style={{flexGrow: 1, height: '100vh', overflow: 'auto'}}>
        <Container maxWidth="lg" style={{padding: 16}}>
          <Paper style={{height: 300, padding: 4, display: 'flex', overflow: 'auto', flexDirection: 'column'}} square={true}>
            <Chart data={data}/>
          </Paper>
        </Container>
      </main>
    </div>
  );
}