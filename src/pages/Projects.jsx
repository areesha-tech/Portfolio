import {useState} from 'react'
import filteredProjects from '../Data/ProductsArray.json'
function Projects() {
const filters=['All','JAVASCRIPT','REACT','API']
const [filterArray,setFilterArray]=useState(filteredProjects)
console.log(filterArray)
const handleFilter=(target)=>{

if(target.innerText==="All"){
setFilterArray(filteredProjects)
}
else{
const newArray=filteredProjects.filter((item)=>item.stack.includes(target.innerText))
setFilterArray(newArray)
}
}
  return (
<>
<section  className="bg-base flex flex-col gap-10 px-5 py-20 sm:px-8 lg:px-16" >
   {/* Portion 1: Section Heading */} <div className="flex flex-col gap-4"> 
        <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]"> My Work </span>
         <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"> Featured Projects </h2>
          <p className="max-w-2xl text-base leading-7 text-sec/60"> Here are some of my recent projects. Each project helped me improve my skills and explore new technologies. </p>
            </div> {/* Portion 2: Filter Buttons */} 
           <div className="flex flex-wrap items-center gap-3"> 
            {filters.map((filter,index) => ( <button onClick={(e)=>handleFilter(e.currentTarget)} key={index} 
             className='rounded-full border border-primary/30 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary  ' > {filter} </button> ))} </div> 
             {/* Portion 3: Projects Grid */} 
             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                 {filterArray.map((project) => ( <article key={project.id}  className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"  >
                 
                  {/* Project Image */}
                   <div className="overflow-hidden">
                     <img src={project.image} alt={project.title}  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" /> </div>
                      {/* Project Content */} 
                      <div className="flex flex-1 flex-col gap-5 p-6">
                         {/* Title and Description */} <div className="flex flex-col gap-3"> 
                            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-primary"> {project.title} </h3>
                             <p className="text-sm leading-6 text-sec/60"> {project.description} </p> </div> 
                             {/* Technology Stack */}
                              <div className="flex flex-wrap gap-2"> {project.stack.map((technology,index) => (
                                 <span  key={technology} className="rounded-md border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary" > {technology} </span> ))} </div> 
                                 {/* Action Buttons */} 
                                 <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                                     <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-80" > Live Demo ↗ </a>
                                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/20 bg-transparent px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-primary " > GitHub ↗ </a>
                                       </div> 
                                       </div> 
                                       </article> 
                                    ))} 
                                    </div>
                                    <image src="/images/quiz-app.png" />
                                     </section> 
</>
  )
}
export default Projects