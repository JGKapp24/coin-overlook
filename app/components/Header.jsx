import { NavLink } from "remix";

export default function Header() {
  return (
    <div className="bg-gray-800 text-gray-50 px-6 py-4 md:px-10 md:py-8">
      <h1 className="text-4xl font-semibold">
        <NavLink to="/">
          Coin Overlook
        </NavLink>
      </h1>
    </div>
  )
}