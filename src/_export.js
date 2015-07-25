import Alt from 'alt'
const alt =  new Alt();


const Data = {

  maxWidth: 1240,
  padding: 60,
  headerHeight: 100,

  colour1: '255,127,80,',
  colour2: 'rgba(147,174,203,1)',
  colour3: '#b9b9b9', 
  colour4: '#a6a6a6,',
  colour5: '#959595',
  colour6: '#868686',


  mobileClass: {
    padding: 30
  },

  mobile: 320,
  tablet: 768,
  tabletLandscape: 1024,
  
  webOnly: "@media screen and (min-width: 992px)",
  tabletOnly: "@media screen and (min-width: 768px) and (max-width: 991px)",
  mobileOnly: "@media screen and (max-width:767px)",
  mobileAndTablet: "@media screen and (max-width:991px)",
  
  logo: 'url(\'../assets/svg/logo.svg\')',
  menuBtn: 'url(../assets/svg/menu.svg)',
  heroImage: 'url(\'../assets/full_width1.jpg\')',

  icon1: 'url(\'../assets/svg/icon1.svg\')',
  icon2: 'url(\'../assets/svg/icon2.svg\')',
  icon3: 'url(\'../assets/svg/icon3.svg\')',

  image1: ['../assets/full_width1.jpg', 'image'],
  image2: ['../assets/full_width2.jpg', 'image'],
  video1: ['../assets/video/vid4.webm', 'video'],
  video2: ['../assets/video/vid2.webm', 'video'],
  lorem: 'Praesent tristique finibus justo, a interdum enim. Donec lobortis laoreet turpis, id suscipit sapien luctus a. Suspendisse id Praesent tristique finibus justo, a interdum enim. Donec lobortis laoreet turpis, id suscipit sapien luctus a. Suspendisse id',

}

export {alt, Data}

