import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './SocialLinks.css'

library.add(fab)

class SocialLinks extends Component {

    links = [
        {
            key: "github",
            link: "https://github.com/daviskregers",
            icon: ['fab', 'github']
        },
        {
            key: "linkedin",
            link: "https://www.linkedin.com/in/daviskregers/",
            icon: ['fab', 'linkedin']
        }
    ];

    render() {
        return (
          <ul>
            {
                this.links.map(link => 
                    <li key={link.key}>
                        <a href={link.link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={link.icon} />
                        </a>
                    </li>
                )
            }
          </ul>  
        );
    }

}

export default SocialLinks;
