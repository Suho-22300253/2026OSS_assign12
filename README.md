Project Structure: App.jsx와 주요 Lab 컴포넌트의 역할
useEffect: Effect, Dependency Array 및 Cleanup의 동작 원리
useRef: .current 속성과 useState의 차이
Code Analysis: useEffect와 useRef 관련 주요 코드 각 1개(5~15줄)를 선택하여 동작 원리 설명

README에 다음 질문의 답을 작성합니다.

useEffect의 Dependency Array가 필요한 이유는?
Cleanup을 사용하지 않으면 어떤 문제가 발생할 수 있는가?
useState와 useRef의 가장 중요한 차이는?
LAB 2와 LAB 4의 Timer 관리 방식은 어떻게 다른가?


## 이해도 확인 질문
1. `setCount(prev => prev + 1)`은 왜 유용한가?
2. `useEffect(fn, [])`과 `useEffect(fn)`은 어떻게 다른가?
3. Cleanup은 언제 실행되는가? 개발 환경 StrictMode 영향은?
4. `useState`와 `useRef`의 값 변경 시 렌더링 차이는?
5. LAB 2와 LAB 4에서 Timer를 관리하는 방식의 차이는?
