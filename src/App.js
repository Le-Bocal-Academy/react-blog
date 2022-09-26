import Article from "./components/Article";
import './App.css';

function App() {
  return (
    <section className="blog">
      <Article title="Mon premier article" date={new Date().toDateString()} author="Pascal Vaccaro">
        Un texte tout simple
      </Article>
      <Article title="Mon deuxième article" date="12/09/22" author="Raphael Vaccaro">
        <div>
          <h2>Le sous-titre</h2>
          <p>La description</p>

          <p>Le contenu</p>
        </div>
      </Article>
    </section>
  );
}

export default App;
