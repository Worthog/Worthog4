import React, { Component } from 'react';
import CodeMirror from './codemirror'; 

function Editor(props) {
  return (
    <form className="editor pure-form">
      <CodeMirror mode="markdown" theme="monokai" value={props.value} onChange={props.onChange} />
    </form>
  )
}

Editor.defaultProps = {
  value: ''
}

export default (CodeMirror) 
