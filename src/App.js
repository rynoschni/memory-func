import './App.css';
import {useState, useEffect} from 'react'

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
  const [deck, setDeck] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);


  useEffect(() => {
    setDeck(generateDeck())
  }, [setDeck])

    
    function pickCard(cardIndex) {
      if (deck[cardIndex].isFlipped) {
        return;
      }
      const cardToFlip = { ...deck[cardIndex] };
      cardToFlip.isFlipped = true;
      let newPickedCards = pickedCards.concat(cardIndex);

      const newDeck = deck.map((card, index) => {
        if (cardIndex === index) {
          // console.log("appJS ln50", cardIndex, index, cardToFlip)
          return cardToFlip;
        }
        // console.log("Card", card)
        return card;
      });
      console.log("NewDeck:", newDeck);
      if (newPickedCards.length === 2) {
        const card1Index = newPickedCards[0];
        const card2Index = newPickedCards[1];
        // console.log("ln 60 indexes:", card1Index, card2Index)
        if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
          console.log("No Match", newDeck[card1Index], newDeck[card2Index]);
          setTimeout(() => unflipCards(card1Index, card2Index), 1000);
        }
        newPickedCards = [];
      }
      setDeck(newDeck);
      setPickedCards(newPickedCards);
    }

    function unflipCards(card1Index, card2Index) {
      console.log("ln 81", card1Index, card2Index);
      const card1 = { ...deck[card1Index] };
      const card2 = { ...deck[card2Index] };
      // console.log("ln 75, pre isFlipped change:", card1)
      // console.log("card2", card2)
      card1.isFlipped = false;
      card2.isFlipped = false;
      // console.log("ln 77",card1,card2,card1Index, card2Index)
      const newDeck = deck.map((card, index) => {
        // console.log("ln 78, card", card)
        if (card1Index === index) {
          // console.log("card1, ln 80", card1)
          return card1;
        }
        if (card2Index === index) {
          // console.log("card2, ln 84", card2);
          return card2;
        }
        console.log("before return card", card);
        return card;
      });
      console.log("ln 86 newDeck:", newDeck);
      setDeck(newDeck);
    }


  const cardsJSX = deck.map((card, index) => {
    return (<MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} id={index} pickCard={pickCard} />);
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
