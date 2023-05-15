import React from "react";
import avatar from "../../icon/avatar.png";
import TodoItem from "./TodoItem";
import './todos.css';
const Todos = () => {
  const datas = [
    {
      avatar: avatar,
      name: "Đinh Tuấn Tài",
      time: "9h00 - 12h30",
      job: "Uốn nhuộm ",
      state: "Đang chờ",
      price: "1,000,000",
    },
    {
      avatar: avatar,
      name: "Đinh Tuấn em",
      time: "9h00 - 12h30",
      job: "Uốn nhuộm ",
      state: "Đang chờ",
      price: "1,000,000",
    },
    {
      avatar: avatar,
      name: "Đinh Tuấn Anh",
      time: "9h00 - 12h30",
      job: "Uốn nhuộm ",
      state: "Đang chờ",
      price: "1,000,000",
    },
  ];
  const Boxs = datas.map((data) => (
    <TodoItem
      avatar={data.avatar}
      name={data.name}
      time={data.time}
      job={data.job}
      state={data.state}
      price={data.price}

      key={data.name.replace(/\s/g, '')}

    />
  ));
  return <div className="todo-container">{Boxs}</div>;
};

export default Todos;
