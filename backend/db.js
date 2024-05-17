const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://divyanshnigam1612:D1612n%40@cluster0.g4y1zex.mongodb.net/Foodease_mern?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    await mongoose.connect(mongoURI, {
        useNewUrlParser: true
    },async(err, result)=>{
        if(err)
            console.log("---",err)
        else{
            console.log("MongoDB Connected")
            const fetched_data = await mongoose.connection.db.collection("food_items")
            fetched_data.find({}).toArray(function(err,data){
                if(err)
                    console.log(err);
                else
                    console.log(data);
            })
        }
    });
};

module.exports = connectDB;
