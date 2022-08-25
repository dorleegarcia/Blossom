import iconPath from "../../assets/icons/icons";

import { StyledIcon, StyledIconPath } from "./styles";

interface IIconProps {
  icon: string;
  size?: number;
  viewBox?: string;
}

function Icon({
  icon,
  size = 24,
  viewBox = "0 0 24 24",
}: IIconProps): React.ReactElement {
  return (
    <StyledIcon viewBox={viewBox} width={`${size}px`} height={`${size}px`}>
      <StyledIconPath d={iconPath[icon]} />
    </StyledIcon>
  );
}

export default Icon;
