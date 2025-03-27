var task = require('../models/task')

exports.add_task = async (req, res) => {
    var data = await task.create(req.body)
    res.status(200).json({
        status: "Task Created..!",
        data
    })
}

exports.get_task = async (req, res) => {
    var data = await task.find();
    res.status(200).json({
        status: "Task Find ..!",
        data
    })
}
exports.delete_task = async(req,res) =>{
    var id = req.params.id;
    var data = await task.findByIdAndDelete(id);
    res.status(200).json({
        status:"Task Deleted..!",
        data
    })
}

exports.update_task = async(req,res) =>{
    var id = req.params.id;
    var data = await task.findByIdAndUpdate(id,req.body);   
    res.status(200).json({
        status:"Task Upadates..!",
        data
    })
}  
