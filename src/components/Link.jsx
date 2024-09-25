import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import PropTypes from "prop-types";

export const Link = ({ link, icon, name, copy, size }) => {
  const [copied, setCopied] = useState(false);

  const pingDiscord = () => {
    const userAgent = navigator.userAgent;  
    let browserName, browserVersion, platform, language, isMobile;

    const browserPatterns = [
      {regex: /Edg\/([\d.]+)/, name: 'Microsoft Edge' },
      { regex: /Chrome\/([\d.]+)/, name: 'Google Chrome' },
      { regex: /Firefox\/([\d.]+)/, name: 'Mozilla Firefox' },
      { regex: /Safari\/([\d.]+)/, name: 'Safari' },
      { regex: /Opera\/.*Version\/([\d.]+)/, name: 'Opera' },
      { regex: /(?:MSIE|Trident.*rv:)(?:([\d.]+))?/, name: 'Internet Explorer' },
    ];

    for(let pattern of browserPatterns) {
        if(pattern.regex.test(userAgent)) {
            browserName = pattern.name;
            browserVersion = userAgent.match(pattern.regex)[1];
            break;
        }
    }

    if(!browserName) {
        browserName = 'Unknown';
        browserVersion = 'Unknown';
    }

    function getIP() {
      return fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => { return data.ip; })
        .catch(error => { return "Unknown"; });
    }

    isMobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(userAgent);

    getIP().then(ip => fetch('.netlify/functions/contact_me_via_discord', {
      method: 'POST',
      body: JSON.stringify({
        title: "Tracker",
        message: `
        Someone accessed your ${name}
        Browser Name: ${browserName}
        Browser Version: ${browserVersion}
        Mobile Browser: ${isMobile ? "Yes" : "No"}
        IP: ${ip}
        Screen Size: ${window.screen.width + 'x' + window.screen.height}`,
        email: "",
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }))
  }

  if (link !== null) {
    return (
      <>
        <a
          className="link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={pingDiscord}
        >
          <span className="fa">
            <FontAwesomeIcon icon={icon} size={size} />
          </span>
          <p className="link-sub">{name}</p>
        </a>
      </>
    );
  }
  return (
    <>
      <CopyToClipboard
        className="link"
        text={copy} 
        onCopy={() => setCopied(true)}
      >
        <span>
          <span className="fa">
            <FontAwesomeIcon icon={icon} size={size} />
          </span>
          <p className="link-sub">{copied ? 'Copied!' : 'Copy email'}</p>
        </span>
      </CopyToClipboard>
    </>
  );
};

Link.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  copy: PropTypes.string,
  size: PropTypes.string.isRequired
}
