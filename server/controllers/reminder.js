const User = require("../models/User");
const reminder = require("../models/reminder");

const bcrypt = require("bcrypt");
// const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

const fns = require("date-fns");

module.exports = {
	addReminder: async (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const { description, amount, date } = req.body;
			const usr = await User.findOne({ username: info.username });
			const reminderDoc = await reminder.create({
				userId: usr._id,
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
			const date_now = fns.add(new Date(), {days: -1});
			const end = fns.add(date_now, {days: 7});
			const user = await User.findOne({ username: info.username });
			// console.log(date_now, user._id);
			// console.log(end);
			const lend_transactions = await reminder.aggregate([
				{
					$match: {
						date: { $gt: date_now, $lte: end },
						userId: user._id,
					},
				},
			]);
			res.json(lend_transactions);
		});
	}

}