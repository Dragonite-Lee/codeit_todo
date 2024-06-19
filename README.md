# 프로젝트 설명
codeit sprint 사전과제 Todo 프로젝트
- Next.js 13.5.6
- Typesciprt 5

# 사용 방법
1. 할 일을 입력하면, 입력한 내용이 TODO란에 생성됩니다.
2. 각 항목의 체크표시를 클릭하면, TODO에서 DONE으로 상태를 바꾸며, 역으로도 가능합니다.
3. 각 항목의 제목을 누르면 항목의 상세페이지로 이동하며, 이미지 및 메모를 남길 수 있습니다.
4. 헤더의 로고를 클릭하면 홈으로 돌아올 수 있습니다.

# 폴더 구조

📦src
 ┣ 📂app
 ┃ ┣ 📂item
 ┃ ┃ ┗ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┗ 📜SmallButton.tsx
 ┣ 📂containers
 ┃ ┣ 📂Detail
 ┃ ┃ ┣ 📜DetailImage.tsx
 ┃ ┃ ┣ 📜DetailItem.tsx
 ┃ ┃ ┣ 📜DetailMemo.tsx
 ┃ ┃ ┣ 📜DetailTodo.tsx
 ┃ ┃ ┗ 📜DetialContent.tsx
 ┃ ┗ 📂home
 ┃ ┃ ┣ 📜ItemInput.tsx
 ┃ ┃ ┣ 📜List.tsx
 ┃ ┃ ┗ 📜Todo.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useInput.tsx
 ┣ 📂services
 ┃ ┣ 📜image.ts
 ┃ ┗ 📜item.ts
 ┣ 📂styles
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜button.module.css
 ┃ ┃ ┗ 📜header.module.css
 ┃ ┣ 📂home
 ┃ ┃ ┗ 📜page.module.css
 ┃ ┣ 📂item
 ┃ ┃ ┗ 📜page.module.css
 ┃ ┣ 📜globals.css
 ┃ ┗ 📜variable.css
 ┗ 📂types
 ┃ ┗ 📜serviceType.ts

- app : 레이아웃 관련 파일만 존재

- components : 공용 컴포넌트 보관

- containers: 페이지의 핵심 파일들 보관

- hooks : 공용 훅 파일들 보관

- services : 각종 API요청 보관

- styles : 파일에 맞는 style과 색상 시스템 존재

- types : 타입스크립트 타입 정의 보관