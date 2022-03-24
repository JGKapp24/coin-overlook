import { json, useLoaderData } from "remix";
import Header from '../components/Header';
import ExchangeDetailView from '../components/ExchangeDetailView'

export const loader = async ({ params }) => {
  const data = await fetch(`https://api.coingecko.com/api/v3/exchanges/${params.exchangeId}`);
  const exchange = await data.json();
  return json({ exchange });
};

export default function Index() {
  const { exchange } = useLoaderData();

  return (
    <div className="">
      <Header />
      <div className="py-3">
        <ExchangeDetailView exchange={exchange} />
      </div>
    </div>
  );
}