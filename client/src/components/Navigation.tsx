
type Props = {}

export default function Navigation({ }: Props) {
  return (
    <div>
      <nav className='bg-red-300 flex justify-between px-4 py-4'>
        <div>
          BuzzyPit
        </div>

        <div>

          <i className="fa-solid fa-user"></i>
        </div>

      </nav>
    </div>
  )
}
