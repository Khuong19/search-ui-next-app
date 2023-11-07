

import React from 'react';

const Download = ({dataURL}) => {
  const downloadURL = dataURL
  return (
    <a href={downloadURL} target="_blank" rel="noopener noreferrer">
    </a>
  );
};

export default Download;
