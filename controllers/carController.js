const Car = require('../models/carModel');


const addData = async(req, res) => {
    try{
        let data = new Car(req.body);
        let result = await data.save();
        if(result){
            res.status(200).json(result);            
        }
        else{
            res.status(400).json({message: "Couldn't add data provided."});
        }
        
    }
    catch(err){
        res.status(500).json(err)
    }
}


const getAllData = async(req, res) => {
    try{
        const allData = await Car.find();
        if(allData.length > 0){
            return res.status(200).send(allData);
        }
        else{
            return res.status(400).json({message : "No Data Found"})
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}


const getMyData = async(req, res) => {
    try{
        const myData = await Car.find({userId : req.params.id});
        if(myData.length > 0){
            return res.status(200).send(myData);
        }
        else{
            return res.status(400).json({message : "No Data Found"})
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}

const getCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        res.status(200).json(car);
    } 
    catch (error) {
        res.status(500).json(error)
    }
}

const updateData = async(req, res) => {
    let data = req.body;
    console.log(data);
    try{
        const myData = await Car.updateOne( 
            {_id : req.params.id} , 
            { $set : data }
        )
        if(myData){
            return res.status(200).json({message : "Data updated"})
        }
        else{
            return res.status(400).json({message : "No Data Found"})
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}


const deleteData = async(req, res) => {
    try{
        const myData = await Car.deleteOne( {_id : req.params.id} )
        if(myData){           
            return res.status(200).json({message : "Data deleted"})
        }
        else{
            return res.status(400).json({message : "No Data Found"})
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}


module.exports = {
    getAllData,
    addData,
    getMyData,
    getCar,
    updateData,
    deleteData
}
