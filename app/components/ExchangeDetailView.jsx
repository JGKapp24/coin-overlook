import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { Link } from "remix";

function processTwitterHandle(handle) {
  return !handle ? "" : `https://twitter.com/${handle}`;
}

function getSocialLinks(ex) {
  const {
    facebook_url,
    other_url_1,
    other_url_2,
    slack_url,
    reddit_url,
    telegram_url,
    twitter_handle,
  } = ex;

  return [
    facebook_url,
    processTwitterHandle(twitter_handle),
    slack_url,
    reddit_url,
    telegram_url,
    other_url_1,
    other_url_2,
  ].filter((link) => !!link);
}

export default function ExchangeDetailView({ exchange }) {
  return (
    <div className="flex flex-col px-4 max-w-full">
      <div className="border-b border-gray-300 pb-2 max-w-2xl self-center w-full">
        <div className="flex flex-row items-start gap-3">
          <img
            alt={`${exchange.Name} logo`}
            src={exchange.image}
            className=""
          />
          <div className="">
            <h2 className="text-3xl font-bold">{exchange.name}</h2>
            <p className="">{exchange.country}</p>
          </div>
          <div className="hidden sm:flex flex-col items-end flex-grow">
            <div className="flex-grow text-right">
              <span className="font-light text-sm">Trust Rank</span>
              <span className="font-medium text-xl ml-2">
                {exchange.trust_score_rank || "N/A"}
              </span>
            </div>
            <div className="w-full text-right">
              <span className="font-light text-sm">Established</span>
              <span className="font-medium text-xl ml-2">
                {exchange.year_established || "?"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start mt-2 max-w-full">
          <a
            href={exchange.url}
            className="font-light text-cyan-600 hover:underline inline-flex items-center pl-2"
          >
            {exchange.url}
            <ExternalLinkIcon className="w-4 h-4 ml-1 mt-0.5 self-start" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="max-w-prose w-full flex flex-col">
          <h4 className="flex gap-x-1 items-center font-medium text-lg w-full">
            About
            <div className="flex-grow text-right sm:hidden">
              <span className="font-light text-sm">Trust Rank</span>
              <span className="font-medium text-xl ml-2">
                {exchange.trust_score_rank || "N/A"}
              </span>
            </div>
          </h4>
          <p className="indent-4">{exchange.description}</p>
          <div className="w-full text-right sm:hidden">
            <span className="font-light text-sm">Established</span>
            <span className="font-medium text-xl ml-2">
              {exchange.year_established || "?"}
            </span>
          </div>
          <h4 className="inline-flex gap-x-1 items-center font-medium text-lg mt-2 self-center">
            Social Media
            <ShareIcon className="w-5 h-5" />
          </h4>
          <div className="flex flex-col items-start pl-2 self-center">
            {getSocialLinks(exchange).map((link) => (
              <a
                key={link}
                href={link}
                className="font-light text-cyan-600 hover:underline inline-flex items-center text-sm"
              >
                {link}
                <ExternalLinkIcon className="w-4 h-4 ml-1 mt-0.5 self-start" />
              </a>
            ))}
          </div>
          <Link
            to="/"
            className="mt-4 self-end px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-400 group inline-flex items-center gap-x-2 focus:ring-2 focus:ring-offset-1 focus:ring-cyan-600 focus:outline-none"
          >
            <ArrowLeftIcon className="hidden group-focus:inline-block group-hover:inline-block w-4 h-4" />
            Back to ExchangeList
          </Link>
        </div>
      </div>
    </div>
  );
}
