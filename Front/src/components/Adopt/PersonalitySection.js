import React from "react";
import SurveyPaw from "../../components/SurveyPaw";
import styled from "styled-components";

function PersonalitySection({ friendly, setFriendly, activity, setActivity, dependency, setDependency, bark, setBark, hair, setHair }) {
  return (
    <Div>
      강아지의 <Span>성격</Span>과 <Span>특성</Span>을 선택해주세요.
      <DogCheck>
        <SurveyPaw title="친화력" onSelect={setFriendly} />
        <SurveyPaw title="활동량" onSelect={setActivity} />
        <SurveyPaw title="의존성" onSelect={setDependency} />
        <SurveyPaw title="왈왈왈" onSelect={setBark} />
        <SurveyPaw title="털빠짐" onSelect={setHair} />
      </DogCheck>
    </Div>
  );
}

export default PersonalitySection;

export const DogCheck = styled.div`
  /* 스타일을 추가하여 간격을 줍니다. */
  margin: 1vw 0;
  padding: 1vh;
  border: 1px #ff914d solid;
  border-radius: 30px;
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center; /* SurveyPaw 컴포넌트들을 수직 방향으로 중앙 정렬 */
  flex-direction: column; /* SurveyPaw 컴포넌트들을 수직 방향으로 배치 */
`;
export const Div = styled.div`
  /* 스타일을 추가하여 간격을 줍니다. */
  margin: 1vw 0;
  padding: 1vh;
  font-size: 2vh;
`;


export const Span = styled.span`
  color: rgba(255, 145, 77, 1);
`;