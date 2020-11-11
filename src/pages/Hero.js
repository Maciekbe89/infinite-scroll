import React, {useEffect, useState} from "react";
import {useBottomScroll} from "../utils/useBottomScroll";

// const API = "https://pastebin.pl/view/raw/e1658aa0";

const PAGE_SIZE = 10;

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
    <div>
      {result.slice(0, PAGE_SIZE * offset).map((item, id) => (
        <h1>
          {id}
          {item.title}
        </h1>
      ))}
    </div>
  );
};

export default Hero;
