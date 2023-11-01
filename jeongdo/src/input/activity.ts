export interface ILink {
  type: string;
  url: string;
}

export interface IActivity {
  TITLE: string;
  PERIOD: string;
  LINK: ILink[];
  DESC: string[];
}

export const ACTIVITY_LIST: IActivity[] = [
  {
    TITLE: "원티드 프리온보딩 인턴십",
    PERIOD: "23. 06 - 23. 08",
    LINK: [
      {
        type: "github",
        url: "www.github.com",
      },
      {
        type: "blog",
        url: "www.naver.com",
      },
    ],
    DESC: [
      "test입니다. test입니다. test입니다.",
      "test입니다. test입니다. test입니다.",
      "test입니다. test입니다. test입니다.",
    ],
  },
  {
    TITLE: "원티드 프리온보딩 인턴십",
    PERIOD: "23. 06 - 23. 08",
    LINK: [],
    DESC: [
      "test입니다. test입니다. test입니다.",
      "test입니다. test입니다. test입니다.",
      "test입니다. test입니다. test입니다.",
    ],
  },
];
