import React, { useMemo } from 'react';
import styled from 'styled-components';
import Color from '@assets/colors/Color';
import Font from '@assets/fonts/Font';
import SchLogo from '@assets/icons/sch-logo.png';
import ktLogo from '@assets/icons/ktlogo.png';
const ContentWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 300px;
  height: 370px;
  border-radius: 8px;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0px 2px 2px 0px ${Color.black_40};
  background-color: ${Color.white};
  transition: box-shadow 0.3s ease-in, transform 0.3s ease-out;
  color: ${Color.black};
  &:hover {
    box-shadow: 0px 2px 8px #e4e4e4;
    transform: translateY(-10px);
  }
`;
const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.h3`
  ${Font.Text1_18px}
`;

const Motto = styled.p`
  ${Font.Text1_14px}
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  /* border-bottom: 1px solid #e4e4e4; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const TagList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 48px;
  white-space: nowrap;
  overflow: hidden;
`;

const Tag = styled.li`
  ${Font.Text2_14px}
  background-color: ${Color.orange};
  display: inline-block;
  padding: 3px 8px;
  color: ${Color.white};
  border-radius: 5px;
  margin: 0 5px 4px 0;
`;

const hashTagList = (hashTags) =>
  hashTags && hashTags.map((hashTag, index) => <Tag key={index}>{hashTag}</Tag>);

const ContentCard = ({ item: { name, school = '순천향대학교', motto = null, hashtag = null } }) => {
  return (
    <ContentWrapper>
      <ProfileImg src={school === '순천향대학교' ? SchLogo : ktLogo} />
      <Name>{name}</Name>
      {motto ? <Motto>"{motto}"</Motto> : null}
      <TagList>{hashTagList(hashtag)}</TagList>
    </ContentWrapper>
  );
};

export default ContentCard;
