const axios = require('axios');

exports.handler = async function(event, context) {
    const displayName = `Anonymous`;

    const content = {
      "content": "eff",
      "embeds": [{
        "title": `A message from: ${displayName}`,
        "description": `message`,
        "footer": {
          "text": `email`
        }
      }]
    }
  
  
    var config = {
      method: 'POST',
      url: 'https://discord.com/api/webhooks/969046291134951484/BcoybJydG0L6kO8eNDTpJvbAU6KNhM0dxX92g0NB1zPtJAWgGAk3iaUeTE7R89wcQITd',
      headers: { "Content-Type": "application/json" },
      data: content,
   };
  
  
    axios(config)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err));

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Success" }),
    };

}





    