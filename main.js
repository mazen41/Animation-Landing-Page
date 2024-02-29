let h2 = document.getElementById('title_h2');
let p = document.getElementById('title_p');
let main_title_p = document.getElementById('main_title_p');
let main_title_h2 = document.getElementById('main_title_h2');
let title = document.getElementById('title');
let boxOne = document.getElementById('boxOne');
let boxTwo = document.getElementById('boxTwo');
let boxThree = document.getElementById('boxThree');
let boxFour = document.getElementById('boxFour');
let boxFive = document.getElementById('boxFive');
let boxSix = document.getElementById('boxSix');
let main_button = document.getElementById('button');
let projectOne = document.getElementById('projectOne');
let projectTwo = document.getElementById('projectTwo');
let projectThree = document.getElementById('projectThree');
let projectFour = document.getElementById('projectFour');
let newsTitle = document.getElementById('news-title');
let newsBoxOne = document.getElementById('newsBoxOne');
let newsBoxTwo = document.getElementById('newsBoxTwo');
let newsBoxThree = document.getElementById('newsBoxThree');
let newsButton = document.getElementById('newsButton');
let footerTitle = document.getElementById('footerTitle');
let mainFooterH3 = document.getElementById('mainFooterH3');
let mainFooterButton = document.getElementById('mainFooterButton');
var lines = document.getElementById('lines');
var sidebar = document.getElementById('sidebar');
var overlay = document.getElementById('overlay');
var closeBtn = document.getElementById('close');
lines.onclick = () => {
  sidebar.style.transform = 'translate(-110px)';
  // sidebar.style.display = 'block';
  overlay.style.display = 'block';
}
closeBtn.onclick = () => {
  sidebar.style.transform = 'translate(250px)';
  overlay.style.display = 'none';
}
// window.onscroll = () => {

//   if(scrollY >= 150) {
//     h2.style.opacity =  1;
//     p.style.opacity =  1;
//     p.style.animation = 'fadeInUpWords 1s ease-in-out';
//     h2.style.animation = 'fadeInUpWords 1s ease-in-out';
//   }else {
//     h2.style.animation = '';
//     h2.style.opacity = '0';
//     p.style.animation = '';
//     p.style.opacity = '0';
//   }
//   if(scrollY >= 300) {
//     title.style.animation = 'fadeInUpWords 1s ease-in-out';
//     title.style.opacity = 1;
//   }else {
//     title.style.animation = '';
//     title.style.opacity = 0;
//   }
//   if(scrollY >= 700) {
//     boxOne.style.animation = 'fadeInUp 1s ease-in-out';
//     boxTwo.style.animation = 'fadeInUp 1s ease-in-out';
//     boxTwo.style.animationDelay = '0.2s';
//     boxThree.style.animation = 'fadeInUp 1s ease-in-out';
//     boxThree.style.animationDelay = '0.4s';
//     boxFour.style.animation = 'fadeInUp 1s ease-in-out';
//     boxFour.style.animationDelay = '0.6s';
//     boxFive.style.animation = 'fadeInUp 1s ease-in-out';
//     boxFive.style.animationDelay = '0.8s';
//     boxSix.style.animation = 'fadeInUp 1s ease-in-out';
//     boxSix.style.animationDelay = '1s';
//   }else {
//     boxOne.style.animation = '';
//     boxTwo.style.animation = '';
//     boxTwo.style.animationDelay = '';
//     boxThree.style.animation = '';
//     boxThree.style.animationDelay = '';
//     boxFour.style.animation = '';
//     boxFour.style.animationDelay = '';
//     boxFive.style.animation = '';
//     boxFive.style.animationDelay = '';
//     boxSix.style.animation = '';
//     boxSix.style.animationDelay = '';
//   }
//   if(scrollY >= 1200) {
//     main_button.style.animation = 'FadeLeft 1s ease-in-out';
//   }else {
//     main_button.style.animation = '';
//   }
//   if(scrollY >= 1837) {
//     projectsTitle.style.animation = 'FadeRight 1s ease-in-out';
//   }else {
//     projectsTitle.style.animation = '';
//   }
//   if(scrollY >= 1952) {
//     projectOne.style.animation = 'imagesFadeLeft 2s ease';
//     projectTwo.style.animation = 'imagesFadeRight 2s ease';
//   }else {
//     projectOne.style.animation = '';
//     projectTwo.style.animation = '';
//   }
//   if(scrollY >= 2416) {
//     projectThree.style.animation = 'imagesFadeLeft 2s ease';
//     projectFour.style.animation = 'imagesFadeRight 2s ease';
//   }else {
//     projectThree.style.animation = '';
//     projectFour.style.animation = '';
//   }
//   if(scrollY >= 3062) {
//     newsTitle.style.animation = 'fadeInUp 1s ease-in-out';
//   }else {
//     newsTitle.style.animation = '';
//   }
//   if(scrollY >= 3275) {
//     newsBoxOne.style.animation = 'fadeInUp 1s ease-in-out';
//     newsBoxTwo.style.animation = 'fadeInUp 1s ease-in-out';
//     newsBoxTwo.style.animationDelay = '0.2s'
//     newsBoxThree.style.animation = 'fadeInUp 1s ease-in-out';
//     newsBoxThree.style.animationDelay = '0.4s'
//   }else {
//     newsBoxOne.style.animation = '';
//     newsBoxTwo.style.animation = '';
//     newsBoxThree.style.animation = '';

