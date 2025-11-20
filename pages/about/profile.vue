<script setup>
definePageMeta({
    layout: 'default'
})
</script>

<template>
    <!-- start page title -->
    <section class="top-space-margin page-title-big-typography border-radius-6px lg-border-radius-0px p-0"
        data-parallax-background-ratio="0.5" style="background-image: url(/images/apssai4.webp)">
        <div class="opacity-extra-medium bg-blue-whale"></div>
        <div class="container">
            <div class="row align-items-center justify-content-center small-screen">
                <div class="col-lg-8 position-relative text-center page-title-extra-large"
                    data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <h1 class="m-auto text-white text-shadow-double-large fw-600 ls-minus-2px">{{
                        $t('aboutPage.visionMission.title') }}
                    </h1>
                </div>
                <div class="down-section text-center"
                    data-anime='{ "translateY": [-50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
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
    <section class="p-0 mt-3">
        <div class="container">
            <div class="row justify-content-center"
                data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                <div class="col-12">
                    <div class="border-radius-6px h-450px md-h-350px sm-h-400px d-flex flex-wrap align-items-center justify-content-center overflow-hidden cover-background box-shadow-quadruple-large pt-15"
                        style="background-image: url('https://placehold.co/1315x450')">
                        <div class="opacity-full-dark bg-gradient-regal-blue-transparent"></div>
                        <div class="col-md-2 position-relative z-index-1 text-center sm-mb-20px">
                            <a :href="$t('aboutPage.videoUrl')"
                                class="position-relative d-inline-block text-center border border-2 border-color-white rounded-circle video-icon-box video-icon-large popup-youtube">
                                <span>
                                    <span class="video-icon">
                                        <i class="fa-solid fa-play fs-20 text-white"></i>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div
                            class="w-100 text-center position-relative mt-auto pt-20px pb-25px ps-15px pe-15px border-top border-color-transparent-white-light">
                            <div class="fs-14 text-uppercase text-white fw-600 ls-05px">
                                {{ $t('aboutPage.title') }}
                            </div>
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
                <div class="col-xl-5 col-lg-6 col-md-10 md-mb-20px text-center text-lg-start"
                    data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <span
                        class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
                        {{ $t('aboutPage.visionMission.title') }}
                    </span>
                    <h3 class="text-dark-gray fw-700 mb-0 ls-minus-1px">FEB UNEJ</h3>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-10 offset-xl-1 text-center text-lg-start last-paragraph-no-margin">
                    <p class="w-90 xl-w-100"
                        data-anime='{ "el": "lines", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        "{{ $t('aboutPage.visionMission.vision') }}"</p>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-lg-3 row-cols-md-1 row-cols-sm-1 justify-content-between"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                <!-- start features box item -->
                <div class="col custom-icon-with-text-style-02" v-for="number in Array.from({ length: 7 }, (_, i) => i)"
                    :key="number">
                    <div class="feature-box p-1 last-paragraph-no-margin overflow-hidden md-mb-20px">
                        <div class="feature-box-icon">
                            <img class="custom-image-icon mb-20px" src="https://via.placeholder.com/60x60" alt="" />
                        </div>
                        <div class="feature-box-content">
                            <span class="d-block fs-19 fw-700 text-dark-gray mb-5px">
                                {{ $t(`aboutPage.visionMission.items[${number}].title`) }}
                            </span>
                            <p>
                                {{ $t(`aboutPage.visionMission.items[${number}].description`) }}
                            </p>
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
                <div class="col-xl-5 col-lg-6 col-md-10 md-mb-20px text-center text-lg-start"
                    data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <span
                        class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
                        {{ $t('aboutPage.history.title') }}
                    </span>
                    <h3 class="text-dark-gray fw-700 mb-0 ls-minus-1px">
                        {{ $t('words.feb') }}
                    </h3>
                </div>
            </div>
            <div>
                <div v-for="value in Array.from({ length: 10 }, (_, i) => i)" :key="value" class="mb-4">
                    <h4>
                        {{ $t(`aboutPage.history.timeline[${value}].title`) }}
                    </h4>
                    <p>
                        {{ $t(`aboutPage.history.timeline[${value}].body`) }}
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- end section -->
</template>