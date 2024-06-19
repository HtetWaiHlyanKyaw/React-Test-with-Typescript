import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning" | "info" | "success";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
