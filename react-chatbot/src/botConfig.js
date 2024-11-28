import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Fitness Assistant";

const config = {
  botName,
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}. How can I assist you today?`),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;