var admin = require("firebase-admin");

var serviceAccount = require("./effe-21ca-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://effe-21ca-default-rtdb.firebaseio.com",
});

module.exports.admin = admin;
