require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/User");
const Transaction = require("./models/Transaction");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
const port = process.env.PORT || 4000;
const fns = require("date-fns");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
mongoose.set("strictQuery", true);
mongoose.connect(
  process.env.CONNECTION_STRING
);
// , () => {
//   console.log("Connected to MongoDB");
// });
const auth = require("./controllers/auth.js");

// app.post("/login", auth.login);
// app.post("/logout", logout);

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/register", async (req, res) => {
  const { username, password, name, college, yearOfStudy, limit } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
      name,
      college,
      yearOfStudy: yearOfStudy,
      limit: limit,
    });
    res.json({ requestData: { username, password } });
  } catch (e) {
    console.log(e);
    res.status(404).json(e);
  }
});

app.post("/addTransaction", async (req, res) => {
  const { amount, to, from, interest, date, category, dueDate } = req.body;
  const transactionDoc = await Transaction.create({
    amount,
    to,
    from,
    interest,
    date: new Date(date),
    category,
    dueDate: new Date(dueDate),
  });
  var bal1 = 0,
    bal2 = 0;
  User.findOne({ username: to }, "balance")
    .then(async (docs) => {
      if (docs) {
        bal1 = docs.balance;
        const user1 = await User.updateOne(
          { username: to },
          { balance: bal1 + parseInt(amount) }
        );
      }
    })
    .then((err) => {
      console.log(err);
    });

  User.findOne({ username: from }, "balance")
    .then(async (docs) => {
      if(docs){
        bal2 = docs.balance;
        const user2 = await User.updateOne(
          { username: from },
          { balance: bal2 - parseInt(amount) }
        );
      }
      
    })
    .then((err) => {
      console.log(err);
    });
  res.json(transactionDoc);
});

app.get("/getTransactions", async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const cred_list = await Transaction.find({ to: info.username });
    const deb_list = await Transaction.find({ from: info.username });
    const lending_list = await Transaction.find({ category: "Peer Lending" });
    res.json({ clist: cred_list, dlist: deb_list, lending: lending_list });
  });
});

app.get("/getCurrentTrend", async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const date_now = new Date();
    const pst = fns.startOfMonth(date_now);
    const o = await Transaction.aggregate([
      {
        $match: { date: { $gt: pst, $lte: date_now } },
      },
      {
        $group: {
          _id: "$category",
          amount: { $sum: "$amount" },
        },
      },
    ]);
    const o2 = await User.find({ username: info.username }, "balance limit");
    const exp = await Transaction.aggregate([
      {
        $match: { date: { $gt: pst, $lte: date_now }, from: info.username },
      },
      {
        $group: {
          _id: null,
          amount: { $sum: "$amount" },
        },
      },
    ]);
    res.json({ pie_data: o, bal: o2, exp: exp });
  });
});

app.get("/getMonthly/:id", async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const field = req.params.id;
    const date_now = new Date();
    const prev_six = fns.endOfMonth(fns.subMonths(date_now, 7));
    const monthly = await Transaction.aggregate([
      {
        $match: {
          date: { $gt: prev_six, $lte: date_now },
          category: field,
          from: info.username,
        },
      },
      {
        $group: {
          _id: { $month: "$date" },
          amount: { $sum: "$amount" },
        },
      },
    ]);
    res.json(monthly);
  });

});

app.get("/getDues", async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const dues = await Transaction.find(
      { to: info.username, category: "Peer Lending" },
      "from dueDate interest amount date"
    );
    res.json(dues);
  });
});

app.listen(port);
