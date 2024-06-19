"use client";
import { useState } from "react";

import Button from "@/components/Button";
import SmallButton from "@/components/SmallButton";
import { IconTextPlusBlack, IconTextPlusWhite } from "../../../public/svgs";

import styles from "@/styles/home/page.module.css";

interface ItemInputProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddItem: () => void;
}

const ItemInput = ({
  inputValue,
  onInputChange,
  onAddItem,
}: ItemInputProps) => {
  //Enter를 누르면 함수가 중복으로 호출되는걸 방지하기에 작성 -> 한글이 복합문자라 입력동안 Enter키를 무시함
  const [isComposing, setIsComposing] = useState(false);

  const onEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onAddItem();
    }
  };

  return (
    <div className={styles.input_container}>
      <div className={styles.input_box}>
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={onEnterHandler}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          placeholder="할 일을 입력해주세요"
          className={styles.input_box_input}
        />
      </div>
      {inputValue.length >= 1 ? (
        <>
          <div onClick={onAddItem} className={styles.button_box}>
            <Button
              img={IconTextPlusWhite}
              text="추가하기"
              backgroundColor="--color-violet-600"
              textColor="--color-white"
            />
          </div>
          <div onClick={onAddItem} className={styles.button_box_mobile}>
            <SmallButton
              img={IconTextPlusWhite}
              backgroundColor="--color-violet-600"
            />
          </div>
        </>
      ) : (
        <>
          <div onClick={onAddItem} className={styles.button_box}>
            <Button
              img={IconTextPlusBlack}
              text="추가하기"
              backgroundColor="--color-slate-200"
              textColor="--color-slate-900"
            />
          </div>
          <div onClick={onAddItem} className={styles.button_box_mobile}>
            <SmallButton
              img={IconTextPlusBlack}
              backgroundColor="--color-slate-200"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemInput;
