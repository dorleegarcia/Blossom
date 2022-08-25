import { breakpoints } from "../assets/styles/mediaqueries";

const isMobile = (): boolean => window.innerWidth < breakpoints[0];

export default isMobile;
