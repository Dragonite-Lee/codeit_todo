"use client";


import styles from "@/styles/item/page.module.css";

import { IconEmptyImg, IconImgEdit, IconImgPlus } from "../../../public/svgs";
import { useState } from "react";
import { getImageUrl } from "@/services/image";


interface DetailImageProps {
  postUrl: File | null;
  setPostUrl: React.Dispatch<React.SetStateAction<File | null>>;
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  initialUrl: string;
}


export default function DetailImage({ postUrl, setPostUrl, imageUrl, setImageUrl, initialUrl }: DetailImageProps) {
  

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; // 업로드된 파일 가져오기
    if (!files || files.length === 0) return;
   
    const file = files[0];
    setPostUrl(file);

    const formData = new FormData();
    formData.append('image', file);
   
    // 이미지 Url 가져오기
    try {
      const url = await getImageUrl(formData); // 이미지 업로드 함수 호출하여 이미지 URL 받아오기
      setImageUrl(url); // 업로드된 이미지 URL 설정
    } catch (error) {
      console.error('[DetailImage]:', error);
    }
  };

  return (
    <>
      {imageUrl ? (
        <div className={styles.content_img_box}>
          <img src={imageUrl} alt="미리보기" className={styles.preview_image} />
          <label className={styles.img_edit}> 
            <IconImgEdit />
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFileChange}
              className={styles.input_file}
            />
          </label>
        </div>
      ) : (
        <div className={styles.content_not_img_box}>
          <div className={styles.img_logo}>
            <IconEmptyImg />
          </div>
          <label className={styles.img_plus}>
            <IconImgPlus />
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFileChange}
              className={styles.input_file}
            />
          </label>
        </div>
      )}
    </>
  );
};
