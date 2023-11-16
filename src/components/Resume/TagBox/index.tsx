import { S } from "./style";
import { THEME } from "../../../style/theme";
import { ReactNode } from "react";
interface IProps {
  clickHandler?: () => void;
  content: string | ReactNode;
  type: keyof typeof TAG_TYPE_STYLE;
}

interface IStyle {
  BACKGROUND: string;
  COLOR: string;
  FONT?: string;
  WEIGHT?: string;
  DISPLAY?: string;
}

const TAG_TYPE_STYLE: Record<string, IStyle> = {
  TECH_STACK: {
    BACKGROUND: THEME.BACKGROUND.TECH_STACK,
    COLOR: THEME.COLOR.TECH_STACK,
    WEIGHT: THEME.FONT_WEIGHT.M,
  },
  HIGHLIGHT: {
    BACKGROUND: THEME.BACKGROUND.HIGHLIGHT,
    COLOR: THEME.COLOR.HIGHLIGHT,
    WEIGHT: THEME.FONT_WEIGHT.M,
  },
  LINK: {
    BACKGROUND: THEME.BACKGROUND.WHITE,
    COLOR: THEME.COLOR.BLACK,
    FONT: THEME.FONT_SIZE.S,
    WEIGHT: THEME.FONT_WEIGHT.L,
  },
};

const TagBox = ({ clickHandler, content, type }: IProps) => {
  return (
    <S.Tag
      background={TAG_TYPE_STYLE[type].BACKGROUND}
      color={TAG_TYPE_STYLE[type].COLOR}
      font={TAG_TYPE_STYLE[type].FONT}
      weight={TAG_TYPE_STYLE[type].WEIGHT}
      onClick={clickHandler}
      type={type}
    >
      {content}
    </S.Tag>
  );
};

export default TagBox;
