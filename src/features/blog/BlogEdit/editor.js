import React, { Component } from 'react';
import CodeMirror from './codemirror'; 

// function handleMarkdownChange(evt) {
//   alert("Editor MD Changed"); 
//   this.setState({markdownSrc: evt.target.value})
// }


function Editor(props) {
  console.log ("Editor Props = ", props); 
  debugger;
  return (
    <form className="editor pure-form">
      <CodeMirror mode="markdown" theme="monokai" value={props.value} onChange={this.props.handleMarkdownChange} />
    </form>
  )
}

Editor.defaultProps = {
  value: ''
}

export default (CodeMirror) 

// <CodeMirror mode="markdown" theme="monokai" value={props.value} onChange={props.onChange} />