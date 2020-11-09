import React, { Component } from "react";
import axios from "axios";


export default class createDiscussion extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onChangeTopic = this.onChangeTopic.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            body: '',
            topic_id: 1
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeBody(e) {
        this.setState({
            body: e.target.value
        });
    }

    onChangeTopic(e) {
        this.setState({
            topic_id: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.user == null) {
            alert("Not Logged In");
        }
        const discussion = {
            title: this.state.title,
            body:this.state.body,
            topic_id: this.state.topic_id
        }

        axios.post("http://localhost:5000/discussion/create", discussion, { withCredentials: true })
        .then(res => {
            console.log(res.data);
            window.location.reload();
        })
        

    }

    render() {
        return(
            <div class="col-md-5">
                <h4 class ="text-secondary">What is your question today</h4>
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Subject" name='title' onChange={this.onChangeTitle} value={this.state.title} required></input>
                    </div>
                    <div class="form-group">
                        <textarea id="explain" rows="3" class="form-control" placeholder="Body" name='body' onChange={this.onChangeBody} value={this.state.body} required></textarea>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <select class="custom-select" name='id' onChange={this.onChangeTopic} value={this.state.topic_id}>
                                <option value="1" selected>General</option>
                                <option value="2">Tenant Question</option>
                                <option value="3">LandLord Question</option>
                            </select>
                            <div class="input-group-append">
                                <button class="btn btn-create" type="submit">Create Post</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}