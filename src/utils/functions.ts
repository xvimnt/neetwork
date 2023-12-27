import { PutBlobResult } from "@vercel/blob";
import toast from "react-hot-toast";

export const GTQ = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "GTQ",
});

export const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const getRandomColors = (n: number): string[] => {
  const randomColors: string[] = [];

  for (let index = 0; index < n; index++) {
    randomColors.push(getRandomColor());
  }

  return randomColors;
};

export const splitArrayIntoChunks = <Type>(
  arr: Type[],
  chunkSize: number,
): Type[][] => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

export const haveSameDay = (d1: Date, d2: Date): boolean => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export const getRandomColor = (): string => {
  let length = 6;
  const chars = "0123456789ABCDEF";
  let hex = "#";
  while (length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
};

export const uploadFile = async (file: File): Promise<string> => {
  const response = await fetch("/api/upload/route", {
    method: "POST",
    headers: { "content-type": file?.type ?? "application/octet-stream" },
    body: file,
  });
  if (response.status === 200) {
    const { url } = (await response.json()) as PutBlobResult;
    return url;
  } else {
    const error = await response.text();
    throw new Error(error);
  }
};
