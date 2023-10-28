import React from 'react';
import { FormattedMessage } from 'react-intl';

const Projects = () => {
  return (
    <div className="page-content">
      <h1>
        <FormattedMessage id="projectsTitle" />
      </h1>
      <p>
        <FormattedMessage id="projectsContent" />
      </p>
    </div>
  );
};

export default Projects;

