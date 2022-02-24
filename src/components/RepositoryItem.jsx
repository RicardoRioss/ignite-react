export function RepositoryItem ( props ) {
  return(
    <li>
    <strong>{ props.repository?.name ?? "Default"}</strong>
    <p>Form in React</p>

    <a href="">
      Acessar repositório
    </a>
  </li>
  )
}