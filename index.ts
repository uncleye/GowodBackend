/**
 * @description holds server main
 */

// configuring environment variables
import dotenv from "dotenv"
  // creating apollo server
import apolloServer from "./graphql";
dotenv.config();
const mongoose = require("mongoose");

const stratServer = async () => {


  mongoose.connect("mongodb://localhost:27017/learn", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
  });
  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    // we're connected!
  });  
  const port: string = process.env.PORT as string;
  
  // start listening
  apolloServer.listen(port).then(({ url }) => {
    console.log(`Apollo Server is running on ${url} `);
  });
}
stratServer();
