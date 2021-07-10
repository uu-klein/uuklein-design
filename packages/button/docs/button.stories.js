/*
 * @Author: Klien
 * @Date: 2021-07-10 13:53:50
 * @LastEditTime: 2021-07-10 14:14:49
 * @LastEditors: Klien
 */
import React from "react";
import { Button } from "../lib/button";

export default { title: "Button" };

export const primary = () => <Button> Hello Button</Button>;

export const secondary = () => (
  <div style={{ background: "#1652f0", padding: 12 }}>
    <Button variant="secondary">Hello Button</Button>
  </div>
);
