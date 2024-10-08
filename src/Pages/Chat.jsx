import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Messages.jsx";
import {BotReply, } from '../utils/responseSet.js'

// { from: "computer", text: "" },
// { from: "me", text: "" },
// { from: "me", text: "Myself Ferin Patel" },
// { from: "computer", text: "Nice to meet you. You can send me message and i'll reply you with same message." }

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;
    

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      BotReply(data);
      setMessages((old) => [...old, { from: "computer", text: BotReply(data)}]);
    }, 1000);
    
  };



  return (
    <Flex  h="100vh" justify="center" align="center" style={{width:"900px"}}>
      <Flex w={["100%", "100%", "40%"]} h="90%" flexDir="column">
        <Header />
        <Divider />
        <Messages messages={messages} />
        <Divider />
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
