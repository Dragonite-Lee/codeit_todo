import { useState } from "react";

export default function useInput(initialValue: string): [
  string, 
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, 
  (value: string) => void
] {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleValue = (value: string) => {
    setInputValue(value);
  }
  
  return [inputValue, handleChange, handleValue]
};