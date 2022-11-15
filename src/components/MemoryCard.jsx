import { React, useState } from 'react'
import './MemoryCard.css'

function MemoryCard(props) {

  
  return (
    <div className="MemoryCard" id={props.id} onClick={() => {
      console.log("clicked");
      props.pickCard(props.id)
    }}>
      <div className={props.isFlipped ? 'MemoryCardInner flipped' : 'MemoryCardInner'}>
        <div className="MemoryCardBack">
          <img
            src="https://www.digitalcrafts.com/media/Default/assets/logos/dc-logo.svg"
            className="logo"
            alt="DigitalCrafts Logo"
          />
        </div>
        <div className="MemoryCardFront">{props.symbol}</div>
      </div>
    </div>
  );
}

export default MemoryCard