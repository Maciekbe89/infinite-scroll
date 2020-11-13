import React, {useEffect, useState} from "react";
import {useBottomScroll} from "../utils/useBottomScroll";
import ListItem from "../layout/ListItem";
import Error from "../components/Error";
import Loading from "../components/Loading";
import "./Hero.scss";

// const API = "https://pastebin.pl/view/raw/e1658aa0";

const PAGE_SIZE = 12;

const Hero = () => {
  const [result, setResult] = useState([]);
  const [offset, setOffset] = useState(1);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const isBottomScroll = useBottomScroll();

  useEffect(() => {
    if (isBottomScroll) {
      setLoading(true);
      setTimeout(() => {
        setOffset((o) => o + 1);
        setLoading(false);
      }, 2000);
    }
  }, [isBottomScroll]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const buffer = await fetch(`${process.env.PUBLIC_URL}/api.json`);
        const data = await buffer.json();
        setResult(data.posts);
      } catch (e) {
        setHasError(true);
      }
    };
    fetchData();
  }, []);
  console.log(result);
  return (
    <>
      {hasError ? (
        <Error />
      ) : (
        <div className="items-container">
          {result.slice(0, PAGE_SIZE * offset).map((props, id) => (
            <ListItem {...props} key={id} />
          ))}
        </div>
      )}
      {loading && <Loading />}
    </>
  );
};

export default Hero;
