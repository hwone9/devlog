export type Note = {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  tags: string[];
  date: string;
  content: string;
};

export const notes: Note[] = [
  {
    id: "vscode-commands",
    title: "VS Code Commands",
    description: "These all commands using in VS Code.",
    categoryId: "tools",
    tags: ["VS Code", "Commmand"],
    date: "2026-11-06",
    content: `
    
## Search

- 프로젝트 전체 내용(문자열) 검색 : Ctrl + Shift + F
- 파일 이름으로 파일 찾기 : Ctrl + P

## Edit
- 반복되는 단어 한 번에 수정 : Ctrl + D
- 코드 위/아래로 움직이기 : Alt + ↑ / ↓
- 코드 블록 한 번에 코멘트 처리하기 : Ctrl + /
- 열편집 : alt + shift + ctrl + ↑ / ↓
- 줄복사 : shift + alt + ↑ / ↓
- 줄삭제 : Ctrl + Shift + K


## IDE
- 클릭하는 곳마다 커서 생성 : Alt + Click
- 선택된 영역에 커서 만들기 : Alt + ↑ + I
- 마우스가 가는 곳 마다 커서 만들기 : Alt + ↑ + Mouse Drag
- 다중선택, 마지막으로 커서이동 : 영역선택 후 Alt + Shift + I
- 파일 맨 위-아래로 한번에 이동하기 : Ctrl + Home / End
- 사이드바 숨기기 : Ctrl + B

  `,
  },

  {
    id: "typeScript-error",
    title: "TypeScript error",
    description: "These all commands using in VS Code.",
    categoryId: "ts",
    tags: ["TypeScript", "Error"],
    date: "2026-11-06",
    content: `
    
## Problem
main.tsx 에서 style.css를 찾지 못하는 문제 발생  
![error image](/images/data/2026-11-06%20172243.png)


## Cause
React + TypeScript에서 CSS 파일을 import할 때 TypeScript가 CSS 파일의 타입 정보를 찾지 못해서 발생하는 오류

브라우저와 Vite는 CSS 파일을 정상적으로 인식해서 화면에 적용해 줌.
하지만 TypeScript는 기본적으로 .css 파일을 JavaScript나 TypeScript 모듈처럼 이해하지 못함.

## Solution
1. src/vite-env.d.ts 파일 생성 (이미 있다면 생략가능)
2. 해당 파일에 다음 내용 작성
    \`\`\`
      /// <reference types="vite/client" />
    \`\`\`
Vite가 제공하는 타입 정보를 TypeScript가 사용할 수 있도록 해줌.

  `,
  },

  {
    id: "image-overflow",
    title: "Markdown Image Overflow",
    description:
      "Prevent images from exceeding the content area by applying responsive CSS styling.",
    categoryId: "html-css",
    tags: ["CSS"],
    date: "2026-11-06",
    content: `
    
## Problem
이미지 로딩 시 overflow 되는 문제 발생
![error image](/images/data/2026-11-06%20175130.png)


## Solution
style.css 에 해당 코드 추가
\`\`\`
/* Markdown images */
.markdown-content img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 16px 0;
}
\`\`\`
- max-width: 100% -> 부모 영역보다 이미지가 커지지 않도록 제한
- height: auto -> 이미지 원본 비율 유지
- display: block -> 이미지 아래 여백 설정 가능
- margin: 16px 0 -> 이미지 주변 간격

### Result
![error image](/images/data/2026-11-06%20175225.png)
  `,
  },

  {
    id: "js-replace",
    title: "JS 공백제거",
    description: "JS 공백제거 함수",
    categoryId: "js",
    tags: ["JS", "replace", "정규식", "split", "join", "replaceAll"],
    date: "2026-11-09",
    content: `
    
## Solution 1
- trim() : 문자열의 맨 앞과 맨 뒤에 있는 공백만 제거, 문자열 중간에 있는 공백은 유지
\`\`\` js
const str = "  hello world  ";
console.log(str.trim()); // "hello world"
\`\`\`

## Solution 2
- replace 와 정규식 : 모든 공백 제거
\`\`\` js
const str = "h e l l o   w o r l d";
console.log(str.replace(/\\s/g, "")); // "helloworld"
\`\`\`

## Solution 3
- split() , join() : 모든 공백 제거 , 정규식을 쓰지 않고 배열을 이용해 공백을 제거하는 방식
\`\`\` js
const str = "h e l l o   w o r l d";
console.log(str.split(" ").join("")); // "helloworld"
\`\`\`

## Solution 4
- replaceAll() : ES2021 이상에서 사용가능
\`\`\` js
const str = "h e l l o   w o r l d";
console.log(str.replaceAll(" ", "")); // "helloworld"
\`\`\`

  `,
  },

  {
    id: "ts-value-type-diff",
    title: "[TS] Value와 Type의 차이",
    description: "타입스크립트에서 value와 type의 차이",
    categoryId: "ts",
    tags: ["TS", "TypeScript", "Value", "Type"],
    date: "2026-11-09",
    content: `
## Value?
: 실제로 프로그램에서 사용하는 데이터
\`\`\`
export const categories = [
  {
    id: "react",
    name: "React",
  },
];
\`\`\`
- categories는 실제 카테고리 데이터가 들어있는 배열
- const로 선언했기 때문에 프로그램에서 사용할 수 있는 Value

## Type?
: 데이터가 어떤 형태를 가져야 하는지 정의하는 설계도
\`\`\`
export interface Category {
  id: string;
  name: string;
}
\`\`\`
- Category는 카테고리 하나가 가져야 할 데이터 구조를 정의
- 실제 데이터가 아니라 데이터의 형태를 설명하는 Type

## How to use?
1. 실제 데이터가 필요할 때 -> Value
    \`\`\`
    import { categories } from "../data/categories";

    console.log(categories);
    \`\`\`

2. 데이터의 형태를 지정할 때 -> Type
    \`\`\`
    import type { Category } from "../data/categories";

    interface Props {
      category: Category;
    }
    \`\`\`
    - category: Category는 category라는 값이 Category에서 정의한 형태를 따라야 함을 의미
    
  `,
  },
];
