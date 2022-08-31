import { useState } from "react";
import { useTranslation } from "react-i18next";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopCTA from "../components/ShopCTA";

import ShopSection from "../sections/shop";
import PolaSection from "../sections/pola";
import BowlSection from "../sections/bowl";
import IntroSection from "../sections/intro";
import VideoSection from "../sections/video";
import PhotosSection from "../sections/photos";
import RecipesSection from "../sections/recipes";
import KitchenSection from "../sections/kitchen";
import HubCoverSection from "../sections/hubCover";
import DescriptionSection from "../sections/description";
import ThymeDetailSection from "../sections/thymeDetails";
import InspirationsSection from "../sections/inspirations";

import useWindowWidth from "../utils/useWindowWidth";

function Home() {
  const { t } = useTranslation();
  const [isWindowWidthMobile, setWindowWidthMobile] = useState(true);

  useWindowWidth(setWindowWidthMobile);

  return (
    <>
      <Header />

      <main className="mixer-blossom">
        <IntroSection isStatic={false} />

        {!isWindowWidthMobile ? (
          <>
            <KitchenSection />
            <PolaSection />
            <ThymeDetailSection />
            <HubCoverSection />
            <BowlSection />
          </>
        ) : (
          <DescriptionSection />
        )}

        <InspirationsSection />
        <PhotosSection />
        <VideoSection />
        <RecipesSection />
        <ShopSection />

        <ShopCTA
          link={t("global.actions.shop.link")}
          label={t("global.actions.shop.label")}
        />
      </main>

      {/*<Footer />*/}
    </>
  );
}

export default Home;
