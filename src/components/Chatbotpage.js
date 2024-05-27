import React from 'react'

export default function Chatbotpage() {
  return (
    <div><div className='container-fluid' style={{backgroundColor:"#F5EEF8", textAlign: "center", maxWidth: "800px", margin: "0 auto", padding:"100px"}}>
    <h5 style={{ marginBottom: "1rem", fontWeight: "normal" }}>
    The provided code implements a simple chatbot application using React and Bootstrap. The main component, `Chat`, maintains the state of chat messages and the user's input text. Initially, the chat displays a greeting message asking for the user's name. When the user sends a message by clicking the "Send" button, the message is added to the chat history. If it’s the first user message, the chatbot responds with a personalized greeting and a follow-up question. For subsequent messages, the chatbot uses the `analyze` function to provide appropriate responses based on the content of the user's message. The `Message` component handles the display of each chat message, differentiating between user messages and chatbot messages using styling and icons from `react-bootstrap-icons`. The chat interface features a logo, a title, an input field, and a send button, with messages displayed in a scrollable container. The `analyze` function uses the `moment` library to handle date and time queries and includes hardcoded responses for other common queries. The styles are defined in the `App.css` file, creating a visually appealing chat interface with distinct left and right message bubbles. The `App` component simply renders the `Chat` component, ensuring the chatbot is the central focus of the application.
    </h5>
    <a href=" https://sharvi4.github.io/ChatBot/">To see my project click the link</a>
  </div></div>
  )
}
