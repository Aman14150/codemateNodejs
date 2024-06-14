const express = require('express');
const app = express()
const {connectDb} = require('./mongoConfig/configDb.js')
const UserDataModel = require('./models/users.js')

app.use(express.json())

app.post('/user', async (req, res) => {
    try {
       await UserDataModel.create(req.body);
       res.send({message: 'User added successfully' });
    } catch (error) {
       console.log(error);
      res.send('Oop, something went wrong !!');
    }
 });

 app.get('/user', async (req, res) => {
    try {
       const data = await UserDataModel.find();
       res.send({data});
    } catch (error) {
      console.log(error);
      res.send('Oop, something went wrong !!');
    }
 });

 app.get('/user/:id', async (req, res) => {
   try {
     const data = await UserDataModel.findById(req.params.id);
     res.send({data});
   } catch (error) {
     console.log(error);
     res.send({ message: 'Oops, something went wrong !!'});
   }
 });


app.listen(3000, async () => {
    
    try {
        await connectDb();
        console.log('Connection Sucessfull')
    } catch (err) {
        console.log(err)
    };

    console.log('Server is running on port 3000');
  });