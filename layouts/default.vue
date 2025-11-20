<script setup>
const { t, locale } = useI18n()
</script>

<template>
    <div>
        <!-- Header -->
        <header>
            <nav class="navbar navbar-expand-lg header-light bg-white disable-fixed">
                <div class="container-fluid">

                    <!-- Logo -->
                    <div class="col-auto col-xl-1 col-lg-2 me-lg-0 me-auto">
                        <NuxtLinkLocale to="/" class="navbar-brand">
                            <img src="/images/unej.png" alt="" class="default-logo" />
                            <img src="/images/unej.png" alt="" class="alt-logo" />
                            <img src="/images/unej.png" alt="" class="mobile-logo" />
                        </NuxtLinkLocale>
                    </div>

                    <!-- Menu -->
                    <div class="col-auto col-xl-6 col-lg-8 menu-order position-static">
                        <button class="navbar-toggler float-start" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav">
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <LayoutsDefaultNavMenu />
                        </div>
                    </div>

                    <!-- Right Buttons -->
                    <div class="col-auto col-xl-3 col-lg-2 text-end md-pe-0">
                        <div class="header-icon">

                            <div class="header-button ms-20px">
                                <a href="https://www.apar.apssai.org/" target="_blank"
                                    class="btn btn-rounded btn-transparent-light-gray border-1 btn-medium btn-switch-text text-transform-none">
                                    <span>
                                        <span class="btn-double-text fw-600">{{ t('defaultLayout.ppid') }}</span>
                                    </span>
                                </a>
                            </div>

                            <div class="header-button ms-10px">
                                <a :href="$switchLocalePath('id')" v-if="locale === 'en'">
                                    <img src="/images/indonesia.png" alt="Indonesia" style="width: 25px" />
                                </a>
                                <a :href="$switchLocalePath('en')" v-else>
                                    <img src="/images/uk.png" alt="English" style="width: 25px" />
                                </a>
                                <!-- <SwitchLocalePathLink locale="id" v-if="locale === 'en'">
                                    <img src="/images/indonesia.png" alt="Indonesia" style="width: 25px" />
                                </SwitchLocalePathLink>
                                <SwitchLocalePathLink locale="en" v-else>
                                    <img src="/images/uk.png" alt="English" style="width: 25px" />
                                </SwitchLocalePathLink> -->
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <!-- Content -->
        <slot />

        <!-- Footer -->
        <footer class="footer-light p-0 position-relative">
            <div class="container">

                <div class="row justify-content-center pt-7 sm-pt-50px">

                    <div class="col-7 col-lg-3 col-md-12 col-sm-6 text-md-center text-lg-start md-mb-30px">
                        <NuxtLinkLocale to="/" class="footer-logo mb-15px d-inline-block">
                            <img src="/images/unej.png" alt="" />
                        </NuxtLinkLocale>
                        <p class="mb-20px">{{ t('defaultLayout.footer.vision') }}</p>
                    </div>

                    <div class="col-5 col-lg-2 col-md-2 col-sm-6 md-mb-30px">
                        <span class="alt-font fw-600 fs-19">{{ t('defaultLayout.footer.main') }}</span>
                        <ul class="navbar-nav">
                            <li>
                                <NuxtLinkLocale to="/">{{ t('defaultLayout.menu.home') }}</NuxtLinkLocale>
                            </li>
                            <li>
                                <NuxtLinkLocale to="/">{{ t('defaultLayout.menu.news') }}</NuxtLinkLocale>
                            </li>
                        </ul>
                    </div>

                    <div class="col-5 col-lg-2 col-md-2 col-sm-6 md-mb-30px">
                        <span class="alt-font fw-600 fs-19">{{ t('defaultLayout.footer.about') }}</span>
                        <ul class="navbar-nav">
                            <li>
                                <NuxtLinkLocale to="/structure">{{ t('defaultLayout.menu.profile') }}</NuxtLinkLocale>
                            </li>
                            <li>
                                <NuxtLinkLocale to="/mou">{{ t('defaultLayout.menu.accreditation') }}</NuxtLinkLocale>
                            </li>
                            <li>
                                <NuxtLinkLocale to="/member">{{ t('defaultLayout.menu.partnership') }}</NuxtLinkLocale>
                            </li>
                            <li>
                                <NuxtLinkLocale to="/partner">{{ t('defaultLayout.menu.leaders') }}</NuxtLinkLocale>
                            </li>
                        </ul>
                    </div>

                    <div class="col-5 col-lg-2 col-md-2 col-sm-6 md-mb-30px">
                        <span class="alt-font fw-600 fs-19">{{ t('defaultLayout.footer.academics') }}</span>
                        <ul class="navbar-nav">
                            <li>
                                <NuxtLinkLocale to="/">{{ t('defaultLayout.menu.academic_program') }}</NuxtLinkLocale>
                            </li>
                        </ul>
                    </div>

                    <div class="col-5 col-lg-2 col-md-2 col-sm-6 md-mb-30px">
                        <span class="alt-font fw-600 fs-19">{{ t('defaultLayout.footer.other') }}</span>
                        <ul class="navbar-nav">
                            <li>
                                <NuxtLinkLocale to="/contact">{{ t('defaultLayout.menu.gallery') }}</NuxtLinkLocale>
                            </li>
                            <li>
                                <NuxtLinkLocale to="/faq">{{ t('defaultLayout.menu.download') }}</NuxtLinkLocale>
                            </li>
                        </ul>
                    </div>

                </div>

                <div class="row justify-content-center align-items-center pt-5">
                    <div class="col-12">
                        <div class="divider-style-03 divider-style-03-01 border-color-extra-medium-gray"></div>
                    </div>

                    <div class="col-lg-12 text-center py-3 fs-16">
                        <p>&copy; FEB UNEJ</p>
                    </div>
                </div>

            </div>
        </footer>

        <div class="scroll-progress d-none d-xxl-block">
            <a href="#" class="scroll-top" aria-label="scroll">
                <span class="scroll-text">{{ t('defaultLayout.scroll') }}</span>
                <span class="scroll-line"><span class="scroll-point"></span></span>
            </a>
        </div>
    </div>
</template>
