const express = require('express');
const router = express.Router();
const user = require('./user');

//Get Users
router.get('/', async (req, res) => {
    try{
        const users = await user.find()
        res.json(users);
    } catch(err){
        res.json( () => {message: err});
    }
});

//Get User
router.get('/:userId', async (req, res) => {
    try{
        const users = await user.findById(req.params.userId)
        res.json(users);
    } catch(err){
        res.json( () => {message: err});
    }
});

//Create User
router.post('/', async (req, res) => {
    const users = await new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age
    });
    try{
        const savedUsers = await users.save()
        res.json(savedUsers);
    } catch(err){
        res.json( () => {message: err});
    }
})

//Update User
router.patch('/:userId', async (req, res) => {
    try{
        const users = await user.findByIdAndUpdate(req.params.userId, {$set: {name: req.body.name}});
        res.json(updatedUsers);
    } catch(err){
        res.json( () => {message: err});
    }
});

//Delete User
router.delete('/:userId', async (req, res) => {
    try{
        const deletedUser = await user.findByIdAndDelete(req.params.userId);
        res.json(deletedUser);
    } catch(err){
        res.json( () => {message: err});
    }
});

module.exports = router;