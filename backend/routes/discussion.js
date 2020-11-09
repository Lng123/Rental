const router = require('express').Router();

let Discuss = require('../models/discussion.model')
let User = require('../models/user.model')

router.route("/create").post(async (req, res) => {
    // var userId = req.session.userId;
    // var topicId = req.body.id;
    // var title = req.body.title;
    // var body = req.body.body;
    if (req.session.userId == null) {
        throw new Error("Not logged in");
    }
    var dTopic = await Discuss.Topic.find({topic_id :req.body.topic_id});
    const Disc = Discuss.Discussion({
        topic: dTopic[0]._id,
        user: req.session.userId,
        title: req.body.title,
        body: req.body.body
    })
    Disc.save()
        .then(() => res.json("discussion created"))
        .catch(err => res.status(400).json(err));
    
})

router.route("/addTopic").post(async (req, res) => {
    const Topic = new Discuss.Topic({
        topic: req.body.topic,
        topic_id: req.body.topic_id
    })

    Topic.save()
    .then(() => res.json('Topic added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route("/getDisc").get(async (req, res) => {
    var disc = await Discuss.Discussion.find().populate("topic").populate("replies").sort({"createdAt": -1}).lean()
    .then(async disc => {
        for (var i= 0; i < disc.length; i++) {
            userImage = await User.User.find({email: disc[i].user});
            disc[i].image = userImage[0].image;
        }
        res.json(disc);
    }).catch(err => res.status(400).json('Error: ' + err));

}) 

router.route('/addReply').post(async (req,res) => {
    console.log(req.session.userId);
    if (req.session.userId == null) {
        res.send(200, true);
        return;
    }
    await User.User.find({email :req.session.userId})
    .then((users) =>{
        console.log(users);
        const Reply = Discuss.Reply({
            // user = req.session.userId,
            // body = req.body.body
            user: users[0]._id,
            body: req.body.body,
            image:users[0].image,
    
        })
        Reply.save();
        console.log(req.body.discId);
        Discuss.Discussion.update({_id: req.body.discId},{$push: {replies: Reply}},
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
                res.send();
            }
        })
    })

    
})

module.exports = router;