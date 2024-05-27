const newProfilePictureUrl = 'https://www.mukeshbishnoi.me/static/media/HeroImage.03690afec653a247fa58.png';

function replaceProfilePictures() {
  const profilePictures = document.querySelectorAll('img.feed-shared-actor__avatar-image, img.ivm-view-attr__img--centered');

  profilePictures.forEach(img => {
img.src = newProfilePictureUrl;
  });
}

replaceProfilePictures();

// Monitering for changes in the feed and replace profile pictures and feed pics, again if new content is loaded
const observer = new MutationObserver(replaceProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });
