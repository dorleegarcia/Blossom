import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Icon from "../Icon";
import Content from "../Content";

import swiperSettings from "./settings";
import { StyledSwiperVideo, StyledSwiperVideoIcon } from "./styles";

interface ISwiperVideoSlideProps {
  text: string;
  icons: string[];
}

interface ISwiperVideoProps {
  slides: ISwiperVideoSlideProps[];
}

function SwiperVideo({ slides }: ISwiperVideoProps): React.ReactElement {
  return (
    <StyledSwiperVideo>
      <Swiper
        modules={[Pagination]}
        breakpoints={swiperSettings}
        pagination={{ clickable: true }}
      >
        {slides.map(({ icons, text }, index) => (
          <SwiperSlide key={`swiperVideoSlide-${index.toString()}`}>
            <Content isCenter>
              <StyledSwiperVideoIcon>
                {icons.map((icon, iconIndex) => (
                  <Icon
                    size={60}
                    icon={icon}
                    key={`icon-${iconIndex.toString()}`}
                  />
                ))}
              </StyledSwiperVideoIcon>
              {text}
            </Content>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperVideo>
  );
}

export default SwiperVideo;
