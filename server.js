const express =require('express')
const app=express()


app.use(date= (req,res,next)=>{
        let requestAt = new Date()
        let date =requestAt.getHours()
        if((date>8) && (date<17)){
                next()
        }
        else{

        }
       
        res.sendFile(__dirname + '/public/404.html');
    })


app.use(express.static(__dirname+'/public'))






app.listen(3000, (err)=>{
    if(err) console.log('il ya une erreur')
    else console.log('runing')
})