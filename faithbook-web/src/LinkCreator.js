import React, { Component } from 'react';
import './LinkCreator.css';

class LinkCreator extends Component {


      render(){
        return(
          <span>
              <a
                className="StdLinkText"
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                {this.props.linkname}
              </a>
              &nbsp; &nbsp;
          </span>
        );
      }
}

export default LinkCreator;
