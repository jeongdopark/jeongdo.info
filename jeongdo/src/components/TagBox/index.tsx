import { S } from "./style";
import { THEME } from "../../theme";
interface IProps {
  clickHandler?: () => void;
  text: string;
  type: keyof typeof TAG_TYPE_STYLE;
}

interface IStyle {
  BACKGROUND: string;
  COLOR: string;
  FONT?: string;
  WEIGHT?: string;
}

const TAG_TYPE_STYLE: Record<string, IStyle> = {
  TECH_STACK: {
    BACKGROUND: THEME.BACKGROUND.TECH_STACK,
    COLOR: THEME.COLOR.WHITE,
  },
  HIGHLIGHT: {
    BACKGROUND: THEME.BACKGROUND.SUMMARY,
    COLOR: THEME.COLOR.HIGHLIGHT,
  },
  BLOG: {
    BACKGROUND: THEME.BACKGROUND.BLOG,
    COLOR: THEME.COLOR.WHITE,
    FONT: THEME.FONT_SIZE.S,
    WEIGHT: THEME.FONT_WEIGHT.L,
  },
};

const TagBox = ({ clickHandler, text, type }: IProps) => {
  return (
    <S.Tag
      background={TAG_TYPE_STYLE[type].BACKGROUND}
      color={TAG_TYPE_STYLE[type].COLOR}
      font={TAG_TYPE_STYLE[type].FONT}
      weight={TAG_TYPE_STYLE[type].WEIGHT}
      onClick={clickHandler}
    >
      {text}
    </S.Tag>
  );
};

export default TagBox;
