import React, { useState } from 'react'

function Problem3() {
    const [input , setInput] = useState('');
    const inputHandler = (e) => {
      setInput(e.target.value)
    }
  return (
   <>
   {/*Text Input Handler
Problem:
Create an input field where the user can type text.
Display the input text in real-time below the input field.
Bonus:
Display the length of the text entered.*/}
<input type="text" value={input} onChange={inputHandler} placeholder='Type Something'/>
<h2>Text Entered:{input}   ,Text Length:<b><i>{input.length}</i></b></h2>
   </>
  )
}

export default Problem3