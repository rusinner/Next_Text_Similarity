import { cva } from "class-variance-authority";
import React from "react";

interface ButtonProps {}

const buttonVariants = cva(
  "active:scale-95 inlline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:putline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 ",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 ",
      },
    },
  }
);

const Button: React.FC<ButtonProps> = ({}) => {
  return <></>;
};

export default Button;
