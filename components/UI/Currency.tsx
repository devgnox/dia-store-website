"use client";
import { priceFormatter } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const Currency = ({ value }: { value?: string | number }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="font-semibold">{priceFormatter.format(Number(value))}</div>
  );
};

export default Currency;
