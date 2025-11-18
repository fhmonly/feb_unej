// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  
  app: {
    head: {
      title: "FEB UNEJ Offical Website",
      meta: [
        { charset: "utf-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "author", content: "ThemeZaa" },
        { name: "viewport", content: "width=device-width,initial-scale=1.0" },
        {
          name: "Fakultas Ekonomi dan Bisnis Universitas Jember",
          content:
            "Fakultas Ekonomi dan Bisnis Universitas Jember adalah institusi pendidikan tinggi yang berkomitmen untuk mengembangkan ilmu ekonomi dan bisnis melalui pendidikan, penelitian, dan pengabdian kepada masyarakat.",
        },
      ],
      link: [
        { rel: "shortcut icon", href: "/images/unej.ico" },
        { rel: "apple-touch-icon", href: "/images/unej.ico" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/images/unej.ico" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/images/unej.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com", crossorigin: "anonymous" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        
        { rel: "stylesheet", href: "/css/settings.css" },
        { rel: "stylesheet", href: "/css/layers.css" },
        { rel: "stylesheet", href: "/css/navigation.css" },
        
        { rel: "stylesheet", href: "/css/vendors.min.css" },
        { rel: "stylesheet", href: "/css/icon.min.css" },
        { rel: "stylesheet", href: "/css/style.css" },
        { rel: "stylesheet", href: "/css/responsive.css" },
        { rel: "stylesheet", href: "/css/corporate.css" },
        {rel:"stylesheet",href:"https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css"}
      ],
      script: [
        { src: '/js/jquery.js', type: 'text/javascript', body:true },
        { src: '/js/vendors.js', type: 'text/javascript', body:true },
        { src: '/js/jquery.themepunch.revolution.min.js', type: 'text/javascript',body:true },
        { src: '/js/jquery.themepunch.tools.min.js', type: 'text/javascript',body:true },
        { src: '/js/main.js', type: 'text/javascript',body:true },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: 'https://superadmin.apssai.com', 
      // apiUrl: 'http://localhost:8000/', 
    },
  },
})
