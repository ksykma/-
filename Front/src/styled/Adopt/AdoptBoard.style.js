import styled from "styled-components";

export const LoadingText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; // 비디오 위에 위치하도록 함
  font-size: 40px;
  color: white; // 글자 색은 원하는대로 변경 가능
`;

export const VideoContainer = styled.div`
  position: relative; // 이 줄을 추가합니다.
  border: 1px solid #ff914d;
  border-radius: 30px;
  padding-top: 30px;
  margin-top: 20px;
  background-color: white;
  overflow: hidden; // 비디오가 컨테이너 밖으로 넘치지 않게 합니다.
  height: 500px; // 이 줄을 추가합니다.
`;

export const BoardContainer = styled.div`
  border: 1px solid #ff914d;
  border-radius: 30px;
  padding-top: 30px;
  margin-top: 20px;
  background-color: white;
`;

export const TopBar = styled.div`
  position: relative; // TopBar를 relative로 설정
  display: flex;
  align-items: center;
  width: 100%;
  margin: 5vh 0;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%; // 상위 요소의 중앙에서 시작
  right: 0.5vw; // 화면의 5% 만큼 오른쪽에서 떨어져 시작
  transform: translateY(-50%); // 자신의 높이의 50%만큼 위로 올려서 중앙 정렬
  border: none;
  background-color: #ff914d;
  padding: 0.8vw 1vw;
  border-radius: 20px;
  color: white;
  margin-right: 35px;
  display: block;
  width: fit-content;
  cursor: pointer;
`;

export const SelectInputBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%; // 상위 요소의 중앙에서 시작
  transform: translate(-50%, -50%); // 자신의 크기의 절반만큼 이동하여 중앙 정렬
  width: 500px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  border: 1px solid #ff914d;
  padding: 5px;
`;

export const InputBox = styled.input`
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 30px;
  background-color: white;
  border-radius: 20px;
`;

export const BoardItem = styled.div`
  border-color: white;
  background-color: white;
`;

export const Media = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPagination = styled.div`
  padding-top: 20px;
  .pagination {
    display: flex;
    justify-content: center; // 중앙 정렬
    list-style-type: none;
    padding: 0;
  }

  .pagination li {
    margin: 0 5px;
  }

  .pagination li a {
    text-decoration: none;
    color: #4a2511;
    padding: 8px 16px;
    transition: background-color 0.3s;
  }

  .pagination li a.activePageLink {
    color: #ff914d;
  }

  .pagination li a.active {
    background-color: #ff914d;
    color: white;
    border-radius: 30px;
  }

  .pagination li a:hover:not(.active) {
    background-color: #ddd;
  }
`;

export const Largespacer = styled.div`
  height: 1350px;
`;

export const Smallspacer = styled.div`
  margin: 2vh;
`;

export const DogStatus = styled.span`
  font-size: 15px;
  position: absolute;
  color: white;
  top: 320px;
  right: 10px;
  background-color: ${(props) => props.color || "green"};
  border-radius: 10px;
  z-index: 10;
  padding: 3px 8px;
`;

export const RefreshButton = styled.button`
  background: url("/assets/chatimg/reload.png") no-repeat center;
  background-size: cover; // 이미지를 버튼 크기에 맞게 조정
  border: none;
  width: 24px; // 아이콘 크기에 맞게 조정
  height: 24px; // 아이콘 크기에 맞게 조정
  cursor: pointer;
  margin-left: 5vh; // 좌우 여백을 주어 S.InputBox와의 간격 조정
`;

export const DistanceLabel = styled.div`
  position: absolute;
  top: 0.8vh; // 상단에서부터의 간격입니다. 필요에 따라 조절하세요.
  right: 4vh; // 오른쪽에서부터의 간격입니다. 필요에 따라 조절하세요.
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); // 배경을 약간 어둡게 해서 텍스트가 잘 보이게 합니다.
  padding: 0.5vh 1vh; // 내부 간격입니다. 필요에 따라 조절하세요.
  border-radius: 5px; // 모서리를 둥글게 합니다.
  color: white; // 텍스트 색상입니다.
  font-size: 1.5vh;
  width: 7.5vh; // 너비 고정
  height: 2.5vh; // 높이 고정

  // 텍스트 가운데 정렬을 위한 Flexbox 속성
  display: flex;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
`;
