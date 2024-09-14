
import React from 'react'
import './App.css'

function App() {

  const [inputText,setInputText] = React.useState("");
  const [isTyping,setIsTyping] = React.useState(true);
   
  const handleSendPress=()=>{

    console.log("print>>",inputText)


    setInterval(()=>{
      setIsTyping(false);
    },2500);
    
  }

  const handleInputText=(e)=>{

    console.log(":::: ",e.target.value);
    setInputText(e.target.value);

  }


  // Baby Components
  function TypingMsg (){
    return (
      <div class="typing-indicator">
        <div class="typing-circle"></div>
        <div class="typing-circle"></div>
        <div class="typing-circle"></div>

    </div>
    )
  }

 function BotMsg(text){
  return <div class="message incoming">
             <p>Hello, how can I assist you today?</p>
          </div>
}

 function UserMsg (text) {
    return <div class="message outgoing">
              <p>Okay , I' understand ?</p>
            </div>
  }
  return (
  <div className="main-box">

<div class="chat-card" >
  <div class="chat-header">
   <div class="h2">UVDesk Support</div>
  </div>
  <div class="chat-body">
   
    {isTyping  ? <TypingMsg/> : <BotMsg text=''/> }
   
    <UserMsg text='' />
 
  
  </div>
  <div class="chat-footer">
    <input placeholder="Type your message" type="text" onChange={handleInputText} value={inputText}/>
    <button onClick={handleSendPress}>Send</button>
  </div>
</div>

    </div>

  
  )
}

export default App
