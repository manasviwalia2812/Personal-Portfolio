//rafce
import { PROJECTS } from "../constants";
import {motion} from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>
        {PROJECTS.map((project,index) =>(
          <div key={index} className="mb-8 flex flex-wrap lg:justfiy-center">
            <motion.div 
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:1}}
              className="w-full lg:w-1/4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded"/>
              </a>
            </motion.div>
            <motion.div 
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1}}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech,index) =>(
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
              ))}
            </motion.div>
          </div>
        ))}
        <motion.div 
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1.5}}
          className="flex items-center justify-center">
            <a href="https://github.com/manasviwalia2812?tab=repositories" target="_blank" rel="noopener">
             <button 
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-110">See More!
              </button>
            </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects
