import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { MdOutlineCancel } from "react-icons/md";

const MyApplication = () => {
  const { user } = UseAuth();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApplications(data);
      });
  }, []);

  return (
    <div>
      {applications.length}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI NO</th>
              <th>Job Title</th>
              <th>Job</th>
              <th>Delete</th>
            </tr>
          </thead>
          {applications.map((application, index) => (
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={application.logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {application.company_name}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {application.job_title}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {application.category}
                  </span>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xl">
                    <MdOutlineCancel />
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
