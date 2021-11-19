import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchIntroductionList } from '@redux/introduction';
import Header from '@components/common/Header';
import IntroductionList from '@components/domain/Main/IntroductionList';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const HeaderText = styled.h1`
  font-size: 28px;
  box-sizing: border-box;
`;

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchIntroductionList());
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <MainWrapper>
      <Header centerComponent={<HeaderText>KnS Hackathon</HeaderText>} />
      <IntroductionList />
    </MainWrapper>
  );
};

export default MainPage;
