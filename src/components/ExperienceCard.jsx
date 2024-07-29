import { FaBriefcase } from 'react-icons/fa';
import './ExperienceCard.css'; // Import the CSS file for custom styles

const ExperienceCard = ({ experiences }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">{exp.date}</div>
              <div className='mt-2 ml-5'>
                <h3 className="timeline-title text-2xl text-green-400 font-bold">{exp.title}</h3>
                <h4 className="timeline-company text-xl font-semibold">{exp.company}</h4>
                {renderList(exp.description)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderList = (items, level = 0) => {
  const listClass = `list-level-${level}`;
  return (
    <ul className={listClass}>
      {items.map((item, index) => (
        typeof item === 'string' ? 
          <li key={index}>{item}</li> : 
          <li key={index}>
            {item.text}
            {item.subItems && renderList(item.subItems, level + 1)}
          </li>
      ))}
    </ul>
  );
};

export default ExperienceCard;
