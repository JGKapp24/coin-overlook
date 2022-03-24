import { Link } from "remix";

export default function ExchangeList({ exchanges }) {
  return (
    <div className="flex flex-col items-center md:block w-full">
      <div className="flex flex-col items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 px-3 md:px-6 lg:px-10 gap-2">
        {exchanges.map((ex) => (
          <Link
            key={ex.id}
            to={`/${ex.id}`}
            className="p-2 flex flex-row items-center gap-x-2 hover:bg-gray-100 md:max-w-sm md:rounded-lg md:border border-gray-300 border-t-2 first:border-t-0 md:first:border-t"
          >
            <img alt={`${ex.Name} logo`} src={ex.image} className="" />
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
    </div>
  )
}