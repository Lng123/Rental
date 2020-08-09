
import React, { Component } from "react";
import axios from "axios";


export default class Discussion extends Component {
  constructor(props) {
      super(props);
      this.renderDisc = this.renderDisc.bind(this);
      this.onChangeReply = this.onChangeReply.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      // this.renderReplies = this.renderReplies(this);

      this.state = {
        discussions: [],
        reply: ''
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

  onChangeReply(e) {
    this.setState( {
      reply: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const reply = {
      body: this.state.reply
    }
    axios.post("http://localhost:5000/discussion/addReply", reply, { withCredentials: true })
    .then(window.location.reload());
  }

  renderDisc() {
      // {{#each discussion}}
      var items = []
      this.state.discussions.forEach(element => {
        items.push(
      <div>
      <div class="discussion_box">
        <div class="d_profile_pic">
          <a href="/profile/{{this.USER_ID}}">
            <img class="post-img" src={element.image} />
          </a>
        </div>
        <div class="details">
          <div class="title_topic">
            <strong class="title">{element.title}</strong>
        <strong class="topic">{element.topic.topic}</strong>
            <br></br>
          </div>
          <div class="body_date">
            <span class="body">{element.body}</span>
            <span class="date">{element.createdAt}</span>
          </div>
        </div>
      </div>
      <div class="reply">
        <button class="reply-btn btn-primary" onclick="toggle()">Replies</button>
        <div class="form-popup hide" id="myForm">
          {renderReplies(element)}
          <form onSubmit= {this.onSubmit}> 
            <div class="comment_box">
                <input id="description" class="comment_field" type="text" name="reply" placeholder="  add your reply ..." name="description" minlength="1"
                  maxlength="2000" value={this.state.reply} onChange= {this.onChangeReply}></input><br></br>
                <button class="btn btn-primary comment_btn" type="submit">Comment</button>
                <input value={element._id} hidden="true"></input>
            </div>
          </form>
        </div>
      </div>
      </div>
        )
      
      })
      return items;
      {/* {{/each}} */}
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

          // {{#each this.replies}}
          // {{>reply reply=this}}
          // {{/each}}
  if (!disc.replies) {
    return;
  }
  console.log(disc.replies);
  var items = [];
  disc.replies.forEach(element => {
    items.push(
      <div class="reply_box">
      <div class="post_profile_pic">
          <a href="/profile/{{reply.USER_ID}}">
              <img class="post-img" src='{{reply.PROFILE_PICTURE}}' />
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