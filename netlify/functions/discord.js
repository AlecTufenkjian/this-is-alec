exports.handler = async function(event, context) {
    const displayName = `Anonymous`;

    const content = {
      "content": "",
      "embeds": [{
        "title": `A message from: ${displayName}`,
        "description": `message`,
        "footer": {
          "text": `email`
        }
      }]
    }

    fetch('https://discord.com/api/webhooks/969046291134951484/BcoybJydG0L6kO8eNDTpJvbAU6KNhM0dxX92g0NB1zPtJAWgGAk3iaUeTE7R89wcQITd', {
      method: 'POST',
      body: JSON.stringify(content),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Success" }),
    };




}





    