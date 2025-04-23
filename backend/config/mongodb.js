// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// const connectDB = async () => {

//     mongoose.connection.on('connected',()=> {
//         console.log('DB Connected');
//     })

//     await mongoose.connect(`${process.env.MONGODB_URL}/project1`)
// }

// export default connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    mongoose.connect(`${process.env.MONGODB_URL}/project1`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((error) => {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    });

    mongoose.connection.once("open", () => {
        console.log("MongoDB Connection is Open");
    });
};

export default connectDB;

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const connectDB = async () => {
//     await mongoose.connect(`${process.env.MONGODB_URL}/project1`, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });

//     console.log("MongoDB Connected Successfully");

//     mongoose.connection.once("open", () => {
//         console.log("MongoDB Connection is Open");
//     });
// };

// export default connectDB;