"use client";
import { useEffect, useState } from "react";

import styles from "@/styles/item/page.module.css";
import { IconCancle, IconCheck } from "../../../public/svgs";

import { ItemDetailGetResponse, ItemPatchRequest } from "@/types/serviceType";
import useInput from "@/hooks/useInput";

import DetailImage from "./DetailImage";
import DetailMemo from "./DetailMemo";
import Button from "@/components/Button";



interface TodoProps {
  data: ItemDetailGetResponse;
  onEditItem: (data: ItemPatchRequest, id: number) => void;
  onDeletedItem: (id: number) => void;
}

export default function DetailContent({ data, onEditItem, onDeletedItem }: TodoProps) {
  const [postUrl, setPostUrl] = useState<File | null>(null); 
  const [imageUrl, setImageUrl] = useState<string>(data.imageUrl); 
  const [initialUrl, setInitialUrl] = useState<string>(data.imageUrl);
  const [memoValue, memoValueHandler, setMemoValue] = useInput('');
  const [initialMemo, setInitialMemo] = useState<string>(data.memo);
  
  useEffect(() => {
    if (initialMemo) {
      setMemoValue(initialMemo)
    }
  },[])

  const patchData: ItemPatchRequest = {};

  useEffect(() => {
    if (imageUrl !== initialUrl) {
      patchData.imageUrl = imageUrl
    }
    if (initialMemo === null ? memoValue : initialMemo !== memoValue) {
      patchData.memo = memoValue
    }
  }, [imageUrl, memoValue])
  
  return (
    <div className={styles.detail_content_container}>
      <div className={styles.content_box}>
        <DetailImage 
          postUrl={postUrl}
          setPostUrl={setPostUrl}
          initialUrl={data.imageUrl}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
        />
        <DetailMemo 
          memoValue={memoValue}
          memoValueHandler={memoValueHandler}
        />
      </div>
      <div className={styles.button_box}>
        <div>
          {imageUrl !== initialUrl || (initialMemo === null ? memoValue : initialMemo !== memoValue) ? (
            <div onClick={() => onEditItem(patchData, data.id)}>
              <Button 
                img={IconCheck}
                text="수정 완료"
                backgroundColor="--color-lime-300"
                textColor="--color-slate-900"
              />
            </div>
          ) : (
            <Button 
              img={IconCheck}
              text="수정 완료"
              backgroundColor="--color-slate-200"
              textColor="--color-slate-900"
            />
          )}
        </div>
        <div onClick={() => onDeletedItem(data.id)}>
          <Button
            img={IconCancle}
            text="삭제하기"
            backgroundColor="--color-rose-500"
            textColor="--color-white"
          />
        </div>
      </div>
    </div>
  );
};
