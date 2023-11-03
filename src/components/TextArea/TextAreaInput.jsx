import React from 'react';
import './TextAreaInput.scss'
import {getEmoji} from "../../api";
import logo from '../../assets/alatoo-logo.png'

const TextAreaInput = ({setValue, setEmoji}) => {

  const onChangeInputValue = (text) => {
    getEmoji(text, setEmoji)
    setValue(text)
  }
  return (
    <div className='textarea_container'>
      <img src={logo} alt="/"/>
      <textarea className='textarea' onChange={(e) => onChangeInputValue(e.target.value)} name="textarea" cols="10" rows="3"/>
    </div>
  );
};

export default TextAreaInput;