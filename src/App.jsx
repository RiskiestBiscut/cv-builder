import { useState } from 'react'
import General from './General'
import Education from './Education'
import './App.css'
import Experience from './Experience';

function App() {
  const [person, setPerson] = useState({
    fullName: 'Bob Johnson',
    email: 'b.johnson@email.com',
    phone: '888.888.8888',
    location: 'Location, CA',
  });

  const [education, setEducation] = useState({
    schoolName: 'University of School',
    degree: 'BA of History',
    date: '2020-2024',
    location: 'Location, CA',
  });

  const [experience, setExperience] = useState({
    companyName: 'Big Company',
    jobTitle: 'Standard Employee',
    date: '2020-2021',
    location: 'Location, CA',
    description: 'This is the description of this job.',
  });

  function handleInputChange(e) {
    const { key } = e.target.dataset
    console.log([key])
    setPerson({
      ...person,
      [key]: e.target.value
    });
  }

  function handleInputChangeEdu(e) {
    const { key } = e.target.dataset
    console.log([key])
    setEducation({
      ...education,
      [key]: e.target.value
    });
  }

  function handleInputChangeExp(e) {
    const { key } = e.target.dataset
    console.log([key])
    setExperience({
      ...experience,
      [key]: e.target.value
    });
  }

  return (
    <div className='app'>
      <div className='forms'>
        <h1>CV Builder</h1>
        <General value={person} onChange={handleInputChange} />
        <Education value={education} onChange={handleInputChangeEdu} />
        <Experience value={experience} onChange={handleInputChangeExp} />
      </div>
      <div className='cv-container'>
        <div className='general-info'>
          <h1>{person.fullName}</h1>
          <span>{person.email}</span>
          <span>{person.phone}</span>
          <span>{person.location}</span>
        </div>
        <div className='education-info'>
          <h2 className='cv-heading'>Education</h2>
          <div className='info-format'>
            <div>
              <span>{education.location}</span>
              <span>{education.date}</span>
            </div>
            <div>
              <span className='info-heading'>{education.degree}</span>
              <span>{education.schoolName}</span>
            </div>
          </div>
        </div>
        <div className='experience-info'>
          <h2 className='cv-heading'>Experience</h2>
          <div className='info-format'>
            <div>
              <span>{experience.location}</span>
              <span>{experience.date}</span>
            </div>
            <div>
              <span className='info-heading'>{experience.jobTitle}</span>
              <span>{experience.companyName}</span>
              <p>{experience.description}</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default App
