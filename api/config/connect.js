const mongoose = require('mongoose');
require('dotenv').config();

async function mongoConnect() {
  const user = process.env.DB_USER;
  const passwd = process.env.DB_PASSWD;
  const databaseName = process.env.DB_NAME;

  const uri = `mongodb+srv://${user}:${passwd}@cluster0.dj9ya.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

  const mongooseConnect = await mongoose.connect(uri);
  return mongooseConnect;
}

module.exports = { mongoConnect };
