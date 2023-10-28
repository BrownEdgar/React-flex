import React from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => {
  return (
    <div className="page-content">
      <h1>
        <FormattedMessage id="aboutTitle" />
      </h1>
      <p>
        <FormattedMessage id="aboutContent" />
      </p>
    </div>
  );
};

export default About;

