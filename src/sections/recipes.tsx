import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import Section from "../components/Section";
import BlossomText from "../components/BlossomText";
import SwiperRecipes from "../components/SwiperRecipes";
import SectionContent from "../components/SectionContent";

import { BlossomTextSizes } from "../components/BlossomText/types";

function RecipesSection() {
  const { t } = useTranslation();
  const [refSection, sectionInView] = useInView();

  return (
    <Section ref={refSection} isInView={sectionInView}>
      <SectionContent>
        <h2>
          <BlossomText size={BlossomTextSizes.Small} />
          {t("recipes.title")}
        </h2>
        <h3>{t("recipes.subtitle")}</h3>
        <SwiperRecipes
          slides={t("recipes.recipesList", { returnObjects: true }) as []}
        />
      </SectionContent>
    </Section>
  );
}

export default RecipesSection;
