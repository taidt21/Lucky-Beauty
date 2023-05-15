import * as React from "react";
import Header from "./Header";
import "./content.css";
import addIcon from "../icon/add.svg";
import { Button, ButtonGroup } from "@mui/material";
import colorIcon from "../icon/Color.svg";
import GridContainer from "./grid-column-4/GridContainer";
import Todos from "./list todo/Todos";
import Chart from "./Chart";
import ChartBar from "./ChartBar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ChartServices from "./ChartServices";
import colorDot from '../icon/Color.svg'
const Content = () => {
  const [month, setMonth] = React.useState("Tháng này");

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  return (
    <div className="Content">
      <Header />
      <div className="body-row-1">
        <div className="body-row-1_col-1">
          <span className="curent-page">Trang chủ</span>
          <h1 className="title-page">Tổng quan</h1>
        </div>
        <div className="body-row-1_col-2">
          <ButtonGroup>
            <Button className="button-1">
              <img src={colorIcon} />
            </Button>
            <Button className="button-2">
              <span className="button-icon">
                <img src={addIcon} alt="add" />
              </span>
              <span>Thêm</span>
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="body-row-2">
        <GridContainer />
      </div>
      <div className="body-row-3">
        <div className="body-row-3_col-1">
          <h2 className="body-row-3_title">Danh sách cuộc hẹn hôm nay</h2>
          <p className="des">Cuộc hẹn mới nhất</p>
          <Todos />
        </div>
        <div className="body-row-3_col-2">
          <h2 className="body-row-3_title">Tổng số cuộc hẹn hàng tuần</h2>
          <Chart />
        </div>
      </div>
      <div className="body-row-4">
        <div className="body-row-4_col-1">
          <div className="body-row-4_col-1_row">
            <div className="body-row-4_col-1_col-1">
              
                <h2 className="body-row-4_title">Doanh thu</h2>
                <p className="des">Doanh thu cửa hàng</p>
             
            </div>
            <div className="body-row-4_col-1_col-2">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={month}
                    
                    onChange={handleChange}
                  >
                    <MenuItem value="Tháng này">Tháng này</MenuItem>
                    <MenuItem value="Tháng trước">Tháng trước</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="body-row-4_col-1_row-1">
            <div className="prices">
              <div className="price-total">36,2531.00</div>
              <div className="price-ratio">(+1.37%)</div>
            </div>
            <div className="bar-tootilp">
              <div className="tootilp-item">
                <div className="tooltilp-dot"></div>
                <div className="tooltilp-text">Tuần này</div>
              </div>
              <div className="tootilp-item">
                <div className="tooltilp-dot"></div>
                <div className="tooltilp-text">Tuần trước</div>
              </div>
            </div>
            
          </div>
          <div className="body-row-4_col-1_row-2">
            <ChartBar />
          </div>
        </div>
        <div className="body-row-4_col-2">
          <div className="body-row-4_col-2_row-1">
          <h2>Top 5 dịch vụ hot</h2>
          <Button sx={{minWidth:0}}>
            <img src={colorDot} alt="button"/>
          </Button>
          </div>
          
          <ChartServices/>
        </div>
      </div>
    </div>
  );
};

export default Content;
