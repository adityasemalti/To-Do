import React, { useState } from "react";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newTask, setNewTask] = useState({ name: "", date: "", description: "" });
  
    const addTask = () => {
      if (newTask.name.trim() === "") return;
      setTasks([...tasks, { id: Date.now(), text: newTask.name, date: newTask.date, description: newTask.description, status: "active" }]);
      setNewTask({ name: "", date: "", description: "" });
      setShowForm(false);
    };
  
    const markCompleted = (id) => {
      setTasks(tasks.map((t) => (t.id === id ? { ...t, status: "completed" } : t)));
    };
  
    const startTask = (id) => {
      setTasks(tasks.map((t) => (t.id === id ? { ...t, status: "ongoing" } : t)));
    };
  
    const activeTasks = tasks.filter((t) => t.status === "active");
    const completedTasks = tasks.filter((t) => t.status === "completed");
    const ongoingTasks = tasks.filter((t) => t.status === "ongoing");
  
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4  bg-gradient-to-r to-white from-orange-400 p-2 rounded-lg">Welcome Aditya 👋👋</h2>
        <div className="p-5">

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-500 duration-300">
            <h3 className="font-semibold mb-2 text-center ">Active Tasks</h3>
            {activeTasks.map((t) => (
              <div key={t.id} className="p-3 bg-white rounded-md shadow flex justify-between items-center mb-2">
                <span>{t.text}</span>
                <div className="flex gap-2">
                  <button onClick={() => startTask(t.id)} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Start</button>
                  <button onClick={() => markCompleted(t.id)} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Complete</button>
                </div>
              </div>
            ))}
          </div>
  
          <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-500 duration-300">
            <h3 className="font-semibold mb-2 text-center">Ongoing Tasks</h3>
            {ongoingTasks.map((t) => (
              <div key={t.id} className="p-3 bg-white rounded-md shadow flex justify-between items-center mb-2">
                <span>{t.text}</span>
                <button onClick={() => markCompleted(t.id)} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Complete</button>
              </div>
            ))}
          </div>
  
          <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-500 duration-300">
            <h3 className="font-semibold mb-2 text-center">Completed Tasks</h3>
            {completedTasks.map((t) => (
              <div key={t.id} className="p-3 bg-white rounded-md shadow flex justify-between items-center mb-2">
                <span className="line-through text-gray-500">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
  
        <div className="mt-10 text-end">
          <button onClick={() => setShowForm(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">New Task</button>
        </div>
        </div>

  
        {showForm && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Add New Task</h3>
            <input type="text" placeholder="Task Name" value={newTask.name} onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} className="w-full p-2 mb-2 border rounded" />
            <input type="date" value={newTask.date} onChange={(e) => setNewTask({ ...newTask, date: e.target.value })} className="w-full p-2 mb-2 border rounded" />
            <textarea placeholder="Description" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} className="w-full p-2 mb-2 border rounded"></textarea>
            <div className="flex justify-between">
              <button onClick={addTask} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add Task</button>
              <button onClick={() => setShowForm(false)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cancel</button>
            </div>
          </div>
        )}
      </div>
    );
  };

export default Dashboard;