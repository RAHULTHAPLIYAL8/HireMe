import React from "react";

const Nav = () => {

const jobs = [
  {
    title: "Backend Developer",
    company: "Google",
    location: "Delhi",
    salary: "4L - 5L",
    experience: "1-2 years",
    skills: ["Node.js", "Express", "MongoDB", "Docker"]
  },
  {
    title: "Frontend Developer",
    company: "Amazon",
    location: "Bangalore",
    salary: "5L - 7L",
    experience: "1-3 years",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Full Stack Developer",
    company: "Microsoft",
    location: "Hyderabad",
    salary: "6L - 10L",
    experience: "2-4 years",
    skills: ["MERN", "Redux", "Node.js", "MongoDB"]
  },
  {
    title: "Software Engineer",
    company: "Infosys",
    location: "Pune",
    salary: "3L - 5L",
    experience: "0-2 years",
    skills: ["Java", "Spring Boot", "MySQL"]
  },
  {
    title: "React Developer",
    company: "Flipkart",
    location: "Delhi",
    salary: "4L - 6L",
    experience: "1-3 years",
    skills: ["React", "Redux", "Tailwind", "API Integration"]
  },
  {
    title: "Node.js Developer",
    company: "Zomato",
    location: "Gurgaon",
    salary: "5L - 8L",
    experience: "2-4 years",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    title: "Backend Engineer",
    company: "Paytm",
    location: "Noida",
    salary: "6L - 9L",
    experience: "2-5 years",
    skills: ["Java", "Spring Boot", "Microservices"]
  },
  {
    title: "Web Developer",
    company: "TCS",
    location: "Mumbai",
    salary: "3L - 4L",
    experience: "0-2 years",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    title: "MERN Stack Developer",
    company: "Wipro",
    location: "Chennai",
    salary: "4L - 7L",
    experience: "1-3 years",
    skills: ["MongoDB", "Express", "React", "Node"]
  },
  {
    title: "Software Developer",
    company: "Accenture",
    location: "Bangalore",
    salary: "5L - 8L",
    experience: "1-3 years",
    skills: ["Python", "Django", "REST API"]
  }
];

  return (
    <>
      <div className="navbar-contanier bg-[#264698] fixed z-20 w-[100%]">
        <div className="flex items-center justify-between">
          <div className="options flex  gap-8 mx-4 my-4">
            <div className="text-white font-bold">Home</div>
            <div className="text-white font-bold">About</div>
            <div className="text-white font-bold">Contact</div>
            <div className="text-white font-bold">Options</div>
          </div>
          <div className="mr-10">
            <input
              className="w-[300px] px-3 py-2 text-sm bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-black"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 relative">
        <div className="col-span-3 flex justify-center m-14">
          <div className="profile-conatiner m-3 ms-1 mt-6 rounded-3xl shadow-md bg-white h-[500px] fixed">
            <div className="image m-10 ">
              <img
                class="w-50 h-50 rounded-full object-cover"
                src="https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg"
                alt="mountain"
              />
            </div>
            <div className="p-2 border-b">Name : Rahul Thapliyal</div>
            <div className="p-2 border-b">Job Role: Software Developer</div>
            <div className="p-2 border-b">
              Experience: 1+ years of Experience
            </div>
            <div className="p-2 border-b">Skills: MERN STACk</div>
            <div className="p-2 ">Contact No: 9650937253</div>
          </div>
        </div>
        <div className="col-span-9">
          <div className="jobs-container  mt-20">
           { jobs.map((data,key)=>(
            <div className="job-card m-1  p-2  bg-white shadow-md rounded-xl">
              <div id={`title-${key}`} className="font-extrabold text-xl">
                {data.title}
              </div>
              <div id="company-" className="text-sm">
                {data.company}
              </div>
              <br className="border border-amber-500" />
              <div
                id="meta-details"
                className="flex justify-between items-center w-full"
              >
                <div className="text-green-500 text-sm">{data.location}</div>
                <div className="text-center flex-1 text-sm text-green-500">400000-50000</div>
                <div className="text-right text-sm text-green-500">Experience:{data.experience}</div>
              </div>
              <br />
              <div className="skill-box text-xs  text-gray-500">
                Node.js , React.js , Tailwind CSS , Docker , Backend Development
              </div>
            </div>
           ))} 
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
