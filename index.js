const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://supark:10kunus@react-blog.pjdcw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
, {useNewUrlParser: true}).then(() => console.log('DB connected'))
                          .catch(err => console.error(err) );

app.get('/', (req, res) => {
  res.send('Hello, world')
});

app.listen(5000);
