import DetailItem from "@/containers/Detail/DetailItem";
import { getItemsDetail } from "@/services/item";

export default async function Item({ params }: { params: { id: number } }) {
  const itemsData = await getItemsDetail(params.id);

  return (
    <main>
      <div>
        <DetailItem initialData={itemsData} paramsId={params.id} />
      </div>
    </main>
  );
}
