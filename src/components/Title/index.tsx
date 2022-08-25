import parse from "html-react-parser";

import TitleColors from "./types";
import StyledTitle from "./styles";

interface ITitleProps {
  title: string;
  isSubtitle?: boolean;
  isAlignLeft?: boolean;
  backgroundColor?: TitleColors;
}

function Title({
  title,
  isSubtitle = false,
  isAlignLeft = false,
  backgroundColor = TitleColors.WhiteGrey,
}: ITitleProps): React.ReactElement {
  return (
    <StyledTitle backgroundColor={backgroundColor} isAlignLeft={isAlignLeft}>
      {isSubtitle ? <h3>{parse(title)}</h3> : <h2>{parse(title)}</h2>}
    </StyledTitle>
  );
}

export default Title;
