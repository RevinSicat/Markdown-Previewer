//HTML Elements Variables
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

//Variables
const rootPreview = ReactDOM.createRoot(preview);

//Classes
class PreviewRender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorValue: "Initial Editor Value"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount() {
        editor.addEventListener('input', this.handleInputChange);
    }
    handleInputChange(event){
        this.setState({ editorValue: event.target.value }, () => {
            this.updatePreviewHTML(this.state.editorValue);
        });
    }
    updatePreviewHTML(markdown) {
        preview.innerHTML = marked.parse(markdown);
        console.log(marked.parse(markdown));
    }
    render() {
        return null;
    }
}

//Functions


//EventListeners


//Renders
rootPreview.render(<PreviewRender />);

//Inialization
