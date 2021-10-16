const express = require("express");
const admin = require("firebase-admin");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// const notification_options = {
//   priority: "high",
//   timeToLive: 60 * 60 * 24,
// };

app.get("/", (req, res) => {
  res.status(200).send("<h1>Effe-21 FCM</h1>");
});

app.post("/firebase/notification", (req, res) => {
  // const registrationToken = "general";
  const message = req.body.message;
  // const options = notification_options;

  admin
    .messaging()
    .send(message)
    .then((res) => {
      res.status(200).send("Notification sent successfully");
    })
    .catch((error) => {
      res.status(400).send("Error : " + error);
    });
});

app.listen(port, () => {
  console.log(`listening to port : ${port}`);
});
