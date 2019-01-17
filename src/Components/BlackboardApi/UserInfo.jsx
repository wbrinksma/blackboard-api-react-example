import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Card, CardContent, withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { BBUserInfoById, BBUserInfoByUsername } from 'blackboardlib';

const styles = theme => ({
    title: {
        fontSize: 14
    },
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
        margin: theme.spacing.unit,
        width: 200,
    },
    card: {
        minWidth: 275,
    }
});

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            username: '',
            userId: ''
        }

        this.getInfoByUserId = this.getInfoByUserId.bind(this);
        this.handleUserIdChange = this.handleUserIdChange.bind(this);

        this.getInfoByUsername = this.getInfoByUsername.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    static propTypes = {
        classes: PropTypes.any
    }

    getInfoByUsername() {
        let user = new BBUserInfoByUsername(this.state.username);
        user.getUserInfo().then((result) => {
            console.log(result);
            this.setState({data: result});
        });
    }

    getInfoByUserId() {
        let user = new BBUserInfoById(this.state.userId);
        console.log(user);
        user.getUserInfo().then((result) => {
            console.log(result);
            this.setState({data: result});
        });
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handleUserIdChange(event) {
        this.setState({userId: event.target.value});
    }

    render() {
        const { classes } = this.props;
        console.log(this.props.classes);
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <TextField
                            className={classes.textField}
                            variant="outlined"
                            label="Username"
                            margin="normal"
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                        >
                        </TextField>
                        <Button variant='contained' className={classes.button} color="primary" onClick={this.getInfoByUsername}>Get Info By Username</Button>
                        <br />
                        <TextField 
                            className={classes.textField} 
                            variant="outlined"
                            label="User Id"
                            margin="normal"
                            value={this.state.userId}
                            onChange={this.handleUserIdChange}
                        >
                        </TextField>
                        <Button variant='contained' className={classes.button} color="primary" onClick={this.getInfoByUserId}>Get Info By User Id</Button>
                    </CardContent>
                </Card>
                <br />
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title}>Id: {this.state.data.id}</Typography>
                        <Divider />
                        <Typography className={classes.title}>Student: {this.state.data.student}</Typography>
                        <Divider />
                        <Typography className={classes.title}>Voornaam: {this.state.data.firstname}</Typography>
                        <Divider />
                        <Typography className={classes.title}>Achternaam: {this.state.data.surname}</Typography>
                        <Divider />
                        <Typography className={classes.title}>Email: {this.state.data.email}</Typography>
                        <Divider />
                        <Typography className={classes.title}>Username: {this.state.data.username}</Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(UserInfo);
