/**
 * @Copyright 2024 Znonymous
 * @license Apache 2-0
 */

import PropTypes from "prop-types";

const ReviewCard = ({ content, name, company, certificate, classes }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] relative">
      <p className="text-zinc-400 mb-8 justified-text">{content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <div>
          <p>{name}</p>

          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>

        <div className="ml-auto w-7 h-7 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
        <a href={certificate} target="_blank" rel="noopener noreferrer" className="absolute inset-0"></a>
      </div>
    </div>
  );
};

ReviewCard.prototype = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  certificate: PropTypes.string,
  classes: PropTypes.string,
};

export default ReviewCard;
