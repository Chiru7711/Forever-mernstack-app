import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";

const createToken = (id) =>{
    return  jwt.sign({id},process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req,res) =>{
    try {
        const {email, password} = req.body;
        
        // check if user exists
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success: false, message: 'User not found'});
        }
        
        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch){
            const token = createToken(user._id)
            return res.json({success: true, token})
        }
        else {
            return res.json({success: false,message:'Invaid credentials'})
        } 
    } catch(err){
        console.log(err);
        res.json({success: false, message: 'Server Error'});
    }
}

// Route for user registration

const registerUser = async (req,res) => {
    try{
        const {name, email, password} = req.body;

        // checking if user is already registered or not
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success: false, message: 'User already exists'});
        }

        // validate email 
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: 'Invalid email'});
        }
        
        // validate password
        if (password.length < 8) {
            return res.json({success: false, message: 'Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'});
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user
        const newUser = new userModel({name, email, password: hashedPassword});

        // save user to the database
        const user = await newUser.save();
        
        const token = createToken(user._id)

        res.json({success: true, message: 'User registered successfully', token});
    } catch(error){
        console.log(error);
        res.json({success: false, message: 'Server Error'});
    }
}

//Route for admin login

const adminLogin = async (req,res) =>{
    try {

        const {email,password} = req.body
        
        // check admin email password

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
           const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true, token})
        } else {
            res.json({success: false, message: 'Invalid credentials'})
        
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}


export {loginUser, registerUser, adminLogin }