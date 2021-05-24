import React from 'react';
import styled from 'styled-components';
import DetailCard from '../../common/Card';
import PlusBtn from '../../../assets/icons/PlusBtn.svg';
import FooterMenu from './FooterMenu';
import imgUrl from '../../../assets/icons/example.jpeg';

function Footer() {
  const cardData = {
    view: 'detailDesktop',
    /*임의의 데이터 넣음*/
    imgUrl: imgUrl,
    category: '구단특집',
    title: '[IUFC TV] 3 - 1 승리! 원정 첫 승리를 팬분들께 바칩니다!  승리의 무인 퇴근캠',
    createdAt: '인천유나이티드 IUFC TV',
    data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  };

  return (
    <>
      <FooterWrap>
        <div className="introduce">
          <div className="introduce__title bold">스포츠 영상</div>
          <div className="introduce__detail">주제별로 분류된 다양한 영상 모음</div>
        </div>
        {/* 4*5 grid 틀에 map 돌려서 DetailCard 넣기*/}
        <CardList>
          {cardData.data && cardData.data.map(() => <DetailCard cardData={cardData} />)}
        </CardList>
        <div className="more">
          <img src={PlusBtn} className="more--button" alt="" />
          <div className="more--text">새로운 글 더보기</div>
        </div>
      </FooterWrap>
      <FooterMenu />
    </>
  );
}

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-left: ${({ theme }) => theme.pcPadding.detail};
  padding-right: ${({ theme }) => theme.pcPadding.detail}; */

  .bold {
    font-weight: bold;
  }
  .introduce {
    display: flex;
    justify-content: space-between;
    width: 120rem;
    margin-top: 6rem;
    &__title {
      font-style: normal;
      font-size: 1.9rem;
      line-height: 2.3rem;
      letter-spacing: -0.05em;
      color: ${({ theme }) => theme.text.textBlack};
    }
    &__detail {
      font-family: Apple SD Gothic Neo;
      font-style: normal;
      font-weight: normal;
      font-size: 1.5rem;
      line-height: 1.8rem;
      text-align: center;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.text.textBlack};
    }
  }
  .more {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -3rem;
    width: 120rem;
    &--button {
      width: 6.358rem;
      height: 6.358rem;
      cursor: pointer;
    }
    &--text {
      margin-top: 0.642rem;
      font-size: 1.58949rem;
      text-align: center;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.text.textBlack};
    }
  }
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  row-gap: 2.485rem;
  column-gap: 2.39rem;
  padding-bottom: 3.507rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.main.mainNaverLightgray};
  width: 120rem;
  margin-top: 1.1rem;
`;
export default Footer;
