//server.js

const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB)
.then(console.log('connectet'))
.catch((err)=>{console.log(err)})

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
