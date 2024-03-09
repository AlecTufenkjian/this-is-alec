const axios = require('axios');

exports.handler = async function(event, context) {

    const form = JSON.parse(event.body);

    const displayName = form.title ? form.title : `Anonymous`;

    const content = {
      "content": "",
      "embeds": [{
        "title": `A message from: ${displayName}`,
        "description": form.message,
        "footer": {
          "text": form.email
        }
      }]
    }
  
    var config = {
      method: 'POST',
      url: `https://discord.com/api/webhooks/${process.env.DISCORD_SECRET}`,
      headers: { "Content-Type": "application/json" },
      data: content,
   };
  
    return axios(config)
        .then(() => {     
            return {
                statusCode: 200,
                body: "Success!"
            };
        })
        .catch((e) => {
                return {
                    statusCode: 400,
                    body: JSON.stringify(e)
                };
        });
}





    