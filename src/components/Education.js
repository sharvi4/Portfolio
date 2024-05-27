import React from 'react';
import './CustomTimeline.css';

const events = [
  { year: '2021-present', description: 'B.E. Electronics And Communication Engineering', },
  { year: '2020-2021', description: 'Graduated from 12th grade with 90%' },
  { year: '2018-2029', description: 'Graduated from 10th grade with 86%' },
  
];

const Education = () => {
  return (
    
    <div className="timeline-container py-5 my-5">
        <h1 className='px-5 text-info' style={{textAlign:"center", marginBottom:"30px"}}>Academic <span style={{color:"black"}}>pursuits</span></h1>
      <div className="timeline">
        
        {events.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-date">{event.year}</div>
            <div className="timeline-dot"></div>
            <div className="timeline-description">{event.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

