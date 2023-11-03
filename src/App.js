import './App.css';
import TextAreaInput from "./components/TextArea/TextAreaInput";
import TextAnimation from "./components/TextAnimation/TextAnimation";
import {useState} from "react";

function App() {
  const [value, setValue] = useState('Text something')
  const [emoji, setEmoji] = useState([])
  return (
    <div className="App">
      <TextAnimation emojiList={emoji} value={value}/>
      <TextAreaInput setEmoji={setEmoji} setValue={setValue}/>
    </div>
  );
}

export default App;
