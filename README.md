## Project Information: 프로젝트 소개 및 Starter Project 정보

4개의 컴포넌트에 대하여 타이머 기능, 글자 입력 후 focus 기능을 useEffect, useRef 를 이용하여 구현

## Installation: 설치·실행 방법 및 실행 화면

1. npm install

2. npm run dev

3. 브라우저에서 실행

## Source Code Exploration: 주요 파일 구조, useEffect 및 useRef 분석, 주요 코드 2개 설명

- Project Structure: App.jsx와 주요 Lab 컴포넌트의 역할
  App.jsx - 첫 화면의 큰틀을 다룬다. 버튼을 통해 서로 다른 컴포넌트로 이동가능하게 만든다.

lab1 : useEffect를 이용하여 해당 화면 랜더링 시 바로 타이머 작동

lab2 : useEffect를 이용하여 stop, start, reset 버튼을 이용하여 타이머 작동

lab3 : useRef를 이용하여 값을 입력받고 focus, clear 버튼을 이용하여 동작

lab4 : useRef를 이용하여 타이머 조작

- useEffect: Effect, Dependency Array 및 Cleanup의 동작 원리
  Effect : 실제로 진행할 함수 내용으로 Dependency Array 의 조건이 충족될 시 어떤 작업을 진햏하는지 명시

Dependency Array : useEffect가 실행 조건을 작성 없을 경우 : 컴포넌트가 렌더링될 때마다 Effect가 실행 [] : 컴포넌트가 처음 화면에 나타났을 때 그리고 언마운트 될 때 Effect가 실행 [특정 State] : 해당 state가 변경될 때 실

Cleanup : useEffect에서 작업을 정리하기 위한 함수로 useEffect 컴포넌트가 Unmount되거나 의존성 배열의 값이 변경되어 useEffect가 다시 실행할 때 cleanup 함수 후에 Effect 함수 실행한다.

- useRef: .current 속성과 useState의 차이
  컴포넌트가 다시 랜더링이 되어도 값이 유지해야 하는 값을 저장하거나 DOM 요소를 참조하기 위한 Hook이다. useRef를 실행하면 { current : 초기값} 와 같은 객체가 생성되며, 이를 통해 current에 dom 요소를 연결할 수 있다.

useState의 경우 값이 변경될 경우 자동으로 랜더링이 되지만 useRef의 경우에는 자동으로 랜더링이 안된다.

- Code Analysis: useEffect와 useRef 관련 주요 코드 각 1개(5~15줄)를 선택하여 동작 원리 설명

```jsx
useEffect(() => {
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
```

```jsx
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
  if (timerRef.current !== null) return;

  timerRef.current = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  setRunning(true);
};
```

## Lab Implementation: 4개 Lab 구현 내용 및 실행 결과

- lab 1
화면 마운트 시 타이머 자동 실행

![LAB 1 실행 결과](./result/lab%201.png)

- lab 2
Start, Stop, Reset 버튼을 이용항 timer 구현

![LAB 2 실행 결과](./result/lab%202.png)

- lab 3
input 란을 focus와 clear 버튼 구현
![LAB 3 실행 결과](./result/lab%203.png)

- lab 4
Start, Stop, Reset 버튼을 이용항 timer 구현

![LAB 4 실행 결과](./result/lab%204.png)

## Lab Comparison: STEP 3의 비교 분석 질문 4개에 대한 답변

- useEffect의 Dependency Array가 필요한 이유는?
useEffect의 실행 시점을 정해준다. 

- Cleanup을 사용하지 않으면 어떤 문제가 발생할 수 있는가?
이전 타이머가 종료되지 않아 여러 타이머가 동시에 실행되거나, 언마운트 이후에도 타이머 작업이 계속될 수 있다

- useState와 useRef의 가장 중요한 차이는?
자동으로 리렌더링이 되는지 안되는지의 차이

- LAB 2와 LAB 4의 Timer 관리 방식은 어떻게 다른가?
LAB 2의 경우 timer 생성 및 제거를 useState에서 다루고 있는 반면 LAB 4의 경우에는 다른 함수에서 이를 생성하는 방법을 다루며 useRef 객체와 반환된 값과 이를 연결하여 다룬다.

## Customizing: 수정 내용 및 파일명

App.jsx
전 : Open Source Studio · WEEK 12
후: OSS · WEEK 12 · MYUNG SUHO Assignment

App.css
전 1
background: #f5f7fb;
color: #18243a;
후 1
background: #f4d1d1;
color: #18243a;

전 2
border: 1px solid #dfe5f0;
border-radius: 12px;
후 2
border: 1px solid #ff0000;
border-radius: 3px;

