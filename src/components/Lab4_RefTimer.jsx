import { useEffect, useRef, useState } from "react";

// LAB 4 (Slide 17): Timer ID를 useRef로 관리
export default function Lab4RefTimer() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  // TODO 1: 타이머 ID를 유지할 timerRef 생성 (초기값 null)
  /*
  useRef = DOM 요소를 참조하는 Hook
  timerRef = { current: null };
  */
  const timerRef = useRef(null);

  /*
  start()와 stop() 함수에서 타이머를 직접 생성하고 정리 / running은 화면에 실행 상태를 표시하기 위해 사용
  1. start 누름 
  2. start() 실행
  3. 조건문을 통해 timerRef null이 아니면 반환 = 타이머 이미 존재하면 반환
  4. timerRef의 current가 1초마다 1씩 증가하는 타이머 생성된다. & 등록된 타이머를 식별할 수 있는 ID를 반환
      setInterval 자체가 timer id를 반환하는 메서드 지금까지 const id = setInterval 한 것 처럼 이번에 timerRef.current에 담는다.
  5. running을 true 즉 타이머 실행중으로 만듦
  */

  const start = () => {
    // TODO 2: timerRef.current에 타이머가 있으면 중복 시작 방지
    if (timerRef.current !== null) return;

    // TODO 3: setInterval의 반환 ID를 timerRef.current에 보관
    // TODO 4: 1초마다 count 증가, running을 true로 변경
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    setRunning(true);
  };

  /*
  start()와 stop() 함수에서 타이머를 직접 생성하고 정리 / running은 화면에 실행 상태를 표시하기 위해 사용
  1. stop 누름 
  2. stop() 실행
  3. timerRef.current와 연결된 timer를 없앰
  4. running을 false로 만들고 진행 끝남을 알림
  */
  const stop = () => {
    // TODO 5: clearInterval로 타이머 중지
    clearInterval(timerRef.current);
    // TODO 6: timerRef.current를 null로, running은 false로 변경
    timerRef.current = null;
    setRunning(false);
  };

  const reset = () => {
    // TODO 7: stop() 실행 후 count를 0으로 초기화
    stop();
    setCount(0);
  };


  /*
  lab 2 에서는 effect 안에서 타이머 생성 <-> lab 4 는 타이머를 start() 함수가 직접 생성
  이때 useEffect 는 컴포넌트가 Unmount될 때 남아 있는 타이머를 정리하는 역할

  = 사용자가 Stop을 누르지 않은 상태에서 다른 LAB으로 이동하여 컴포넌트가 Unmount된다.
  */
  useEffect(() => {
    // TODO 8: 언마운트 시 Interval을 정리하는 Cleanup 작성
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <p className="status">상태: {running ? "Running" : "Stopped"}</p>
      <div className="count">{count}</div>
      <div className="controls">
        <button onClick={start} disabled={running}>
          Start
        </button>
        <button className="secondary" onClick={stop} disabled={!running}>
          Stop
        </button>
        <button className="secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <p className="hint">
        Timer ID와 화면 표시용 상태의 차이를 설명해 보세요.
      </p>
    </div>
  );
}
