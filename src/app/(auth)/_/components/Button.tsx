import { TButton } from "@/types/Button";
import React from "react";

const Button = ({ className, onClick, children }: TButton) => {
  return <button onClick={onClick} className={className}>{children}</button>;
};
export default Button;
