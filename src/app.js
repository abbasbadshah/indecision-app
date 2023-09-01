// stateless fuctional components

// Class Base Component
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      option: props.options,
    };
  }
  handleDeleteOptions() {
   this.setState (() => ({option : []}));
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.option.length);
    const options = this.state.option[randomNumber];
    alert(options);
    // this.setState(() => {
    //   return {
    //     option: Math.floor(Math.random() * this.state.option.length),
    //   };
    // });
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter Valid Value";
    } else if (this.state.option.indexOf(option) > -1) {
      return "This Option Already Exists";
    } else {
   this.setState ((prevState) => ({option: prevState.option.concat(option),}));
      // this.setState((prevState) => {
      //   return {
      //     option: prevState.option.concat(option),
      //   };
      // });
    }
  }
  render() {
    const subtitle = "Put you life on the hands of computers 🧑‍💻";
    // const options = ["thing 1", "thing 2", "thing 3"];
    return (
      <div>
        <Header />
        <Action
          hasOptions={this.state.option.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.option}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
// Stateless Component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
   title : ' Indecision App ',
};
IndecisionApp.defaultProps = {
  options : []
}
// Stateless Component
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What Should I Do
      </button>
    </div>
  );
};
// Stateless Component
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map((option) => (
        <Option key={option} optionText={option} />
      ))}
    </div>
  );
};
// Stateless Component
const Option = (props) => {
  return <div>{props.optionText}</div>;
};
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.setState ({error : undefined});
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error,
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="Add Your Options" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}
// Class Base Component
const User = () => {
  return (
    <div>
      <p>Name: </p>
      <p>Age: </p>
    </div>
  );
};
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));




// Dump Code


// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What Should I Do
//         </button>
//       </div>
//     );
//   }
// }
// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {this.props.options.map((option) => (
//           <Option key={option} optionText={option} />
//         ))}
//       </div>
//     );
//   }
// }
// class Option extends React.Component {
//   render() {
//     return <div>{this.props.optionText}</div>;
//   }
// }
// Class Base Component