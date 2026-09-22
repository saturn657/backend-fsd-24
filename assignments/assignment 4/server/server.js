const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const file = "requests.json";

function getRequests() {
    return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function saveRequests(requests) {
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
}

// GET all requests
app.get("/api/requests", (req, res) => {
    const requests = getRequests();
    res.json(requests);
});

// GET request by ID
app.get("/api/requests/:id", (req, res) => {
    const requests = getRequests();

    const request = requests.find(r => r.id == req.params.id);

    if (!request) {
        return res.status(404).json({ message: "Request not found" });
    }

    res.json(request);
});

// POST new request
app.post("/api/requests", (req, res) => {
    const requests = getRequests();

    const newRequest = {
        id: Date.now(),
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    requests.push(newRequest);
    saveRequests(requests);

    res.status(201).json(newRequest);
});

// PUT update request
app.put("/api/requests/:id", (req, res) => {
    const requests = getRequests();

    const index = requests.findIndex(r => r.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Request not found" });
    }

    requests[index] = {
        id: requests[index].id,
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    saveRequests(requests);

    res.json(requests[index]);
});

// DELETE request
app.delete("/api/requests/:id", (req, res) => {
    const requests = getRequests();

    const newRequests = requests.filter(
        r => r.id != req.params.id
    );

    if (requests.length === newRequests.length) {
        return res.status(404).json({ message: "Request not found" });
    }

    saveRequests(newRequests);

    res.json({ message: "Request deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});