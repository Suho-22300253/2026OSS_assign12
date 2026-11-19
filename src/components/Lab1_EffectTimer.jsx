import { useEffect, useState } from "react";

// LAB 1 (Slide 07): useEffect Timer
export default function Lab1EffectTimer() {
  const [count, setCount] = useState(0);
  console.log("[LAB 1] rendered");
  console.log("Render:", count);

  useEffect(() => {
    // TODO 1: 1초마다 setCount(prev => prev + 1)을 실행할 setInterval 작성
    // TODO 2: 만든 타이머 ID를 보관
    // TODO 3: return Cleanup 함수에서 clearInterval 호출
    // TODO 4: Dependency Array가 []일 때와 생략했을 때의 차이 관찰
    /*
    [] - 첫 마운트 시
    생략 - commit 될 때 마다.
    */
    console.log("Effect 실행:", count);
    const timerId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // 언마운트 시에 발생되도록
    // 해당 return이 없을 경우 현재 모드가 strict 모드이기 때문에 그 전이 정리가 되지 않고 돌아가기 떄문에 타이머가 2개 만들어짐 2,4,6 ... 이렇게 증가
    return () => {
      console.log("Cleanup 실행:", count);
      clearInterval(timerId);
    };
  },[]);

  return (
    <div>
      <p className="hint">
        TODO를 완성하면 1초마다 자동으로 Count가 증가해야 합니다.
      </p>
      <div className="count">{count}</div>
      <p className="hint">
        Console에서 Render / Effect / Cleanup을 비교하세요.
      </p>
    </div>
  );
}
