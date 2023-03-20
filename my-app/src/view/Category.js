import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import '../css/Category.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Row, Col } from 'react-bootstrap';
const useStyles = makeStyles((theme) => ({
    //   square: {

    //   },
    //   image: {
    //     backgroundImage: 'url(https://source.unsplash.com/random)',
    //     backgroundSize: 'cover',
    //   },
    //   paper: {
    //     margin: theme.spacing(8, 4),
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //   },
    //   avatar: {
    //     margin: theme.spacing(1),
    //     backgroundColor: theme.palette.secondary.main,
    //   },
    //   form: {
    //     width: '100%',
    //     marginTop: theme.spacing(1),
    //   },
    //   submit: {
    //     margin: theme.spacing(3, 0, 2),
    //   },
}));



export default function Category() {


    return (
        <div className="overflow-hidden">

            <Row style={{ overflow: "scroll" }}>
                <Col xs={12} md={4}>
                    Column 1
                </Col>
                <Col xs={12} md={4}>
                    <div class="square">
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    Column 3
                </Col>
            </Row>
        </div>
    );
}