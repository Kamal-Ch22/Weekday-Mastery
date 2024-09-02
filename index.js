import express from"express"
const app=express();
const port=3000;



app.get("/",(req,res)=>{
    const today= new Date();
    const day=today.getDay(); 
   // console.log(day);
    let type= "a weekday";
    let adv="it's time to work hard";

    if(day===0 || day===6)
    {
        type="weekend";
        adv="it's time to party hard";
    }
    res.render("index.ejs",{ 
        dayType: type,
        content: adv,
    });
});
app.listen(port,()=>{
    console.log(`Listnening on port ${port}`);
})