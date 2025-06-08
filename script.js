//MarkupSetting
marked.setOptions({
  breaks: true
});
//Variables
const rootPreview = ReactDOM.createRoot(document.getElementById("root"));
const editorDefaultValue = 
`# Hello Welcome to my React Markdown Previewer!!
## you can create subheadings like this
### and this is for a lower their tier subheading by adding more '#'

you can also **bold texts** like this and _italic_ 

- create unordered lists like this
    - indent unordered items this

1. you could also try ordered list
1. second item of the ordered list

> also this is how you create backqoutes

and insert images like this

![Cat Image](https://media.gettyimages.com/id/673115623/photo/hand-of-man-stroking-tabby-cat.jpg?b=1&s=170667a&w=0&k=20&c=wvSe7JU3nmvTG7y3edAnXH497L8GMEo47luDysHj4wE=)

\`\`\`

//you can also use \`\`\` in order to create code blocks
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Simple React Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );

}
\`\`\`
This is an example of inline code: \`const x = 42\`

You can also check [Markdown Basics](https://www.markdownguide.org/basic-syntax/) for more examples and guides about Markdowns`

//Classes
class PreviewRender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorValue: editorDefaultValue
        };
        this.handleInputEvent = this.handleInputEvent.bind(this);
    }
    handleInputEvent(value){
        this.setState({
            editorValue: value
        });
    }
    render() {
        console.log("Rendering...");
        return (
            <div id="main-div">
                <div id="editor-div">
                    <div className="div-header">
                        <h3>Editor</h3>
                        <button className="toggle-btn" id="toggle-editor">Hide</button>
                    </div>
                    <textarea id="editor" value={this.state.editorValue} onChange={(e) => this.handleInputEvent(e.target.value)}/>
                </div>
                <div id="resize-handle"></div>
                <div id="preview-div">
                    <div className="div-header">
                        <h3>Preview</h3>
                        <button className="toggle-btn" id="toggle-preview">Hide</button>
                    </div>
                    <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(this.state.editorValue) }}/>
                </div>
            </div>
        );
    }
}

//Functions


//EventListeners


//Renders
rootPreview.render(<PreviewRender />);
//Inialization
