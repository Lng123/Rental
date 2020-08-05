const express = require('express');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const authRouter = require("./routes/auth");
const discusssionRouter = require("./routes/discussion");

app.use('/',authRouter);
app.use('/discussion', discusssionRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
