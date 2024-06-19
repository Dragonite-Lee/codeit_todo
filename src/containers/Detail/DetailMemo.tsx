"use client";
import styles from "@/styles/item/page.module.css";

import { ItemDetailGetResponse, ItemPatchRequest } from "@/types/serviceType";

interface DetailMemoProps {
  memoValue: string;
  memoValueHandler: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export default function DetailMemo({ memoValue, memoValueHandler }: DetailMemoProps) {


  return (
    <div className={styles.content_memo_box}>
      <div className={styles.memo_logo}>
        Memo
      </div>
      <div className={styles.memo_input_wrapper}>
        <textarea
          className={styles.memo_input}
          value={memoValue}
          onChange={memoValueHandler}
          placeholder="메모를 입력하세요..."
        ></textarea>
      </div>
    </div>
  );
};