//   }
//   if(scrollY >= 3839) {
//     newsButton.style.animation = 'FadeLeft 1s ease-in-out';
//   }else {
//     newsButton.style.animation = '';
//   }
//   if(scrollY >= 4515) {
//     footerTitle.style.animation = 'fadeInUp 1s ease-in-out';
//   }else {
//     footerTitle.style.animation = '';
//   }
//   if(scrollY >= 5213) {
//     mainFooterH3.style.animation = 'fadeInUp 1s ease-in-out';
//     mainFooterButton.style.animation = 'FadeLeft 1s ease-in-out';
//   }else {
//     mainFooterH3.style.animation = '';
//     mainFooterButton.style.animation = '';
//   }
// }





let animationsTriggered = {
  h2: false,
  title: false,
  boxes: false,
  main_button: false,
  projectsTitle: false,
  projectImages: false,
  newsTitle: false,
  newsBoxes: false,
  newsButton: false,
  footerTitle: false,
  mainFooterH3: false,
  mainFooterButton: false,
};

window.onscroll = () => {
  const scrollPosition = scrollY;

  // Animation for h2 and p
  if (scrollPosition >= 150 && !animationsTriggered.h2) {
    h2.style.opacity = 1;
    p.style.opacity = 1;
    p.style.animation = 'fadeInUpWords 1s ease-in-out';
    h2.style.animation = 'fadeInUpWords 1s ease-in-out';
    animationsTriggered.h2 = true;
  } else if (scrollPosition < 150) {
    h2.style.animation = '';
    h2.style.opacity = '0';
    p.style.animation = '';
    p.style.opacity = '0';
    animationsTriggered.h2 = false;
  }

  // Animation for title
  if (scrollPosition >= 300 && !animationsTriggered.title) {
    title.style.animation = 'fadeInUpWords 1s ease-in-out';
    title.style.opacity = 1;
    animationsTriggered.title = true;
  } else if (scrollPosition < 300) {
    title.style.animation = '';
    title.style.opacity = 0;
    animationsTriggered.title = false;
  }

  // Animation for boxes
  if (scrollPosition >= 700 && !animationsTriggered.boxes) {
    boxOne.style.animation = 'fadeInUp 1s ease-in-out';
    boxTwo.style.animation = 'fadeInUp 1s ease-in-out';
    boxTwo.style.animationDelay = '0.2s';
    boxThree.style.animation = 'fadeInUp 1s ease-in-out';
    boxThree.style.animationDelay = '0.4s';
    boxFour.style.animation = 'fadeInUp 1s ease-in-out';
    boxFour.style.animationDelay = '0.6s';
    boxFive.style.animation = 'fadeInUp 1s ease-in-out';
    boxFive.style.animationDelay = '0.8s';
    boxSix.style.animation = 'fadeInUp 1s ease-in-out';
    boxSix.style.animationDelay = '1s';
    animationsTriggered.boxes = true;
  } else if (scrollPosition < 700) {
    boxOne.style.animation = '';
    boxTwo.style.animation = '';
    boxTwo.style.animationDelay = '';
    boxThree.style.animation = '';
    boxThree.style.animationDelay = '';
    boxFour.style.animation = '';
    boxFour.style.animationDelay = '';
    boxFive.style.animation = '';
    boxFive.style.animationDelay = '';
    boxSix.style.animation = '';
    boxSix.style.animationDelay = '';
    animationsTriggered.boxes = false;
  }

  // Animation for main_button
  if (scrollPosition >= 1200 && !animationsTriggered.main_button) {
    main_button.style.animation = 'FadeLeft 1s ease-in-out';
    animationsTriggered.main_button = true;
  } else if (scrollPosition < 1200) {
    main_button.style.animation = '';
    animationsTriggered.main_button = false;
  }

  // Animation for projectsTitle
  if (scrollPosition >= 1837 && !animationsTriggered.projectsTitle) {
    projectsTitle.style.animation = 'FadeRight 1s ease-in-out';
    animationsTriggered.projectsTitle = true;
  } else if (scrollPosition < 1837) {
    projectsTitle.style.animation = '';
    animationsTriggered.projectsTitle = false;
  }

  // Animation for projectImages
  if (scrollPosition >= 1952 && !animationsTriggered.projectImages) {
    projectOne.style.animation = 'imagesFadeLeft 2s ease';
    projectTwo.style.animation = 'imagesFadeRight 2s ease';
    projectThree.style.animation = 'imagesFadeLeft 2s ease';
    projectFour.style.animation = 'imagesFadeRight 2s ease';
    animationsTriggered.projectImages = true;
  } else if (scrollPosition < 1952) {
    projectOne.style.animation = '';
    projectTwo.style.animation = '';
    projectThree.style.animation = '';
    projectFour.style.animation = '';
    animationsTriggered.projectImages = false;
  }

  // Animation for newsTitle
  if (scrollPosition >= 2416 && !animationsTriggered.newsTitle) {
    newsTitle.style.animation = 'fadeInUp 1s ease-in-out';
    animationsTriggered.newsTitle = true;
  } else if (scrollPosition < 2416) {
    newsTitle.style.animation = '';
    animationsTriggered.newsTitle = false;
  }

  // Animation for newsBoxes
  if (scrollPosition >= 3275 && !animationsTriggered.newsBoxes) {
    newsBoxOne.style.animation = 'fadeInUp 1s ease-in-out';
    newsBoxTwo.style.animation = 'fadeInUp 1s ease-in-out';
    newsBoxTwo.style.animationDelay = '0.2s';
    newsBoxThree.style.animation = 'fadeInUp 1s ease-in-out';
    newsBoxThree.style.animationDelay = '0.4s';
    animationsTriggered.newsBoxes = true;
  } else if (scrollPosition < 3275) {
    newsBoxOne.style.animation = '';
    newsBoxTwo.style.animation = '';
    newsBoxThree.style.animation = '';
    animationsTriggered.newsBoxes = false;
  }

  // Animation for newsButton
  if (scrollPosition >= 3839 && !animationsTriggered.newsButton) {
    newsButton.style.animation = 'FadeLeft 1s ease-in-out';
    animationsTriggered.newsButton = true;
  } else if (scrollPosition < 3839) {
    newsButton.style.animation = '';
    animationsTriggered.newsButton = false;
  }

  // Animation for footerTitle
  if (scrollPosition >= 4515 && !animationsTriggered.footerTitle) {
    footerTitle.style.animation = 'fadeInUp 1s ease-in-out';
    animationsTriggered.footerTitle = true;
  } else if (scrollPosition < 4515) {
    footerTitle.style.animation = '';
    animationsTriggered.footerTitle = false;
  }

  // Animation for mainFooterH3 and mainFooterButton
  if (scrollPosition >= 5213 && !animationsTriggered.mainFooterH3) {
    mainFooterH3.style.animation = 'fadeInUp 1s ease-in-out';
    mainFooterButton.style.animation = 'FadeLeft 1s ease-in-out';
    animationsTriggered.mainFooterH3 = true;
  } else if (scrollPosition < 5213) {
    mainFooterH3.style.animation = '';
    mainFooterButton.style.animation = '';
    animationsTriggered.mainFooterH3 = false;
  }

};
