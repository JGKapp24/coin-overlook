import { NavLink } from "remix";

export default function Header() {
  return (
    <div className="bg-gray-800 text-gray-50 px-6 py-4 md:px-10 md:py-8">
      <h1 className="text-4xl font-semibold">
        <NavLink to="/" className="flex flex-row items-center">
          <img alt="logo" src="/logo.svg" className="w-10 h-10 inline" />
          <span className="ml-2">Coin Overlook</span>
        </NavLink>
      </h1>
    </div>
  )
}