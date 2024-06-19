"use client";
import styles from "@/styles/item/page.module.css";

import { ItemDetailGetResponse, ItemPatchRequest } from "@/types/serviceType";
import { IconCheckedBox, IconNullBox } from "../../../public/svgs";

interface TodoProps {
  data: ItemDetailGetResponse;
  onCheckedItem: (data: ItemPatchRequest, id: number) => void;
}

export default function DetailTodo({ data, onCheckedItem }: TodoProps) {
  return (
    <div className={styles.detail_todo_container}>
      {data.isCompleted == true ? (
        <div className={styles.done_box}>
          <div className={styles.done_element}>
            <IconCheckedBox
              onClick={() => onCheckedItem({ isCompleted: false }, data.id)}
            />
            <div className={styles.link_item}>{data.name}</div>
          </div>
        </div>
      ) : (
        <div className={styles.todo_box}>
          <div className={styles.todo_element}>
            <IconNullBox
              onClick={() => onCheckedItem({ isCompleted: true }, data.id)}
            />
            <div className={styles.link_item}>{data.name}</div>
          </div>
        </div>
      )}
    </div>
  );
}
