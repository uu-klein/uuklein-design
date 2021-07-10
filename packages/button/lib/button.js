/*
 * @Author: Klien
 * @Date: 2021-07-10 13:32:30
 * @LastEditTime: 2021-07-10 13:48:00
 * @LastEditors: Klien
 */
import React from "react";
import cx from "clsx";
import styles from "./button.css";

const Button = ({ children, className, variant, ...rest }) => {
  const classes = cx(
    styles.Button,
    {
      [styles.ButtonSecondary]: variant === "secondary",
    },
    className
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export { Button };
