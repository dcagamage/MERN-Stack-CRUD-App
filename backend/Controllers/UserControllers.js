const User = require("../Model/UserModel");

const getAllUsers = async(req, res, next) => {
    let Users;

    //Get all users
    try{
        users = await User.find();
    } catch (err) {
        console.log(err);
    }

    //Not Found
    if(!users){
        return res.status(404).json({message:"User not found"});
    }

    // Display all users
    return res.status(200).json({ users });
}

// date insert
const addUsers = async (req, res, next) => {
    const {name,gmail,age,address} = req.body;

    let users;

    try{
        users = new User({name,gmail,age,address});
        await users.save();
    } catch (err) {
        console.log(err);
    }

    //not insert users
    if(!users){
        return res.status(404).json({message:"Unable to add users"});
    }
    return res.status(200).json({ users });
}

const getById = async(req, res, next) => {
    const id = req.params.id;

    let users;

    try{
        users = await User.findById(id);
    } catch (err) {
        console.log(err);
    }

    //Not available user
    if(!users){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json({ users });
}

// update user details
const updateUser = async(req, res, next) => {
    const id = req.params.id;
    const {name,gmail,age,address} = req.body;

    let users;
    
    try{
        users = await User.findByIdAndUpdate(id, {name,gmail,age,address});
        users = await users.save();
    } catch (err) {
        console.log(err);
    }

    //Not available user
    if(!users){
        return res.status(404).json({message:"Unable to update user details"});
    }
    return res.status(200).json({ users });
}

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;