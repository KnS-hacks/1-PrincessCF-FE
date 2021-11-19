import React, { useEffect } from 'react';
import Icon from '@components/common/Icon';
import backIcon from '@assets/icons/back-arrow.svg';
import { useHistory, useParams } from 'react-router';
import { fetchIntroduction } from '@redux/introduction';
import Header from '@components/common/Header';

const IntroductionPage = () => {
  const history = useHistory();
  const { id } = useParams();

  // useEffect(() => {
  //   dispatch(fetchIntroduction());
  // }, []);

  const handleBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <>
      <Header
        leftComponent={<Icon src={backIcon} onClick={handleBack} />}
        centerComponent={<h1>소개</h1>}
      />
    </>
  );
};

export default IntroductionPage;
