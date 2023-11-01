import TagBox from "../components/TagBox";
import { linkHandler } from "../utils/linkHandler";

export interface IInfo {
  IMG_URL: string;
  TITLE: string;
  PERIOD: string;
  GITHUB: string;
  DEPLOY: string;
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

export const PROJECT: IProjectInfo[] = [
  {
    DESC: {
      SUMMARY: (
        <>
          test입니다test입니다test입니다test입니다. <br />
          test입니다test입니다test입니다test입니다.
        </>
      ),
      STACK: ["Next.js", "Styled-Components", "Redux-Toolkit"],
      CONTRIBUTION: [
        <span>
          <TagBox text="테스트" type="HIGHLIGHT" />
          test입니다test입니다test입니다test입니다.
          <TagBox text="테스트" type="HIGHLIGHT" />
          <TagBox
            clickHandler={() => linkHandler("www.naver.com")}
            text="BLOG 🔗"
            type="BLOG"
          />
        </span>,
        <span>test입니다test입니다test입니다test입니다.,</span>,
        <span>test입니다test입니다test입니다test입니다.,</span>,
        <span>test입니다test입니다test입니다test입니다.,</span>,
        <span>test입니다test입니다test입니다test입니다.,</span>,
      ],
    },
    INFO: {
      IMG_URL: "./assets/BAEKER.png",
      TITLE: "BAEKER",
      PERIOD: "23. 06 - 23. 10",
      GITHUB: "www.naver.com",
      DEPLOY: "www.naver.com",
    },
  },
  {
    DESC: {
      SUMMARY: (
        <>
          test입니다. <br />
          test입니다test입니다test입니다test입니다
        </>
      ),
      STACK: [
        "Next.js",
        "Styled-Components",
        "Redux-Toolkit",
        "RTK-Query",
        "Typescript",
        "aaa",
        "bbb",
        "ccc",
      ],
      CONTRIBUTION: [
        <span>
          <TagBox text="테스트" type="HIGHLIGHT" />
          test입니다test입니다test입니다test입니다.
          <TagBox text="테스트" type="HIGHLIGHT" />
          <TagBox
            clickHandler={() => linkHandler("www.naver.com")}
            text="BLOG 🔗"
            type="BLOG"
          />
        </span>,
        <span>test입니다test입니다test입니다test입니다.,</span>,
        <span>test입니다test입니다test입니다test입니다.,</span>,
        <span>test입니다test입니다test입니다test입니다.,</span>,
        <span>test입니다test입니다test입니다test입니다.,</span>,
      ],
    },
    INFO: {
      IMG_URL: "./assets/BAEKER.png",
      TITLE: "BAEKER",
      PERIOD: "23. 06 - 23. 10",
      GITHUB: "www.naver.com",
      DEPLOY: "www.naver.com",
    },
  },
];
