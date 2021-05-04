// let isNotEventlock = true;

// const isNotEventlockTime = () => {
//   console.log("tlfgod");
//   setTimeout(() => {
//     return true;
//   }, 500);
// };

// window.addEventListener("scroll", async e => {
//   var currentScrollValue = document.documentElement.scrollTop;
//   var heightHalf = document.documentElement.clientHeight / 10;
//   console.log(JSON.stringify(e));
//   if (heightHalf > currentScrollValue && isNotEventlock) {
//     console.log(1);
//     isNotEventlock = false;
//     isNotEventlock = await isNotEventlockTime();
//   } else if (heightHalf < currentScrollValue && isNotEventlock) {
//     console.log(2);
//     isNotEventlock = false;
//     isNotEventlock = await isNotEventlockTime();
//   }
// });

var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener(
  "scroll",
  () => {
    // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      // downscroll code
      console.log("downscroll code");
    } else {
      // upscroll code
      console.log("upscroll code");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
