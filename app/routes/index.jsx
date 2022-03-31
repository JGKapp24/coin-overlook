import { json, useLoaderData , Link} from "remix";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Header from "../components/Header";
import ExchangeList from "../components/ExchangeList";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  const data = await fetch(
    // Need pageNum
    `https://api.coingecko.com/api/v3/exchanges?per_page=10&page=${page}`
  );
  const exchanges = await data.json();
  return json({ exchanges, pageNum: +page || 1 });
};

export default function Index() {
  const { exchanges, pageNum } = useLoaderData();

  return (
    <div className="">
      <Header />
      <div className="py-3">
        <ExchangeList exchanges={exchanges} />
      </div>
      <div className="flex flex-row items-center">
        {pageNum > 1 && (
          <Link
            to={`?page=${pageNum - 1}`}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </Link>
        )}
        <div>{pageNum}</div>
        <Link
          to={`?page=${pageNum + 1}`}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </Link>
      </div>´
    </div>
  );
}
