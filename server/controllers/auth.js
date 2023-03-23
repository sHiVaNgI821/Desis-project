module.exports = {
	login: async(res, req) => {
		const { username, password } = req.body;
		try {
			const UserDoc = await User.findOne({ username });
			const passOk = bcrypt.compareSync(password, UserDoc.password);
			if (passOk) {
			jwt.sign({ username, id: UserDoc._id }, secret, {}, (err, token) => {
				if (err) throw err;
				res.cookie("token", token).json({
				id: UserDoc._id,
				username,
				});
			});
			} else {
			alert("Invalid");
			res.json("Invalid Credentials");
			}
		} catch (e) {
			console.log(e);
			res.status(404).json(e);
		}
	},

	login: logout =  async(req, res) => {
		res.cookie("token", "").json("ok");
	}
}


// async function login(res, req){
// 	const { username, password } = req.body;
// 	try {
// 		const UserDoc = await User.findOne({ username });
// 		const passOk = bcrypt.compareSync(password, UserDoc.password);
// 		if (passOk) {
// 		jwt.sign({ username, id: UserDoc._id }, secret, {}, (err, token) => {
// 			if (err) throw err;
// 			res.cookie("token", token).json({
// 			id: UserDoc._id,
// 			username,
// 			});
// 		});
// 		} else {
// 		alert("Invalid");
// 		res.json("Invalid Credentials");
// 		}
// 	} catch (e) {
// 		console.log(e);
// 		res.status(404).json(e);
// 	}
// }

// let logout =  async(req, res) => {
// 	res.cookie("token", "").json("ok");
// }