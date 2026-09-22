import { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:5000/api/requests";

function App() {
    const [requests, setRequests] = useState([]);

    const [form, setForm] = useState({
        studentName: "",
        email: "",
        category: "",
        description: "",
        priority: ""
    });

    const [editId, setEditId] = useState(null);

    // Get all requests
    const getRequests = async () => {
        const response = await fetch(API);
        const data = await response.json();
        setRequests(data);
    };

    useEffect(() => {
    fetch(API)
        .then(response => response.json())
        .then(data => setRequests(data));
}, []);

    // Handle form input
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // Submit / Update
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editId) {
            await fetch(`${API}/${editId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
        } else {
            await fetch(API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
        }

        setForm({
            studentName: "",
            email: "",
            category: "",
            description: "",
            priority: ""
        });

        setEditId(null);
        getRequests();
    };

    // Edit request
    const editRequest = (request) => {
        setForm({
            studentName: request.studentName,
            email: request.email,
            category: request.category,
            description: request.description,
            priority: request.priority
        });

        setEditId(request.id);
    };

    // Delete request
    const deleteRequest = async (id) => {
        await fetch(`${API}/${id}`, {
            method: "DELETE"
        });

        getRequests();
    };

    // Cancel edit
    const cancelEdit = () => {
        setEditId(null);

        setForm({
            studentName: "",
            email: "",
            category: "",
            description: "",
            priority: ""
        });
    };

    return (
        <div className="app">
            <div className="container">

                <h1>Campus Help Desk</h1>

                <p className="subtitle">
                    Submit and manage your campus-related problems
                </p>

                <form onSubmit={handleSubmit} className="form">

                    <label>Student Name</label>
                    <input
                        type="text"
                        name="studentName"
                        value={form.studentName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />

                    <label>Category</label>
                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Hostel">Hostel</option>
                        <option value="Academic">Academic</option>
                        <option value="Library">Library</option>
                        <option value="Transport">Transport</option>
                        <option value="Canteen">Canteen</option>
                        <option value="Other">Other</option>
                    </select>

                    <label>Problem Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Describe your problem"
                        required
                    ></textarea>

                    <label>Priority</label>
                    <select
                        name="priority"
                        value={form.priority}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <button type="submit">
                        {editId ? "Update Request" : "Submit Request"}
                    </button>

                    {editId && (
                        <button
                            type="button"
                            className="cancel"
                            onClick={cancelEdit}
                        >
                            Cancel
                        </button>
                    )}

                </form>

                <h2>Submitted Requests</h2>

                <div className="requests">

                    {requests.length === 0 ? (
                        <p className="empty">
                            No requests submitted yet.
                        </p>
                    ) : (
                        requests.map((request) => (
                            <div className="request-card" key={request.id}>

                                <div className="card-header">
                                    <h3>{request.studentName}</h3>

                                    <span className={`priority ${request.priority.toLowerCase()}`}>
                                        {request.priority}
                                    </span>
                                </div>

                                <p>
                                    <strong>Email:</strong>{" "}
                                    {request.email}
                                </p>

                                <p>
                                    <strong>Category:</strong>{" "}
                                    {request.category}
                                </p>

                                <p>
                                    <strong>Problem:</strong>{" "}
                                    {request.description}
                                </p>

                                <div className="actions">

                                    <button
                                        className="edit"
                                        onClick={() => editRequest(request)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete"
                                        onClick={() => deleteRequest(request.id)}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>
                        ))
                    )}

                </div>

            </div>
        </div>
    );
}

export default App;