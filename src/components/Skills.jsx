import Card from "./Card";
const skills = [
  { category: "Programming Languages", items: ["Java","JavaScript", "Python", "HTML", "PL/SQL", "C++"] },
  { category: "Technologies", items: ["Spring Boot", "Hibernate", "JPA", "React JS", "Angular", "Kafka", "Docker", "Kubernetes", "JSF", "Servlets", "JSP", "Struts", "JUnit", "Mockito"] },
  { category: "Concepts", items: ["Microservices", "OOPS", "REST APIs", "MVC", "Multithreading", "Data Structures & Algorithms", "Agile", "Scrum", "Design Patterns", "System Design", "Teamwork"] },
  { category: "Databases", items: ["Oracle","SQL Server","MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis"] },
  { category: "Tools", items: ["GIT","SVN", "Jenkins", "Grafana", "IntelliJ", "Eclipse", "Tomcat", "WebLogic", "WebSphere"] }
];

const Skills = () => {
  return (
    <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <Card key={index} title={skill.category} items={skill.items} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
