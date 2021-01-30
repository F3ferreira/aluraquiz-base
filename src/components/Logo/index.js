import styled from 'styled-components';
import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

function Logo() {
  return (
    <Image
    src="/logo.png"
    alt="Logo Game of Thrones"
    layout="responsive"
    width={300}
    height={150}
    />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
}

const MyLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default MyLogo;
