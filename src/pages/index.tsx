type Props = {
  title: string
}

export default function Home({ title = 'React avancado' }: Props) {
  return <h1>{title}</h1>
}
