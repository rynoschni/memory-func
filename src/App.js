import './App.css';
import {useState} from 'react'

import MemoryCard from './components/MemoryCard';

const generateDeck = () => {
  const symbols = ["∆", "ø", "π", "©", "†", "ƒ", "®","œ"]
  const deck = []
  for (let i = 0; i < 16; i++){
    const card = {
      isFlipped: false,
      symbol: symbols[i%8]
    }
    deck.push(card);
  }
  shuffle(deck);
  return deck;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function App() {
  const [deck, setDeck] = useState(generateDeck())
  const [pickedCards, setPickedCards] = useState([])

  const cardsJSX = deck.map((card, index) => {
    return (<MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} />);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h3 className="App-sub">Match the cards</h3>
      </header>
      <div>{cardsJSX.slice(0, 4)}</div>
      <div>{cardsJSX.slice(4, 8)}</div>
      <div>{cardsJSX.slice(8, 12)}</div>
      <div>{cardsJSX.slice(12, 16)}</div>
    </div>
  );
}

export default App;
