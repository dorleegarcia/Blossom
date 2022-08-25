import { StyledVisual, StyledVisualImg } from "./styles";

interface IVisualProps {
  alt: string;
  visual: string;
}

function Visual({ alt, visual }: IVisualProps): React.ReactElement {
  return (
    <StyledVisual>
      <StyledVisualImg src={visual} alt={alt} />
    </StyledVisual>
  );
}

export default Visual;
