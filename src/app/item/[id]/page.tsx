

export default function Item({
    params
}:{
    params: { id: number }
}) {
  return (
    <main >
      <div>
       {params.id}
      </div>

    </main>
  )
}
