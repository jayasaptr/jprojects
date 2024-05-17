/** @format */

import "../styles/about.css";
import {
  FaPhp,
  FaReact,
  FaLinux,
  FaDocker,
  FaAppStoreIos,
  FaLaravel,
  FaGitAlt,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiPostgresql,
  SiMysql,
  SiFlutter,
  SiAndroidstudio,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";

export const About = () => {
  return (
    <section id='about'>
      <div className='wrapper'>
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          aut?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem
          voluptatibus exercitationem libero incidunt modi, iste pariatur est
          velit harum?
        </p>
        <h4>Programming Language & Tools</h4>
        <div className='skills'>
          <FaGolang />
          <IoLogoJavascript />
          <FaPhp />
          <SiPostgresql />
          <SiMysql />
          <FaReact />
          <SiFlutter />
          <FaLinux />
          <FaDocker />
          <SiAndroidstudio />
          <FaAppStoreIos />
          <SiFirebase />
          <SiTailwindcss />
          <FaLaravel />
          <FaGitAlt />
        </div>
      </div>
    </section>
  );
};
