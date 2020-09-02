import React, { useState, useEffect } from "react";
import "./App.css";
import { CreateMessage } from "./components/CreateMessage/CreateMessage";
import { Message } from "./components/Message/Message";
import { db } from "./firebase";
import firebase from "firebase";
import { Preloader } from "./components/Preloader/Preloader";
import FlipMove from "react-flip-move";
import { Header } from "./components/Header/Header";
import { addZeroToTime } from "./utils/addZeroToTime/addZeroToTime";

export const App = () => {
  const [input, setInput] = useState(""),
    [messages, setMessages] = useState([]),
    [username, setUsername] = useState(""),
    [isLoading, setIsLoading] = useState(false),
    [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    db.collection("messages")
      // фільтр по полю timestamp, descending(desc) або ascending(asc) — в порядку зростання або спадання
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
        setIsLoading(false);
      });
  }, []);

  window.messages = messages;

  useEffect(() => {
    setUsername(prompt("Please, enter your username"));
  }, []);

  const sendMessage = () => {
    debugger;
    let local = new Date();
    let localdatetime =
      addZeroToTime(local.getHours()) + ":" + addZeroToTime(local.getMinutes());
    db.collection("messages").add({
      message: input,
      username: username,
      sendTime: localdatetime,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessages([
      ...messages,
      {
        username: username,
        message: input,
        sendTime: localdatetime,
      },
    ]);
    setInput("");
  };

  return (
    <div className="app">
      <Header username={username} />
      <CreateMessage
        inputValue={input}
        setInputValue={setInput}
        sendMessage={sendMessage}
      />
      <div className="messagesHolder">
        {isLoading && <Preloader />}

        <FlipMove className="flipMoveComponent">
          {messages.map(({ id, data }) => {
            if (data) {
              return <Message key={id} message={data} username={username} />;
            }
          })}
        </FlipMove>
      </div>
    </div>
  );
};
