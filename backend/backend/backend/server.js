const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();


app.use(cors());

app.use(express.json());



// Employee Routes
const employeeRoutes = require("./routes/employeeRoutes");

app.use(
    "/api/employees",
    employeeRoutes
);



// Leave Routes
const leaveRoutes = require("./routes/leaveRoutes");

app.use(
    "/api/leave",
    leaveRoutes
);



app.get("/",(req,res)=>{

    res.send(
        "Employee Portal Backend Running"
    );

});



const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});