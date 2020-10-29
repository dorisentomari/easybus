export function lazyLoadImage(images: Array<HTMLImageElement>, defaultSrc: string, dataSrc: string) {
  let len = images.length;
  let n = 0;

  return function () {
    let seeHeight = document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = n; i < len; i++) {
      if(images[i].offsetTop < seeHeight + scrollTop) {
        if (images[i].getAttribute('src') === defaultSrc) {
          let _dataSrc = images[i].getAttribute(dataSrc);
          if (_dataSrc) {
            images[i].src = _dataSrc;
          }
        }
      }
    }
  };
}
