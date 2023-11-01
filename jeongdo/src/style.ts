import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

const ContentWrapper = styled.div`
  width: 56%;
`;

const ProjectContainer = styled.section`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;

export const S = { ContentContainer, ContentWrapper, ProjectContainer };
