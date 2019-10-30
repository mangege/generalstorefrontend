import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: orange,
    error: red,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" className="head-site-name">
              解忧南杂店
          </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item lg={2} md={6} sm={6} >
              <Card>
                <CardMedia component="img"
                  alt="injoylife包包女包新款2019流行黑色斜挎包小包百搭ins复古单肩包"
                  image="//img.alicdn.com/bao/uploaded/i4/2024444814/O1CN01vn5Nqa1lQrAhZY2mZ_!!0-item_pic.jpg"
                  title="injoylife包包女包新款2019流行黑色斜挎包小包百搭ins复古单肩包" />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    injoylife包包女包新款2019流行黑色斜挎包小包百搭ins复古单肩包
                </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
