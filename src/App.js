import em_logo from "./em_logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={em_logo}
            className="Personal-logo img-fluid"
            alt="personal_logo"
          />
          <h5>Dictionary React App Project</h5>
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">
          <small>
            {" "}
            <a
              href="https://github.com/emeraz15/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Erika Meraz
          </small>
        </footer>
      </div>
    </div>
  );
}
