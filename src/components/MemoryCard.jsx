import React from 'react'
import './MemoryCard.css'

function MemoryCard() {
  return (
    <div className="MemoryCard">
      <div className="MemoryCardInner">
        <div className="MemoryCardBack">
          <img
            src="https://www.digitalcrafts.com/media/Default/assets/logos/dc-logo.svg"
            className="logo"
            alt="DigitalCrafts Logo"
          />
        </div>
        <div className="MemoryCardFront">∆</div>
      </div>
    </div>
  );
}

export default MemoryCard