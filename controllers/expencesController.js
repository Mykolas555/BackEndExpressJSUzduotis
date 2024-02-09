//expenceController.js

const Expences = require('./../models/expenceModel');

exports.getAllExpences = async (req, res) => {
    try {
        const expences = await Expences.find();
        res.status(200).json({
            status: 'success',
            results: expences.length,
            data: {
                expences
            }
        });
    } catch (err) {
        console.log(err)
        res.status(404).json({
            status: 'failed',
            message: err
        });
    }
};

exports.getExpence = async (req, res) => {
    try {
        const expence = await Expences.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                expence
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        });
    }
};

exports.createExpence = async (req, res) => {
    try {
        const newExpence = await Expences.create(req.body);
        res.
            status(200).json({
            status: 'success',
            message: "New expense created",
            data: newExpence
        });
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        });
    }
};

exports.updateExpence = async (req, res) => {
    try {
        const expence = await Expences.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            message: "Expence Updated",
            data: {
                expence
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        });
    }
};

exports.deleteExpence = async (req, res) => {
    try {
        await Expences.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        });
    }
};
