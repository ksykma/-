// 게임 못들어감
import React, {useState, useEffect} from 'react';
import GameText from '../../components/Check/GameText'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as S from "../../styled/Check/SimulationEnd.style"
import { useRecoilValue, useRecoilState } from "recoil"
import { SimulationExistAtom, GameTitle } from "../../recoil/SimulationAtom"
import axios from 'axios';

function Simulation() {
  const [ExistValue, setExistValue] = useRecoilState(SimulationExistAtom)
  const nickname = localStorage.getItem('nickname')
  const train = ExistValue.train
  const [trainCheck, setTrainCheck] = useState(0)
  const titles = useRecoilValue(GameTitle)
  const [title, setTitle] = useState('')

  useEffect(() => {
    let count = 0;
    if (train.substr(0, 2) === "10") {
      count += 1;
    }
    if (train.substr(2, 2) === "20") {
      count += 1;
    }
    if (train.substr(4, 2) === "20") {
      count += 1;
    }
    if (train.substr(6, 2) === "30") {
      count += 1;
    }
    setTrainCheck(count);
  }, [train]); // train 값이 변경될 때만 이 효과를 실행합니다.
  
  useEffect(() => {
    let newTitle;
    const health = parseInt(ExistValue.health);
  
    if (health === 0) {
      newTitle = titles[0];
    } else if (health >= 1 && health < 20) {
      newTitle = titles[1];
    } else if (health >= 20 && health < 40) {
      newTitle = titles[20];
    } else if (health >= 40 && health < 60) {
      newTitle = titles[40];
    } else if (health >= 60 && health < 85) {
      newTitle = titles[60];
    } else if (health >= 85) {
      newTitle = titles[85];
    }
  
    if (newTitle && newTitle !== ExistValue.title) {
      setTitle(newTitle);
      setExistValue(prevState => ({
        ...prevState,
        title: newTitle,
      }));
    }
  }, [ExistValue]);
  

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
  
  // sendData 함수 및 의존성 배열 정의
  const sendData = (async () => {
    setExistValue(prevState => ({ // simulationExistValue값의 health도 업데이트
      ...prevState,
      endCheck: "true",
    }));
    try {
      const Token = localStorage.getItem("accessToken");
      if (Token) { // 로그인 했을 때만
        const response = await axios.put(
          `${REACT_APP_API_URL}/simulations/save`,
          ExistValue,
          {
            headers: {
              Authorization : 'Bearer '+ Token,
            }
          }
        );
        console.log(response.data)
      }
    } catch (error) {
      console.error(error);
    }
  })

return (
    <div className="container" id="Simulation">
      <GameText />
      <div className="row">
          <div className="col-1"></div>
          <S.GameStartfirst className="col-10 first">
            <div className="container">
              <div className="row">
                <div className='col-1'></div>
                <S.GameEnd className='col-10 d-flex justify-content-center align-items-center'>
                  <S.GameResultBox>
                    <S.GameResulth3>{nickname} 님의 시뮬레이션 결과</S.GameResulth3>
                    <S.GameResultp>전체 점수 : {ExistValue.health}점</S.GameResultp>
                    <S.GameResultp>완료한 훈련 개수 : {trainCheck}개</S.GameResultp>
                    <S.GameResultli>꼬미야~ {train.substr(0, 2) === "10" && <S.CheckImg src="/assets/things/checked.png" alt="" />}</S.GameResultli>
                    <S.GameResultli>앉아! {train.substr(2, 2) === "20" && <S.CheckImg src="/assets/things/checked.png" alt="" />}</S.GameResultli>
                    <S.GameResultli>기다려! {train.substr(4, 2) === "20" && <S.CheckImg src="/assets/things/checked.png" alt="" />}</S.GameResultli>
                    <S.GameResultli>하우스! {train.substr(6, 2) === "30" && <S.CheckImg src="/assets/things/checked.png" alt="" />}</S.GameResultli>

                    <br />
                    <S.GameResulth3>{nickname} 님은 {title} 입니다.</S.GameResulth3>
                    <div className='d-flex justify-content-center'>
                      <S.GameResultBtn onClick={sendData}>확인</S.GameResultBtn>
                    </div>
                  </S.GameResultBox>
                </S.GameEnd>
                <div className='col-1'></div>
              </div>
            </div>
          </S.GameStartfirst>
          <div className="col-1"></div>
      </div>
    </div>
    );
  }
  
  export default Simulation;