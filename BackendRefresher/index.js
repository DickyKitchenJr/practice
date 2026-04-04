import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import dns from "node:dns";
// import TestDAO from "./dao/testDAO.js";

dotenv.config();

// set custom DNS servers to circumvent potential DNS resolution issues with MongoDB Atlas
// This is the error that was being thrown before implementing this workaround:
//Error: querySrv ECONNREFUSED _mongodb._tcp.testcluster.advwe6x.mongodb.net
//     at QueryReqWrap.onresolve [as oncomplete] (node:internal/dns/promises:294:17)
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const MongoClient = mongodb.MongoClient;
const mongo_user = process.env.MONGO_USER;
const mongo_password = process.env.MONGO_PASSWORD;
const mongo_uri = `mongodb+srv://${mongo_user}:${mongo_password}@testcluster.advwe6x.mongodb.net/?appName=TestCluster`;

const port = process.env.PORT || 8000;

MongoClient.connect(mongo_uri, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    // await TestDAO.injectDB(client);
    // app.listen(port, () => {
    //     console.log(`Server is running on port: ${port}`);
    // });
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  });
