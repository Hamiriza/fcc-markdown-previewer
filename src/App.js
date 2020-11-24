import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import marked from "marked";

const initialState = `
  This is a paragraph

  **This is bolded text**

  > Block Quotes!

  # Heading
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3


  [Visit my random machine quote](https://compassionate-wilson-b3d242.netlify.app/)

  This is a inline \`<div></div>\`

  This is a block of code

  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`

  ![Alliance](https://img2.pngio.com/download-stormwind-world-of-warcraft-alliance-leveling-1-85-world-of-warcraft-alliance-png-1149_1464.png)

`;

class App extends React.Component {
  state = {
    text: initialState,
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });

    return (
      <div className="container-fluid">
        <h1 className="text-center mt-4"> Convert your markdown</h1>
        <div className="row">
          <div className="col-6">
            <h5 className="text-center">Enter your markdown here:</h5>
            <textarea
              className="form-control"
              value={text}
              id="editor"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6">
            <h5 className="text-center">See the result:</h5>
            <div
              className="preview rounded p-2"
              dangerouslySetInnerHTML={{ __html: markdown }}
              id="preview"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
