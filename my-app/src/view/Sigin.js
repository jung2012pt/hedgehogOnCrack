import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({

  root: {
    "& .MuiPaper-root": {
      background: '#FEF9EE',
      height: '100vh'
    }
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#000",
  },
  form: {
    width: '30%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

async function loginUser(credentials) {
  return fetch('http://localhost:9000/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Signin() {
  const classes = useStyles();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    console.log("FFFFFFFFFFFFF");
    const response = await loginUser({
      username,
      password
    });
    if (response.status = 200) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      navigate('/4')
      // .then((value) => {
      //   localStorage.setItem('accessToken', response['accessToken']);
      //   localStorage.setItem('user', JSON.stringify(response['user']));
      //   window.location.href = "/profile";
      // });
    } else {
      swal("Failed", response.message, "error");
    }
  }
  // function send() {
  //   var myVar = { username: 1 };
  //   // console.log("tuleb siia", document.getElementById('saada').value);
  //   fetch("http://localhost:9000/api/auth/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "text/json"
  //     },
  //     body: JSON.stringify(myVar)
  //   }).then(function (response) {
  //     console.log(response);
  //     return response.json();
  //   }).then(function (muutuja) {
  //     // document.getElementById('väljund').innerHTML = JSON.stringify(muutuja);
  //   });
  // }
  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} className={classes.image} />
      <Grid item xs={12} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            CREATE ACCOUNT
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              label="Username"
              onChange={e => setUserName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            {/* <Link to="/4"> */}
            <Button
              style={{
                backgroundColor: "#000",
                color: "#fff"
              }}
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              CREATE ACCOUNT
            </Button>
            {/* </Link> */}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}