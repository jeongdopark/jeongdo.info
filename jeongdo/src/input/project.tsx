import TagBox from "../components/TagBox";
import BAKER from "../assets/BAEKER.png";
import Jeongdo from "../assets/Jeongdo.png";
import LMS from "../assets/LMS.png";
import NumbleProject from "../assets/NumbleProject.png";
import PPPICK from "../assets/PPPICK.png";
import { linkHandler } from "../utils/linkHandler";

export interface IInfo {
  IMG_URL: string;
  TITLE: string;
  PERIOD: string;
  GITHUB: string;
  PARTICIPANT: string;
  DEPLOY?: string;
}

export interface IDesc {
  SUMMARY: React.ReactNode;
  STACK: string[];
  CONTRIBUTION: React.ReactNode[];
}

export interface IProjectInfo {
  DESC: IDesc;
  INFO: IInfo;
}

export const PROJECT_LIST: IProjectInfo[] = [
  {
    DESC: {
      SUMMARY: (
        <>
          노션으로 만든 이력서를 바탕으로, 각 영역을 컴포넌트화하여
          구현했습니다.
        </>
      ),
      STACK: ["React", "Styled-Components", "Typescript"],
      CONTRIBUTION: [
        <span>
          <TagBox text="단일 책임 원칙" type="HIGHLIGHT" />을 적용하여 컴포넌트
          설계를 하였습니다.
        </span>,
        <span>
          <TagBox text="AWS" type="HIGHLIGHT" />에 배포를 진행했습
        </span>,
      ],
    },
    INFO: {
      IMG_URL: Jeongdo,
      TITLE: "Jeongdo.info",
      PARTICIPANT: "1인 작업",
      PERIOD: "23. 11.01 - 23. 11.02",
      GITHUB: "https://github.com/jeongdopark/jeongdo.info",
      DEPLOY: "https://jeongdo.info",
    },
  },
  ,
  ////////////////////////////////////////////////////////////////////////////////
  {
    DESC: {
      SUMMARY: (
        <>알고리즘 스터디의 체계적 관리에 도움 주는 서비스, BAEKER입니다.</>
      ),
      STACK: [
        "Next.js",
        "Typescript",
        "Redux-Toolkit",
        "RTK-Query",
        "Styled-Components",
        "Vercel",
      ],
      CONTRIBUTION: [
        <span>
          <TagBox text="합성 컴포넌트 패턴" type="HIGHLIGHT" />
          활용하여 공톰 컴포넌트 설계
          <TagBox
            clickHandler={() =>
              linkHandler("https://parkjeongdo.tistory.com/117")
            }
            text="BLOG 🔗"
            type="BLOG"
          />
        </span>,
        <span>
          RTK-Query에 Axios 적용
          <TagBox
            clickHandler={() =>
              linkHandler("https://parkjeongdo.tistory.com/115")
            }
            text="BLOG 🔗"
            type="BLOG"
          />
        </span>,
        <span>
          Axios Interceptor 활용
          <TagBox
            clickHandler={() =>
              linkHandler("https://parkjeongdo.tistory.com/116")
            }
            text="BLOG 🔗"
            type="BLOG"
          />
        </span>,
        <span>
          <TagBox text="다크모드" type="HIGHLIGHT" />
          구현
          <TagBox
            clickHandler={() =>
              linkHandler("https://parkjeongdo.tistory.com/112")
            }
            text="BLOG 🔗"
            type="BLOG"
          />
        </span>,
        <span>
          <TagBox text="chat.js" type="HIGHLIGHT" />
          사용하여 데이터 시각화
        </span>,
      ],
    },
    INFO: {
      IMG_URL: BAKER,
      TITLE: "BAEKER",
      PARTICIPANT: "프론트엔드 1명 | 백엔드 2명",
      PERIOD: "23. 06 - 23. 10",
      GITHUB: "https://github.com/BAEKER-230522/BAEKER_FE",
      DEPLOY: "https://baeker.vercel.app/home",
    },
  },
  ////////////////////////////////////////////////////////////////////////////////
  {
    DESC: {
      SUMMARY: <>LMS (Learning Management System ) 학습관리시스템</>,
      STACK: [
        "Next.js",
        "Typescript",
        "Redux-Toolkit",
        "React-Query",
        "tailwindcss",
        "Firebase",
      ],
      CONTRIBUTION: [
        <span>
          <TagBox text="팀장" type="HIGHLIGHT" />
          역할로서 데일리 스크럼 및 스프린트 계획 진행
        </span>,
        <span>강의실 페이지 UI</span>,
        <span>관리자, 수강생 권한 분기 처리</span>,
        <span>Drag and Drop 강의 순서 변경</span>,
      ],
    },
    INFO: {
      IMG_URL: LMS,
      TITLE: "LMS",
      PARTICIPANT: "프론트엔드 12명",
      PERIOD: "23. 07 - 23. 08",
      GITHUB: "https://github.com/sniperfactory-official/sfac-lms-team-b",
      DEPLOY: "https://sfac-lms-team-b.vercel.app",
    },
  },
  ////////////////////////////////////////////////////////////////////////////////
  {
    DESC: {
      SUMMARY: (
        <>
          <TagBox
            clickHandler={() =>
              linkHandler("https://parkjeongdo.tistory.com/112")
            }
            text="Numble 🔗"
            type="BLOG"
          />
          에서 제공해준 기획서 따라 구현 (과제 구현 방식)
        </>
      ),
      STACK: ["React", "Typescript", "Axios", "Styled-Components"],
      CONTRIBUTION: [
        <span>
          참가자 18명 중 <TagBox text="1등🎖" type="HIGHLIGHT" />
        </span>,
        <span>
          <TagBox text="Axios Interceptor" type="HIGHLIGHT" />
          활용하여 토큰 재발급 및 헤더에 토큰 설정 일괄 처리
        </span>,
        <span>
          <TagBox text="custom hook" type="HIGHLIGHT" /> 활용하여 UI와 로직을
          분리한 컴포넌트 설계
        </span>,
        <span>회원가입, 로그인 구현</span>,
        <span>기획서의 모든 요구사항 구현</span>,
      ],
    },
    INFO: {
      IMG_URL: NumbleProject,
      TITLE: "Numble 과제",
      PARTICIPANT: "1인 개발",
      PERIOD: "23. 05 - 23. 05",
      GITHUB: "https://github.com/jeongdopark/date",
    },
  },
  {
    DESC: {
      SUMMARY: (
        <>
          <TagBox
            clickHandler={() =>
              linkHandler("https://parkjeongdo.tistory.com/112")
            }
            text="Numble 🔗"
            type="BLOG"
          />
          에서 제공해준 기획서 따라 구현 (과제 구현 방식)
        </>
      ),
      STACK: ["React", "Typescript", "React-Query", "Styled-Components"],
      CONTRIBUTION: [
        <span>기획 및 프론트엔드 개발</span>,
        <span>상품페이지, 작가 페이지, 마이페이지 CRUD 작업</span>,
      ],
    },
    INFO: {
      IMG_URL: PPPICK,
      TITLE: "PPPICK",
      PARTICIPANT: "프론트엔드 2명 | 백엔드 3명",
      PERIOD: "23. 01 - 23. 02",
      GITHUB: "https://github.com/pickpickpick-project/pickpickpick-front",
    },
  },
];