4개 Lab 정상 동작 확인 -> 확인 완료
Browser Console 오류 확인 -> 에러 없음

## Deployment: 실제 접근 가능한 Vercel URL

https://2026-oss-assign12-eight.vercel.app/

## Weekly Review:

새롭게 배운 내용 3가지

1. useEffect 사용 방법
Effect를 통해 useEffect가 실행될 때 진행되어야 하는 함수 내용을 알려주고 의존석 배열을 통해 언제 다시 실행되어야 하는지를 알려준다. 없을 경우 : 컴포넌트가 렌더링될 때마다 Effect가 실행, [] : 컴포넌트가 처음 화면에 나타났을 때 Effect가 실행, [특정 State] : 해당 state가 변경될 때 실행한다. 또한 cleanup 함수를 통해 
  

2. useRef 사용방법
useRef를 이용하여 dom 요소에 접근할 수 있다. current 속성이 추가된 ref 객체를 반환하며 current와 연결하여 이를 객체를 다룬다. 하지만 이는 자동으로 rerender 되지 않는다.

3. 마운트 언마운트 개념
마운트 컴포넌트가 처음 화면에 추가되는 것을 말하면, 언마운트는 마운트와 반대로 컴포넌트가 화면에서 제거되는 것을 의미한다. 이때 제거는 rerender와는 다으다. 언마운트로 인해 커모넌트가 제거되었을 때 useEffect의 Cleanup 함수를 통해 해당 컴포너느가 진행되고 있었던 작업을 정리할 수 있다.

어려웠던 점과 해결 방법
useRef 개념과 이를 사용하는 방법이 이해가 가지 않았다. 그래서 lab3와 lab4가 어떤 과정으로 진행되는지 이해가 되지 않아 이를 이해하지 위해 ai 도움을 받았다.

## 이해도 확인 질문
1. `setCount(prev => prev + 1)`은 왜 유용한가?
setCount(count + 1)의 경우 해당 함수가 생성된 렌더링 시점의 count 값을 가져온다. 즉 lab 1의 경우 첫 마운트시 count는 0으로 가져오게 되는데 의존성 배열이 [] 이기 때문에 리렌더링이 되지 않는다. 그렇기에 count 가 0이 계속되기 때문에 1로만 유지된다는 문제가 발생한다. 이를 막기 위하여 그 전의 값을 가져오기 위하여 prev => prev + 1를 작성한다.

 따라서 setInterval()처럼 반복 실행되는 콜백에서는 이전 State 값을 계속 참조하는 문제가 발생할 수 있다.

예를 들어 최초 count가 0인 상태에서 useEffect의 Dependency Array를 []로 설정하면, setCount(count + 1)은 매번 setCount(1)을 호출하여 값이 1에서 증가하지 않을 수 있다.

반면 setCount(prev => prev + 1)은 React가 관리하는 최신 이전 State 값을 전달받아 다음 값을 계산한다. 따라서 오래된 State를 참조하는 문제를 방지하고, 타이머의 Count를 정상적으로 증가시킬 수 있다

2. `useEffect(fn, [])`과 `useEffect(fn)`은 어떻게 다른가?
`useEffect(fn, [])` 의 경우는 첫마운트 시에만 작동하며 언마운트시 cleanup 함수가 실행된다. 반면 `useEffect(fn)` 의 경우에는 컴포넌트의 변경이 생겨 랜더리 될 떄마다 실행된다.

3. Cleanup은 언제 실행되는가? 개발 환경 StrictMode 영향은?
Cleanup은 언마운트나 의존성 배열에 적혀있는 state가 변경될때 실행된다. StrictMode가 있다면 Effect의 설정과 정리 과정이 추가로 실행되므로, Cleanup이 없다면 effect가 중복 실행되는 문제가 발생한다.

4. `useState`와 `useRef`의 값 변경 시 렌더링 차이는?
`useState`의 경우 자동 리렌더링되는 반면 `useRef`는 렌더링이 되지 않는다.

5. LAB 2와 LAB 4에서 Timer를 관리하는 방식의 차이는?
LAB 2의 경우 timer 생성 및 제거를 useState에서 다루고 있는 반면 LAB 4의 경우에는 다른 함수에서 이를 생성하는 방법을 다루며 useRef 객체와 반환된 값과 이를 연결하여 다룬다.

AI 활용 내용 및 느낀 점
ai는 코드 이해 흐름 파악에 사용하였다.

느낀점 : useState와 다른 hook들에 대해 공부하고 이를 활용하면서 이에 대한 전반적인 이해도를 높일 수 있었다.