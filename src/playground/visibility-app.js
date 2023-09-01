// let Visibility = false;
// const togleVisibility = () =>{
//     Visibility = !Visibility;
//     renderVisibilityApp();
// }

// const renderVisibilityApp = () =>{
//     const jsx = (
//         <div>
//             <h1>Visibility Togle</h1>
//             <button className={`btn ${Visibility ? 'btn-danger': 'btn-primary'}`} onClick={togleVisibility}>
//                 {Visibility ? 'Hide Detail' : 'Show Detail'}
//             </button>
//             {
//                 Visibility && (<div><p>there is some content</p></div>)
//             }
//         </div>
//     );

//   ReactDOM.render(jsx, document.getElementById('app'));
// }
// renderVisibilityApp();

class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            Visibility : false
        };
    }
    handleToggleVisibility (){
        this.setState((prevState) => {
            return{
                Visibility : !prevState.Visibility
            }
        })
    }
    render() {
        return (
            <div>
            <h1>Visibility Togle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.Visibility ? 'Hide Detail' : 'Show Detail'}
            </button>
            {
                this.state.Visibility && (<div><p>there is some content</p></div>)
            }
        </div>
        )
      
    }
}
ReactDOM.render (<VisibilityToggle />, document.getElementById('app'));