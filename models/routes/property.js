const express = require("express");
const multer = require("multer");
const Property = require("../models/Property");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create Property
router.post("/", upload.single("image"), async (req, res) => {

    const property = new Property({
        title: req.body.title,
        location: req.body.location,
        price: req.body.price,
        image: "https://via.placeholder.com/300"
    });

    await property.save();

    res.json({
        message: "Property Added"
    });
});

// Get All Properties
router.get("/", async (req, res) => {
    const properties = await Property.find();
    res.json(properties);
});

module.exports = router;
