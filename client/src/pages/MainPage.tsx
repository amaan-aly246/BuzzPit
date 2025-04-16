import Navigation from "../components/Navigation"
import Post from "../components/Post"

type Props = {}

export default function MainPage({ }: Props) {
  return (
    <main className="bg-black w-full ">
      <Navigation/>
      <Post />
      <Post />
    </main>
  )
}
