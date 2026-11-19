import { useEffect, useState } from "react";

// LAB 2 (Slide 10): Timer Start / Stop / Reset
export default function Lab2TimerControl() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  /*
  useEffect - 외부 시스템과 연동할 때 
  첫번쨰 인자 : 
  실행할 함수 - react가 Effect할 때 실행
  return 으로 반환하는 함수가 Cleanup Function
  두번째 인자 : 
  의존성 배열
  언제 다시 실행되어야 하는지를 알려준다.
  없을 경우 : 컴포넌트가 렌더링될 때마다 Effect가 실행
  [] : 컴포넌트가 처음 화면에 나타났을 때 Effect가 실행
  [특정 State] : 해당 state가 변경될 때 실행

  cleanup 함수가 실행되는 시점
  1. 의존성 배열이 달라질 때 -> 현 과제에서 사용
  2. 컴포넌트 제거될 떄
  3. 개발 환경에서 StrictMode가 활성화된 경우
  */
  useEffect(() => {
    // TODO 1: running이 false면 타이머를 만들지 않기
    // TODO 2: running이 true면 setInterval로 1초마다 count 증가
    // TODO 3: Cleanup에서 clearInterval 호출
    if (running === false) return;

    const timerId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    
    return () => {
      clearInterval(timerId);
    };

    /*
    흐름
    1. 첫 렌더링 시 useEffect 호출
    2. 초기 running == false -> timer 만들어 지지 않는다.
    3. Start 버튼 클릭 시 setRunning(true) 진행된다.
    4. timer 생성 & 실행
    5. return () => ... 를 진행할 경우 Cleanup 함수 반환 = React가 반환된 Cleanup 함수를 보관 = 아직 실행 x
      cleanup은 이전의 상태? 등을 기억한 다음에 다시 실행될 떄 이전의 상황을 정리하는 역할 수행
    6. 이후 reset이나 stop을 누를 경우 running이 false 로 변함
    7. 그렇게 될 경우 Cleanup 실행 -> if (running === false) return; 실행 = timerId 생성 x
    */
  }, [running]);

  const reset = () => {
    // TODO 4: 타이머를 멈추고 count를 0으로 초기화
    setRunning(false);
    setCount(0);
  };

  return (
    <div>
      <p className="status">상태: {running ? "Running" : "Stopped"}</p>
      <div className="count">{count}</div>
      <div className="controls">
        <button onClick={() => setRunning(true)} disabled={running}>
          Start
        </button>
        <button
          className="secondary"
          onClick={() => setRunning(false)}
          disabled={!running}
        >
          Stop
        </button>
        <button className="secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <p className="hint">
        Start/Stop 버튼의 State 변경과 Effect 실행의 관계를 확인하세요.
      </p>
    </div>
  );
}
