const Task = require("../models/Task");

const getAllTasks = (req, res) => {
	res.send(" Get all tasks");
};

const createTask = async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
};

const getTask = (req, res) => {
	res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
	res.json({ id: req.params.id });
};

const deleteTask = (req, res) => {
	res.json({ id: req.params.id });
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
