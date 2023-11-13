import TagBox from "../components/Resume/TagBox";
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
          개인 소개를 위한 페이지를 개발 중입니다.
          <br />
          추후 블로그 포스팅 진행 예정입니다.
        </>
      ),
      STACK: ["React", "Styled-Components", "Typescript"],
      CONTRIBUTION: [
        <div>
          <TagBox text="AWS" type="HIGHLIGHT" /> S3, Route 53, CloudFront 배포
        </div>,
        <div>
          <TagBox text="반응형" type="HIGHLIGHT" /> 구현
        </div>,
      ],
    },
    INFO: {
      IMG_URL: Jeongdo,
      TITLE: "Jeongdo.info",
      PARTICIPANT: "개인 개발",
      PERIOD: "23. 11 - 진행 중",
      GITHUB: "https://github.com/jeongdopark/jeongdo.info",
      DEPLOY: "https://jeongdo.info",
    },
  },
  ////////////////////////////////////////////////////////////////////////////////
  {
    DESC: {
      SUMMARY: <>알고리즘 스터디의 체계적 관리에 도움 주는 서비스입니다.</>,
      STACK: [
        "Next.js",
        "Typescript",
        "Redux-Toolkit",
        "RTK-Query",
        "Styled-Components",
        "Vercel",
      ],
      CONTRIBUTION: [
        <div>
          <TagBox text="합성 컴포넌트 패턴" type="HIGHLIGHT" />
          활용하여 공통 컴포넌트 설계
          <TagBox
            clickHandler="https://parkjeongdo.tistory.com/117"
            text="BLOG"
            type="BLOG"
          />
        </div>,
        <div>
          RTK-Query에 Axios 적용
          <TagBox
            clickHandler="https://parkjeongdo.tistory.com/115"
            text="BLOG"
            type="BLOG"
          />
        </div>,
        <div>
          Axios Interceptor 활용
          <TagBox
            clickHandler="https://parkjeongdo.tistory.com/116"
            text="BLOG"
            type="BLOG"
          />
        </div>,
        <div>
          <TagBox text="다크모드" type="HIGHLIGHT" />
          구현
          <TagBox
            clickHandler="https://parkjeongdo.tistory.com/112"
            text="BLOG"
            type="BLOG"
          />
        </div>,
        <div>
          <TagBox text="chat.js" type="HIGHLIGHT" />
          사용하여 데이터 시각화
        </div>,
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
      SUMMARY: <>LMS (Learning Management System ) 학습관리시스템입니다.</>,
      STACK: [
        "Next.js",
        "Typescript",
        "Redux-Toolkit",
        "React-Query",
        "tailwindcss",
        "Firebase",
      ],
      CONTRIBUTION: [
        <div>
          <TagBox text="테스트 계정" type="HIGHLIGHT" /> ID: test@test.com, PW:
          test1234
        </div>,
        <div>
          <TagBox text="팀장" type="HIGHLIGHT" />
          역할로서 데일리 스크럼 및 스프린트 계획 진행
        </div>,
        <div>강의실 페이지 UI</div>,
        <div>관리자, 수강생 권한 분기 처리</div>,
        <div>Drag and Drop 강의 순서 변경</div>,
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
            clickHandler="https://www.numble.it"
            text="Numble"
            type="BLOG"
          />
          에서 제공해준 기획서 따라 구현한 프로젝트입니다.
        </>
      ),
      STACK: ["React", "Typescript", "Axios", "Styled-Components"],
      CONTRIBUTION: [
        <div>
          참가자 18명 중 <TagBox text="1등🎖" type="HIGHLIGHT" />
        </div>,
        <div>
          <TagBox text="Axios Interceptor" type="HIGHLIGHT" />
          활용하여 토큰 재발급 및 헤더에 토큰 설정 일괄 처리
        </div>,
        <div>
          <TagBox text="custom hook" type="HIGHLIGHT" /> 활용하여 UI와 로직을
          분리한 컴포넌트 설계
        </div>,
        <div>회원가입, 로그인 구현</div>,
        <div>기획서의 모든 요구사항 구현</div>,
      ],
    },
    INFO: {
      IMG_URL: NumbleProject,
      TITLE: "Numble 과제",
      PARTICIPANT: "개인 개발",
      PERIOD: "23. 05 - 23. 05",
      GITHUB: "https://github.com/jeongdopark/date",
    },
  },
  {
    DESC: {
      SUMMARY: (
        <>
          <div>
            개인 맞춤형 일러스트/그림/디자인을 제작 의뢰하는 서비스입니다.
          </div>
        </>
      ),
      STACK: ["React", "Typescript", "React-Query", "Styled-Components"],
      CONTRIBUTION: [
        <div>기획 및 프론트엔드 개발</div>,
        <div>상품페이지, 작가 페이지, 마이페이지 CRUD 작업</div>,
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
