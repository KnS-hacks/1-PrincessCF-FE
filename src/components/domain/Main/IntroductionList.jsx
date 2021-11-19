import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContentCard from './ContentCard';

const DUMMY_DATA = [
  {
    id: 1,
    name: '홍길동',
    motto: '좌우명좌우명좌우명좌우명좌우명좌우명좌우명좌우명',
    hashtag: [
      '공부',
      '열정맨',
      '재밌어요',
      '공부',
      '열정맨',
      '재밌어요',
      '공부',
      '열정맨',
      '재밌어요',
    ],
  },
  {
    id: 2,
    name: '홍길동',
    motto: '돈벌자',
    school: '한국기술교육대학교',
    hashtag: ['공부', '열정맨', '재밌어요'],
  },
];

const renderContentCard = (IntroductionList) =>
  IntroductionList.map((item) => (
    <Link to={{ pathname: `/introduction/${item.id}` }} key={item.id}>
      <ContentCard item={item} />
    </Link>
  ));

const ContentListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  /* align-items: flex-start; */
`;

const IntroductionList = () => {
  //   const { IntroductionList, isLoading } = useSelector((state) => state.initialIntroduction);
  //   console.log(IntroductionList, isLoading);

  return <ContentListWrapper>{renderContentCard(DUMMY_DATA)}</ContentListWrapper>;
};

export default IntroductionList;
