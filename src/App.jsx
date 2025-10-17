import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Add / Update Task
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    if (editingIndex !== null) {
      const updated = [...tasks];
      updated[editingIndex] = newTask;
      setTasks(updated);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }
    setNewTask("");
  };

  // Edit Task
  const handleEditTask = (index) => {
    setNewTask(tasks[index]);
    setEditingIndex(index);
  };

  // Delete Task
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd, #c2e9fb)",
        fontFamily: "Segoe UI, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          width: "380px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            color: "#6b46c1",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          ✅ To-Do List
        </h1>

        {/* Input + Button */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
          <button
            onClick={handleAddTask}
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {editingIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        {/* Task List */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {tasks.length === 0 ? (
            <p style={{ color: "gray", fontSize: "14px" }}>No tasks yet!</p>
          ) : (
            tasks.map((task, index) => (
              <li
                key={index}
                style={{
                  background: "#f8f9ff",
                  padding: "12px",
                  borderRadius: "12px",
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{task}</span>
                <div>
                  <button
                    onClick={() => handleEditTask(index)}
                    style={{
                      marginRight: "6px",
                      padding: "6px 10px",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "13px",
                      background: "#f6ad55",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    style={{
                      padding: "6px 10px",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "13px",
                      background: "#e53e3e",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
