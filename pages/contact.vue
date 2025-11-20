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
                    <h1 class="m-auto text-white text-shadow-double-large fw-600 ls-minus-2px">Kontak</h1>
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

    
    <section id="contact" class="contact">

        <div class="container aos-init aos-animate" data-aos="fade-up">

        <header class="section-header">
        <h2>Kontak</h2>
        <p>Kontak Kami</p>
        </header>

        <div class="row gy-4">

        <div class="col-lg-6">

        <div class="row gy-4">
        <div class="col-md-6">
            <div class="info-box">
            <i class="bi bi-geo-alt"></i>
            <h3>Alamat</h3>
            <p>Jl. Humaniora No. 1 Bulaksumur,<br>Yogyakarta, Indonesia</p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="info-box">
            <i class="bi bi-telephone"></i>
            <h3>Telepon</h3>
            <p>(0274) 513109</p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="info-box">
            <i class="bi bi-envelope"></i>
            <h3>Email</h3>
            <p>sekretariat-maksi.feb@ugm.ac.id</p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="info-box">
            <i class="bi bi-clock"></i>
            <h3>Buka</h3>
            <p>Jam Kerja</p>
            </div>
        </div>
        </div>

        </div>

        <div class="col-lg-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19432611.603660487!2d116.46357812033247!3d-0.7717339535770075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sid!4v1709539904894!5m2!1sen!2sid" width="100%" height="400" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        </div>

        </div>

        </section>
</template>

<style scoped>
h2 {
    font-size: 32px;
    font-weight: 700;
    color: #012970;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 20px;
}
</style>