import logo from './logo.svg';
import Widget from 'rasa-webchat';
import './App.css';
function CustomWidget() {
  return (
      <Widget
          initPayload={"/get_started"}
          socketUrl={"http://localhost:5005"}
          socketPath={"/socket.io/"}
          customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
          title={"Title"}
      />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {CustomWidget()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
