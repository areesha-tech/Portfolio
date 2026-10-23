import { FaLinkedinIn, FaGithub, } from "react-icons/fa"

function Homepage() {
     const technologies = [
    { name: 'HTML5', image:"/images/html.png" },
    { name: 'CSS3', image:"/images/css.png" },
    { name: 'JavaScript', image:"/images/js.png" },
    { name: 'React', image:"/images/react.png" },
    { name: 'Tailwind', image:"/images/tailwindcss.png" },
    { name: 'Github', image:"/images/github.png" },
    {name:"Redux Toolkit", image:"/images/redux.png"}
  ];
  return (
    <>
    <section className="min-h-[90vh] bg-base flex flex-col">
    
        {/* Hero Content */}
        <div className="
          flex flex-col-reverse md:flex-row
          items-center justify-between
          gap-10 lg:gap-16
          px-6 sm:px-10 md:px-12 lg:px-20
          py-10 sm:py-14 lg:py-20
        ">
    
          {/* Left Side */}
          <div className="
            flex-1
            text-center md:text-left
            w-full
            max-w-2xl
          ">
    
            <h1 className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-sec
              mb-4
            ">
              Hi, I'm <br></br><span className="text-primary"> Areesha Khan</span>
            </h1>
    
            <div className="
              text-sec
              text-lg
              sm:text-2xl
              md:text-3xl
              font-semibold
              mb-6
              min-h-[40px]
            ">
             Frontend Developer
            </div>
    
            <p className="
              text-gray-400
              text-sm
              
              md:text-lg
              leading-7
              md:leading-8
              mb-8
            ">
              I create modern, clean, and user-friendly web experiences with a
              strong focus on responsive design, smooth interactions, and
              performance. I love turning creative ideas and designs into
              functional and engaging websites using modern front-end
              technologies.
            </p>
    
            {/* Buttons + Social Icons */}
            <div className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              md:justify-start
              gap-5
            ">
    
              {/* Download Resume */}
              <a
                href="/resume.pdf"
                download
                className="
                  bg-primary
                  text-black
                  font-semibold
                  px-6
                  sm:px-7
                  py-3
                  rounded-full
                  shadow-[0_0_20px_rgba(87, 224, 126, 0.5)]
                  hover:shadow-[0_0_35px_rgba(85, 224, 126,0.5)]
                  hover:scale-105
                  transition-all
                  duration-300
                  whitespace-nowrap
                "
              >
                Download Resume
              </a>
    
              {/* Social Icons */}
              <div className="flex items-center gap-4">
    
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/areesha-khan-7bb3413a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11
                    sm:w-12 sm:h-12
                    rounded-full
                    border-2 border-primary
                    flex items-center justify-center
                    text-primary
                    hover:bg-primary
                    hover:text-black
                    transition-all duration-300
                  "
                >
                  <FaLinkedinIn size={20} />
                </a>
    
                {/* GitHub */}
                <a
                  href="https://github.com/areesha-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11
                    sm:w-12 sm:h-12
                    rounded-full
                    border-2 border-primary
                    flex items-center justify-center
                    text-primary
                    hover:bg-primary
                    hover:text-black
                    transition-all duration-300
                  "
                >
                  <FaGithub size={20} />
                </a>
    
              </div>
            </div>
          </div>
    
          {/* Right Side - Profile Image */}
          <div className="
            w-full
            md:w-[40%]
            lg:w-[40%]
            flex
            justify-center
            shrink-0
          ">
            <div className="
            w-[280px] h-[280px]
    sm:w-[350px] sm:h-[350px]
    md:w-[360px] md:h-[360px]
    lg:w-[450px] lg:h-[450px]
              shrink-0
              rounded-full
              border-8
              sm:border-[12px]
              md:border-[16px]
              border-primary
              shadow-[0_0_45px_rgba(121,44,162,0.35)]
              overflow-hidden
              flex items-center justify-center
              bg-base
            ">
              <img
                src="/images/portfolio.png"
                alt="Areesha Khan"
                className="
                  w-full
                  h-full
                  object-cover
                  object-top
                "
              />
            </div>
          </div>
        </div>
    
        {/* Tech Stack */}
        <div className="
          bg-[#151f2b]
          text-sec
          px-6
          sm:px-10
          md:px-12
          lg:px-20
          py-6
          md:py-8
        ">
          <div>
    
            <h3 className="
              text-gray-400
              text-xs
              sm:text-sm
              font-semibold
              tracking-wider
              uppercase
              mb-5
              md:mb-6
              text-center
              md:text-left
            ">
              Tech Stack
            </h3>
    
            {/* Technology Grid */}
            <div className="
              grid
              grid-cols-3
              sm:grid-cols-4
              md:grid-cols-6
              lg:grid-cols-8
              gap-6
              sm:gap-8
              md:gap-10
              place-items-center
            ">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    text-center
                  "
                >
                  <div className="
                    w-10 h-10
                    sm:w-12 sm:h-12
                  ">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="
                        w-full
                        h-full
                        object-contain
                      "
                    />
                  </div>
    
                  <p className="
                    text-xs
                    sm:text-sm
                    text-gray-300
                  ">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
    
          </div>
        </div>
    
      </section>
    </>
  )
}

export default Homepage