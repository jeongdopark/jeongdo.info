<br/>

# [jeongdo.info](https://jeongdo.info)

## 소개

기존 노션에 작성했던 이력서를 배포하면 좋을 것 같다는 생각을 했습니다. <br/>
노션과 비슷하게 구현한 다른 분의 [프로젝트](https://github.com/sjoleee/very-simple-portfolio) 디자인을 참고하여 구현했습니다.
<br/>
React와 styled-components를 사용하였으며, 각 컴포넌트는 하나의 역할을 하도록 구현하였습니다. <br/>
Aws의 S3, Route 53, CloudFront를 활용하여 배포하였습니다.

<br/>

---

## link

https://jeongdo.info

<br/>
<br/>

## 폴더 구조

```
📦src
┣ 📂assets
┃ ┃
┣ 📂components
┃ ┣ 📂Activity
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┣ 📂Education
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┣ 📂Footer
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┣ 📂Header
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┣ 📂Introduce
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┣ 📂Project
┃ ┃ ┣ 📜ProejctDesc.tsx
┃ ┃ ┣ 📜ProjectContribution.tsx
┃ ┃ ┣ 📜ProjectInfo.tsx
┃ ┃ ┣ 📜ProjectSummary.tsx
┃ ┃ ┣ 📜ProjectTechStack.tsx
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┣ 📂TagBox
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┣ 📂Title
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┗ 📜SVG.tsx
┣ 📂data
┃ ┣ 📜activity.tsx
┃ ┣ 📜education.ts
┃ ┣ 📜introduce.tsx
┃ ┗ 📜project.tsx
┣ 📂style
┃ ┣ 📂fonts
┃ ┣ 📜media.ts
┃ ┣ 📜style.ts
┃ ┗ 📜theme.ts
┣ 📂utils
┃ ┗ 📜linkHandler.ts
┣ 📜Resume.tsx
┣ 📜index.css
┗ 📜main.tsx
```
