const router = require('express').Router();

let Discuss = require('../models/discussion.model')

router.route("/create").post(async (req, res) => {
    // var userId = req.session.userId;
    // var topicId = req.body.id;
    // var title = req.body.title;
    // var body = req.body.body;
    var dTopic = await Discuss.Topic.find({topic_id :req.body.topic_id});
    console.log(dTopic);
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
    var disc = await Discuss.Discussion.find().sort({"createdAt": -1})
    .then(disc => {
        console.log(disc);
        res.json(disc);
    }).catch(err => res.status(400).json('Error: ' + err));

}) 

module.exports = router;