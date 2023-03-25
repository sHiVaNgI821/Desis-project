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

	getReminder: async (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const start = new Date();
			const end = fns.add(start, {days: 7,});
			const user = await User.findOne({ username: info.username });
			const days7_reminder = await reminders.aggregate([
				{
					$match: { date: { $gt: end, $lte: start }, from: user._id },
				},
			]);
			res.json(days7_reminder);
		});
	}

}