const User = require("../models/User");
// const BaseTransaction = require("../models/Transaction");
const lendingTransaction = require("../models/lendingTransaction");
const expenseTransaction = require("../models/expenseTransaction");
const incomeTransaction = require("../models/incomeTransaction");


// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
// const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
// const port = process.env.PORT || 4000;
const fns = require("date-fns");

module.exports = {
	profile: (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, (err, info) => {
			if (err) throw err;
			res.json(info);
		});
	},

	getCurrentLending: async (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const date_now = new Date();
			const start = fns.startOfMonth(date_now);
			const user = await User.findOne({ username: info.username });
			const lend_transactions = await lendingTransaction.aggregate([
				{
					$match: {
						date: { $gt: start, $lte: date_now },
						$or: [{ to: user._id }, { from: user._id }],
					},
				},
			]);
			res.json(lend_transactions);
		});
	},

	getCurrentExpense: async (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const date_now = new Date();
			const start = fns.startOfMonth(date_now);
			const user = await User.findOne({ username: info.username });
			const expense_transactions = await expenseTransaction.aggregate([
				{
					$match: { date: { $gt: start, $lte: date_now }, from: user._id },
				},
				{
					$group: {
						_id: "$category",
						amount: { $sum: "$amount" },
					},
				},
			]);
			res.json(expense_transactions);
		});
	},

	getCurrentIncome: async (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const date_now = new Date();
			const start = fns.startOfMonth(date_now);
			const user = await User.findOne({ username: info.username });
			const income_transactions = await incomeTransaction.aggregate([
				{
					$match: { date: { $gt: start, $lte: date_now }, to: user._id },
				},
				{
					$group: {
						_id: "$category",
						amount: { $sum: "$amount" },
					},
				},
			]);
			res.json(income_transactions);
		});
	},

	getMonthly: async (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const field = req.params.id;
			const date_now = new Date();
			const prev_six = fns.endOfMonth(fns.subMonths(date_now, 7));
			const user = await User.findOne({ username: info.username });
	
			if (field === "Peer-Lending") {
				const monthly = await lendingTransaction.aggregate([
					{
						$match: {
							date: { $gt: prev_six, $lte: date_now },
							$or: [{ to: user._id }, { from: user._id }],
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
			} else if (field === "Total") {
				const monthly = await expenseTransaction.aggregate([
					{
						$match: {
							date: { $gt: prev_six, $lte: date_now },
							from: user._id,
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
			} else {
				const monthly = await expenseTransaction.aggregate([
					{
						$match: {
							date: { $gt: prev_six, $lte: date_now },
							category: field,
							from: user._id,
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
			}
		});
	},

	getDues: async (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const user = await User.find({ username: info.username });
			const date_now = new Date();
			const month_end = fns.endOfMonth(new Date(2023, 5, 24));
			const dues = await lendingTransaction.aggregate([
				{
					$match: {
						to: user._id,
						dueDate: {$gt : date_now, $lte: month_end}
					},
				},
				// {
				//   $sort: {
				//     dueDate: 1,
				//   },
				// },
			]);
			res.json(dues);
		});
	},

	getHistory: async (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const user = await User.findOne({ username: info.username });
			const history = await expenseTransaction.aggregate([
				{
					$match: {
						from: user._id,
					},
				},
				{
					$sort: {
						date: -1,
					},
				},
			]);
			res.json(history);
		});
	},

	getBalance: async (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const user = await User.findOne({ username: info.username });
			const date_now = new Date();
			const start = fns.startOfMonth(date_now);
			const LendingDeb = await lendingTransaction.aggregate([
				{
					$match: { to: user._id, dueDate: { $gt: start, $lte: date_now } },
				},
				{
					$group: { _id: null, amount: { $sum: "$amount" } },
				},
			]);
			const LendingCred = await lendingTransaction.aggregate([
				{
					$match: { from: user._id, dueDate: { $gt: start, $lte: date_now } },
				},
				{
					$group: { _id: null, amount: { $sum: "$amount" } },
				},
			]);
			const cred = await incomeTransaction.aggregate([
				{
					$match: { to: user._id, date: { $gt: start, $lte: date_now } },
				},
				{
					$group: { _id: null, amount: { $sum: "$amount" } },
				},
			]);
			const debit = await expenseTransaction.aggregate([
				{
					$match: { from: user._id, date: { $gt: start, $lte: date_now } },
				},
				{
					$group: { _id: null, amount: { $sum: "$amount" } },
				},
			]);
			const mExp =
				parseInt(LendingCred.length > 0 ? LendingCred[0].amount : 0) +
				parseInt(cred.length ? cred[0].amount : 0) -
				parseInt(debit.length ? debit[0].amount : 0) -
				parseInt(LendingDeb.length ? LendingDeb[0].amount : 0);
	
				const cred_tot =  parseInt(LendingCred.length > 0 ? LendingCred[0].amount : 0) + parseInt(cred.length ? cred[0].amount : 0);
				const deb_tot =  parseInt(LendingDeb.length > 0 ? LendingDeb[0].amount : 0) + parseInt(debit.length ? debit[0].amount : 0);
	
			res.json({ balance: user.balance, monthExpense: mExp, limit: user.limit, totalCred: cred_tot, totalDebit : deb_tot});
		});
	},

	getFriends: async (req, res) => {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const user = await User.findOne({ username: info.username }).populate({
				path: "lendingTransactions",
				populate: {
					path: "to from",
				},
				select: ["to", "from", "amount"],
			});
			const friend_lended_to = [];
			const friend_borrowed_from = [];
			user.lendingTransactions.map((trans) => {
				if (trans.from.username == info.username) {
					const to = trans.to.username;
					const amt = trans.amount;
					friend_lended_to.push({ username: to, amount: amt });
				} else {
					const from = trans.from.username;
					const amt = trans.amount;
					friend_borrowed_from.push({ username: from, amount: -amt });
				}
			});
			res.json({
				lended_to: friend_lended_to,
				borrowed_from: friend_borrowed_from,
			});
		});
	}
}
