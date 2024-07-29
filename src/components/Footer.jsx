
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
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
        </div>
      </footer>
    </>
  );
}

export default Footer;
