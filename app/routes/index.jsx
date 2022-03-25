import { json, useLoaderData } from "remix";
import Header from "../components/Header";
import ExchangeList from "../components/ExchangeList";

export const loader = async () => {
  const data = await fetch(
    "https://api.coingecko.com/api/v3/exchanges?per_page=20"
  );
  const exchanges = await data.json();
  return json({ exchanges });
};

export default function Index() {
  const { exchanges } = useLoaderData();

  return (
    <div className="">
      <Header />
      <div className="py-3">
        <ExchangeList exchanges={exchanges} />
      </div>
    </div>
  );
}
