const express = require('express')
const User = require('../Models/user')
const router = new express.Router();
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/users', (request, response) => {
    
    //res.send("Save users");
   
    const user = new User(request.body)
    if(user.password){
        bcrypt.hash(user.password, saltRounds, function(err, hash) {
            user.password = hash;
            // console.log()
          
            user.save().then(() => {
       
                response.status(200).json({
                    status : 200,
                    message: 'Data save successfully.'
                });
                
            }).catch((e) => {
                response.status(400).send(e)
            })
        });
        
    }
    //console.log('password',user.password);
    
})



router.get('/users', function (req, res) {
   
    User.find().then(data =>{
        res.send(data)
    }).catch(errors => console.log(errors))

});


router.post('/users/authenticate', function (request, response) {
  // console.log('request1',req.body.password)
    User.findOne({
        username : request.body.username
    }).then(data =>{
        //console.log('request2',data.password)
        bcrypt.compare(request.body.password, data.password, function(err, res) {
           console.log('err',err);
           if(res){
               console.log('data',data);
            response.send(data)
           }else{
            
            response.send(err)
           }
           
        });

        // 
    }).catch(errors => response.send(errors))

});
module.exports = router; 