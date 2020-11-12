import React, {useEffect, useState} from "react";
import {useBottomScroll} from "../utils/useBottomScroll";
import ListItem from "../layout/ListItem";
import "./Hero.scss";

// const API = "https://pastebin.pl/view/raw/e1658aa0";

const PAGE_SIZE = 12;

const Hero = () => {
  const [result, setResult] = useState([]);
  const [offset, setOffset] = useState(1);
  //   const [hasError, setHasError] = useState(false);

  const isBottomScroll = useBottomScroll();
  console.log({isBottomScroll});

  useEffect(() => {
    if (isBottomScroll) {
      setOffset((o) => o + 1);
    }
  }, [isBottomScroll]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const buffer = await fetch("/api.json");
        const data = await buffer.json();
        setResult(data.posts);
      } catch (e) {
        new Error("bad");
      }
    };
    fetchData();
  }, []);
  console.log(result);
  return (
    <div className="items-container">
      {result.slice(0, PAGE_SIZE * offset).map((props, id) => (
        <ListItem {...props} key={id} />
      ))}
    </div>
  );
};

export default Hero;
