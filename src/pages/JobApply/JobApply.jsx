import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

import AuthContext from "../../Components/ContextProvider/AuthContext";
import Swal from "sweetalert2";

const JobApply = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  console.log(user.email);

  const hndleAply = (e) => {
    e.preventDefault();
    const form = e.target;
    const job_id = id;
    const user_email = user.email;
    const githubLink = form.github.value;
    const linkedInLink = form.linkedIn.value;
    const profileLink = form.profile.value;

    const applyData = {
      job_id,
      user_email,
      githubLink,
      linkedInLink,
      profileLink,
    };
    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        navigate("/myapplication");
      });
  };

  return (
    <div className="card bg-base-100 w-full md:px-28 md:mx-auto shadow-2xl">
      <h1 className="text-4xl font-bold text-center">Apply now</h1>
      <form onSubmit={hndleAply} className="card-body">
        <fieldset className="fieldset">
          <label className="label text-2xl">Provide github link</label>
          <input
            type="url"
            name="github"
            className="input input-bordered w-full"
            placeholder="Provide github link"
          />

          <label className="label  text-2xl">Provide LinkedIn link</label>
          <input
            type="url"
            name="linkedIn"
            className="input input-bordered w-full"
            placeholder="Provide LinkedIn link"
          />
          <label className="label text-2xl">Provide Profile link</label>
          <input
            type="url"
            name="profile"
            className="input input-bordered w-full"
            placeholder="Provide Profile link"
          />
          <input
            className="btn btn-neutral mt-4 w-full"
            type="submit"
            value="apply"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
