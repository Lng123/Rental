
import React, { Component } from "react";
import axios from "axios";
import '../css/discussions.css';


export default class Discussion extends Component {
  constructor(props) {
      super(props);
      this.renderDisc = this.renderDisc.bind(this);
      // this.onChangeReply = this.onChangeReply.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      // this.renderReplies = this.renderReplies(this);

      this.state = {
        discussions: [],
        replies: [],
        discId: []
      }
  }

  componentDidMount() {
    axios
    .get("http://localhost:5000/discussion/getDisc", { withCredentials: true })
    .then((response) => {
      if ((response.data).length > 0) {
        this.setState({
            discussions: response.data
          })
      }
      // console.log(this.state);
    })


  }

  onChangeReply(i, e) {
    this.setState( {
      replies: { ...this.state.replies, [i]: e.target.value}
    })
  }


  onSubmit(i, e) {
    e.preventDefault();
    const reply = {
      body: this.state.replies[i],
      discId: this.refs[i].value
    }
    console.log(reply);
    console.log(i);
    console.log(this.refs[i].value);
    axios.post("http://localhost:5000/discussion/addReply", reply,  { withCredentials: true })
    .then((res) => {
      console.log(res.data);
      if (res.data == true) {
        alert("You need to be logged in");
      } 
      window.location.reload();
    });
  }

  replyToggle(i){
    var replies = document.getElementsByClassName("form-popup")[i];
    
    if(replies.classList.contains("hide")){
        replies.classList.remove("hide");
    } else replies.classList.add("hide");
  }


  renderDisc() {
      var items = [];
      var element = this.state.discussions;
      for (var i = 0; i < element.length; i++) {
        items.push(
          <div>
          <div class="discussion_box">
            <div class="d_profile_pic">
              <a href="/profile/{{this.USER_ID}}">
                <img class="post-img" src={element[i].image} />
              </a>
            </div>
            <div class="details">
              <div class="title_topic">
                <strong class="title">{element[i].title}</strong>
            <strong class="topic">{element[i].topic.topic}</strong>
                <br></br>
              </div>
              <div class="body_date">
                <span class="body">{element[i].body}</span>
                <span class="date">{element[i].createdAt}</span>
              </div>
            </div>
          </div>
          <div class="reply">
            <button class="reply-btn btn-primary" onClick={this.replyToggle.bind(this, i)}>Replies</button>
            <div class="form-popup hide" id="myForm">
              {renderReplies(element[i])}
              <form onSubmit= {this.onSubmit.bind(this, i)}> 
                <div class="comment_box">
                    <input id="description" class="comment_field" type="text" name="reply" placeholder="  add your reply ..." name="description" minlength="1"
                      maxlength="2000" value={this.state.replies[i]} onChange= {this.onChangeReply.bind(this, i)}></input><br></br>
                    <button class="btn btn-primary comment_btn" type="submit">Comment</button>
                    <input value={element[i]._id} hidden={true} ref = {i}
                    ></input>
                </div>
              </form>
            </div>
          </div>
          </div>
            )
      }
      return items;
  }
  
  

  render() {
    var items = this.renderDisc()
      return (
          <div id="parent-container" class="post-flex-container post-flex-table">
          <div id="discussion_container">
            {items}
          </div>
          </div>
      )
  }
}

function renderReplies(disc) {

  console.log(disc)
  if (!disc.replies) {
    return;
  }
  // console.log(disc.replies);
  var items = [];
  disc.replies.forEach(element => { 
    console.log(element);
    items.push(
      <div class="reply_box">
      <div class="post_profile_pic">
          <a href="/profile/{{reply.USER_ID}}">
              <img class="post-img" src={element.image} />
          </a>
      </div>
      <div class="post_body">
          <span>{element.body}<br></br></span>
      </div>
      </div>
    )
})

return items;

}