import PropTypes from "prop-types";
import { FaEye, FaInfo, FaStar, FaUtensils, FaLink } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    stargazers_count,
    watchers_count,
    forks,
    open_issues,
  } = repo;
  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <h3 className="mb-2 text-xl font-semibold">
        <a href={html_url}>
            <FaLink className="inline mr-1" />
            {name}
        </a>
      </h3>
      <p className="mb-3">{description}</p>
      <div>
        <div className="mr-2 badge badge-info badge-lg">
            <FaEye className="mr-2"/> {watchers_count}
        </div>
        <div className="mr-2 badge badge-success badge-lg">
            <FaStar className="mr-2"/> {stargazers_count}
        </div>
        <div className="mr-2 badge badge-error badge-lg">
            <FaInfo className="mr-2"/> {open_issues}
        </div>
        <div className="mr-2 badge badge-warning badge-lg">
            <FaUtensils className="mr-2"/> {forks}
        </div>
      </div>
    </div>
  );
};

RepoItem.proptypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
