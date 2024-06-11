const mongoose = require('mongoose');

const connectDB = async () => {
    url = `mongodb+srv://shounakpandit47:UMYAN9qwqUYnfpro@cluster0.fcpjel0.mongodb.net/`
  try {
    console.log(url);
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;