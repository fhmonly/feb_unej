<script setup>
    definePageMeta({
        layout: 'id'
    })
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl
const videos = await $fetch(`${apiUrl}/api/video/`)

</script>


<template>
    <!-- start page title -->
        <section class="ipad-top-space-margin md-pt-0">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-12 col-xl-6 col-lg-8 text-center position-relative page-title-double-large">
                        <div class="d-flex flex-column justify-content-center extra-very-small-screen">
                            <h1 class="text-dark-gray alt-font ls-minus-1px fw-700 mb-20px">APSSAI Video</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    <!-- end page title -->
    
<!-- start section -->
    <section class="bg-gradient-very-light-gray ps-6 pe-6 lg-ps-2 lg-pe-2" v-if="videos && videos.length > 0">
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-lg-3 row-cols-sm-2" >
                <div class="col fit-videos text-center"  v-for="(item, index) in videos" :key="index">
                    <iframe  width="360" height="315" :src="item.link_video" allow="autoplay; fullscreen; clipboard-read; clipboard-write"></iframe>
                    <div class="text-dark-gray fs-18 fw-600 mt-6">{{item.deskripsi}}</div>
                </div>
            </div>
        </div>
    </section>
    <!-- end section -->
</template>