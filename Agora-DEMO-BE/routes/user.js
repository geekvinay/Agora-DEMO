const express = requireO("express");
const Router = express.Router();

Router.get("/:id", (req, res) => {
    console.log(req.params.id);
});



module.exports = { Router };