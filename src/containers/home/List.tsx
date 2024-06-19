"use client";
import Todo from '@/containers/home/Todo'
import ItemInput from '@/containers/home/ItemInput'
import useInput from '@/hooks/useInput';

import { getItems, patchItems, postItems } from '@/services/item'
import { ItemGetResponse, ItemPatchRequest } from '@/types/serviceType';
import { useEffect, useState } from 'react';


interface ListProps {
  initialData: ItemGetResponse[];
}

export default function List({initialData}: ListProps) {
  const [itemsData, setItemsData] = useState<ItemGetResponse[]>(initialData);
  const [inputValue, inputValueHandler, setInputValue] = useInput("");

  const onAddItem = async () => {
    const postData = {
      name: inputValue,
    };

    try {
      await postItems(postData);
      setInputValue('')
      const updateData = await getItems();
      setItemsData(updateData)
    } catch (error) {
      console.error("[postItems Error]:", error);
    }
  };

  const onCheckedItem = async (data: ItemPatchRequest, id: number) => {
    try {
      await patchItems(data, id);
      const updateData = await getItems();
      setItemsData(updateData);
    } catch (error) {
      console.error("[patchItems Error]:", error);
    }
  };

  useEffect(() => {
    const newItem = async () => {
      const updateData = await getItems();
      setItemsData(updateData);
    }
    
    newItem();
  }, []);

  
  return (
    <main >
      <div>
        <ItemInput 
          inputValue={inputValue}
          onInputChange={inputValueHandler}
          onAddItem={onAddItem}
        />
        <Todo 
          data={itemsData} 
          onCheckedItem={onCheckedItem}
        />
      </div>
    </main>
  )
}
