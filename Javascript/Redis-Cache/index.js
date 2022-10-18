const express =require('express')
const app = express();
const axios=require('axios');
const Redis =require('redis');
const { json } = require('express');

const port=8080


const redisClinet=Redis.createClient(
  
  {
      host: '127.0.0.1',
      port: '6379',
      legacyMode: true
 
}
)

app.get('/data',async(req,res)=>{
  
  redisClinet.get('coronadata',async(err,cdata)=>{
    if(err) console.error();
    if(cdata!=null)
    {
        console.log("cache-hit")
        return res.json(JSON.parse(cdata))
    }
    else
    {
        console.log('cache-miss')
        const {data}=await axios.get("https://api.covidtracking.com/v1/states/current.json")
        redisClinet.setex('coronadata',6379,JSON.stringify(data))
        res.json(data)
    }

  })
    
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);

})

//Before Running just make sure to run redis-server and redis-cli
//it is better to run it on Gitpod 
//To know refer About_Redis.txt