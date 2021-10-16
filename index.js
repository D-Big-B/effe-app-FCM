const express = require("express");
const app = express();
const admin = require("firebase-admin");
const serviceAccount = require("./effe-21ca-firebase-adminsdk.json");

app.use(express.json());

const port = process.env.PORT || 3000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://effe-21ca-default-rtdb.firebaseio.com",
});

app.post("/push", (req, res) => {
  const message = req.body.message;

  admin
    .messaging()
    .send(message)
    .then((response) => {
      console.log("Notification sent successfully : " + response);
      res.send("Notification sent successfully");
    })
    .catch((error) => {
      console.log("Error : " + error);
      res.send("error : " + error);
    });
});

app.get("/", (req, res) => {
  res.status(200).send("<h1>Effe-21 FCM</h1>");
});

app.listen(port, () => {
  console.log(`listening to port : ${port}`);
});
