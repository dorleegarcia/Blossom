import { useTranslation } from "react-i18next";

import Button from "../Button";

import {
  StyledRecipe,
  StyledRecipeBackground,
  StyledRecipeBackgroundImg,
  StyledRecipeContent,
  StyledRecipeContentText,
} from "./styles";

interface IRecipeProps {
  title: string;
  text: string;
  href: string;
  visual: string;
}

function Recipe({
  title,
  text,
  href,
  visual,
}: IRecipeProps): React.ReactElement {
  const { t } = useTranslation();

  return (
    <StyledRecipe>
      <StyledRecipeBackground>
        <StyledRecipeBackgroundImg src={visual} alt={title} />
      </StyledRecipeBackground>

      <StyledRecipeContent>
        <h4>{title}</h4>
        <StyledRecipeContentText>{text}</StyledRecipeContentText>
        <Button href={href} label={t("recipes.actions.explore.label")} />
      </StyledRecipeContent>
    </StyledRecipe>
  );
}

export default Recipe;
