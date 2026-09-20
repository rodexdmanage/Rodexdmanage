const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const tiktokSection = document.querySelector('.tiktok-showcase');
const tiktokEmbed = document.querySelector('.tiktok-embed');

if (tiktokSection && tiktokEmbed) {
  const playWhenVisible = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tiktokEmbed.setAttribute('data-autoplay', '1');
        tiktokEmbed.setAttribute('data-mutate', '1');
        tiktokEmbed.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        playWhenVisible.unobserve(tiktokSection);
      }
    });
  }, { threshold: 0.5 });

  playWhenVisible.observe(tiktokSection);
}
