import React from 'react';
import { EXPERIENCES } from '../constants';

const Experiences = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experiences</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 lg:flex lg:justify-center lg:space-x-4">
            <div className="w-full lg:w-1/4">
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className='mb-2 font-semibold'>
                {experience.role} - {" "}
                <span className='text-sm text-purple-100'>
                  {experience.company}
                </span>
              </h6>
              <p className='mb-4 text-neutral-400'>{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="mr-2 mt-4 rounded bg-neutral-900
                  px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
