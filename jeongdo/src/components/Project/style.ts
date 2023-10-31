import styled from "styled-components";

const InfoContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  height: 230px;
  background-color: aliceblue;
  justify-content: space-around;
`;

const InfoImg = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  background-color: black;
  border-radius: 10px;
`;

const InfoTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const InfoPeriod = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`;

const LinkContianer = styled.div`
  display: flex;
  width: 70px;
  gap: 10px;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const S = {
  DescContainer,
  InfoContainer,
  InfoImg,
  InfoTitle,
  InfoPeriod,
  LinkContianer,
};
