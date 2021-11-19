import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Font from '@assets/fonts/Font';
import Input from '@components/common/Input';
import { CompleteButton } from '@components/common/Button';
import { PostMusic, GetMusicList } from '@api/MusicApi';
import Color from '@assets/colors/Color';
const MusicPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const InputData = styled(Input)`
  ${Font.Text1_18px}
  border: 0;
  width: 300px;
  height: 50px;
  border-bottom: 3px solid ${Color.black};
`;

const MusicHeader = styled.header`
  width: 100%;
  height: 150px;
  ${Font.Text1_32px}
  text-align: center;
`;

const renderMusicList = (musicList) =>
  musicList.map((item) => (
    <p>
      {item.artist} - {item.title}
    </p>
  ));

const MusicPage = () => {
  const [input, setInput] = useState([]);
  const [MusicList, setMusicList] = useState([]);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const value = {
      artist: input.artist,
      title: input.title,
    };
    console.log(value);
    try {
      await PostMusic(value);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const getMusicList = async () => {
  //     try {
  //       const { data } = await GetMusicList();
  //       setMusicList(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getMusicList();
  // }, [handleSubmit]);

  return (
    <MusicPageWrapper>
      <MusicHeader>듣고 싶은 노래를 입력해주세요!</MusicHeader>
      <InputData
        placeholder="노래 제목을 입력해주세요!"
        name="title"
        onChange={handleInput}
        type="text"
      />
      <InputData
        placeholder="가수를 입력해주세요!"
        name="artist"
        onChange={handleInput}
        type="text"
      />
      <CompleteButton text="음악 신청 하기" onClick={handleSubmit} />
      {/* {renderMusicList(MusicList)} */}
    </MusicPageWrapper>
  );
};

export default MusicPage;
