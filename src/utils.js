export const isMobile = () => {
  return window.innerWidth <= 768;
};


export const scrollToId = (id) => {
  document.querySelector(id)?.scrollIntoView({
    behavior: 'smooth',
  });
};