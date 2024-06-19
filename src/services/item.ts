import {
  ItemDeleteResponse,
  ItemDetailGetResponse,
  ItemGetResponse,
  ItemPatchRequest,
  ItemPostRequest,
  ItemPostResponse,
} from "@/types/serviceType";

// .env파일을 이용하려 했지만, 깃허브 과제 제출 특성 상 현 폴더에 적어서 사용
const username: string = "dragonite";
const base_url = new URL("https://assignment-todolist-api.vercel.app/api");

export const postItems = async (
  data: ItemPostRequest
): Promise<ItemPostResponse> => {
  const response = await fetch(`${base_url}/${username}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const getItems = async (): Promise<ItemGetResponse[]> => {
  const response = await fetch(`${base_url}/${username}/items`, {
    cache: "no-store",
  });
  return response.json();
};

export const getItemsDetail = async (
  id: number
): Promise<ItemDetailGetResponse> => {
  const response = await fetch(`${base_url}/${username}/items/${id}`, {
    cache: "no-store",
  });
  return response.json();
};

export const patchItems = async (
  data: Partial<ItemPatchRequest>,
  id: number
): Promise<ItemDetailGetResponse> => {
  const response = await fetch(`${base_url}/${username}/items/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const deleteItems = async (id: number): Promise<ItemDeleteResponse> => {
  const response = await fetch(`${base_url}/${username}/items/${id}`, {
    method: "DELETE",
  });

  return response.json();
};
