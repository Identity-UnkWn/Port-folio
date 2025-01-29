import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

function FooterMain() {
    return (
      <div className="fixed bottom-10 left-0 right-0 flex justify-center pb-8">
        <div className="flex gap-15">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>

          <a 
            href="https://medium.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors"
          >
            <FontAwesomeIcon icon={faMedium} size="2x" />
          </a>
        </div>
      </div>
    );
  }

export default FooterMain;