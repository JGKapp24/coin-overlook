import { ExternalLinkIcon, ShareIcon } from '@heroicons/react/outline'

function processTwitterHandle(handle) {
  return !handle ? '' : `https://twitter.com/${handle}`;
}

function getSocialLinks(ex) {
  const {
    facebook_url, other_url_1, other_url_2,
    slack_url, reddit_url, telegram_url, twitter_handle
  } = ex;

  return [facebook_url, processTwitterHandle(twitter_handle),
    slack_url, reddit_url, telegram_url,
    other_url_1, other_url_2].filter((link) => !!link);
}

export default function ExchangeDetailView({ exchange }) {
  console.log(exchange);
  return (
    <div className="flex flex-col px-4 max-w-full">
      <div className="border-b border-gray-300 pb-2">
        <div className="flex flex-row items-start gap-3">
            <img
              alt={`${exchange.Name} logo`}
              src={exchange.image}
              className=""
            />
          <div className="">
            <h2 className="text-3xl font-bold">
              {exchange.name}
            </h2>
            <p className="">
              {exchange.year_established && `${exchange.year_established}-`}
              {exchange.country}
            </p>
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
      <h4 className="inline-flex gap-x-1 items-center font-medium text-lg">
        About
        <div className="flex-grow text-right">
          <span className="font-light text-sm">Trust Rank</span>
          <span className="font-medium text-xl ml-2">
            {exchange.trust_score_rank || 'N/A'}
          </span>
        </div>
      </h4>
      <p className="indent-4">{exchange.description}</p>
      <div className="w-full text-right">
        <span className="font-light text-sm">Established</span>
        <span className="font-medium text-xl ml-2">
          {exchange.year_established}
        </span>
      </div>
      <h4 className="inline-flex gap-x-1 items-center font-medium text-lg">
        Social Media
        <ShareIcon className="w-5 h-5" />
      </h4>
      <div className="flex flex-col items-center">
        <div className="">
          {getSocialLinks(exchange).map((link) => (
            <a key={link} href={link} className="font-light text-cyan-600 hover:underline inline-flex items-center text-sm">
              {link}
              <ExternalLinkIcon className="w-4 h-4 ml-1 mt-0.5 self-start" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}