import TodoModel from '../models/todo.js';

// Testing Function
export const Test = async(req,res) => {
    try{
        res.status(200).send({
            success : true,
            message : "Welcome to Todo App",
        })
    }
    catch(error){
        res.status(500).send({
            success : false,
            message : "Something Went Wrong",
            error,
        })
    }
}
// Function for Posting new task
export const addController = async(req,res) => {
    try{
        const {name} = req.body;
        if(!name){
            return res.status(500).send({ error : " Task name is required"});
        }
        const addTodo = await new TodoModel({name}).save();
        res.status(200).send({
            success : true,
            message : "Task Added Successfully",
            addTodo,
        })
    }
    catch(error){
        res.status(500).send({
            success : false,
            message : "Error while Adding Task",
            error,
        })
    }
}

// Function for Getting Todo
export const getController = async(req,res) => {
    try{
        const allTodo = await TodoModel.find({});
        res.status(200).send({
            success : true,
            message : "Getted Data",
            allTodo,
        })
    }
    catch(error){
        res.status(500).send({
            success : false,
            message : "Error while Getting Task",
            error,
        })
    }
}

// Function for deleting Todo List
export const deleteController = async(req,res) => {
    try{
        const {id} = req.params;
        await TodoModel.findByIdAndDelete(id);
        res.status(200).send({
            success : true,
            message : "deleted Task Successfully",
        });
    }
    catch(error){
        res.status(500).send({
            success : false,
            message : "Error while Deleting Task",
            error,
        })
    }
}
// Function for updating new task
export const updateController = async(req,res) => {
    try{
        const {name} = req.body;
        const { id } = req.params;
        const updatedData = await TodoModel.findByIdAndUpdate(id, { name} , {new : true});
        res.status(200).send({
            success : true,
            message : "Todo updated successfully",
            updatedData,
        })
    }
    catch(error){
        res.status(500).send({
            success : false,
            message : "Error while Adding Task",
            error,
        })
    }
}