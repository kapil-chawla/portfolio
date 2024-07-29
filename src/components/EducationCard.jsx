import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from "react-icons/io";
import './EducationCard.css'; // Import the CSS file for custom styles

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

const EducationCard = ({ educations }) => {
  return (
    <VerticalTimeline>
      {educations && educations.map((exp, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          date={exp.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold text-green-400">{exp.title}</h3>
          <h4 className="vertical-timeline-element-subtitle text-xl font-semibold">{exp.company}</h4>
          {exp.description && renderList(exp.description)}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default EducationCard;
