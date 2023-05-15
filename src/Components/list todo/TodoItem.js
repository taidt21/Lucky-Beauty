import React from "react";
import Avatar from "@mui/material/Avatar";

import clockIcon from "../../icon/clock.svg";
const TodoItem = (Props) => {
  return (
    <div className="todo-item">
      <div className="todo-item_col-1">
        <div className="avatars">
          <Avatar src={Props.avatar} alt="avatar" sx={{width:50,height:50}}/>
        </div>
        <div className="todo-content">
          <div className="todo-name">{Props.name}</div>
          <div className="times">
            <div className="time-icon">
              <img src={clockIcon} alt="clock" />
            </div>
            <div className="time-text">{Props.time}</div>
          </div>
          <div className="job">{Props.job}</div>
        </div>
      </div>
      <div className="todo-item_col-2">
        <div className="state">{Props.state}</div>
        <div className="price">{Props.price}</div>
      </div>
    </div>
  );
};

export default TodoItem;
