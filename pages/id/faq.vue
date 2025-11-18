<script setup>

    definePageMeta({
        layout: 'id'
    })
</script>
<template>
        <section class="page-title-center-alignment cover-background top-space-padding" style="background-image: url(images/demo-decor-store-title-bg.jpg)">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center position-relative page-title-extra-large">
                        <h1 class="alt-font d-inline-block fw-700 ls-minus-05px text-base-color mb-10px mt-3 md-mt-50px">FAQs</h1>
                    </div>
                </div>
            </div>
        </section>

        <!-- start section -->
        <section class="position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 tab-style-07 md-mb-50px sm-mb-35px" data-anime='{ "translate": [50, 0], "opacity": [0,1], "duration": 600, "delay":100, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <div class="position-sticky top-50px">
                            <ul class="nav nav-tabs justify-content-center border-0 fw-500 text-left alt-font bg-very-light-gray border-radius-6px overflow-hidden">
                                <li class="nav-item">
                                    <a data-bs-toggle="tab" href="#tab_seven1" class="nav-link active">
                                        <span>
                                            <span class="me-5px"><i class="bi bi-file-text"></i></span>
                                            <span>General</span>
                                        </span>
                                        <span class="bg-hover bg-base-color"></span>
                                    </a>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8 offset-xl-1 lg-ps-50px md-ps-15px" data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 600, "delay":150, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <div class="tab-content h-100">
                            <!-- start tab content -->
                            <div class="tab-pane fade in active show" id="tab_seven1">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="accordion accordion-style-02" id="accordion-style-01" data-active-icon="icon-feather-minus" data-inactive-icon="icon-feather-plus">
                                            <!-- start accordion item -->
                                            <div class="accordion-item active-accordion">
                                                <div class="accordion-header border-bottom border-color-extra-medium-gray pt-0">
                                                    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-01" aria-expanded="true" data-bs-parent="#accordion-style-01">
                                                        <div class="accordion-title mb-0 position-relative text-dark-gray">
                                                            <i class="feather icon-feather-minus"></i><span class="fw-500 fs-18">Apa itu APSSAI ?</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div id="accordion-style-01-01" class="accordion-collapse collapse show" data-bs-parent="#accordion-style-01">
                                                    <div class="accordion-body last-paragraph-no-margin border-bottom border-color-light-medium-gray">
                                                        <p>APSSAI merupakan kepanjangan dari Asosiasi Program Studi S2 Akuntansi Indonesia	</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end accordion item -->
                                           
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <!-- end tab content -->
                            <!-- end tab content -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->
</template>