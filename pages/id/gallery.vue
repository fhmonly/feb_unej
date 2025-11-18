<script setup>
    definePageMeta({
        layout: 'id'
    })
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl
const gallery = await $fetch(`${apiUrl}/api/gallery/`)

</script>


<template>
    <!-- start page title -->
        <section class="ipad-top-space-margin md-pt-0">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-12 col-xl-6 col-lg-8 text-center position-relative page-title-double-large">
                        <div class="d-flex flex-column justify-content-center extra-very-small-screen">
                            <h1 class="text-dark-gray alt-font ls-minus-1px fw-700 mb-20px">APSSAI Gallery</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    <!-- end page title -->
    
    <section class="ps-5 pe-5 lg-ps-2 lg-pe-2">
        <div class="container-fluid"> 
            <div class="row">
                <div class="col">
                    <ul class="image-gallery-style-02 gallery-wrapper grid grid-4col xxl-grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large">
                        <li class="grid-sizer"></li>
                        <!-- start gallery item -->
                        <li class="grid-item transition-inner-all atropos" data-atropos data-atropos-perspective="1150" v-for="(item, index) in gallery" :key="index"> 
                            <div class="atropos-scale">
                                <div class="atropos-rotate">
                                    <div class="atropos-inner" data-atropos-offset="3"> 
                                        <div class="gallery-box">
                                            <a :href="apiUrl+item.gambar" data-group="lightbox-group-gallery-item-2" :title="item.deskripsi">
                                                <div class="position-relative gallery-image bg-slate-blue">
                                                    <img :src="apiUrl+item.gambar" alt="" />
                                                    <div class="d-flex align-items-center justify-content-center position-absolute top-0px left-0px w-100 h-100 gallery-hover move-bottom-top">
                                                        <i class="bi bi-camera icon-medium text-white"></i>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- end gallery item -->
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- end section -->
</template>