import { NavLink } from "remix";

export default function Header() {
  return (
    <div className="bg-cyan-800 text-white">
      <h1 className="text-4xl font-semibold px-6 py-3 md:px-10 md:py-5">
        <NavLink to="/">
          Coin Overlook
        </NavLink>
      </h1>
    </div>
  )
}