import { useTranslation } from "react-i18next";

import {
  StyledBlossomAnimations,
  StyledBlossomAnimationsLeft,
  StyledBlossomAnimationsRight,
  StyledBlossomAnimationsImageLeft1,
  StyledBlossomAnimationsImageLeft2,
  StyledBlossomAnimationsImageRight1,
  StyledBlossomAnimationsImageRight2,
} from "./styles";
import BlossomAnimationsHideStates from "./types";

interface IBlossomAnimationsProps {
  isFixed?: boolean;
  isSmall?: boolean;
  isHide?: BlossomAnimationsHideStates;
}

function BlossomAnimations({
  isFixed = false,
  isSmall = false,
  isHide = BlossomAnimationsHideStates.Hide0,
}: IBlossomAnimationsProps): React.ReactElement {
  const { t } = useTranslation();

  return (
    <StyledBlossomAnimations isSmall={isSmall} isFixed={isFixed}>
      <StyledBlossomAnimationsLeft isHide={isHide}>
        <StyledBlossomAnimationsImageLeft1>
          <img
            alt={t("global.alt.plants")}
            src="/images/plants/plants-left1.png"
          />
        </StyledBlossomAnimationsImageLeft1>
        <StyledBlossomAnimationsImageLeft1>
          <img
            alt={t("global.alt.plants")}
            src="/images/plants/plants-left2.png"
          />
        </StyledBlossomAnimationsImageLeft1>
        <StyledBlossomAnimationsImageLeft2>
          <img
            alt={t("global.alt.plants")}
            src="/images/plants/plants-left3.png"
          />
        </StyledBlossomAnimationsImageLeft2>
        <StyledBlossomAnimationsImageLeft2>
          <img
            alt={t("global.alt.plants")}
            src="/images/plants/plants-left4.png"
          />
        </StyledBlossomAnimationsImageLeft2>
        <StyledBlossomAnimationsImageLeft1>
          <img
            alt={t("global.alt.plants")}
            src="/images/plants/plants-left5.png"
          />
        </StyledBlossomAnimationsImageLeft1>
        <StyledBlossomAnimationsImageLeft2>
          <img
            alt={t("global.alt.plants")}
            src="/images/plants/plants-left6.png"
          />
        </StyledBlossomAnimationsImageLeft2>
        <StyledBlossomAnimationsImageLeft2>
          <img
            alt={t("global.alt.plants")}
            src="/images/plants/plants-left7.png"
          />
        </StyledBlossomAnimationsImageLeft2>
      </StyledBlossomAnimationsLeft>

      <StyledBlossomAnimationsRight isHide={isHide}>
        <StyledBlossomAnimationsImageRight1>
          <img
            alt={t("global.alt.plants")}
            src="/images/plants/plants-right1.png"
          />
        </StyledBlossomAnimationsImageRight1>
        <StyledBlossomAnimationsImageRight2>
          <img
            alt={t("global.alt.plants")}
            src="/images/plants/plants-right2.png"
          />
        </StyledBlossomAnimationsImageRight2>
        <StyledBlossomAnimationsImageRight1>
          <img
            alt={t("global.alt.plants")}
            src="/images/plants/plants-right3.png"
          />
        </StyledBlossomAnimationsImageRight1>
        <StyledBlossomAnimationsImageRight2>
          <img
            alt={t("global.alt.plants")}
            src="/images/plants/plants-right4.png"
          />
        </StyledBlossomAnimationsImageRight2>
        <StyledBlossomAnimationsImageRight2>
          <img
            alt={t("global.alt.plants")}
            src="/images/plants/plants-right5.png"
          />
        </StyledBlossomAnimationsImageRight2>
      </StyledBlossomAnimationsRight>
    </StyledBlossomAnimations>
  );
}

export default BlossomAnimations;
