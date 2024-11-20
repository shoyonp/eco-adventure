import React, { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `Adventure | ${title}`;
  }, []);
};

export default UseTitle;
