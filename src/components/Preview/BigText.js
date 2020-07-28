import React, { useEffect, useRef } from "react";

const BigText = ({ children, width, height }) => {
  let style = {
    width,
    height,
    display: "inline",
    backgroundColor: "lightgreen",
  };
  const ref = useRef(null);
  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    console.log("width", width);
  }, [ref.current]);

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};

export default BigText;
