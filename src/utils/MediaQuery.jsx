export const BREAKPOINT_PC = 'pc';
export const BREAKPOINT_TABLET = 'tablet';
export const BREAKPOINT_PHONE = 'phone';

/**
 * 미디어쿼리 사용방법 -> Styled 컴포넌트 안에서 호출
 *
 * ex)
 * ${mediaQuries(BREAKPOINT_PC)}{
 *  PC Size에 맞는 SCSS
 * }
 */

export const breakpoints = {
  phone: 456,
  tablet: 768,
};

export const MediaQueries = (key) => {
  console.log(breakpoints[key]);
  return `@media (max-width:${breakpoints[key]}px)`;
};
