import { RepositoryItem } from "./RepositoryItem"

const repository = {
  name: 'unform',
  description: 'Form In React',
  link: 'https://github.com/RicardoRioss/tollsNode'
}


export function RepositoryList() {
  return (
    <section repository-list>
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem  repository = {repository}/>
        <RepositoryItem repository = {repository}/>
        <RepositoryItem repository = {repository}/>
        <RepositoryItem repository = {repository}/>
      </ul>
    </section>
  )
}