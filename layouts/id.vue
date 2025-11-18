<template>
    <div>
        <!-- start header -->
        <header>
            <!-- start navigation -->
            <nav class="navbar navbar-expand-lg header-light bg-white disable-fixed">
                <div class="container-fluid">
                    <div class="col-auto col-xl-3 col-lg-2 me-lg-0 me-auto">
                        <a class="navbar-brand" href="/">
                            <img src="/images/apssai_head.webp" data-at2x="/images/apssai_head.webp" alt="" class="default-logo">
                            <img src="/images/apssai_head.webp" data-at2x="/images/apssai_head.webp" alt="" class="alt-logo">
                            <img src="/images/apssai_head.webp" data-at2x="/images/apssai_head.webp" alt="" class="mobile-logo">
                        </a>
                    </div>
                    <div class="col-auto col-xl-6 col-lg-8 menu-order position-static">
                        <button class="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a href="/id/" class="nav-link">Beranda</a></li>
                                <li class="nav-item"><a href="/id/about" class="nav-link">Tentang Kami</a></li>
                                <li class="nav-item dropdown dropdown-with-icon-style02">
                                    <a href="#" class="nav-link">Organisasi</a>
                                    <i class="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a href="/id/structure"><i class="fa-solid fa-sitemap"></i>Struktur</a></li>
                                        <li><a href="/id/mou"><i class="fa-solid fa-file-lines"></i>MOU & Kerjasama</a></li>
                                        <li><a href="/id/member"><i class="fa-solid fa-people-group"></i>Anggota</a></li>
                                        <li><a href="/id/partner"><i class="fa-solid fa-handshake-simple"></i>Mitra</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown dropdown-with-icon-style02">
                                    <a href="#" class="nav-link">Kegiatan</a>
                                    <i class="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a href="/id/blog"><i class="fa-solid fa-calendar"></i>Kegiatan</a></li>
                                        <li><a href="/id/gallery"><i class="fa-solid fa-images"></i>Foto</a></li>
                                        <li><a href="/id/video"><i class="fa-solid fa-video"></i>Video</a></li>
                                        <li><a href="/id/report"><i class="fa-solid fa-tachograph-digital"></i>Laporan</a></li>
                                        <li><a href="/id/webinar"><i class="fa-solid fa-microphone-lines"></i>Webinar</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a href="/id/contact" class="nav-link">Kontak</a></li>
                                <li class="nav-item"><a href="/id/faq" class="nav-link">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-auto col-xl-3 col-lg-2 text-end md-pe-0">
                        <div class="header-icon">
                            <div class="header-button ms-20px">
                                <a href="https://www.apar.apssai.org/" target="_blank" class="btn btn-rounded btn-transparent-light-gray border-1 btn-medium btn-switch-text text-transform-none">
                                    <span>
                                        <span class="btn-double-text fw-600" data-text="Jurnal">Jurnal</span>
                                    </span>
                                </a>
                            </div>
                            <div class="header-button ms-10px">
                                <a href="/en" class="btn btn-rounded btn-transparent-light-gray border-1 btn-medium btn-switch-text text-transform-none">
                                    <span>
                                        <span><img  src="/images/uk.png" alt="English Flag" style="width: 25px; height: auto;"></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- end navigation -->
        </header>
        <!-- end header -->
    </div>
    <slot/>
    
        <!-- start footer -->
        <footer class="footer-light p-0 position-relative">
            <div id="particles-04" class="position-absolute h-100 top-0 left-0 z-index-minus-1 w-100" data-particle="true" data-particle-options='{"particles": {"number": {"value": 5,"density": {"enable": true,"value_area": 1000}},"color":{"value":["#b7b9be", "#dd6531"]},"shape": {"type": "circle","stroke":{"width":0,"color":"#000000"}},"opacity": {"value": 0.5,"random": false,"anim": {"enable": false,"speed": 1,"sync": false}},"size": {"value": 8,"random": true,"anim": {"enable": false,"sync": true}},"move": {"enable": true,"speed":2,"direction": "right","random": false,"straight": false}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": false,"mode": "push"},"resize": true}},"retina_detect": false}'></div>
            <div class="container"> 
                <div class="row justify-content-center pt-7 sm-pt-50px">
                    <!-- start footer column -->
                    <div class="col-7 col-lg-3 col-md-12 col-sm-6 text-md-center text-lg-start md-mb-30px">
                        <a href="/" class="footer-logo mb-15px md-mb-20px d-inline-block"><img src="/images/apssai_head.webp" alt=""></a>
                        <p class="mb-20px">APSSAI (Asosiasi Program Studi S2 Akuntansi Indonesia) merupakan asosiasi pengelola program studi S2 yang saat ini beranggotakan Program Studi S2 Akuntansi atau Magister Akuntansi seluruh Indonesia.</p>
                        <div class="elements-social social-icon-style-02">
                            <ul class="medium-icon dark icon-with-animation">
                                <li><a class="facebook" href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a class="instagram" href="http://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- end footer column -->
                    <!-- start footer column -->
                    <div class="col-5 col-lg-2 col-md-2 col-sm-6 md-mb-30px">
                        <span class="alt-font d-block text-dark-gray fw-600 mb-10px fs-19">Tentang</span>
                        <ul>
                            <li><a href="/id/about">Tentang Kami</a></li>
                        </ul>
                    </div>
                    <!-- end footer column -->
                    <!-- start footer column -->
                    <div class="col-5 col-lg-2 col-md-2 col-sm-6 md-mb-30px">
                        <span class="alt-font d-block text-dark-gray fw-600 mb-10px fs-19">Organisasi</span>
                        <ul>
                            <li><a href="/id/structure">Structure</a></li>
                            <li><a href="/id/mou">MOU & Agreement</a></li>
                            <li><a href="/id/member">Members</a></li>
                            <li><a href="/id/partner">Partners</a></li>
                        </ul>
                    </div>
                    <!-- end footer column -->
                    <!-- start footer column -->
                    <div class="col-5 col-lg-2 col-md-2 col-sm-6 md-mb-30px">
                        <span class="alt-font d-block text-dark-gray fw-600 mb-10px fs-19">Activity</span>
                        <ul>
                            <li><a href="/id/blog">Activity</a></li>
                            <li><a href="/id/gallery">Gallery</a></li>
                            <li><a href="/id/video">Video</a></li>
                            <li><a href="/id/report">Annual Report</a></li>
                            <li><a href="/id/webinar">Webinar</a></li>
                        </ul>
                    </div>
                    <!-- end footer column -->
                    <!-- start footer column -->
                    <div class="col-5 col-lg-2 col-md-2 col-sm-6 md-mb-30px">
                        <span class="alt-font d-block text-dark-gray fw-600 mb-10px fs-19">Lainnya</span>
                        <ul>
                            <li><a href="/id/contact">Kontak</a></li>
                            <li><a href="/id/faq">FAQ</a></li>
                            <li><a href="https://www.apar.apssai.org/" target="_blank">Jurnal</a></li>
                        </ul>
                    </div>
                    <!-- end footer column -->
                </div> 
                <div class="row justify-content-center align-items-center pt-5 sm-pt-30px">
                    <!-- start divider -->
                    <div class="col-12">
                        <div class="divider-style-03 divider-style-03-01 border-color-extra-medium-gray"></div>
                    </div>
                    <!-- end divider -->
                    <!-- start copyright -->
                    <div class="col-lg-12 pt-25px pb-25px md-pt-0 fs-16 last-paragraph-no-margin order-2 order-lg-1 text-center text-lg-center">
                        <p>&copy; APSSAI INDONESIA </p>
                    </div>
                    <!-- end copyright -->
                </div>
            </div> 
        </footer>
        <!-- end footer -->
        <!-- start scroll progress -->
        <div class="scroll-progress d-none d-xxl-block">
          <a href="#" class="scroll-top" aria-label="scroll">
            <span class="scroll-text">Scroll</span><span class="scroll-line"><span class="scroll-point"></span></span>
          </a>
        </div>
        <!-- end scroll progress -->
</template>