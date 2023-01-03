import { GetStaticProps } from "next"
import { useEffect } from "react"
import { getUsers } from "../lib/users"

export default function Home() {
  function fetchUsers() {
    fetch('/api/users').then(resp => resp.json()).then(console.log)
  }

  return (
    <button type="button" onClick={fetchUsers}>Buscar</button>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await getUsers()

  console.log(users)

  return {
    props: {
      users,
    },
    revalidate: 5,
  }
}
