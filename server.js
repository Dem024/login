// require("colors")
// require("dotenv").config({})
// const app = require("./src/app");
// const { ConnectDB } = require("./src/config/db.config");

// const port = process.env.PORT || 8000
// ConnectDB()




// app.listen(port,()=>{
//     console.log(`the app is listen at http://localhost:${port}`.bgGreen.white);
    
// })


require("colors");
require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db.config"); // Adjusted import to match the example

const port = process.env.PORT || 8000;

// Connect to the database with logging
connectDB();

app.listen(port, () => {
    console.log(`The app is listening at http://localhost:${port}`.bgGreen.white);
});
