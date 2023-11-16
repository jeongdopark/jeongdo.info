import TagBox from "../components/Resume/TagBox";
import { SVG } from "../components/SVG";
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
    TITLE: "[Udemy X 웅진씽크빅] React 교육",
    PERIOD: "23. 05 - 23. 08",
    LINK: [],
    DESC: [
      <div>리액트 이론 교육 6주</div>,
      <div>협업 프로젝트 4주</div>,
      <div>
        참가자 80명 중
        <TagBox content="우수 5인🎖" type="HIGHLIGHT" />
        선정
      </div>,
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
      <div>
        6일간
        <TagBox content="기획, 개발, 배포" type="HIGHLIGHT" />
        진행
      </div>,
      <div>
        스프린트 회고 글 작성
        <TagBox
          clickHandler={() => linkHandler("https://parkjeongdo.tistory.com/110")}
          content={SVG.Link}
          type="LINK"
        />
      </div>,
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
      <div>기업 과제 훈련</div>,
      <div>
        검색창, 검색어 추천 기능, 캐싱 기능
        <ol>
          <li>
            <div>디바운스와 로컬 캐싱 구현으로 API호출 최소화</div>
          </li>
        </ol>
      </div>,
      <div>
        추천 기능 구현, 무한 스크롤
        <ol>
          <li>
            <div>Intersection Observer API무한스크롤 구현</div>
          </li>
        </ol>
      </div>,
    ],
  },
];
