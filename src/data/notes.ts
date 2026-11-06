export type Note = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  content: string;
};

export const categories = [
  {
    name: "HTML & CSS",
    description: "Structure, layout, and visual presentation.",
  },
  // {
  //   name: "JavaScript",
  //   description: "Language fundamentals and practical patterns.",
  // },
  // {
  //   name: "React",
  //   description: "Components, state, and building user interfaces.",
  // },
  {
    name: "TypeScript",
    description: "Types that make JavaScript easier to maintain.",
  },
  // {
  //   name: "SQL",
  //   description: "Queries, relational data, and database concepts.",
  // },
  {
    name: "Tools",
    description: "Git, terminal, and everyday developer tools.",
  },
  // {
  //   name: "Articles",
  //   description: "Scraped development-related articles.",
  // },
];

export const notes: Note[] = [
  {
    id: "vscode-commands",
    title: "VS Code Commands",
    description: "These all commands using in VS Code.",
    category: "Tools",
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
    category: "TypeScript",
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
    category: "HTML & CSS",
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
];
