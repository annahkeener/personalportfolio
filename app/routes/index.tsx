import type { LinksFunction } from "@remix-run/node";
import { Link, NavLink } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  return (
    
    <div className= "content"> 
      <div className="boxes">
          <nav>
            <ul>
                <NavLink to="jokes" className= "activeLink"> 
                  Home
                </NavLink>
                
                <NavLink to="jokes" className= "activeLink">
                Skills
                </NavLink>
                <NavLink to="jokes" className= "activeLink">
                  Projects
                </NavLink>
                <NavLink to="jokes" className= "activeLink">
                  Achievements
                </NavLink>
                <NavLink to="jokes" className= "activeLink">
                  Interests
                </NavLink>
              </ul>
            </nav>
        <div className="blueContainer">
          <div className="whiteBox">
            <h1>Anna Keener</h1> 
          </div>
        </div>

      

        <div className="verticalBox">
          <div className="anna">
            <img src="/anna.jpg"/>
          </div>
        </div>

       <h3>Student</h3>

        <h2>Senior at UNC-Chapel Hill majoring in Environmental Science following the Quantitative Energy track. Passionate about the intersection between creativity and technical skill. Embraces new experiences, intellectual diversity, collaboration and the process of learning. Strong desire to make meaningful change in the world through knowledge of computer programming, the environment and the arts. </h2>
        
      </div> 
    </div>
  );
}