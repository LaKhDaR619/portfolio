import navStyles from "../styles/nav.module.css";

const setUpScroll = () => {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.${navStyles.nav__menu} a[href*=${sectionId}]`)
          .classList.add("active-link");
      } else {
        document
          .querySelector(`.${navStyles.nav__menu} a[href*=${sectionId}]`)
          .classList.remove("active-link");
      }
    });
  }
  window.addEventListener("scroll", scrollActive);
};

export default setUpScroll;
