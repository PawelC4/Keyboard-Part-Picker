import { useState } from "react";
import "./BuildPage.css";

function BuildPage() {
    // State to store tasks
    const [tasks, setTasks] = useState([
        "keychron v1 max base",
        "panda switches x90",
        "gmk keycaps"
    ]);

    const [newTask, setNewTask] = useState("");

    // Add a task
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask(""); // Clear input field
        }
    };

    // Delete a task
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };
        return (
            <div className="todo-container">
                <h1>Build List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        className="todo-input"
                        placeholder="Add a new part"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addTask()}
                    />
                    <button onClick={addTask}>Add</button>
                </div>
                <ul className="build-list">
                    {tasks.map((task, index) => (
                        <li key={index} className="build-part">
                            <input type="checkbox" className="checkbox"/>
                            <span>{task}</span>
                            <button className="delete-btn" onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
}

export default BuildPage;