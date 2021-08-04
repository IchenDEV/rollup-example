import React, { useEffect } from "react";
import { Button } from "antd";
import test from "@/assets/test.png"
export default function HelloWorld() {
  useEffect(() => {}, []);
  return (
    <div>
      <p>
        Hello World
        <Button />
        <img src={test} />
      </p>
    </div>
  );
}
