import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import "./Experience";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skils I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              
              <div className="exp_element">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>

              </div>
              

              <div className="exp_element">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>

              
              <div className="exp_element">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
              </div>

              
              <div className="exp_element">
              <BsPatchCheckFill />
              <h4>Veu</h4>
              <small className="text-light">Experienced</small>
              </div>
              
              <div className="exp_element">
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
              </div>

             

             <div className="exp_element">
             <BsPatchCheckFill />
             <h4>React</h4>
              <small className="text-light">Experienced</small>
             </div>
             <div className="exp_element">
             <BsPatchCheckFill />
             <h4>Next.js</h4>
              <small className="text-light">Experienced</small>
             </div>

            </article>
             </div>
           </div>
              <div className="experience_backend" id="backed">
             <h3>Backend Development</h3>
             <div className="experience_content">
              <article className="experience_details">
              
              <div className="exp_element">
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
              </div>

              
              <div  className="exp_element">
                <BsPatchCheckFill />
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
              </div>

              
              <div  className="exp_element">
                <BsPatchCheckFill />
              <h4>Python Django</h4>
              <small className="text-light">Experienced</small>
              </div>

              
              <div className="exp_element">
                <BsPatchCheckFill />
              <h4>Node.js</h4>
              <small className="text-light">Experienced</small>
              </div>

              
              <div className="exp_element">
                <BsPatchCheckFill />
              <h4>Ruby</h4>
              <small className="text-light">Experienced</small>
              </div>

              
              <div className="exp_element">
                <BsPatchCheckFill />
              <h4>Flask</h4>
              <small className="text-light">Experienced</small>
              </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
