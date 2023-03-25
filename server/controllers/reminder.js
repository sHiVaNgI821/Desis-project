const User = require("../models/User");
const reminder = require("../models/reminder");

const bcrypt = require("bcrypt");
// const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

module.exports = {
	addReminder: async (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const { description, amount, date } = req.body;
			const usr = await User.findOne({ username: info.username });
			const reminderDoc = await reminder.create({
			description,
			amount,
			date,
			});
			const upd = await User.findByIdAndUpdate(usr._id, {
			$push: { reminders: reminderDoc._id },
			});
			res.json(reminderDoc);
		});
	},

	getReminders: async (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const user = await User.findOne({ username: info.username });
			//const 
			const reminders = await reminder.find({from : user._id}, "description amount date");
			// const historyIncome = await incomeTransaction.find({to: user._id}, "from to amount date category");
			// const history = historyExpense.concat(historyIncome);
			// history.sort(function(a,b){
			// 	return new Date(b.date) - new Date(a.date);
			//   });
			res.json(reminders);
		});
	}

}