const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');

app.get("/",function(req,res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    switch(currentDay){
        case 0:
            day="sunday";
            break;
        case 1:
            day="monday";
            break;
        case 2:
            day="tuesday";
            break;
        case 3:
            day="wednsday";
            break;
        case 4:
            day="thrusday";
            break;
        case 5:
            day="friday";
            break;
        case 6:
            day="saturday";
            break;
    }

    res.render("list", {kindofDay: day});
})

app.listen(3000,function(){
    console.log("Server is running in port 3000");
})