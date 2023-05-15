import React from "react";
import sinhnhat from "../../icon/sn.svg";
import userIcon from "../../icon/user.svg";
import calendarIcon from "../../icon/calendar-add.svg";
import walletIcon from "../../icon/wallet.svg";
import incrementIcon from "../../icon/tang.svg";
import decrementIcon from "../../icon/giam.svg";
import LoopGrid from "./LoopGrid";

const GridContainer = () => {
  const grids = [
    {
      icon: sinhnhat,
      title: "Khách hàng sinh nhật",
      number: "5",
    },
    {
      icon: userIcon,
      title: "Tổng số khách hàng ",
      number: "100",
      ratioText: "+11.01%",
      ratioIcon: incrementIcon,
    },
    {
      icon: calendarIcon,
      title: "Tổng cuộc hẹn",
      number: "150",
      ratioText: "-5.01%",
      ratioIcon: decrementIcon,
    },
    {
      icon: walletIcon,
      title: "Tổng doanh thu ",
      number: "10,000",
      ratioText: "+11.01%",
      ratioIcon: incrementIcon,
    },
  ];
  const boxs = grids.map((grid) => (
    <LoopGrid
      icon={grid.icon}
      title={grid.title}
      number={grid.number}
      ratioIcon={grid.ratioIcon}
      ratioText={grid.ratioText}
      key={grid.title.replace(/\s/g, "")}
    />
  ));

  return <div className="grid-container">{boxs}</div>;
};

export default GridContainer;
