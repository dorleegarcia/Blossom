import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopCTA from "../components/ShopCTA";

import ShopSection from "../sections/shop";
import IntroSection from "../sections/intro";
import VideoSection from "../sections/video";
import PhotosSection from "../sections/photos";
import RecipesSection from "../sections/recipes";
import DescriptionSection from "../sections/description";

export function IndexStatic() {
  const { t } = useTranslation();

  return (
    <>
      <main className="mixer-blossom">
        <IntroSection isStatic />
        <DescriptionSection />
        <PhotosSection />
        <VideoSection />
        <RecipesSection />
        <ShopSection />

        <ShopCTA
          label={t("global.actions.shop.label")}
          link={t("global.actions.shop.link")}
        />
      </main>

      <Footer />
    </>
  );
}

export default IndexStatic;
