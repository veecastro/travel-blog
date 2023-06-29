const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, debug: true})
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.log(err));


// shortcut to mongoose.connection object
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB Atlas ${db.name} at ${db.host}:${db.port}`);
});

