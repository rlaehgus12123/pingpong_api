const axios = require('axios')
const config = require('./config.json')

async function request(text) {
let data = await axios({
    url: `https://builder.pingpong.us/api/builder/6005c466e4b078d873988ab2/integration/v0.2/custom/709041462762799107`, 
    method: 'post',
    data: {
        "request":{
            "query": `${text}`
        }
    },
    headers: {
        "Authorization": `Basic ${config.TOKEN}`,
        "Content-Type": "application/json",
    }, 
  })
  return data.data.response.replies[0].text
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on("line", async function(line) {
    let data = await request(line)
    console.log("🤖답변 : ", data)
  }).on("close", function() {
    process.exit();
  });
