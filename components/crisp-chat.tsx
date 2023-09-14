"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8ac5bbd1-04d3-49c6-8608-13c68e5539c0");
  }, []);
  return null;
};
