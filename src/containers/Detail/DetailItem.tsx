"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { deleteItems, getItemsDetail, patchItems } from "@/services/item";
import { ItemDetailGetResponse, ItemPatchRequest } from "@/types/serviceType";
import styles from "@/styles/item/page.module.css";

import DetailTodo from "./DetailTodo";
import DetailContent from "./DetialContent";

interface DetailItemProps {
  initialData: ItemDetailGetResponse;
  paramsId: number;
}

export default function DetailItem({ initialData, paramsId }: DetailItemProps) {
  const [itemsData, setItemsData] =
    useState<ItemDetailGetResponse>(initialData);
  const router = useRouter();

  const onCheckedItem = async (data: ItemPatchRequest, id: number) => {
    try {
      await patchItems(data, id);
      const updateData = await getItemsDetail(paramsId);
      setItemsData(updateData);
    } catch (error) {
      console.error("[patchItems Error]:", error);
    }
  };

  const onEditItem = async (data: ItemPatchRequest, id: number) => {
    try {
      await patchItems(data, id);
      router.push("/");
    } catch (error) {
      console.error("[patchItems Error]:", error);
    }
  };

  const onDeletedItem = async (id: number) => {
    try {
      await deleteItems(id);
      router.push("/");
    } catch (error) {
      console.error("[deleteItems Error]:", error);
    }
  };

  return (
    <main className={styles.gray_container}>
      <div className={styles.white_container}>
        <DetailTodo data={itemsData} onCheckedItem={onCheckedItem} />
        <DetailContent
          data={itemsData}
          onEditItem={onEditItem}
          onDeletedItem={onDeletedItem}
        />
      </div>
    </main>
  );
}
