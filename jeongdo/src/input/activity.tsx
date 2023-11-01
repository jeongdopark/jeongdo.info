import TagBox from "../components/TagBox";
import { linkHandler } from "../utils/linkHandler";
export interface ILink {
  type: string;
  url: string;
}

export interface IActivity {
  TITLE: string;
  PERIOD: string;
  LINK: ILink[];
  DESC: React.ReactNode[];
}

export const ACTIVITY_LIST: IActivity[] = [
  {
    TITLE: "[우데미X웅진씽크빅X스나이퍼팩토리] React 교육",
    PERIOD: "23. 05 - 23. 08",
    LINK: [],
    DESC: [
      <span>리액트 이론 교육 6주</span>,
      <span>협업 프로젝트 4주</span>,
      <span>
        참가자 80명 중
        <TagBox text="우수 5인🎖" type="HIGHLIGHT" />
        선정
      </span>,
    ],
  },
  {
    TITLE: "테오의 스프린트 15기",
    PERIOD: "23. 06 - 23. 06",
    LINK: [
      {
        type: "github",
        url: "https://github.com/TeoSprint15-10/NAVOGUE-FE",
      },
    ],
    DESC: [
      <span>
        6일간
        <TagBox text="기획" type="HIGHLIGHT" />
        부터
        <TagBox text="개발" type="HIGHLIGHT" />
        및
        <TagBox text="배포" type="HIGHLIGHT" />
        진행
      </span>,
      <span>
        스프린트 회고 글 작성
        <TagBox
          clickHandler={() =>
            linkHandler("https://parkjeongdo.tistory.com/110")
          }
          text="BLOG 🔗"
          type="BLOG"
        />
      </span>,
    ],
  },
  {
    TITLE: "원티드 프리온보딩 인턴십",
    PERIOD: "23. 04 - 23. 05",
    LINK: [
      {
        type: "github",
        url: "https://github.com/wanted-Team-7/pre-onboarding-10th-2-7",
      },
      {
        type: "github",
        url: "https://github.com/wanted-Team-7/pre-onboarding-10th-4-7",
      },
    ],
    DESC: [
      <span>기업 과제 훈련</span>,
      <span>
        검색창 + 검색어 추천 기능 + 캐싱 기능
        <ol>
          <li>디바운스와 로컬 캐싱 구현으로 API호출 최소화</li>
        </ol>
      </span>,
      <span>
        추천 기능 구현 + 무한 스크롤
        <ol>
          <li>Intersection Observer API무한스크롤 구현</li>
        </ol>
      </span>,
    ],
  },
];
