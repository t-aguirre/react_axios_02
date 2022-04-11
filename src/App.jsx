import axios from 'axios';
import './App.css';
import { useState } from 'react';


function App() {
  // state qui va contenir la citation
  const [sentence, setSentence] = useState("");

  // fonction qui va chercher dans l'api les citations
  const getQuote = () => {
    // axios
    // get
    // res (response)
    // data

    axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => (res.data))
      //.then((res) => res.data) // all good
      .then((data) => data[0])
      .then((data) => setSentence(data))
      .catch((err) => console.log(err)); // il y a eu une erreur
  };

  return (
    <div className="App">
      {/* Bouton qui va appeler la fonction d'appel api The Simpsons Quote API*/}
      <button type="button" onClick={getQuote}>Générer une citation</button>

      <p>{sentence.quote}</p>

      <p> {sentence.character}</p>
      <img src={sentence.image} alt=""></img>
    </div>
  );
}

export default App;
