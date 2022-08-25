import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import Title from "../components/Title";
import Section from "../components/Section";
import SwiperVideo from "../components/SwiperVideo";
import SectionContent from "../components/SectionContent";
import BackgroundVideo from "../components/BackgroundVideo";

function VideoSection() {
  const { t } = useTranslation();
  const [refSection, sectionInView] = useInView();

  return (
    <Section ref={refSection} isInView={sectionInView}>
      <BackgroundVideo video={t("video.video")} />

      <SectionContent isLight isInView={sectionInView}>
        <Title title={t("video.title")} />
        <SwiperVideo
          slides={t("video.slides", { returnObjects: true }) as []}
        />
      </SectionContent>
    </Section>
  );
}

export default VideoSection;
