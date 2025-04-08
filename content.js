const skipAds = () => {
  const skipBtn = document.querySelector('.ytp-ad-skip-button');
  if (skipBtn) skipBtn.click();

  const overlay = document.querySelector('.ytp-ad-overlay-close-button');
  if (overlay) overlay.click();

  const adElements = document.querySelectorAll('.ad-showing, .ytp-ad-player-overlay');
  adElements.forEach(el => (el.style.display = 'none'));
};

setInterval(skipAds, 1000);
