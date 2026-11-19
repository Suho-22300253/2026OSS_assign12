import { useRef } from "react";

// LAB 3 (Slide 15): Input Focus with useRef
export default function Lab3InputFocus() {
  // TODO 1: input DOM을 참조할 inputRef 생성 (초기값 null)
  /*
  { current: null } 객체 생성 - 실제 Input DOM 요소가 생성되어 연결되지 않았기 때문
  */
  const inputRef = useRef(null);

  const focusInput = () => {
    // TODO 2: ref.current를 이용해 input에 focus() 호출
    inputRef.current.focus();
  };

  const clearInput = () => {
    // TODO 3: input의 값을 지우고 다시 Focus
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <p className="hint">TODO를 완성하면 Focus / Clear 버튼이 동작합니다.</p>
      <label htmlFor="student-name" className="hint">
        Name
      </label>

      {/*
      ref={inputRef} 를 통해 React가 실제 DOM 요소를 연결
      화면에 Input이 생성되어 연결되면 inputRef.current는 해당 Input DOM 요소를 참조
      */}
      <input
        id="student-name"
        className="field"
        placeholder="Enter your name"
        /* TODO 4: ref={inputRef} 속성 연결 
        ref는 태그(Tag)가 아니라, React에서 DOM 요소와 Ref 객체를 연결하기 위해 사용하는 특별한 속성(Prop)
        */
        ref={inputRef}
      />
      <div className="controls">
        <button onClick={focusInput}>Focus</button>
        <button className="secondary" onClick={clearInput}>
          Clear
        </button>
      </div>
    </div>
  );
}
