Project Structure: App.jsx와 주요 Lab 컴포넌트의 역할
useEffect: Effect, Dependency Array 및 Cleanup의 동작 원리
useRef: .current 속성과 useState의 차이
Code Analysis: useEffect와 useRef 관련 주요 코드 각 1개(5~15줄)를 선택하여 동작 원리 설명

README에 다음 질문의 답을 작성합니다.

useEffect의 Dependency Array가 필요한 이유는?
Cleanup을 사용하지 않으면 어떤 문제가 발생할 수 있는가?
useState와 useRef의 가장 중요한 차이는?
LAB 2와 LAB 4의 Timer 관리 방식은 어떻게 다른가?

Project Information: 프로젝트 소개 및 Starter Project 정보
Installation: 설치·실행 방법 및 실행 화면
Source Code Exploration: 주요 파일 구조, useEffect 및 useRef 분석, 주요 코드 2개 설명
Lab Implementation: 4개 Lab 구현 내용 및 실행 결과
Lab Comparison: STEP 3의 비교 분석 질문 4개에 대한 답변

Customizing: 수정 내용 및 파일명
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





Deployment: 실제 접근 가능한 Vercel URL
Weekly Review:
새롭게 배운 내용 3가지
어려웠던 점과 해결 방법
AI 활용 내용 및 느낀 점


## 이해도 확인 질문
1. `setCount(prev => prev + 1)`은 왜 유용한가?
2. `useEffect(fn, [])`과 `useEffect(fn)`은 어떻게 다른가?
3. Cleanup은 언제 실행되는가? 개발 환경 StrictMode 영향은?
4. `useState`와 `useRef`의 값 변경 시 렌더링 차이는?
5. LAB 2와 LAB 4에서 Timer를 관리하는 방식의 차이는?
