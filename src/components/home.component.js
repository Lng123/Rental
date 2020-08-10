import React, { Component } from "react";
import Top from './top.component';
import Card from './profilecard.component';
import Create from './createDiscussion.component';
import Discussion from './discussions.component';
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
            <div class="row justify-content-center">
            <Card user = {this.state.user}/>
            <Create/>
            </div>
            <div>
            <Discussion/>
            </div>
            </div>
        );
    }
}