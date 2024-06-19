export interface ItemPostRequest {
    name: string;
}

export interface ItemPostResponse {
  id: number;
  tenantId: string;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

export interface ItemGetResponse {
  id: number;
  isCompleted: boolean;
  name: string;
}

export interface ItemDetailGetResponse {
  id: number;
  tenantId: string;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

export interface ItemPatchRequest {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
}

export interface ItemDeleteResponse {
  massage: string;
}

