<script setup>
    definePageMeta({
        layout: 'id'
    })
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl
const kegiatan_all = await $fetch(`${apiUrl}/api/berita_all/`)

</script>


<template>

    <!-- start page title -->
    <section class="top-space-margin page-title-big-typography border-radius-6px lg-border-radius-0px p-0" data-parallax-background-ratio="0.5" style="background-image: url(/images/apssai8.jpg)">
        <div class="opacity-extra-medium bg-blue-whale"></div>
        <div class="container">
            <div class="row align-items-center justify-content-center small-screen">
                <div class="col-lg-8 position-relative text-center page-title-extra-large" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <h1 class="m-auto text-white text-shadow-double-large fw-600 ls-minus-2px">Kegiatan</h1>
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

    <section id="down-section">
        <div class="container"> 
            <div class="row g-0">
                <!-- start features box item -->
                <div class="col-12">
                    <ul class="blog-grid blog-wrapper grid-loading grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <li class="grid-sizer"></li>
                        <!-- start blog item -->
                        <li class="grid-item" v-for="(kegiatan, index) in kegiatan_all" :key="index" >
                             <div class="card border-0 border-radius-5px box-shadow-quadruple-large box-shadow-quadruple-large-hover">
                                <div class="blog-image">
                                    <a :href="`/blog/${kegiatan.slug}_${kegiatan.id}`" class="d-block"><img :src="apiUrl+kegiatan.gambar" alt="" /></a>
                                </div>
                                <div class="card-body p-10 lg-p-10" style="height: 300px !important;" >
                                    <a :href="`/blog/${kegiatan.slug}_${kegiatan.id}`" class="card-title mb-15px fw-700 fs-19 text-dark-gray d-inline-block w-90 md-w-100">{{kegiatan.judul}}</a>
                                    <!-- <p>Lorem ipsum dolor consectetur adipiscing eiusmod tempor...</p> -->
                                    <div class=" d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase">
                                        <div class="me-auto">
                                            <span class="blog-date d-inline-block fw-700 text-dark-gray">{{ kegiatan.tanggal }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- end blog item -->
                        
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>