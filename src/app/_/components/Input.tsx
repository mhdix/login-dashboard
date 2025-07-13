import React from "react";


const Input = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log(apiUrl)
  return (
    <input type="text" disabled  />
  );
};

export default Input;
