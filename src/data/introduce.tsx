import TagBox from "../components/Resume/TagBox";
import { SVG } from "../components/SVG";
import { linkHandler } from "../utils/linkHandler";

export const PORTFOLIO = (
  <div>
    간단한 요약을 위한 이력서입니다. 포트폴리오는
    <TagBox
      clickHandler={
        "https://www.notion.so/Portfolio-f8a581ab604144fa8c8acb8ad7e23b0b?pvs=21"
      }
      content={SVG.Link}
      type="LINK"
    />
    클릭해 주세요.
  </div>
);

export const INTRODUCE = (
  <span>
    기술력을 바탕으로 동료에게 좋은 영향력을, <br /> 사용자에게 편리함을
    제공하는 것이 프론트엔드 개발자로서 저의 목표입니다.
    <br />
    목표의 중요한 기반이 되는 개발 능력을 키우기 위해
    <TagBox content="꾸준한 노력과 성장" type="HIGHLIGHT" />
    중에 있습니다.
    <br />
    • 기술 블로그와 프론트엔드 컨퍼런스 영상을 즐겨 찾아보며 학습하고 있습니다.
    <br />
    • 문제 해결 과정과 학습한 내용 그리고 회고록을 꾸준하게 블로그에 포스팅
    중입니다.
    <br />
    <br />
    <br />
    서비스 개발은 다양한 직군이 하나의 가치를 만들어가는 여정이라고 생각합니다.
    <br />
    그만큼 소통이 중요하다 생각하며,
    <TagBox content="부드럽지만 정확한" type="HIGHLIGHT" />
    의사 표현을 지향합니다.
    <br />• 2023.01 - 2023.09 기간 동안 총 4개의 크고 작은 협업 프로젝트를
    진행했습니다.
    <br />• 프로젝트에서 디자이너, PM, 백엔드 개발자, 프런트엔드 개발자 모든
    직군과 소통한 경험이 있습니다.
    <br />• 팀의 프로젝트 테스크를 관리하는 팀장 역할을 맡아 본 경험이 있습니다.
  </span>
);
