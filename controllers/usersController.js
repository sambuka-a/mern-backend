const User = require('../model/User')

const getAllUsers = async (req, res) => {
    const users = await User.find()
    if(!users) return res.status(204).json({'message': 'No user found'})
    res.json(users)
}

/*
const createNewUser = async (req, res) => {
    if(!req?.body?.username) {
        return res.status(400).json({"message": "Username is required"});
    }

    try {
        const result = await User.create({
            username: req.body.username,
        })
        res.status(201).json(result)
    } catch(err) {
        console.log(err);
    }
}

const updateUser = async (req, res) => {
    if(!req?.body?.id) return res.status(400).json({"message": "ID parameter is required"})

    const user = await User.findOne({_id: req.body.id}).exec()
    if (!user) {
        return res.status(204).json({ "message": `No user mathes ID ${req.body.id}` });
    }
    if (req.body?.username) user.username = req.body.username;
    const result = await user.save();
    res.json(result)
}
*/

const deleteUser = async (req, res) => {
    if(!req?.body?.id) return res.status(400).json({"message": "ID parameter is required"})
    
    const user = await User.findOne({_id: req.body.id}).exec()
    if (!user) {
        return res.status(204).json({ "message": `No user mathes ID ${req.body.id}`});
    }
    const result = await user.deleteOne() //{_id: req.body.id}
    res.json(result);
}

const getUser = async (req, res) => {
    if(!req?.params?.id) return res.status(400).json({"message": "ID parameter is required"})

    const user = await User.findOne({_id: req.params.id}).exec()
    if (!user) {
        return res.status(204).json({"message": `No user mathes ID ${req.params.id}`});
    }
    res.json(user);
}

module.exports = {
  getAllUsers,
  deleteUser,
  getUser
}