const express = require('express')
const app = express();
const PORT = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send("Hello... this server is setup using GitHub actions (CI/CD pipeline) and deployed using docker + AWS EC2");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})