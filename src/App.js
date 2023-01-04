import { useEffect, useState } from 'react';
import ColorInput from './ColorInput';
import Square from './Square';
import colorNames from 'colornames';

function App() {
  const [color,setColor] = useState('')
  const [hexValue,setHexValue] = useState('')
  const [isDarkText,setIsDarkText] = useState(true)
  // useEffect(()=>{
  //   console.log(isDarkText)
  // },[isDarkText])

  const handleChange = (e)=>{
    const myColor = e.target.value
    const myHex = colorNames(e.target.value)
    // console.log(e.target.value); 
    setColor(myColor)
    setHexValue(myHex)
    if (myColor === 'black') {
      setIsDarkText(!isDarkText)
    }
    else{
      setIsDarkText(true)
    }
  }

  return (
    <main>
      <Square
      color={color}
      hexValue = {hexValue}
      isDarkText = {isDarkText}
      setIsDarkText = {setIsDarkText}
      />
      <ColorInput
      handleChange={handleChange}
      />
    </main>
  );
}

export default App;
