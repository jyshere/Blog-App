const express= require("express");
const app= express();

require("dotenv").config();
const PORT= process.env.PORT || 3000;

//middleware
app.use(express.json());

//routes
const blogRoutes=require("./routes/blogRoutes")

//mount
app.use("/app/v1", blogRoutes);

const dbconnect= require("./.config/database");
dbconnect();

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(PORT,()=>{
    console.log(`App started at the port ${PORT}`);
});


//database connect
