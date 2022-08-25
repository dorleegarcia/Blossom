import { useState } from "react";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import Button from "../components/Button";
import Actions from "../components/Actions";
import Columns from "../components/Columns";
import Content from "../components/Content";
import Section from "../components/Section";
import BlossomText from "../components/BlossomText";
import SectionContent from "../components/SectionContent";
import BlossomAnimations from "../components/BlossomAnimations";

import useWindowWidth from "../utils/useWindowWidth";

import {
  BlossomTextSizes,
  BlossomTextColors,
} from "../components/BlossomText/types";
import { SectionBackgroundGradients } from "../components/Section/types";
import BlossomAnimationsHideStates from "../components/BlossomAnimations/types";

function ShopSection() {
  const { t } = useTranslation();
  const [refSection, sectionInView] = useInView();
  const [isWindowWidthMobile, setWindowWidthMobile] = useState(true);

  useWindowWidth(setWindowWidthMobile);

  return (
    <Section
      ref={refSection}
      isInView={sectionInView}
      background={SectionBackgroundGradients.Blossom}
    >
      <SectionContent isLight>
        <Columns>
          <div>
            <img
              alt={t("global.alt.mixer")}
              src="/images/sections/shop/mixer.png"
            />
          </div>

          <Content isCenter>
            <h2>
              {parse(t("shop.title"))}
              <BlossomText
                size={BlossomTextSizes.Small}
                color={BlossomTextColors.White}
              />
            </h2>
            <Actions>
              <Button
                href={t("shop.actions.shop.link")}
                label={t("shop.actions.shop.label")}
              />
            </Actions>
          </Content>
        </Columns>
      </SectionContent>

      {!isWindowWidthMobile && (
        <BlossomAnimations
          isSmall
          isHide={BlossomAnimationsHideStates.Hide75}
        />
      )}
    </Section>
  );
}

export default ShopSection;
