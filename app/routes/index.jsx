import { json, useLoaderData } from "remix";
import Header from '../components/Header';

export const loader = async () => {
  const data = await fetch('https://api.coingecko.com/api/v3/exchanges?per_page=10');
  const exchanges = await data.json();
  return json({ exchanges });
};

export default function Index() {
  const { exchanges } = useLoaderData();
  console.log(exchanges);
  return (
    <div className="">
      <Header />
    </div>
  );
}
