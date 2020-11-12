import {useState, useEffect} from "react";

export const useBottomScroll = () => {
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 10;
      setBottom(isBottom);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return bottom;
};
