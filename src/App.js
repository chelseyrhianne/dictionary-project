import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <img
          src={logo}
          className="App-logo img-fluid"
          alt="logo of a girl reading on a pile of books"
        />
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/chelseyrhianne/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/chelsey-watson/"
            target="_blank"
            rel="noreferrer"
          >
            Chelsey Watson
          </a>
        </footer>
      </div>
    </div>
  );
}
