import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import Visual from "../components/Visual";
import Button from "../components/Button";
import Columns from "../components/Columns";
import Content from "../components/Content";
import Section from "../components/Section";

import cleanText from "../utils/cleanText";
import { ButtonType } from "../utils/types";

function PhotosSection() {
  const { t } = useTranslation();
  const [refSection, sectionInView] = useInView();

  return (
    <Section ref={refSection} isInView={sectionInView}>
      {(t("photos", { returnObjects: true }) as []).map(
        ({ title, text, actions: { shop } }, index) => (
          <Columns
            isInverted={index % 2 !== 0}
            key={`photo-${index.toString()}`}
          >
            <Visual
              alt={cleanText(title)}
              visual={`/images/sections/photos/photo${index + 1}.gif`}
            />

            <Content isPaddingLarge>
              <h3>{title}</h3>
              <p>{text}</p>
              <Button
                isSecondary
                href={(shop as ButtonType).link}
                label={(shop as ButtonType).label}
              />
            </Content>
          </Columns>
        )
      )}
    </Section>
  );
}

export default PhotosSection;
