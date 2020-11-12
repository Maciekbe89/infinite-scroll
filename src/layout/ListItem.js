import React from "react";
import Button from "../components/Button";
import "./ListItem.scss";

const ListItem = ({title, date, excerpt, thumb, url}) => {
  return (
    <div className="item-container">
      <img className="item-containerImage" src={thumb} alt={title} />
      <h1 className="item-containerTitle">{title}</h1>

      <p className="item-containerDescription">{excerpt}</p>
      <div className="item-containerBottomWrapper">
        <Button link={url}>read more...</Button>{" "}
        <p className="item-containerDate">{date}</p>
      </div>
    </div>
  );
};

export default ListItem;
