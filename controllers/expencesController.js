const fs = require('fs');
const Expences = require('./../models/expenceModel');

exports.getAllHotels =  async (req,res)=>{
    try{
        const hotels = await Hotel.find();
        res
    .status(200)
    .json({
        status:'sucess',
        results:hotels.length,
        data:{
          hotels
        }
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
};
 
exports.getHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findByID(req.params.id)
    res
    .status(200)
    .json({
        status:'success',
        data:{
            hotel
        }
    })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
};

exports.createHotel = async (req, res)=>{
    try{
        const newHotel = await Hotel.create(req.body)
        res
        .status(201)
        .json({
            status:'success',
            message: "New hotel created",
            data: newHotel
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.updateHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        res
        .status(200)
        .json({
        status:'success',
        message: "Hotel Updated",
        data: {
            hotel
        }
    })
    }catch(err){
        res
        .status(404).json({
        status: 'failed',
        message: err
        })
    }
}

exports.deleteHotel = async (req,res)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res
    }catch(err){
        res
        .status(404).json({
        status: 'failed',
        message: err
        })
    }
};