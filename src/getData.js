import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Users extends Component {

    // this method fires off before anything gets rendered
    // just search for react lifecycle methods and you will understand what i mean
    componentWillMount() {
        getUsers();
    }

    constructor(props) {
        super(props);
        this.title = "Users";
        // this.users = this.getUsers(); // THIS IS WRONG
        this.state = {
            users: []
        }
    }

    // getUsers() {

    //     let list = {};

    //     axios.get('users').then(function (result) {
    //         console.log(result);
    //         list = result.data;
    //     });

    //     return list;
    // };

    // I like to use arrow syntax functions
    getUsers = () => {
        axios.get('users')
            .then( (response) => {
                this.setState({users: response.data});
            })
            .catch( (error) => {
                console.log(error);
            });
    }

    render(){
        return(
            <h1>pow</h1>
        )
    }


}