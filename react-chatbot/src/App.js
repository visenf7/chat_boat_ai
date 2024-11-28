import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./botConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div className="chatbot-container">
        <h1 style={{ textAlign: 'center' }}>React Chatbot</h1>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};

export default App;