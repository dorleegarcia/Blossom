import { useEffect, useState } from "react";

import StyledHeader from "./styles";

function Header(): React.ReactElement {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <StyledHeader isSticky={scrollPosition > 20} />;
}

export default Header;
