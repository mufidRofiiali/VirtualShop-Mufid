// import HomePage from '../pages/home.f7';
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/utama.f7';
import FormPage from '../pages/form.f7';
import Dialog from '../pages/pm_dialog.f7';
import slide from '../pages/slide.f7';
import Geser from '../pages/asus.f7';
import Jendela from '../pages/rumah.f7';
import Padel from '../pages/kemeja.f7';
import Bola from '../pages/jam.f7';
import Bulutangkis from '../pages/hoodie.f7';
import Adidas from '../pages/sepatu.f7';
import Fore from '../pages/iphone.f7';
import Window from '../pages/innova.f7';
import Tomorrow from '../pages/zx400.f7';
import Tiket from '../pages/voucher.f7';
import Alamat from '../pages/rt04.f7';
import Ubah from '../pages/kontak.f7';
import Edit from '../pages/ubah.f7';
import Forgot from '../pages/password.f7';
import Register from '../pages/daftarsekarang.f7';
import Teknologi from '../pages/elektronik.f7';


import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';



var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dialog/',
    component: Dialog,
  },
  {
    path: '/slide/',
    component: slide,
  },
  {
    path: '/geser/',
    component: Geser,
  },
  {
    path: '/jendela/',
    component: Jendela,
  },
  {
    path: '/padel/',
    component: Padel,
  },
  {
    path: '/bola/',
    component: Bola,
  },
  {
    path: '/bulutangkis/',
    component: Bulutangkis,
  },
  {
    path: '/adidas/',
    component: Adidas,
  },
  {
    path: '/fore/',
    component: Fore,
  },
  {
    path: '/window/',
    component: Window,
  },
  {
    path: '/tomorrow/',
    component: Tomorrow,
  },
  {
    path: '/tiket/',
    component: Tiket,
  },
  {
    path: '/alamat/',
    component: Alamat,
  },
  {
    path: '/ubah/',
    component: Ubah,
  },
  {
    path: '/edit/',
    component: Edit,
  },
  {
    path: '/forgot/',
    component: Forgot,
  },
  {
    path: '/register/',
    component: Register,
  },
  {
    path: '/teknologi/',
    component: Teknologi,
  },
  
  
  
  


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;