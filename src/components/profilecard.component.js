import React, { Component } from "react";

export default class ProfileCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.user) {
            return(
                <div class="card align-items-center">
                <a href="">
                   <img class="card-img-top rounded-circle" src=""></img>
                </a>
                <div class="card-body">
            <h3 class="card-title text-center"> {this.props.user.firstName} {this.props.user.lastName}</h3>
                    <p class="card-text text-center text-secondary">About</p>
                </div>
                <div id="notifications">
                    <div class="row rcard">
                        <a href="/myPosts" class="col-* text-secondary"><u>Posts</u></a>
                        <div class="col-sm text-secondary">posts</div>
                    </div>
                    <div class="row rcard">
                        <a href="/conversationPage" class="col-* text-secondary"><u>Messages</u></a>
                        <div class="col-sm text-secondary">messages</div>
                    </div>
                    <div class="row rcard">
                        <span class="col-* text-secondary">Likes</span>
                        <div class="col-sm text-secondary">likes</div>
                    </div>
                </div>
                <div>
                <div class="row rcard" id="edit">
                    <a href="" class="col-* text-secondary"><u>Edit Profile</u></a>
                </div>
                </div>
            </div>
            );
        } else {
            return <div></div>
        }
        
    }
}