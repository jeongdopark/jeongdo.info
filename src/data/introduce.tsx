import TagBox from "../components/Resume/TagBox";
import { linkHandler } from "../utils/linkHandler";

export const PORTFOLIO = (
  <div>
    간단한 요약을 위한 이력서입니다. 포트폴리오는
    <TagBox
      clickHandler={() =>
        linkHandler(
          "https://www.notion.so/Portfolio-f8a581ab604144fa8c8acb8ad7e23b0b?pvs=21"
        )
      }
      text="여기"
      type="BLOG"
    />
    를 클릭해주세요.
  </div>
);

export const INTRODUCE = (
  <span>
    기술력을 바탕으로 동료에게 좋은 영향력을, <br /> 사용자에게 편리함을
    제공하는 것이 프론트엔드 개발자로서 저의 목표입니다.
    <br />
    목표의 중요한 기반이 되는 개발 능력을 키우기 위해
    <TagBox text="꾸준한 노력과 성장" type="HIGHLIGHT" />
    중에 있습니다.
    <br />
    <br />
    서비스 개발은 다양한 직군이 하나의 가치를 만들어가는 여정이라고 생각합니다.
    <br />
    그만큼 소통이 중요하다 생각하며,
    <TagBox text="부드럽지만 정확한" type="HIGHLIGHT" />
    의사 표현을 지향합니다.
    <br />
  </span>
);
