/*
 * @Author: Klien
 * @Date: 2021-07-10 13:53:50
 * @LastEditTime: 2021-07-10 13:54:03
 * @LastEditors: Klien
 */
import React from "react";
import { Button } from "../lib/button";

export default { title: "Button" };

export const primary = () => <Button> Hello 11111 Button</Button>;

export const secondary = () => (
  <div style={{ background: "#1652f0", padding: 12 }}>
    <Button variant="secondary">Hello Button</Button>
  </div>
);
