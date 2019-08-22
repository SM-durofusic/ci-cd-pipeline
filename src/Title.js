import React from 'react';
import { css } from 'glamor';

const titleStyle = css({
  textAlign: 'center',
  fontFamily: 'sans-serif',
  color: '#ababbb'
});

const Title = props => {
  const { title } = props;
  return <h1 className={titleStyle}> {title}</h1>;
};

export default Title;
