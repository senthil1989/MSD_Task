const fs = require('fs')
const express = require('express');
var cors = require('cors')
const fileUpload = require('express-fileupload');

const app = express();
app.use(cors())
app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  const file = req.files.file;
  if (fs.existsSync(`${__dirname}/client/public/uploads/${file.name}`)) {
    return res.status(400).json({ msg: 'Already exist,Please delete the file from the path' })
  }
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(5000, () => console.log('Server Started...'));
