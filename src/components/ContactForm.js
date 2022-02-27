import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  .form-group-message{
    width: 100%;
    margin-bottom: 0rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--white);
    background-color: var(--gray-2);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  .character-limit{
    text-align: right;
    margin-bottom: 2rem;
  }
  button[type='submit'] {
    background-color: var(--gray-2);
    color: var(--white);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }

  em{
    font-style: normal; 
    color: gray;
  }
`;


export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if(message.length === 0) {
      alert("Write something!");
      return;
    }
    console.log(message.length);

    const displayName = name ? name : `Anonymous`
    const content = {
      "content": "",
      "embeds": [{
        "title": `A message from: ${displayName}`,
        "description": `${message}`,
        "footer": {
          "text": `${email}`
        }
      }]
    }

    fetch('https://discord.com/api/webhooks/937800889345925151/1l_rpVXgyhqHJXDk3ZFeCgkdWgr9ZZgBlN-Pfkj-9-mq39oc_R5Id9rOSFWK09rOY59k', {
      method: 'POST',
      body: JSON.stringify(content),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      setName("");
      setEmail("");
      setMessage("");
      alert("Message successfully sent! I will read it as soon as I pick up my phone :)");
    })
    .catch((error) => {
      alert("We weren't able to send the message! Please try again :(");
    });
      
  }

  return (
    <>
      <FormStyle>
          <div className="form-group">
            <label htmlFor="name">
              Your Name <em>(Optional)</em>
              <input
                maxLength={50}
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Your Contact Info <em>(Optional)</em>
              <input
                maxLength={50}
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group-message">
            <label htmlFor="message">
              Your Message
              <textarea
                maxLength={2000}
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <div className='character-limit'>{message.length}/2000</div>
          <button type="submit" onClick={handleSubmit}>Send</button>
      </FormStyle>
    </>
  );
}
