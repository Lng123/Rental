




export default class Discussion extends Component {
    constructor(props) {
        super(props)
    }

    function renderDisc() {
        // {{#each discussion}}
        <div class="discussion_box">
          <div class="d_profile_pic">
            <a href="/profile/{{this.USER_ID}}">
              <img class="post-img" src='{{this.PROFILE_PICTURE}}' />
            </a>
          </div>
          <div class="details">
            <div class="title_topic">
              <strong class="title">Title</strong>
              <strong class="topic">Topic</strong>
              <br></br>
            {/* </span> */}
            </div>
            <div class="body_date">
              <span class="body">Body</span>
              <span class="date">Date</span>
            </div>
          </div>
        </div>
        <div class="reply">
          <button class="reply-btn btn-primary" onclick="toggle()">{{this.NUM_REPLIES}} Replies</button>
          <div class="form-popup hide" id="myForm">
    
            <form action="/reply" method="POST"> 
              <div class="comment_box">
                  <input id="description" class="comment_field" type="text" name="reply" placeholder="  add your reply ..." name="description" minlength="1"
                    maxlength="2000"><br>
                  <button class="btn btn-primary comment_btn" type="submit">Comment</button>
                  <input value="{{this.ID}}" name="discussionId" hidden="true">
              </div>
            </form>
          </div>
        </div> 
        </div>
        {/* {{/each}} */}
    }
    
    function renderReplies() {
                // {{#each this.replies}}
                // {{>reply reply=this}}
                // {{/each}}
    }

    render() {
        return {
            <div id="parent-container" class="post-flex-container post-flex-table">
            <div id="discussion_container">
              
            </div>
          </div>
        }
    }
}
