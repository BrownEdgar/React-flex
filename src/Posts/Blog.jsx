import React from 'react';
import { FormattedMessage } from 'react-intl';

const Blog = () => {
  return (
    <div className="page-content">
      <h1>
        <FormattedMessage id="blogTitle" />
      </h1>
      <p>
        <FormattedMessage id="blogContent" />
      </p>
    </div>
  );
};

export default Blog;


