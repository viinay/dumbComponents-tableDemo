var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.listen(3000,_=>console.log('server running on port 3000'))

let users = [{
    email_id:'vinay@gmail.com',
    verified:true,
    error:'error in sending mail'
},{
    email_id:'vinay@gmail.com',
    verified:true,
    error:'error in sending mail'
},{
    email_id:'vinay@gmail.com',
    verified:true,
    error:'error in sending mail'
},{
    email_id:'vinay@gmail.com',
    verified:true,
    error:'error in sending mail'
}]

app.get('/users',function(req,res){
    res.json(users)
})