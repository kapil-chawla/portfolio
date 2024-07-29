
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    date: "DECEMBER 2018 - PRESENT",
    title: "Staff Engineer",
    company: "Nagarro Software Pvt Ltd, Gurgaon",
    description: [
        {
            text: "Worked on an ecommerce project for client Flipkart, in a cross-domain team of 30-40 developers.",
            subItems: [
                "Developed and modified Restful APIs to deliver high performance and efficiency for over 2 million users. Used technologies Spring Boot, Java, JPA, Kafka etc.",
                "Migrated old CI/CD pipelines by implementing Kubernetes and Docker which improve the monitoring and deployment process for major microservices by 40-50%.",
                "Written python scripts to perform automated testing which reduce the testing time from 2 hours to 15 minutes."
            ]
        },
        {
            text: "Worked for a Car Leasing project for client LeasePlan, in a cross-domain team of 20 developers.",
            subItems: [
                "Responsible for maintaining a complete web portal used by over 200 thousand users from 50-60 different companies.",
                "Gather requirements from Business and develop end to end solutions for it by distributing tasks among the team of 5.",
            ]
        },
        {
            text: "Build an application from scratch to production for client LeasePlan using React JS and Spring Boot for old data purging of 7 different applications.",
        }
    ]
  },
  {
    date: "MAY 2016 - DECEMBER-2018",
    title: "Technoloy Analyst",
    company: "Infosys Ltd, Bengaluru",
    description: [
        {
            text: "Worked on a banking project, aimed at Anti Money Laundering for a leading bank in the USA, in a cross-domain team of 30 developers.",
            subItems: [
                "Build UI components using Angular JS and Ext JS, which improve the UI loading time by 30%.",
                "Build CI/CD pipelines using SVN and Jenkins, which reduced manual deployment time by 40%.",
                "Worked on Stored Procedures containing 500 lines of code, to improve the performance and efficiency."
            ]
        }
    ]
  },
  {
    date: "JUNE 2014 - APRIL 2016",
    title: "Java  Developer",
    company: "Neurosynaptic Communications Pvt. Ltd, BENGALURU",
    description: [
        {
            text: "Worked on a Healthcare project, aimed at providing medical services for over 1000 doctors and 50000 patients, in a cross functional team of 20 developers and testers.",
            subItems: [
                "Integrating hardware devices into a web application using JNLP, Applets and Multithreading.",
                "Created interface in UI using Servlets and Sockets to stream the live data from Hardware devices like Stethoscope and ECG machine."
            ]
        }
    ]
  },
  {
    date: "MARCH 2013 - MAY 2014",
    title: "Java  Trainer",
    company: "Numitech Solutions, Ludhiana",
    description: [
        {
            text: "Worked as Java Trainer to teach students C++ and java. Also worked on some In House projects.",
           
        },
        {
            text: "Worked closely with the hardware team to create some embedded projects, with UI interface in Java.",
           
        },
        { 
            text: "Built some college level projects for students using J2EE, Servlets and JSP.",
        }
    ]
  }
];

function Experience() {
    
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <ExperienceCard experiences={experiences} />
      </div>
    </div>
  );
}

export default Experience;
