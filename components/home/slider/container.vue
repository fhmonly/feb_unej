<template>
    <section id="slider" class="p-0 top-space-margin ">
        <div class="demo-corporate-slider_wrapper fullscreen-container" data-alias="portfolio-viewer"
            data-source="gallery" style="background-color:transparent;padding:0px;">
            <div id="demo-corporate-slider" class="rev_slider bg-regal-blue fullscreenbanner" style="display:none;"
                data-version="5.3.1.6">
                <!-- begin slides list -->
                <ul>
                    <HomeSliderItem :image-url="slider.imageUrl" :title="slider.title" :desc="slider.desc" :nth="key"
                        v-for="(slider, key) in sliders" />
                </ul>
                <div class="tp-bannertimer" style="height: 10px; background-color: rgba(0, 0, 0, 0.10); z-index: 98">
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
const sliders = [
    {
        imageUrl: '/images/apssai1.webp',
        title: 'Join Our Community',
        desc: 'Be part of something bigger at Apssai Conference 2024'
    },
    {
        imageUrl: '/images/apssai2.webp',
        title: 'Apssai Conference 2024',
        desc: 'Be part of something bigger at Apssai Conference 2024'
    },
    {
        imageUrl: '/images/apssai3.webp',
        title: 'Gesit Festival 2024',
        desc: 'Be part of something bigger at Apssai Conference 2024'
    },
]
onMounted(() => {
    useHomeSlider()
})
</script>