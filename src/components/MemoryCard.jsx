import { React, useState } from 'react'
import './MemoryCard.css'

function MemoryCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  function _clickHandler(){
    if (!isFlipped) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false)
    }
    
  }
  return (
    <div className="MemoryCard" onClick={_clickHandler}>
      <div className={isFlipped ? 'MemoryCardInner flipped' : 'MemoryCardInner'}>
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