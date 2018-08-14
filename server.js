const express = require('express');

const path = require('path');
const cors = require('cors');

// Port Number
const port = process.env.PORT || 3000;
const app = express();

// const admin = require('./routes/admin');
// const message = require('./routes/message');

// Set Static Folder
// app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.static(path.join(__dirname, 'dist/')));


app.use(cors());

app.use(express.json());
// app.use('/admin', admin)
// app.use('/message', message)

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+ port);
});
