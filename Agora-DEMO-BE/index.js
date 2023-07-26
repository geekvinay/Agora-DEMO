const express = require('express')
const app = express()
const port = 3000

// Import all the routers here and app.use them
const userRouter = require("./routes/user");
app.use(userRouter);

app.get('/', (req, res) => res.send('Hello World!'))
app.get("*", (req, res) => {
    res.send("Error : Route not found");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));