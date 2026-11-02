
const express = require("express");
const app = express();

app.use(express.json());

let users = [];
let id = 1;

// CREATE USER
app.post("/create", (req, res) => {
    let body = {
        id: id++,
        name: req.body.name,
        age: req.body.age,
        class: req.body.class
    };

    users.push(body);

    res.status(201).json({
        msg: "Created successfully",
        status: 201,
        data: body
    });
});

// GET ALL USERS
app.get("/get", (req, res) => {
    res.status(200).json({
        msg: "Data fetched successfully",
        status: 200,
        data: users
    });
});

// GET USER BY ID
app.get("/get/:id", (req, res) => {
    let userId = Number(req.params.id);

    let user = users.find((item) => item.id === userId);

    if (!user) {
        return res.status(404).json({
            msg: "User not found"
        });
    }

    res.status(200).json({
        msg: "Data fetched successfully",
        status: 200,
        data: user
    });
});

// UPDATE USER
app.put("/update/:id", (req, res) => {
    let userId = Number(req.params.id);

    let user = users.find((item) => item.id === userId);

    if (!user) {
        return res.status(404).json({
            msg: "User not found"
        });
    }

    user.name = req.body.name;
    user.age = req.body.age;
    user.class = req.body.class;

    res.status(200).json({
        msg: "Data updated successfully",
        status: 200,
        data: user
    });
});

// DELETE USER
app.delete("/delete/:id", (req, res) => {
    let userId = Number(req.params.id);

    let index = users.findIndex((item) => item.id === userId);

    if (index === -1) {
        return res.status(404).json({
            msg: "User not found"
        });
    }

    let deletedUser = users.splice(index, 1);

    res.status(200).json({
        msg: "Data deleted successfully",
        status: 200,
        data: deletedUser[0]
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
