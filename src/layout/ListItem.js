import React from "react";
import Button from "../components/Button";
import PropTypes from "prop-types";
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

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumb: PropTypes.string,
};

export default ListItem;
