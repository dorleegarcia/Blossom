import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Recipe from "../Recipe";

import StyledSwiperRecipes from "./styles";

interface ISwiperRecipesSlideProps {
  title: string;
  text: string;
  href: string;
}

interface ISwiperRecipesProps {
  slides: ISwiperRecipesSlideProps[];
}

function SwiperRecipes({ slides }: ISwiperRecipesProps): React.ReactElement {
  return (
    <StyledSwiperRecipes>
      <Swiper
        loop
        centeredSlides
        loopedSlides={3}
        slidesPerView="auto"
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {slides.map(({ title, text, href }, index) => (
          <SwiperSlide key={`swiperRecipesSlide-${index.toString()}`}>
            <Recipe
              text={text}
              href={href}
              title={title}
              visual={`/images/sections/recipes/recipe${index + 1}.jpg`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperRecipes>
  );
}

export default SwiperRecipes;
