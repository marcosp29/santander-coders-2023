import { useState } from "react";
import logoPata from "./assets/dog-nose.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    /*  <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */
    <>
      <div className="content">
        <aside>
          <div className="logo-container">
            <a href="/">
              <img src={logoPata} className="logo principal"></img>
            </a>
            <h1>
              <span>We</span>Form
            </h1>
          </div>
        </aside>

        <main>
          <div>
            <h2>Cadastre sua <span>entidade</span> ou acesse dados <span>de parceiras</span></h2>
            <div className="actions">
              <a className="primary-button" href="">
                Cadastrar entidade
              </a>
              <a className="secondary-button" href="">
                Ver entidades cadastradas
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
