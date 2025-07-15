import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    company_logo,
    company,
    location,
    title,
    description,
    salaryRange,
    requirements,
  } = job;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div
          className="flex gap-2
        "
        >
          <figure>
            <img className="w-16 h-16" src={company_logo} />
          </figure>
          <div>
            <h1 className="text-2xl">{company}</h1>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt></FaMapMarkerAlt> {location}
            </p>
          </div>
        </div>

        <div className="card-body">
          <h2 className="card-title">
            {" "}
            {title} <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="flex gap-4 flex-wrap">
            {requirements.map((skill) => (
              <p className="border rounded-md p-2 hover:text-purple-600 hover:bg-gray-300">
                {skill}
              </p>
            ))}
          </div>
          <div className="card-actions mt-4 justify-end items-center">
            <p className="flex items-center ">
              Salary : <FaDollarSign></FaDollarSign> {salaryRange.min}-
              {salaryRange.max} {salaryRange.currency}
            </p>
            <button className="btn btn-primary">
              <Link to={`/apply/${_id}`}>Apply</Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
