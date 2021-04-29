const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

var items = ["Bye food", "Cook food", "Eat food"];

app.set('view engine','ejs');

app.get("/",function(req,res){
    var today = new Date();
    var options = {
        weekday:"long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US",options); 

    res.render("list", {kindofDay: day , newListItem:items});
});

app.post("/",function(req,res){
    var item = req.body.newITEM;
    items.push(item);
    res.redirect("/");
})


app.listen(3000,function(){
    console.log("Server is running in port 3000");
})