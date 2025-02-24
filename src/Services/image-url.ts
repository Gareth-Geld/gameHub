const getCroppedImage = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const urlMod = "crop/600/400/";
  const newUrl = url.slice(0, index) + urlMod + url.slice(index);
  return newUrl;
};

export default getCroppedImage;
