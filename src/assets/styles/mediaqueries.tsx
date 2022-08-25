export const breakpoints = [
  768 /* Medium devices (landscape tablets, 768px and up) */,
  1025 /* Large devices (laptops/desktops, 1025px and up) */,
  1680 /* Extra large devices (large laptops and desktops, 1680px and up) */,
];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
