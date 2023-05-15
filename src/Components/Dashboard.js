// import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  Badge,
  Menu,
  MenuItem,
  Button,
  ButtonGroup,
  Collapse,
  ListItemButton,
} from "@mui/material";
import logo from "../logo/loho2.svg";
import HomeIcon from "../icon/home.svg";
import EventIcon from "../icon/calendar.svg";
import ShoppingCartIcon from "../icon/shop.svg";
import WorkIcon from "../icon/personalcard.svg";
import PeopleIcon from "../icon/profile-2user.svg";
import AssessmentIcon from "../icon/task-square.svg";
import SettingsIcon from "../icon/setting-2.svg";
import "./dashboard.css";
import down from "../icon/down.svg";
import React, { useState } from "react";
import sunIcon from "../icon/sun.svg";
import moonIcon from "../icon/moon.svg";
import exitIcon from "../icon/exit.svg";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
export default function Dashboard() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = useState(true);
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const [open3, setOpen3] = useState(true);
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Thêm mã để chuyển đổi giao diện và lưu trạng thái đen/trắng
    darkMode
      ? document.body.classList.remove("darkMode")
      : document.body.classList.add("darkMode");
  };

  return (
    <div className="container">
      <div className="dashboard">
        <div className="nav">
          <Drawer variant="permanent">
            <List>
              <ListItem>
                <span>
                  <img className="logo-img" src={logo} alt="Lucky Beauty" />
                </span>
                <span className="logo-text">Lucky Beauty</span>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <img src={HomeIcon} alt="HOME" />
                </ListItemIcon>
                <ListItemText primary="Trang chủ" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <img src={EventIcon} alt="Lịch hẹn " />
                </ListItemIcon>
                <Badge badgeContent={10}>
                  <ListItemText primary="Lịch hẹn" />
                </Badge>
              </ListItem>

              <ListItem onClick={handleClick}>
                <ListItemIcon>
                  <img src={ShoppingCartIcon} alt="Bán hàng" />
                </ListItemIcon>
                <ListItemText primary="Bán hàng" />

                {open ?  <ExpandMore /> : <ExpandLess /> }
              </ListItem>
              <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    
                    <ListItemText primary="option1" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    
                    <ListItemText primary="option2" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    
                    <ListItemText primary="option2" />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItem>
                <ListItemIcon>
                  <img src={AssessmentIcon} alt="HOME" />
                </ListItemIcon>
                <Badge badgeContent={10}>
                  <ListItemText primary="Dịch vụ" />
                </Badge>
              </ListItem>

              <ListItem onClick={handleClick3}>
                <ListItemIcon>
                  <img src={WorkIcon} alt="HOME" />
                </ListItemIcon>
                <ListItemText primary="Khách hàng" />
                {open3 ?  <ExpandMore /> : <ExpandLess /> }
              </ListItem>
              <Collapse in={!open3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    
                    <ListItemText primary="option1" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    
                    <ListItemText primary="option2" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    
                    <ListItemText primary="option2" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItem onClick={handleClick2}>
                <ListItemIcon>
                  <img src={PeopleIcon} alt="HOME" />
                </ListItemIcon>
                <ListItemText primary="Nhân viên" />
                {open2 ?  <ExpandMore /> : <ExpandLess /> }
              </ListItem>
              <Collapse in={!open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    
                    <ListItemText primary="option1" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    
                    <ListItemText primary="option2" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    
                    <ListItemText primary="option5" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItem onClick={handleClick1}>
                <ListItemIcon>
                  <img src={WorkIcon} alt="HOME" />
                </ListItemIcon>
                <ListItemText primary="Báo cáo" />
                {open1 ?  <ExpandMore /> : <ExpandLess /> }
              </ListItem>
              <Collapse in={!open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    
                    <ListItemText primary="option1" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    
                    <ListItemText primary="option2" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    
                    <ListItemText primary="option5" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItem>
                <ListItemIcon>
                  <img src={SettingsIcon} alt="HOME" />
                </ListItemIcon>
                <ListItemText primary="Cài đặt" />
              </ListItem>
            </List>
          </Drawer>
        </div>
        <div className="dashboard-bottom">
          <div className="dashboard-bottom_buttons">
            <ButtonGroup>
              <Button
                onClick={toggleDarkMode}
                className={darkMode ? "default" : "active"}
              >
                <span>
                  <img src={sunIcon} alt="icon" />
                </span>
              </Button>
              <Button
                onClick={toggleDarkMode}
                className={darkMode ? "active" : "default"}
              >
                <span>
                  <img src={moonIcon} alt="icon" />
                </span>
              </Button>
            </ButtonGroup>
          </div>
          <div className="dashboard-bottom_exit">
            <Button>
              <span className="exit-icon">
                <img src={exitIcon} alt="exit" />
              </span>
              <span className="exit-text">Thoát</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
}
