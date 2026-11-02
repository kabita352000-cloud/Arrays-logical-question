const express=require("express");
const multer=require("multer");
const app=express();
const path=require("path");

app.use(express.json());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  res.status(200).json({
    msg: 'File uploaded successfully',
    status: 200,
    data: {
      filename: req.file.filename,
      size: req.file.size
    }
  });


  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});