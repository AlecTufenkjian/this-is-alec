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
      url: 'https://discord.com/api/webhooks/969046291134951484/BcoybJydG0L6kO8eNDTpJvbAU6KNhM0dxX92g0NB1zPtJAWgGAk3iaUeTE7R89wcQITd',
      headers: { "Content-Type": "application/json" },
      data: content,
   };
  
    return axios(config)
        .then(res => {
            console.log(res);      
            return {
                statusCode: 200,
                body: "Success!",
            };
        })
        .catch(err => {
                console.log(err);
                return {
                    statusCode: 400,
                    body: JSON.stringify({ message: "Something went wrong!" }),
                };
        });
}





    