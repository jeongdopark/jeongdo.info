import { S } from "./style";
import { THEME } from "../../../style/theme";
interface IProps {
  clickHandler?: string;
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
    COLOR: THEME.COLOR.BLACK,
  },
  HIGHLIGHT: {
    BACKGROUND: THEME.BACKGROUND.HIGHLIGHT,
    COLOR: THEME.COLOR.BLACK,
  },
  BLOG: {
    BACKGROUND: THEME.BACKGROUND.BLOG,
    COLOR: THEME.COLOR.WHITE,
    FONT: THEME.FONT_SIZE.S,
    WEIGHT: THEME.FONT_WEIGHT.L,
  },
};

const TagBox = ({ clickHandler, text, type }: IProps) => {
  if (clickHandler) {
    return (
      <S.Tag
        background={TAG_TYPE_STYLE[type].BACKGROUND}
        color={TAG_TYPE_STYLE[type].COLOR}
        font={TAG_TYPE_STYLE[type].FONT}
        weight={TAG_TYPE_STYLE[type].WEIGHT}
      >
        <a href={clickHandler}>{text}</a>
      </S.Tag>
    );
  }
  return (
    <S.Tag
      background={TAG_TYPE_STYLE[type].BACKGROUND}
      color={TAG_TYPE_STYLE[type].COLOR}
      font={TAG_TYPE_STYLE[type].FONT}
      weight={TAG_TYPE_STYLE[type].WEIGHT}
    >
      {text}
    </S.Tag>
  );
};

export default TagBox;
