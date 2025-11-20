<script setup>
    definePageMeta({
        layout: 'id'
    })
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl
const { id, slug } = useRoute().params
const blog = await $fetch(`${apiUrl}/api/berita_detail/${id}`)
const kegiatan_news = await $fetch(`${apiUrl}/api/berita_news/`)

</script>

<template>

<!-- start section -->
<section class="top-space-margin border-radius-6px lg-border-radius-0px py-0" data-parallax-background-ratio="0.5" :style="`background-image: url(${apiUrl+blog.gambar})`">
    <div class="opacity-light bg-dark-gray"></div>
    <div class="container-fluid z-index-1 position-relative">
        <div class="row">
            <div class="col-xxl-9 col-xl-10 col-lg-11 d-flex flex-column justify-content-center full-screen sm-h-600px">
                <div class="ps-15 pe-15 md-ps-10 md-pe-10 sm-px-0" data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                    <!-- <span class="alt-font fs-20 text-white mb-3 d-inline-block fw-300">Posted by <a href="demo-corporate-blog.html" class="text-white text-white-hover fw-700 text-decoration-line-bottom">Shane smith</a></span> -->
                    <h1 class="alt-font text-white fw-600 mb-5 ls-minus-2px">{{ blog.judul }}</h1>
                    <!-- <a href="demo-corporate-blog.html" class="btn btn-large btn-white btn-hover-animation-switch btn-box-shadow btn-rounded fw-600">Corporate</a> -->
                </div>
            </div>
        </div>
    </div>
</section>
<!-- end section -->
<!-- start section -->
<section>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                <div class="blog-content" >
                    <div v-html="blog.konten" class="last-paragraph-no-margin"></div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
<!-- end section -->
<!-- start section -->
<section class="border-radius-6px lg-border-radius-0px bg-light-red"> 
    <div class="container">
        <div class="row justify-content-center mb-1">
            <div class="col-lg-7 text-center" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <span class="ps-25px pe-25px mb-15px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-quartz-light-transparent d-inline-block">You may also interest</span>
                <h4 class="text-dark-gray fw-700">Our Latest Activity</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-12 px-0">
                <ul class="blog-grid blog-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-double-extra-large">
                    <li class="grid-sizer"></li>
                        <!-- start blog item -->
                        <li class="grid-item" v-for="(kegiatan, index) in kegiatan_news" :key="index" >
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
<!-- end section -->

</template>