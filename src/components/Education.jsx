import EducationCard from "./EducationCard";

const education = [
  {
    date: "APRIL 2024 - PRESENT",
    title: "Data Science And AI Master Program",
    company: "Learnbay, Remote"
      
  },
  {
    date: "AUGUST 2007 - JUNE 2011",
    title: "Bachelors Of Technology (ECE)",
    company: "I.E.T Bhaddal, Ropar (Punjab) | 80%"
  },
  {
    date: "APRIL 2006 - MARCH 2007",
    title: "12th Non-Medical (PCM)",
    company: "Govt. Sen. Sec. School (Multipurpose) (PSEB Board), Ludhiana | 80%"
  }
];

function Education() {

  
  return (
    <div
      name="Education"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Education</h1>
        <EducationCard educations={education} />
      </div>       
    </div>
  );
}

export default Education;
