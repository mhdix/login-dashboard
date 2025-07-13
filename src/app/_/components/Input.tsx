import { TInput } from "@/types/TInput";
import React from "react";

const Input = ({ className, user, labelId, type }: TInput) => {
  return (
    <input
      type={type}
      id={labelId}
      value={`${user?.name?.first ?? ""} ${user?.name?.last ?? ""}`}
      disabled
      className={className}
    />
  );
};

export default Input;
