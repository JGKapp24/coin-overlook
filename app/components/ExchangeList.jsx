import { Link } from "remix";

export default function ExchangeList({ exchanges }) {
  console.log(exchanges);
  return (
    <div className="flex flex-col items-stretch w-full px-3 md:px-6 lg:px-10 gap-y-2 divide-y-2 divide-gray-200">
      {exchanges.map((ex) => (
        <Link
          key={ex.id}
          to={`/${ex.id}`}
          className="p-2 flex flex-row items-center gap-x-2 hover:bg-gray-100"
        >
          <img alt={`${ex.Name} logo`} src={ex.image} className="w-10 h-10" />
          <div className="flex flex-col items-start">
            <span className="font-medium text-lg">{ex.name}</span>
            <span className="font-light text-sm text-cyan-600 hover:underline">
              {ex.url}
            </span>
          </div>
          <div className="flex-grow flex flex-col items-end">
            <span className="text-right text-sm">{ex.country}</span>
            <span className="font-semibold">
              <span className="text-xs font-extralight">TrustRank: </span>
              {ex.trust_score_rank}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}