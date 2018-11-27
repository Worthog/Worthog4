import React, {Component} from 'react' ;
// const ReactDOM = require('react-dom')
// const Markdown = require('../../src/with-html')
import ReactMarkdown from 'react-markdown' ;
import Editor from './editor' ;
import CodeBlock from './code-block' ;
import MarkdownControls from './markdown-controls'; 
import styles from './demo.css' ;

const initialSource = `
# Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
`

class Demo extends Component {
  constructor(props) {
    super(props)

    this.handleControlsChange = this.handleControlsChange.bind(this)
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
    this.state = {
      markdownSrc: initialSource,
      htmlMode: 'raw'
    }
  }

  handleMarkdownChange(evt) {
    this.setState({markdownSrc: evt.target.value})
  }

  handleControlsChange(mode) {
    this.setState({htmlMode: mode})
  }
 
  render() {
    return (
      <div className="demo">
        <div className={styles.editorpane}>
          <MarkdownControls onChange={this.handleControlsChange} mode={this.state.htmlMode} />

          <Editor value={this.state.markdownSrc} onChange={this.handleMarkdownChange} />
        </div>

        <div className={styles.resultpane}>
          <ReactMarkdown
            className="result"
            source={this.state.markdownSrc}
            skipHtml={this.state.htmlMode === 'skip'}
            escapeHtml={this.state.htmlMode === 'escape'}
            renderers={{code: CodeBlock}}
          />
        </div>
      </div>
    )
  }
}

// if (typeof window !== 'undefined') {
//   ReactDOM.render(<Demo />, document.getElementById('main'))
// }

export default (Demo)

