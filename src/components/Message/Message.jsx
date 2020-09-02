import React, { forwardRef } from "react";
import "./Message.css";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  currentUserMessage: {
    backgroundColor: "rgba(63, 81, 181, 0.7)",
    color: "#fff",
    marginLeft: "auto",
  },
  questUserMessage: {
    marginRight: "auto",
    backgroundColor: "rgba(211,211,211, 0.7)",
  },
});

export const Message = forwardRef(({ message, username }, ref) => {
  let styles = useStyles();

  let isCurrentUser = username === message.username;

  return (
    <Card
      ref={ref}
      className={`messageWrapper ${
        isCurrentUser
          ? `${styles.currentUserMessage}`
          : `${styles.questUserMessage}`
      }`}
    >
      <p className="username">
        {isCurrentUser ? "You" : message.username || "Unknown user"}
      </p>
      <p className="messageText">{message.message}</p>
      <div className="sendTime">{message.sendTime}</div>
    </Card>
  );
});
