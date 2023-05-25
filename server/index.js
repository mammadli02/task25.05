const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const cors=require('cors')
app.use(cors())
app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: false }));
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
  const AboutSchema = new mongoose.Schema({
    title:String,
    imageUrl:String,
    parag:String
  });
  const MyModel = mongoose.model('abouts',AboutSchema);
  DB_PASSWORD=process.env.DB_PASSWORD
DB_CONNECTION=process.env.DB_CONNECTION
DB_CONNECTION=DB_CONNECTION.replace("<password>",DB_PASSWORD)
  mongoose.connect(DB_CONNECTION)
  .then(() => console.log('Connected!'));
app.get('/api', (req, res) => {
  res.send('Hello World!')
})
app.get("/api/abouts", async(req, res) => { //GETALLL 
    const abouts=await MyModel.find()
      res.status(200).send(abouts)
  });
app.get("/api/abouts/:id", async(req, res) => { //GETBYID
    const id = req.params.id;
    const about = await MyModel.findById(id)
      res.status(200).send(about)
  });
app.delete("/api/abouts/:id", async(req, res) => { //DELeTE
    const id = req.params.id;
    const about = await MyModel.findByIdAndDelete(id)
     res.status(203).send(about)
  });
app.post("/api/abouts",async(req, res) => {   //post
    const { imageUrl,title, parag } = req.body;
    const newAbouts = new MyModel({
        imageUrl: imageUrl,
      title: title,
      parag:parag
    });
   await  newAbouts.save()
    res.status(201).send("created");
  });
app.put("/api/abouts/:id",async (req, res) => {  //put
    const id = req.params.id;
    const { imageUrl,parag,title} = req.body;
    const existedAuthors =await MyModel.findByIdAndUpdate(id,{imageUrl:imageUrl, title:title, parag:parag})
      res.status(200).send(existedAuthors);
  });
  PORT  = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})