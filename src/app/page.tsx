import List from '@/containers/home/List'

import { getItems } from '@/services/item'


export default async function Home() {
  const itemsData = await getItems()

  return (
    <main >
      <div>
        <List initialData={itemsData} />
      </div>
    </main>
  )
}
