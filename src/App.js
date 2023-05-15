import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Content from "./Components/Content";


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleLogin = () => {
    // Xử lý logic đăng nhập ở đây, có thể gọi API đăng nhập và xác thực thông tin người dùng
    // Sau khi xác thực thành công, đặt trạng thái isLoggedIn thành true
  //   setIsLoggedIn(true);
  // };
  return (
    <div className="App">
      {/* {!isLoggedIn && <Login onLogin={handleLogin} />} */}
     
        <div className="Admin-Dashboard">
          <Dashboard />
          <Content />
        </div>
     
    </div>
  );
}

export default App;
