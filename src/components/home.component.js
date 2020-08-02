import React, { Component } from "react";
import Top from './top.component';
import Card from './profilecard.component';
import axios from "axios";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }

    
    }

    componentDidMount() {
        axios
        .get("http://localhost:5000", { withCredentials: true })
        .then((response) => {
          console.log("TEST " + JSON.stringify(response));
          console.log((response.data).length);
          if ((response.data).length > 0) {
            this.setState({
                loggedIn: true,
                user: response.data[0]
              })
          }
          console.log(this.state);
        })
    }

    render() {
        return(
            <div>
            <Top loggedIn={this.state.loggedIn}/>
            <Card user = {this.state.user}/>
            </div>
        );
    }
}