const express = require("express");
const cors = require("cors");
const router = require("./routes/payments.routes");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(express.json());



app.use('/api', router)

app.listen(PORT , () => {
    console.log( ` App listening at http://localhost:${PORT} `)
}
)

module.exports = app;