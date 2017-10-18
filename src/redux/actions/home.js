import type from '../type';

export const changePathname = (pathname) => (disptch) => {
  if (pathname.length > 0) {
    disptch({
      type: type.changePathname,
      pathname
    });
  }
}