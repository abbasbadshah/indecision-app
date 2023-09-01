console.log("App is running");

// JSX - JavaScript XML file

const app = {
  title: "Indecision App",
  subtitles: "Hello World",
  options: [],
};
const onFormSubmit = (e) => {
  e.preventDefault();
  // App Script

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderOptionsApp();
  }
};
const removeAll = () => {
  app.options = [];
  renderOptionsApp();
};
const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const options = app.options[randomNumber];
  alert(options);
  console.log(randomNumber);
};
const appRoot = document.getElementById("app");

const renderOptionsApp = () => {
  const template = (
    <div>
      <h1>{app.title.toLocaleUpperCase()}</h1>
      {app.subtitles && <p>{app.subtitles}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What Should I Do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option </button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
renderOptionsApp();
