import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);
  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 border">
        {/* Company Logo & Name */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={job.company_logo}
            alt={job.company}
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
            <p className="text-gray-500 text-sm">{job.company}</p>
          </div>
        </div>

        {/* Job Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm">
          <p>
            <span className="font-semibold">Job Type:</span> {job.jobType}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {job.category}
          </p>
          <p className="text-blue-600 font-semibold">
            Salary: {job.salaryRange.min} - {job.salaryRange.max}{" "}
            {job.salaryRange.currency.toUpperCase()}
          </p>
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="text-blue-500 mr-1" />
            {job.location}
          </div>
          <p>
            <span className="font-semibold">Deadline:</span>{" "}
            {job.applicationDeadline}
          </p>
          <p>
            <span className="font-semibold">Applications:</span>{" "}
            {job.applicationCount}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">{job.description}</p>

        {/* Requirements */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-1">Requirements:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-1">
            Responsibilities:
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            {job.responsibilities.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        </div>

        {/* HR Contact */}
        <div className="text-sm text-gray-600 mb-4">
          <p>
            <span className="font-semibold">HR Name:</span> {job.hr_name}
          </p>
          <p>
            <span className="font-semibold">HR Email:</span> {job.hr_email}
          </p>
        </div>

        {/* Apply Button */}
        <Link
          to={`/job-apply/${job._id}`}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
