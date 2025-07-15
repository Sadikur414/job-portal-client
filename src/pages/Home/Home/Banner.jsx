import { motion } from "framer-motion";
import image1 from "../../../assets/team_image/img1.jpg";
import image2 from "../../../assets/team_image/img2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row-reverse">
        {/* *************** Image Section *************** */}

        <div className="flex-1">
          <motion.img
            src={image1}
            animate={{ y: [50, 100, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-400 shadow-2xl"
          />
          <motion.img
            src={image2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-400 shadow-2xl"
          />
        </div>

        {/* *************** Text Section *************** */}
        <div className="flex-1">
          <motion.h1
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ff0000", "#00ff00", "#0000ff"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              jobs
            </motion.span>{" "}
            are available here!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
