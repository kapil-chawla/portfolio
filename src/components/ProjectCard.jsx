
const ProjectCard = ({ project }) => {
  return (
    <div className="border p-6 rounded-lg shadow-md bg-white">
      <h3 className="text-2xl font-bold mb-2 text-green-400">{project.name}</h3>
      <p className="text-gray-600 mb-2">{project.timePeriod}</p>
      <p className="mb-4">{project.description}</p>
      <div>
        <h4 className="text-xl font-medium mb-2">Technologies:</h4>
        <p className="mb-4">
          {project.technologies.join(' | ')}
        </p>
      </div>
      <div>
        <h4 className="text-xl font-medium mb-2">Responsibilities:</h4>
        <ul className="list-disc list-inside">
          {project.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
