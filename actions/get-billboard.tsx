import React from "react";
import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getMainBillboard = async (): Promise<Billboard> => {
  const mainBId = "b8e0da38-2d30-4b39-96f9-ed0f81cb8f3a";
  const res = await fetch(`${URL}/${mainBId}`);

  return res.json();
};

export default getMainBillboard;
