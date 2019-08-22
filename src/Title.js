import React from 'react';

const Title = props => {
  const { title } = props;
  return <h1 style={{ textAlign: 'center' }}> {title}</h1>;
};

export default Title;
