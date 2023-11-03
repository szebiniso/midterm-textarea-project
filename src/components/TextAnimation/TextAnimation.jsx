import React from 'react';
import './TextAnimation.scss'

const TextAnimation = ({value, emojiList}) => {
  return (
    <div className="banner">
      <div className='emoji_container'>
        {emojiList.map(emoji => (
          <div className='emoji'>{emoji.character}</div>
        ))}
      </div>
      <div className="words word-1">{
        value.trim() ?
          value.split('').map(letter => (
            <span>{letter.toUpperCase()}</span>
          )) : 'Text something'.split('').map(letter => (
            <span>{letter.toUpperCase()}</span>
          ))
      }
      </div>
    </div>

  );
};

export default TextAnimation;