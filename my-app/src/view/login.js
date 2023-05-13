import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import swal from 'sweetalert';

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
  return fetch('http://localhost:9000/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login() {
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
    console.log(response);
    if (!response.message) {
      // swal("Success", response.message, "success", {
      //   buttons: false,
      //   timer: 2000,
      // })
      swal({
        title: "Welcome",
        text: response.message,
        icon: "success",
        buttons: false,
        timer: 2000,
        // dangerMode: true,
      })
        // navigate('/2')
        .then((value) => {
          console.log(response);
          // localStorage.setItem('user', JSON.stringify(response['user']));
          localStorage.setItem('id', response.id);

          navigate('/2')
        });
    } else {
      swal("Failed", response.message, "error");
    }
  }

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
            Login
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
            {/* <Link to="/2"> */}
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
              Login
            </Button>
            {/* </Link> */}
          </form>
          <Typography variant="body2" color="textSecondary" align="center">
            Don't have an account yet?
            <Link to="/3" variant="body2">
              &nbsp;Create your account
            </Link>
          </Typography>

        </div>
      </Grid>
    </Grid>
  );
}