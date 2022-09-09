import { StyledShopCTA, StyledShopCTAImage } from "./styles";

interface IShopCTAProps {
  link: string;
  label: string;
}

function ShopCTA({ link, label }: IShopCTAProps): React.ReactElement {
  return (
    <StyledShopCTA href={link} target="_blank">
      {label}
      <StyledShopCTAImage>
        <img src="/images/shop.png" alt={label} />
      </StyledShopCTAImage>
    </StyledShopCTA>
  );
}

export default ShopCTA;
