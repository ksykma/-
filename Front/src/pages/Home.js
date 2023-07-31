import React from "react";
import styled from "styled-components";
import { PiPawPrintFill } from "react-icons/pi"; 

const HomeContainer = styled.div`
  max-width: 1200px;
  height: 88vh;
  margin: 0 auto;
  padding: 20px;
  display: flex; /* Use flexbox to arrange the content */
  flex-direction: column; /* Arrange items vertically */
  position: relative; /* Set relative positioning for absolute elements */
`;

const Span = styled.span`
  color: rgba(255, 145, 77, 1);
`;

const Main = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
  font-size: 5vh;
`;

const Text = styled.div`
  padding-bottom: 10px;
  font-size: 3vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column; /* Arrange items vertically */
  align-items: flex-start;
  margin-top: 10vh; /* Add spacing between the content and the header */
`;

const Div = styled.div`
  margin: 10px;
  padding-top: 20px;
  font-size: 2.2vh;
`;

const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 20px;
`;

const Image = styled.img`
  width: 500px; /* Set the width to a fixed size */
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: rgba(255, 145, 77, 1);
  margin: 1vw;
`;

function Home() {
  return (
    <HomeContainer>
      <Main>
        <Span>데려가개</Span>
      </Main>
      <Text>
        데려가개는 강아지들의 <Span>행복한 미래</Span>를 최우선으로 성숙한
        반려문화를 도모합니다. <br />
      </Text>
      <Text>
        소중한 생명인 강아지와 오랜시간 함께할 <Span>인연</Span>을 만듭니다.
      </Text>
      <ContentContainer>
        <Div>
          <p>시뮬레이션을 통해 가상으로 강아지를 키워보세요!</p>
          <StyledLink href={"/simulation"}><PiPawPrintFill/> 시뮬레이션하러 가기</StyledLink>
        </Div>
        <Div>
          <p>선호도 조사를 통해 나의 생활에 맞는 강아지를 찾아보세요!</p>
          <StyledLink href={"/survey"}><PiPawPrintFill/> 선호도 조사하러 가기</StyledLink>
        </Div>
        <Div>
          <p>
            입양 전 사전테스트를 통해 강아지를 키울 준비가 되었는지
            확인해보세요!
          </p>
          <StyledLink href={"/checklist"}>
          <PiPawPrintFill/> 입양 전 사전테스트하러 가기
          </StyledLink>
        </Div>
      </ContentContainer>
      <ImageWrapper>
        <Image src="assets/main.png" />
      </ImageWrapper>
    </HomeContainer>
  );
}

export default Home;
