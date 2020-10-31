export function lazyLoadImage(
  images: Array<HTMLImageElement>,
  defaultSrc: string,
  dataSrc: string,
) {
  const len = images.length;
  const n = 0;

  return function () {
    const seeHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = n; i < len; i++) {
      if (images[i].offsetTop < seeHeight + scrollTop) {
        if (images[i].getAttribute('src') === defaultSrc) {
          const _dataSrc = images[i].getAttribute(dataSrc);
          if (_dataSrc) {
            images[i].src = _dataSrc;
          }
        }
      }
    }
  };
}
