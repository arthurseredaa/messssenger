import React from "react";
import "./CreateMessage.css";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SendIcon from "../../assets/send.svg";

export const CreateMessage = ({ inputValue, setInputValue, sendMessage }) => {
  return (
    <div className="createMessage">
      <TextField
        id="outlined-basic"
        label="Enter a message..."
        autoComplete="off"
        // variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="createMessage__input"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={sendMessage}
        className="createMessage__button"
        disabled={!inputValue}
      >
        <img src={SendIcon} width="30" alt="send icon" />
      </Button>
    </div>
  );
};
