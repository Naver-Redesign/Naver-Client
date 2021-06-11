import React from 'react';
import styled from 'styled-components';

function NewsCard({ index }) {
  return (
    <CardWrap>
      <img src={require(`../../../../assets/icons/NewsImg_${index}.png`).default} alt="" />
    </CardWrap>
  );
}

const CardWrap = styled.div`
  width: 20rem;
  height: 10.5rem;
  border: 1px solid ${({ theme }) => theme.main.mainNaverLightgray};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 27.6rem;
    height: 10.4rem;
  }
`;

export default NewsCard;
