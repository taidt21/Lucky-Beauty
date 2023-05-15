import React, { useState,useRef }  from "react";
import questionIcon from "../icon/message-question.svg";
import notificationIcon from "../icon/notification.svg";
import { Select, MenuItem ,IconButton,Badge } from '@mui/material';
import './header.css';
import logo  from '../icon/nail.svg';
import Downicon from './Downicon';

const Header = () => {
    const [selectedOption, setSelectedOption] = useState('Hà Nội');

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
    
      const selectRef = useRef(null);
      const handleButton1Click = () => {
        selectRef.current.click();
      };
    
  return (
    <div className="header">
      <div className="header-col-1">
        <div className="question">
       
            <IconButton>
            <img src={questionIcon} alt="question" />
            </IconButton>
         
        </div>

        <div className="notification">
          
                <IconButton
                >
                      <Badge variant="dot" >
                    <img src={notificationIcon} alt="notificationIcon" />
                    </Badge>
                </IconButton>
            
          
        </div>
      </div>
      <div className="header-col-2" >
        <div className="header-col-2_logo" onClick={handleButton1Click}>
            <img src={logo} alt="location"/>
        </div>
      <Select value={selectedOption} ref={selectRef} onChange={handleChange}
       
      >
      <MenuItem value="Hà Nội" >Hà Nội</MenuItem>
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </Select>
      </div>
    </div>
  );
};

export default Header;
