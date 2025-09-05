import React ,{useState} from 'react';

export default function Textform(props) {

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
  }

  // const handleColorClick = () =>{
  //   let newText = 
  //   setText(newText);
  // }

  const handleOnChange = (event) =>{
   // console.log("Handled");
    setText(event.target.value)
  }

  const [text, setText] = useState(''); // used to change the state;

  // setText('your text');
  return (
    <>
    <h4>Enter your text below :</h4>
    <div className='container'>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey'}} id="myBox" rows="8"></textarea>
            
            <button className="btn btn-primary my-3" onClick={handleUpClick}> Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text</button>
        </div>
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>
        {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
      </p>
      <p>
        You need only {text.trim().length === 0 ? 0 : (0.008 * text.trim().split(/\s+/).length).toFixed(2)} Minutes to read the text
      </p>
    </div>
     <h2> Preview: </h2>
      <p>{text.length > 0 ? text : "Enter something in the above textfield to preview here" }</p>
    </>
  );
}
