import pic from "/profile_1.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiKubernetes } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to My Profile</span>
            <div className="flex space-x-1 text-2xl md:text-3xl">
              <h1>Hello, I am a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Software Developer", "Java Full Stack Developer", "Java Backend Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            Seasoned Software Engineer with more than 11 years of experience in 
            designing, developing, and maintaining enterprise-level applications. Proficient 
            in Java, Spring, Microservices, Hibernate, JPA, J2EE, Kafka, Docker, 
            Kubernetes, and SQL. Have some experience with frontend technologies as 
            well like Angular and React. Proven track record of leading projects from 
            inception to deployment, ensuring high-quality deliverables and adherence to 
            timelines. Strong problem-solving skills and a collaborative team player 
            committed to continuous learning and improvement.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-col justify-between space-y-6 md:space-y-6">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/kapil.chawla22" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.linkedin.com/in/kapil-chawla-er" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/kapil-chawla" target="_blank">
                      <IoLogoGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>    
                  <li>
                    <a href="mailto:er.kapilchawla@outlook.com" target="_blank">
                      <MdEmail className="text-2xl cursor-pointer" />
                    </a>
                  </li>             
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <FaJava className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" alt="Java" />
                  <SiSpringboot className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiDocker className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiKubernetes className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiMysql className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[350px] md:h-[350px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
