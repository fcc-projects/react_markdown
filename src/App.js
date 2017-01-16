import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class Container extends Component {
  constructor() {
    super();

    this.state = {
      value: 'Type your markdown text here. Some examples:\n\n# Header 1\n## Header 2\n### Header 3\n\n*Emphasize*  \n**Strong**\n'
    }

    this.updateContent = this.updateContent.bind(this);
  }

  render() {
    return (
      <div 
        className="container">
        <div className="row">
          <textarea
            className="raw-input"
            value={this.state.value}
            rows="20"
            onChange={this.updateContent} />
          <div
            className="md-preview"
            dangerouslySetInnerHTML={this.previewMarkup(this.state.value)}>
          </div>
        </div>
      </div>
    );
  }

  updateContent(event) {
    this.setState({ value: event.target.value });
  }

  previewMarkup(value) {
    var markup = marked(value, {sanitize: true});

    return {__html: markup};
  }
}

export default Container;
