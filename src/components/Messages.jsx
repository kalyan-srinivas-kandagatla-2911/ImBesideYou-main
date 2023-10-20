import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const chatDocRef = doc(db, "chats", data.chatId);
    const unsubscribe = onSnapshot(chatDocRef, (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages);
        setLoading(false);
        setError(null);
      } else {
        setLoading(false);
        setError("Chat not found");
      }
    }, (err) => {
      setLoading(false);
      setError("Error fetching chat messages");
      console.error("Error fetching chat messages: ", err);
    });

    return () => {
      unsubscribe();
    };
  }, [data.chatId]);

  if (loading) {
    return <div>Loading messages...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
