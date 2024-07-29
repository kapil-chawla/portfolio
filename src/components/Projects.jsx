import ProjectCard from "./ProjectCard";


const projects = [
  {
    name: "E-Commerce (Shipping Management System)",
    description: "Project aimed at developing an application using different microservices which will manage shipping of orders for over 2 million users.",
    timePeriod: "JANUARY 2023 - JUNE 2024",
    technologies: ["Spring Boot", "Hibernate", "Java 8", "MySQL", "Kafka", "Docker", "Kubernetes", "Redis", "Mongo"],
    responsibilities: [
      "Develop and Modify Restful APIs to deliver high performance and efficiency.",
      "Writing python scripts to implement automation in testing of APIs.",
      "Implementing CI/CD pipelines using Docker and Kubernetes.",
      "Monitoring the applications using Grafana and other tools and rectifying the issues."
    ]
  },
  {
    name: "Car Leasing Portal",
    description: "Project aimed at developing a web portal which was used by over 200 thousand users from 50-60 different companies for leasing a car. It helped the user in selecting a car and creating and comparing quotes with multiple different options.",
    timePeriod: "FEBRUARY 2019 - DECEMBER 2022",
    technologies: ["Spring Boot", "Hibernate", "Java 8", "SQL Server", "Docker", "Kubernetes"],
    responsibilities: [
      "Gathering client requirements and designing a complete solution (Frontend and Backend) as per requirement.",
      "Fixing bugs in existing code, implementing new features.",
      "Merging final code from different developers using GIT and Deploying the application to different environments."
    ]
  },
  {
    name: "Data Retention/Disposal Tool",
    description: "Project aimed at developing a tool for migration of data from one database to another for different applications. Overall, 6 applications data were moved from one Schema to another Schema as per user selection criteria.",
    timePeriod: "NOVEMBER 2021 - DECEMBER 2022",
    technologies: ["React", "Spring Boot", "JDBC", "Java 8", "Eclipse", "Microsoft SQL Server", "Db2", "Oracle"],
    responsibilities: [
      "Design and developed the complete end to end solution.",
      "Implemented services using Spring Boot.",
      "Deployed applications using Docker and Kubernetes."
    ]
  },
  {
    name: "Sanction Risk Management | ",
    description: "Project aimed at designing an application for global sanction compliance to record and analyze all sanctions compliance requisites. It included various modules such as anti-bribery and complaints, risk assessment, sanction training etc.",
    timePeriod: "JUNE 2016 - DECEMBER 2018",  
    technologies: ["HTML", "JavaScript", "jQuery", "Angular JS", "Angular 4", "Struts-2", "Spring", "Hibernate", "Java 7", "Eclipse", "Oracle 11g", "Web-Sphere"],
    responsibilities: [
      "Involved in developing Backend as well as frontend for different modules (Home Page, Sanction Training, Exam and Review, SEWA etc.) of application.",
      "Created unit test cases for the application and tested the application.",
      "Debugged server-side code to fix the bugs and issues."
    ]
  },
  {
    name: "REMEDI™ (Remote Medical Diagnostics)",
    description: "Project aimed at working on a platform which facilitated remote diagnosis by allowing transmission of various vital parameters about the patient to a doctor that were needed to decide on the preliminary diagnosis along with a video conferencing facility. This application had a TB treatment module and lab module which was based on calling Web Services of other applications.",
    timePeriod: "MAY 2014 - APRIL 2016",
    technologies: ["Java 6", "HTML", "jQuery", "JSP", "Servlet", "Eclipse", "Apache Tomcat-6.8", "MySQL Server"],
    responsibilities: [
      "Gathering client requirements and designing a complete solution (Frontend and Backend) as per requirement.",
      "Fixing bugs in existing code, implementing new features.",
      "Merging final code from different developers using GIT and Deploying the application to different environments."
    ]
  }
];

function Projects() {
  
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Projects;
