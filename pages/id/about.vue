<script setup>

    definePageMeta({
        layout: 'id'
    })
</script>

<template>
    
    <!-- start page title -->
    <section class="top-space-margin page-title-big-typography border-radius-6px lg-border-radius-0px p-0" data-parallax-background-ratio="0.5" style="background-image: url(/images/apssai4.webp)">
        <div class="opacity-extra-medium bg-blue-whale"></div>
        <div class="container">
            <div class="row align-items-center justify-content-center small-screen">
                <div class="col-lg-8 position-relative text-center page-title-extra-large" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <h1 class="m-auto text-white text-shadow-double-large fw-600 ls-minus-2px">Tentang Kami</h1>
                </div>
                <div class="down-section text-center" data-anime='{ "translateY": [-50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <a href="#down-section" class="section-link">
                        <div class="text-white">
                            <i class="feather icon-feather-chevron-down icon-very-medium"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- end page title -->

        <!-- start section -->
        <section class="position-relative overflow-hidden">
            <div class="container">
                <div class="row justify-content-center align-items-center mb-3">
                    <div class="col-xl-5 col-lg-6 md-mb-14 sm-mb-18 xs-mb-23 position-relative" data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 800, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <div class="w-75 sm-w-80" data-animation-delay="200" data-shadow-animation="true" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                            <img src="/images/apssai6.webp" alt="" class="border-radius-6px w-100">
                            <!-- <div class="position-absolute top-30px z-index-8 left-minus-90px lg-left-minus-25px sm-left-minus-0px lg-w-30">
                                <img src="/images/demo-corporate-about-01.png" alt="" />
                            </div> -->
                        </div>
                        <div class="w-55 overflow-hidden position-absolute right-15px xs-w-55 bottom-minus-50px" data-shadow-animation="true" data-animation-delay="100" data-bottom-top="transform: translateY(20px)" data-top-bottom="transform: translateY(-20px)">
                            <img src="/images/apssai5.webp" alt="" class="border-radius-6px box-shadow-quadruple-large w-100" />
                        </div>
                    </div>
                    <div class="col-xl-6 offset-xl-1 col-lg-6 text-center text-lg-start" data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 800, "delay": 150, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <div class="swiper position-relative magic-cursor" data-slider-options='{ "autoHeight": true, "loop": true, "allowTouchMove": true, "autoplay": { "delay": 4000, "disableOnInteraction": false }, "navigation": { "nextEl": ".swiper-button-next", "prevEl": ".swiper-button-prev" }, "effect": "slide" }'>
                            <div class="swiper-wrapper mb-10px">
                                <!-- start text slider item -->
                                <div class="swiper-slide">
                                    <span class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">APSSAI</span>
                                    <h3 class="text-dark-gray fw-700 ls-minus-1px mb-20px">Asosiasi Program Studi S2 Akuntansi Indonesia</h3>
                                    <p class="w-95 xl-w-100">APSSAI (Asosiasi Program Studi S2 Akuntansi Indonesia) merupakan asosiasi pengelola program studi S2 yang saat ini beranggotakan Program Studi S2 Akuntansi atau Magister Akuntansi dari universitas-universitas di seluruh Indonesia, dan saat ini berjumlah 81 program studi S2 Akuntansi. APSSAI didirikan Tanggal 10 Oktober 2017, di Makassar.</p>
                                </div>
                                <!-- end text slider item -->
                                <!-- start text slider item -->
                                <div class="swiper-slide">
                                    <span class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">APSSAI</span>
                                    <h3 class="text-dark-gray fw-700 ls-minus-1px mb-20px">Asosiasi Program Studi S2 Akuntansi Indonesia</h3>
                                    <p class="w-95 xl-w-100">Sebagai organisasi dan asosiasi, APSSAI aktif berkontribusi pada tiga pilar pendidikan, penelitian, dan pengabdian masyarakat. Dalam bidang pendidikan, APSSAI mengadakan serangkaian webinar dan turut serta dalam pengembangan kurikulum serta penyusunan materi pembelajaran. Selain itu, APSSAI terlibat dalam berbagai kegiatan seperti pengembangan kurikulum dan penyusunan sumber belajar. Dalam bidang penelitian, APSSAI mendorong kerjasama penelitian antara dosen dan mahasiswa, yang hasilnya dipublikasikan dalam jurnal terkemuka APSSAI. Organisasi ini juga menyelenggarakan kompetisi bagi mahasiswa, memberikan dukungan pada riset dan kemajuan ilmu pengetahuan di berbagai bidang. Di bidang pengabdian masyarakat, APSSAI terlibat dalam kegiatan internasional di Bali dan Aceh, menunjukkan komitmennya untuk memberikan dampak positif di luar batas nasional.</p>
                                </div>
                                <!-- end text slider item -->
                            </div> 
                            <div class="d-flex justify-content-center justify-content-lg-start">
                                <!-- start slider navigation -->
                                <div class="slider-one-slide-prev-1 swiper-button-prev slider-navigation-style-04 border border-color-extra-medium-gray bg-white"><i class="bi bi-arrow-left-short icon-very-medium text-dark-gray"></i></div>
                                <div class="slider-one-slide-next-1 swiper-button-next slider-navigation-style-04 border border-color-extra-medium-gray bg-white"><i class="bi bi-arrow-right-short icon-very-medium text-dark-gray"></i></div>
                                <!-- end slider navigation --> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->

        <!-- start section -->
        <section id="down-section" class="border-bottom border-color-extra-medium-gray">
                <div class="container overlap-gap-section"> 
                    <div class="row align-items-end justify-content-center mb-5 md-mb-40px text-center text-md-start">                    
                        <div class="col-xl-5 col-lg-6 col-md-10 md-mb-20px text-center text-lg-start" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                            <span class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">Visi & Misi</span>
                            <h3 class="text-dark-gray fw-700 mb-0 ls-minus-1px">APSSAI INDONESIA</h3>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-10 offset-xl-1 text-center text-lg-start last-paragraph-no-margin">
                            <p class="w-90 xl-w-100" data-anime='{ "el": "lines", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>"Menjadi asosiasi program studi S2 Akuntansi di bidang sains dan terapan di Indonesia yang unggul dan bermartabat."</p>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-lg-3 row-cols-md-1 row-cols-sm-1 justify-content-between" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <!-- start features box item -->
                        <div class="col custom-icon-with-text-style-02">
                            <div class="feature-box p-1 last-paragraph-no-margin overflow-hidden md-mb-20px">
                                <div class="feature-box-icon">
                                    <img class="custom-image-icon mb-20px" src="https://via.placeholder.com/60x60" alt="" />
                                </div>
                                <div class="feature-box-content">
                                    <span class="d-block fs-19 fw-700 text-dark-gray mb-5px">Kualitas</span>
                                    <p>Mengembangkan Kualitas Manajemen Pendidikan S2 Akuntansi di Bidang Sain dan Terapan.</p>
                                </div>
                            </div>
                        </div>
                        <!-- end features box item -->
                        <!-- start features box item -->
                        <div class="col custom-icon-with-text-style-02">
                            <div class="feature-box p-6 last-paragraph-no-margin overflow-hidden md-mb-20px">
                                <div class="feature-box-icon">
                                    <img class="custom-image-icon mb-20px" src="https://via.placeholder.com/60x60" alt="" />
                                </div>
                                <div class="feature-box-content">
                                    <span class="d-block fs-19 fw-700 text-dark-gray mb-5px">Menguatkan Hubungan</span>
                                    <p>Mengembangkan dan Menguatkan Hubungan Antar Manajemen Pendidikan S2 Akuntansi.</p>
                                </div>
                            </div>
                        </div>
                        <!-- end features box item -->
                        <!-- start features box item -->
                        <div class="col custom-icon-with-text-style-02">
                            <div class="feature-box p-6 last-paragraph-no-margin overflow-hidden xs-mb-20px">
                                <div class="feature-box-icon">
                                    <img class="custom-image-icon mb-20px" src="https://via.placeholder.com/60x60" alt="" />
                                </div>
                                <div class="feature-box-content">
                                    <span class="d-block fs-19 fw-700 text-dark-gray mb-5px">Kompentensi</span>
                                    <p>Mengembangkan kemampuan Anggota untuk Menghasilkan Lulusan yang Memiliki Kompetensi di bidang Akuntansi melalui Riset yang berkualitas dan bermanfaat bagi Masyarakat, yang dilandasi oleh keimanan dan ketaqwaan kepada Tuhan YME.</p>
                                </div>
                            </div>
                        </div>
                        <!-- end features box item -->
                    </div>
                </div>
            </section>
            <!-- end section -->

        <!-- start section -->
        <section id="down-section" class="border-bottom border-color-extra-medium-gray">
            <div class="container overlap-gap-section"> 
                <div class="row align-items-end justify-content-center mb-5 md-mb-40px text-center text-md-start">                    
                    <div class="col-xl-5 col-lg-6 col-md-10 md-mb-20px text-center text-lg-start" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <span class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">Tujuan</span>
                        <h3 class="text-dark-gray fw-700 mb-0 ls-minus-1px">Tujuan Pendirian APSSAI INDONESIA</h3>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-lg-3 row-cols-md-1 row-cols-sm-1 justify-content-between" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                    <!-- start features box item -->
                    <div class="col custom-icon-with-text-style-02">
                        <div class="feature-box p-1 last-paragraph-no-margin overflow-hidden md-mb-20px">
                            <div class="feature-box-icon">
                                <img class="custom-image-icon mb-20px" src="https://via.placeholder.com/60x60" alt="" />
                            </div>
                            <div class="feature-box-content">
                                <p>1. Mengembangkan profil lulusan, capaian pembelajaran, dan kurikulum S2 akuntansi sains dan terapan berbasis Kurikulum terkini</p>
                            </div>
                        </div>
                    </div>
                    <!-- end features box item -->
                    <!-- start features box item -->
                    <div class="col custom-icon-with-text-style-02">
                        <div class="feature-box p-6 last-paragraph-no-margin overflow-hidden md-mb-20px">
                            <div class="feature-box-icon">
                                <img class="custom-image-icon mb-20px" src="https://via.placeholder.com/60x60" alt="" />
                            </div>
                            <div class="feature-box-content">
                                <p>2. Meningkatkan kualitas dan etika tata kelola S2 akuntansi sains dan terapan</p>
                            </div>
                        </div>
                    </div>
                    <!-- end features box item -->
                    <!-- start features box item -->
                    <div class="col custom-icon-with-text-style-02">
                        <div class="feature-box p-6 last-paragraph-no-margin overflow-hidden xs-mb-20px">
                            <div class="feature-box-icon">
                                <img class="custom-image-icon mb-20px" src="https://via.placeholder.com/60x60" alt="" />
                            </div>
                            <div class="feature-box-content">
                                <p>3. Menyelenggarakan pertemuan anggota secara periodik sesuai dengan AD/RT</p>
                            </div>
                        </div>
                    </div>
                    <!-- end features box item -->
                    <!-- start features box item -->
                    <div class="col custom-icon-with-text-style-02">
                        <div class="feature-box p-6 last-paragraph-no-margin overflow-hidden xs-mb-20px">
                            <div class="feature-box-icon">
                                <img class="custom-image-icon mb-20px" src="https://via.placeholder.com/60x60" alt="" />
                            </div>
                            <div class="feature-box-content">
                                <p>4. Menyelenggarakan kerjasama strategik di bidang pendidikan dan riset antar anggota, dan stakeholder lainnya</p>
                            </div>
                        </div>
                    </div>
                    <!-- end features box item -->
                    <!-- start features box item -->
                    <div class="col custom-icon-with-text-style-02">
                        <div class="feature-box p-6 last-paragraph-no-margin overflow-hidden xs-mb-20px">
                            <div class="feature-box-icon">
                                <img class="custom-image-icon mb-20px" src="https://via.placeholder.com/60x60" alt="" />
                            </div>
                            <div class="feature-box-content">
                                <p>5. Menyelenggarakan forum ilmiah secara berkala</p>
                            </div>
                        </div>
                    </div>
                    <!-- end features box item -->
                    <!-- start features box item -->
                    <div class="col custom-icon-with-text-style-02">
                        <div class="feature-box p-6 last-paragraph-no-margin overflow-hidden xs-mb-20px">
                            <div class="feature-box-icon">
                                <img class="custom-image-icon mb-20px" src="https://via.placeholder.com/60x60" alt="" />
                            </div>
                            <div class="feature-box-content">
                                <p>6. Mewujudkan aliansi penerbitan ilmiah antar anggota untuk meningkatkan kuantitas dan kualitas publikasi ilmiah</p>
                            </div>
                        </div>
                    </div>
                    <!-- end features box item -->
                </div>
            </div>
        </section>
        <!-- end section -->

        
        <!-- start section -->
        <section id="down-section" class="border-bottom border-color-extra-medium-gray">
            <div class="container overlap-gap-section"> 
                <div class="row align-items-end justify-content-center mb-5 md-mb-40px text-center text-md-start">                    
                    <div class="col-xl-5 col-lg-6 col-md-10 md-mb-20px text-center text-lg-start" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <span class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">Sejarah</span>
                        <h3 class="text-dark-gray fw-700 mb-0 ls-minus-1px">Sejarah APSSAI INDONESIA</h3>
                    </div>
                </div>
                <p >Asosiasi Program Studi S2 Akuntansi Indonesia  (APSSAI) adalah organisasi pengelola program studi S2 Akuntansi yang terdiri dari beberapa program studi S2 Akuntansi seluruh Indonesia. Kini APSSAI beranggotakan 76 program studi S2 Akuntansi. Urgensi APSSAI adalah untuk mewujudkan tridharma perguruan tinggi yang meliputi pendidikan, penelitian dan pengabdian masyarakat. Dengan semangat kolaborasi dan sinergi, APSSAI  ingin mewujudkan dan  menyelaraskan berbagai kebutuhan pada program studi S2 Akuntansi.
            </p> 
            <p>
            Visi APSSAI adalah menjadi asosiasi program studi S2 Akuntansi di bidang sains dan terapan di Indonesia yang unggul dan bermartabat. Misi APSSAI adalah : 1) Mengembangkan Kualitas Manajemen Pendidikan S2 Akuntansi di Bidang Sain dan Terapan. 2) Mengembangkan dan Menguatkan Hubungan Antar Manajemen Pendidikan S2 Akuntansi. 3) Mengembangkan kemampuan Anggota untuk Menghasilkan Lulusan yang Memiliki Kompetensi di bidang Akuntansi melalui Riset yang berkualitas dan bermanfaat bagi Masyarakat, yang dilandasi oleh keimanan dan ketaqwaan kepada Tuhan YME.
            </p>

            <p>
    Berdasar kepada visi misi tersebut selama tahun 2023, telah diselenggarakan berbagai macam acar a seperti Master of Accounting Competition, webinar yang diselenggarakan di berbagai universitas serta pengabdian kepada masyarakat internasional. APSSAI bergerak dari kepengurusan yang telah dibuat sejak 2021 hingga 2023. Dengan berakhirnya masa kepengurusan APSSAI 2021-2023,maka diperkukan suatu kegiatan pertanggungjawaban serta pembentukan kepengurusan APSSAI yang baru periode 2023-2025.  Berdasar hal tersebut, maka kegiatan ini diperlukan sebagai forum diskusi APSSAI untuk pertanggungjawaban pengurus periode  2021-2023,  pembentukan kepengurusan yang baru 2024-2026 serta rencana kegiatan.</p>
            </div>
        </section>
        <!-- end section -->


            
            

</template>