import { S } from "./style";
import Title from "../Title";
import { ACTIVITY_LIST, IActivity, ILink } from "../../input/activity";
import { SVG } from "../SVG";

const Activity = () => {
  return (
    <>
      <Title title="Activities." />
      <S.ActivityContainer>
        {ACTIVITY_LIST.map((activity: IActivity) => (
          <S.ActivityWrapper>
            <S.ActivityTitle>{activity.TITLE}</S.ActivityTitle>
            <S.ActivityPeriod>{activity.PERIOD}</S.ActivityPeriod>
            <S.LinkContainer>
              {activity.LINK.map((link: ILink) => (
                <a href={link.url}>
                  {link.type === "github" ? SVG.Github : SVG.Deploy}
                </a>
              ))}
            </S.LinkContainer>
            <S.Ul>
              {activity.DESC.map((desc: string) => (
                <S.Li>{desc}</S.Li>
              ))}
            </S.Ul>
          </S.ActivityWrapper>
        ))}
      </S.ActivityContainer>
    </>
  );
};

export default Activity;
