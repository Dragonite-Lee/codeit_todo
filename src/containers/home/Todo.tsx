"use client";
import Link from "next/link";

import styles from "@/styles/home/page.module.css";

import { ItemGetResponse, ItemPatchRequest } from "@/types/serviceType";
import {
  IconCheckedBox,
  IconDone,
  IconDoneLarge,
  IconDoneSmall,
  IconNullBox,
  IconTodo,
  IconTodoLarge,
  IconTodoSmall,
} from "../../../public/svgs";


interface TodoProps {
  data: ItemGetResponse[];
  onCheckedItem: (data: ItemPatchRequest, id: number) => void;
}

export default function Todo({ data, onCheckedItem }: TodoProps) {
  const completedData = data.filter((data) => data.isCompleted === true);
  const notCompletedData = data.filter((data) => data.isCompleted === false);

  const handleIconClick = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    isCompleted: boolean,
    id: number
  ) => {
    e.stopPropagation();
    onCheckedItem({ isCompleted }, id);
  };
  
  return (
    <div className={styles.todo_container}>
      <div className={styles.todo_box}>
        <IconTodo />
        <div>
          {notCompletedData?.length != 0 ? (
            <>
              {notCompletedData.map((item) => (
                <div key={item.id} className={styles.todo_element}>
                  <IconNullBox onClick={() => onCheckedItem({ isCompleted: true }, item.id)} />
                  <Link href={`/item/${item.id}`} className={styles.link_item}>{item.name}</Link>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className={styles.icon_large}>
                <IconTodoLarge />
                <div className={styles.icon_text}>
                  할 일이 없어요.<br />
                  TODO를 새롭게 추가해주세요!
                </div>
              </div>
              <div className={styles.icon_small}>
                <IconTodoSmall />
                <div className={styles.icon_text}>
                  할 일이 없어요.<br />
                  TODO를 새롭게 추가해주세요!
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.done_box}>
        <IconDone />
        <div>
          {completedData?.length != 0 ? (
            <>
              {completedData.map((item) => (
                <div key={item.id} className={styles.done_element}>
                  <IconCheckedBox onClick={() => onCheckedItem({ isCompleted: false }, item.id)} />
                  <Link href={`/item/${item.id}`} className={styles.link_item}>{item.name}</Link>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className={styles.icon_large}>
                <IconDoneLarge />
                <div className={styles.icon_text}>
                  아직 다 한 일이 없어요.<br />
                  해야 할 일을 체크해보세요!
                </div>
              </div>
              <div className={styles.icon_small}>
                <IconDoneSmall />
                <div className={styles.icon_text}>
                  아직 다 한 일이 없어요.<br />
                  해야 할 일을 체크해보세요!
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};