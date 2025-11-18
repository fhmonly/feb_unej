<script setup>
    definePageMeta({
        layout: 'id'
    })
    const config = useRuntimeConfig()
    const apiUrl = config.public.apiUrl
    
    const kegiatan_news = await $fetch(`${apiUrl}/api/berita_news/`)

    const mitra_all = await $fetch(`${apiUrl}/api/mitra_all/`)

    
    
    

    onMounted(()=>{
        var tpj = jQuery;
        var revapi7;
        var $ = jQuery.noConflict();
        tpj(document).ready(function () {
            if (tpj("#demo-corporate-slider").revolution == undefined) {
                revslider_showDoubleJqueryError("#demo-corporate-slider");
            } else {
                revapi7 = tpj("#demo-corporate-slider").show().revolution({
                    sliderType: "standard",
                    /* sets the Slider's default timeline */
                    delay: 9000,
                    /* options are 'auto', 'fullwidth' or 'fullscreen' */
                    sliderLayout: 'fullscreen',
                    /* RESPECT ASPECT RATIO */
                    autoHeight: 'off',
                    /* options that disable autoplay */
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    navigation: {
                        keyboardNavigation: 'on',
                        keyboard_direction: 'horizontal',
                        mouseScrollNavigation: 'off',
                        mouseScrollReverse: 'reverse',
                        onHoverStop: 'off',
                        arrows: {
                            enable: true,
                            style: 'hesperiden',
                            rtl: false,
                            hide_onleave: false,
                            hide_onmobile: true,
                            hide_under: 500,
                            hide_over: 9999,
                            hide_delay: 200,
                            hide_delay_mobile: 1200,
                            left: {
                                container: 'slider',
                                h_align: 'left',
                                v_align: 'center',
                                h_offset: 50,
                                v_offset: 0
                            },
                            right: {
                                container: 'slider',
                                h_align: 'right',
                                v_align: 'center',
                                h_offset: 50,
                                v_offset: 0
                            }
                        },
                        bullets: {

                            enable: true,
                            style: 'hermes',
                            tmp: '',
                            direction: 'horizontal',
                            rtl: false,

                            container: 'layergrid',
                            h_align: 'center',
                            v_align: 'bottom',
                            h_offset: 0,
                            v_offset: 30,
                            space: 12,

                            hide_onleave: false,
                            hide_onmobile: true,
                            hide_under: 0,
                            hide_over: 500,
                            hide_delay: true,
                            hide_delay_mobile: 500

                        },
                        touch: {
                            touchenabled: 'on',
                            touchOnDesktop: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            swipe_direction: 'horizontal',
                            drag_block_vertical: true
                        }
                    },
                    responsiveLevels: [1240, 1024, 768, 480],
                    visibilityLevels: [1240, 1024, 768, 480],
                    gridwidth: [1240, 1024, 768, 480],
                    gridheight: [930, 850, 900, 850],
                    /* Lazy Load options are "all", "smart", "single" and "none" */
                    lazyType: "smart",
                    spinner: "spinner0",
                    parallax: {
                        type: "scroll",
                        origo: "slidercenter",
                        speed: 400,
                        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 5],
                    },
                    shadow: 0,
                    shuffle: "off",
                    fullScreenAutoWidth: "on",
                    fullScreenAlignForce: "on",
                    fullScreenOffsetContainer: "nav",
                    fullScreenOffset: "",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    })

</script>

<template>
    <!-- start slider -->
    <section id="slider" class="p-0 top-space-margin ">
        <div class="demo-corporate-slider_wrapper fullscreen-container" data-alias="portfolio-viewer" data-source="gallery" style="background-color:transparent;padding:0px;">
            <div id="demo-corporate-slider" class="rev_slider bg-regal-blue fullscreenbanner" style="display:none;" data-version="5.3.1.6">
                <!-- begin slides list -->
                <ul>
                    <!-- minimum slide structure -->
                    <li data-index="rs-01" data-transition="parallaxleft" data-slotamount="default"
                        data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default"
                        data-easeout="default" data-masterspeed="1500" data-rotate="0" data-saveperformance="off"
                        data-title="Crossfit" data-param1="" data-param2="" data-param3="" data-param4=""
                        data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10=""
                        data-description="">
                        <!-- slide's main background image -->
                        <img src="/images/apssai2.webp" alt="/image"
                                data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat"
                                class="rev-slidebg" data-no-retina>
                        <!-- start overlay layer -->
                        <div class="tp-caption tp-shape tp-shapewrapper " id="slide-1-layer-01"
                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                                data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape"
                                data-basealign="slide" data-responsive_offset="off" data-responsive="off"
                                data-frames='[{"delay":0,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                {"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power4.easeInOut"}]' style="background:rgba(22,35,63,0.1); z-index: 0;">
                        </div>
                        <!-- end overlay layer -->
                        <!-- start shape layer -->
                        <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-regal-blue border-radius-50"
                                id="slide-1-layer-02" data-x="['center','center','center','center']"
                                data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                                data-voffset="['0','0','0','0']" data-width="['900','700','700','600']"
                                data-height="['900','700','700','600']" data-whitespace="nowrap" data-type="shape"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1000,"speed":1000,"frame":"0","from":"x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;","to":"o:0.5;","ease":"Back.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="z-index: 0;">
                        </div>
                        <!-- end shape layer -->
                        <!-- start shape layer -->
                        <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-regal-blue border-radius-50"
                                id="slide-1-layer-03" data-x="['center','center','center','center']"
                                data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                                data-voffset="['0','0','0','0']" data-width="['1200','1000','900','800']"
                                data-height="['1200','1000','900','800']" data-whitespace="nowrap" data-type="shape"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1300,"speed":1000,"frame":"0","from":"x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;","to":"o:0.3;","ease":"Back.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="z-index: 0;">
                        </div>
                        <!-- end shape layer -->
                        <!-- start row zone layer -->
                        <div id="rrzm_638" class="rev_row_zone rev_row_zone_middle">
                            <!-- start row layer -->
                            <div class="tp-caption  " id="slide-1-layer-04" data-x="['left','left','left','left']"
                                    data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-426','-426','-426','-426']" data-width="none" data-height="none"
                                    data-whitespace="nowrap" data-type="row" data-columnbreak="3"
                                    data-responsive_offset="on" data-responsive="off"
                                    data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textAlign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]" data-paddingright="[100,75,50,30]"
                                    data-paddingbottom="[0,0,0,0]" data-paddingleft="[100,75,50,30]">
                                <!-- start column layer -->
                                <div class="tp-caption" id="slide-1-layer-05" data-x="['left','left','left','left']"
                                        data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']"
                                        data-voffset="['100','100','100','100']" data-width="none" data-height="none"
                                        data-whitespace="nowrap" data-type="column" data-responsive_offset="on"
                                        data-responsive="off"
                                        data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-columnwidth="100%" data-verticalalign="top"
                                        data-textAlign="['center','center','center','center']">
                                    <!-- start subtitle layer -->
                                    <div class="tp-caption mx-auto text-uppercase" id="slide-1-layer-06"
                                            data-x="['center','center','center','center']"
                                            data-hoffset="['0','0','0','0']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-voffset="['0','0','0','0']" data-fontsize="['13','13','13','13']"
                                            data-lineheight="['20','20','20','20']"
                                            data-fontweight="['500','500','500','500']"
                                            data-letterspacing="['1','1','1','1']"
                                            data-color="['#ffffff','#ffffff','#ffffff','#ffffff']"
                                            data-width="['800','auto','auto','auto']" data-height="auto"
                                            data-whitespace="normal" data-basealign="grid" data-type="text"
                                            data-responsive_offset="off" data-verticalalign="middle"
                                            data-responsive="off"
                                            data-frames='[{"delay":2500,"speed":800,"frame":"0","from":"y:-50px;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"power3.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"power3.inOut"}]'
                                            data-textAlign="['center','center','center','center']"
                                            data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[25,25,10,10]" data-paddingleft="[0,0,0,0]"
                                            style="word-break: initial;">
                                        <i class="bi bi-award pe-5px icon-small"></i>APSSAI INDONESIA
                                    </div>
                                    <!-- end subtitle layer -->
                                    <!-- start title layer -->
                                    <div class="tp-caption mx-auto" id="slide-1-layer-07"
                                            data-x="['center','center','center','center']"
                                            data-hoffset="['0','0','0','0']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-voffset="['0','0','0','0']" data-fontsize="['75','60','70','50']"
                                            data-lineheight="['70','65','75','55']"
                                            data-fontweight="['700','700','700','700']"
                                            data-letterspacing="['-2','-2','-2','0']"
                                            data-color="['#ffffff','#ffffff','#ffffff','#ffffff']"
                                            data-width="['700','600','600','auto']" data-height="auto"
                                            data-whitespace="normal" data-basealign="grid" data-type="text"
                                            data-responsive_offset="off" data-verticalalign="middle"
                                            data-responsive="on"
                                            data-frames='[{"delay":"1500","split":"chars","splitdelay":0.03,"speed":800,"split_direction":"middletoedge","frame":"0","from":"x:50px;opacity:0;fb:10px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":100,"frame":"999","to":"opacity:0;fb:0;","ease":"Power4.easeOut"}]'
                                            data-textAlign="['center','center','center','center']"
                                            data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[33,28,35,25]" data-paddingleft="[0,0,0,0]"
                                            style="word-break: initial; text-shadow: #0b1236 3px 3px 15px;">
                                            Asosiasi Program Studi S2 Akuntansi Indonesia
                                    </div>
                                    <!-- end title layer -->
                                    <!-- start text layer -->
                                    <div class="tp-caption mx-auto" id="slide-1-layer-08"
                                            data-x="['center','center','center','center']"
                                            data-hoffset="['0','0','0','0']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-voffset="['0','0','0','0']" data-fontsize="['20','20','24','20']"
                                            data-lineheight="['36','36','40','30']"
                                            data-fontweight="['300','300','300','300']"
                                            data-letterspacing="['0','0','0','0']"
                                            data-color="['#ffffff','#ffffff','#ffffff','#ffffff']"
                                            data-width="['500','500','auto','auto']" data-height="auto"
                                            data-whitespace="normal" data-basealign="grid" data-type="text"
                                            data-responsive_offset="off" data-verticalalign="middle"
                                            data-responsive="on"
                                            data-frames='[{"delay":2500,"speed":800,"frame":"0","from":"y:50px;opacity:0;fb:20px;","to":"o:0.6;fb:0;","ease":"power3.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"power3.inOut"}]'
                                            data-textAlign="['center','center','center','center']"
                                            data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[36,36,60,40]" data-paddingleft="[0,0,0,0]">
                                            Beranggotakan Program Studi S2 Akuntansi atau Magister Akuntansi dari universitas-universitas di seluruh Indonesia.
                                    </div>
                                    <!-- end text layer -->
                                    <!-- start button layer -->
                                    <div class="tp-caption tp-resizeme" id="slide-1-layer-09"
                                            data-x="['center','center','center','center']"
                                            data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']"
                                            data-voffset="['0','0','0','0']" data-width="auto" data-height="none"
                                            data-whitespace="nowrap" data-fontsize="['18','16','16','16']"
                                            data-lineheight="['70','55','55','55']" data-type="text"
                                            data-responsive_offset="off" data-responsive="off"
                                            data-frames='[{"delay":3000,"speed":1000,"frame":"0","from":"y:100px;opacity:0;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                            data-textAlign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]" data-paddingright="[75,70,65,60]"
                                            data-paddingbottom="[0,0,0,0]" data-paddingleft="[45,35,30,30]">
                                        <a href="#"
                                            class="btn btn-extra-large get-started-btn btn-rounded with-rounded btn-gradient-flamingo-amethyst-green btn-box-shadow">Tentang
                                            Kami<span class="bg-white text-base-color"><i
                                                    class="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                    <!-- end button layer -->
                                </div>
                                <!-- end column layer -->
                            </div>
                            <!-- end row layer -->
                        </div>
                        <!-- end row zone layer -->
                        <!-- start beige background layer -->
                        <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-base-color border-radius-50"
                                id="slide-1-layer-10" data-x="['center','center','center','center']"
                                data-hoffset="['510','410','310','0']" data-y="['middle','middle','middle','middle']"
                                data-voffset="['-320','-250','-250','0']" data-width="['122','122','120','120']"
                                data-height="['122','122','120','120']" data-visibility="['on','on','off','off']"
                                data-whitespace="nowrap" data-basealign="grid" data-type="shape"
                                data-responsive_offset="on"
                                data-frames='[{"delay":3500,"speed":1000,"frame":"0","from":"x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;","to":"o:1;","ease":"Back.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="z-index: 0;">
                        </div>
                        <!-- end beige background layer -->
                        <!-- start beige text layer -->
                        <div class="tp-caption d-inline-block" id="slide-1-layer-11"
                                data-x="['center','center','center','center']" data-hoffset="['510','410','310','0']"
                                data-y="['middle','middle','middle','middle']" data-voffset="['-305','-250','-250','0']"
                                data-visibility="['on','on','off','off']" data-fontsize="['13','13','13','13']"
                                data-lineheight="['16','16','16','16']" data-fontweight="['500','600','600','600']"
                                data-letterspacing="['0','0','0','0']"
                                data-color="['#ffffff','#ffffff','#ffffff','#ffffff']"
                                data-width="['100','100','100','100']" data-height="auto" data-whitespace="normal"
                                data-basealign="grid" data-type="text" data-responsive_offset="on"
                                data-verticalalign="middle" data-responsive="on"
                                data-frames='[{"delay":3700,"speed":1000,"frame":"0","from":"x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;","to":"o:1;","ease":"Back.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[33,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="word-break: initial;">
                            <i class="bi bi-patch-check-fill icon-extra-medium d-block pb-10px"></i> <span
                                class="d-block text-uppercase">APSSAI Indonesia</span>
                        </div>
                        <!-- end beige text layer -->
                    </li>
                    <li data-index="rs-02" data-transition="parallaxleft" data-slotamount="default"
                        data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default"
                        data-easeout="default" data-masterspeed="1500" data-rotate="0" data-saveperformance="off"
                        data-title="Crossfit" data-param1="" data-param2="" data-param3="" data-param4=""
                        data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10=""
                        data-description="">
                        <!-- slide's main background image -->
                        <img src="/images/apssai3.webp" alt="/image"
                                data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat"
                                class="rev-slidebg" data-no-retina>
                        <!-- start overlay layer -->
                        <div class="tp-caption tp-shape tp-shapewrapper " id="slide-2-layer-01"
                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                                data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape"
                                data-basealign="slide" data-responsive_offset="off" data-responsive="off"
                                data-frames='[{"delay":0,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                {"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power4.easeInOut"}]' style="background:rgba(22,35,63,0.1); z-index: 0;">
                        </div>
                        <!-- end overlay layer -->
                        <!-- start shape layer -->
                        <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-regal-blue border-radius-50"
                                id="slide-2-layer-02" data-x="['center','center','center','center']"
                                data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                                data-voffset="['0','0','0','0']" data-width="['900','700','700','600']"
                                data-height="['900','700','700','600']" data-whitespace="nowrap" data-type="shape"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1000,"speed":1000,"frame":"0","from":"x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;","to":"o:0.5;","ease":"Back.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="z-index: 0;">
                        </div>
                        <!-- end shape layer -->
                        <!-- start shape layer -->
                        <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-regal-blue border-radius-50"
                                id="slide-2-layer-03" data-x="['center','center','center','center']"
                                data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                                data-voffset="['0','0','0','0']" data-width="['1200','1000','900','800']"
                                data-height="['1200','1000','900','800']" data-whitespace="nowrap" data-type="shape"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1300,"speed":1000,"frame":"0","from":"x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;","to":"o:0.3;","ease":"Back.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="z-index: 0;">
                        </div>
                        <!-- end shape layer -->
                        <!-- start row zone layer -->
                        <div id="rrzm_639" class="rev_row_zone rev_row_zone_middle">
                            <!-- start row layer -->
                            <div class="tp-caption  " id="slide-2-layer-04" data-x="['left','left','left','left']"
                                    data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-426','-426','-426','-426']" data-width="none" data-height="none"
                                    data-whitespace="nowrap" data-type="row" data-columnbreak="3"
                                    data-responsive_offset="on" data-responsive="off"
                                    data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textAlign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]" data-paddingright="[100,75,50,30]"
                                    data-paddingbottom="[0,0,0,0]" data-paddingleft="[100,75,50,30]">
                                <!-- start column layer -->
                                <div class="tp-caption" id="slide-2-layer-05" data-x="['left','left','left','left']"
                                        data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']"
                                        data-voffset="['100','100','100','100']" data-width="none" data-height="none"
                                        data-whitespace="nowrap" data-type="column" data-responsive_offset="on"
                                        data-responsive="off"
                                        data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-columnwidth="100%" data-verticalalign="top"
                                        data-textAlign="['center','center','center','center']">
                                    <!-- start subtitle layer -->
                                    <div class="tp-caption mx-auto text-uppercase" id="slide-2-layer-06"
                                            data-x="['center','center','center','center']"
                                            data-hoffset="['0','0','0','0']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-voffset="['0','0','0','0']" data-fontsize="['13','13','13','13']"
                                            data-lineheight="['20','20','20','20']"
                                            data-fontweight="['500','500','500','500']"
                                            data-letterspacing="['1','1','1','1']"
                                            data-color="['#ffffff','#ffffff','#ffffff','#ffffff']"
                                            data-width="['800','auto','auto','auto']" data-height="auto"
                                            data-whitespace="normal" data-basealign="grid" data-type="text"
                                            data-responsive_offset="off" data-verticalalign="middle"
                                            data-responsive="off"
                                            data-frames='[{"delay":2500,"speed":800,"frame":"0","from":"y:-50px;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"power3.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"power3.inOut"}]'
                                            data-textAlign="['center','center','center','center']"
                                            data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[25,25,10,10]" data-paddingleft="[0,0,0,0]"
                                            style="word-break: initial;">
                                        <i class="bi bi-award pe-5px icon-small"></i>
                                        APSSAI Indonesia
                                    </div>
                                    <!-- end subtitle layer -->
                                    <!-- start title layer -->
                                    <div class="tp-caption mx-auto" id="slide-2-layer-07"
                                            data-x="['center','center','center','center']"
                                            data-hoffset="['0','0','0','0']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-voffset="['0','0','0','0']" data-fontsize="['75','60','70','50']"
                                            data-lineheight="['70','65','75','55']"
                                            data-fontweight="['700','700','700','700']"
                                            data-letterspacing="['-2','-2','-2','0']"
                                            data-color="['#ffffff','#ffffff','#ffffff','#ffffff']"
                                            data-width="['700','600','600','auto']" data-height="auto"
                                            data-whitespace="normal" data-basealign="grid" data-type="text"
                                            data-responsive_offset="off" data-verticalalign="middle"
                                            data-responsive="on"
                                            data-frames='[{"delay":"1500","split":"chars","splitdelay":0.03,"speed":800,"split_direction":"middletoedge","frame":"0","from":"x:50px;opacity:0;fb:10px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":100,"frame":"999","to":"opacity:0;fb:0;","ease":"Power4.easeOut"}]'
                                            data-textAlign="['center','center','center','center']"
                                            data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[33,28,35,25]" data-paddingleft="[0,0,0,0]"
                                            style="word-break: initial; text-shadow: #0b1236 3px 3px 15px;">
                                            Asosiasi Program Studi S2 Akuntansi Indonesia
                                    </div>
                                    <!-- end title layer -->
                                    <!-- start text layer -->
                                    <div class="tp-caption mx-auto" id="slide-2-layer-08"
                                            data-x="['center','center','center','center']"
                                            data-hoffset="['0','0','0','0']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-voffset="['0','0','0','0']" data-fontsize="['20','20','24','20']"
                                            data-lineheight="['36','36','40','30']"
                                            data-fontweight="['300','300','300','300']"
                                            data-letterspacing="['0','0','0','0']"
                                            data-color="['#ffffff','#ffffff','#ffffff','#ffffff']"
                                            data-width="['500','500','auto','auto']" data-height="auto"
                                            data-whitespace="normal" data-basealign="grid" data-type="text"
                                            data-responsive_offset="off" data-verticalalign="middle"
                                            data-responsive="on"
                                            data-frames='[{"delay":2500,"speed":800,"frame":"0","from":"y:50px;opacity:0;fb:20px;","to":"o:0.6;fb:0;","ease":"power3.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"power3.inOut"}]'
                                            data-textAlign="['center','center','center','center']"
                                            data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[36,36,60,40]" data-paddingleft="[0,0,0,0]">
                                            Beranggotakan Program Studi S2 Akuntansi atau Magister Akuntansi dari universitas-universitas di seluruh Indonesia.
                                    </div>
                                    <!-- end text layer -->
                                    <!-- start button layer -->
                                    <div class="tp-caption tp-resizeme" id="slide-2-layer-09"
                                            data-x="['center','center','center','center']"
                                            data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']"
                                            data-voffset="['0','0','0','0']" data-width="auto" data-height="none"
                                            data-whitespace="nowrap" data-fontsize="['18','16','16','16']"
                                            data-lineheight="['70','55','55','55']" data-type="text"
                                            data-responsive_offset="off" data-responsive="off"
                                            data-frames='[{"delay":3000,"speed":1000,"frame":"0","from":"y:100px;opacity:0;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                            data-textAlign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]" data-paddingright="[75,70,65,60]"
                                            data-paddingbottom="[0,0,0,0]" data-paddingleft="[45,35,30,30]">
                                        <a href="#"
                                            class="btn btn-extra-large get-started-btn btn-rounded with-rounded btn-gradient-flamingo-amethyst-green btn-box-shadow">Tentang Kami<span class="bg-white text-base-color"><i
                                                    class="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                    <!-- end button layer -->
                                </div>
                                <!-- end column layer -->
                            </div>
                            <!-- end row layer -->
                        </div>
                        <!-- end row zone layer -->
                        <!-- start beige background layer -->
                        <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-base-color border-radius-50"
                                id="slide-2-layer-10" data-x="['center','center','center','center']"
                                data-hoffset="['510','410','310','0']" data-y="['middle','middle','middle','middle']"
                                data-voffset="['-320','-250','-250','0']" data-width="['122','122','120','120']"
                                data-height="['122','122','120','120']" data-visibility="['on','on','off','off']"
                                data-whitespace="nowrap" data-basealign="grid" data-type="shape"
                                data-responsive_offset="on"
                                data-frames='[{"delay":3500,"speed":1000,"frame":"0","from":"x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;","to":"o:1;","ease":"Back.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="z-index: 0;">
                        </div>
                        <!-- end beige background layer -->
                        <!-- start beige text layer -->
                        <div class="tp-caption d-inline-block" id="slide-2-layer-11"
                                data-x="['center','center','center','center']" data-hoffset="['510','410','310','0']"
                                data-y="['middle','middle','middle','middle']" data-voffset="['-305','-250','-250','0']"
                                data-visibility="['on','on','off','off']" data-fontsize="['13','13','13','13']"
                                data-lineheight="['16','16','16','16']" data-fontweight="['500','600','600','600']"
                                data-letterspacing="['0','0','0','0']"
                                data-color="['#ffffff','#ffffff','#ffffff','#ffffff']"
                                data-width="['100','100','100','100']" data-height="auto" data-whitespace="normal"
                                data-basealign="grid" data-type="text" data-responsive_offset="on"
                                data-verticalalign="middle" data-responsive="on"
                                data-frames='[{"delay":3700,"speed":1000,"frame":"0","from":"x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;","to":"o:1;","ease":"Back.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[33,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="word-break: initial;">
                            <i class="bi bi-patch-check-fill icon-extra-medium d-block pb-10px"></i> <span
                                class="d-block text-uppercase">APSSAI Indonesia</span>
                        </div>
                        <!-- end beige text layer -->
                    </li>
                    <li data-index="rs-03" data-transition="parallaxleft" data-slotamount="default"
                        data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default"
                        data-easeout="default" data-masterspeed="1500" data-rotate="0" data-saveperformance="off"
                        data-title="Crossfit" data-param1="" data-param2="" data-param3="" data-param4=""
                        data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10=""
                        data-description="">
                        <!-- slide's main background image -->
                        <img src="/images/apssai1.webp" alt="/image"
                                data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat"
                                class="rev-slidebg" data-no-retina>
                        <!-- start overlay layer -->
                        <div class="tp-caption tp-shape tp-shapewrapper " id="slide-3-layer-01"
                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                                data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape"
                                data-basealign="slide" data-responsive_offset="off" data-responsive="off"
                                data-frames='[{"delay":0,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                {"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power4.easeInOut"}]' style="background:rgba(22,35,63,0.1); z-index: 0;">
                        </div>
                        <!-- end overlay layer -->
                        <!-- start shape layer -->
                        <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-regal-blue border-radius-50"
                                id="slide-3-layer-02" data-x="['center','center','center','center']"
                                data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                                data-voffset="['0','0','0','0']" data-width="['900','700','700','600']"
                                data-height="['900','700','700','600']" data-whitespace="nowrap" data-type="shape"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1000,"speed":1000,"frame":"0","from":"x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;","to":"o:0.5;","ease":"Back.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="z-index: 0;">
                        </div>
                        <!-- end shape layer -->
                        <!-- start shape layer -->
                        <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-regal-blue border-radius-50"
                                id="slide-3-layer-03" data-x="['center','center','center','center']"
                                data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                                data-voffset="['0','0','0','0']" data-width="['1200','1000','900','800']"
                                data-height="['1200','1000','900','800']" data-whitespace="nowrap" data-type="shape"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1300,"speed":1000,"frame":"0","from":"x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;","to":"o:0.3;","ease":"Back.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="z-index: 0;">
                        </div>
                        <!-- end shape layer -->
                        <!-- start row zone layer -->
                        <div id="rrzm_640" class="rev_row_zone rev_row_zone_middle">
                            <!-- start row layer -->
                            <div class="tp-caption  " id="slide-3-layer-04" data-x="['left','left','left','left']"
                                    data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-426','-426','-426','-426']" data-width="none" data-height="none"
                                    data-whitespace="nowrap" data-type="row" data-columnbreak="3"
                                    data-responsive_offset="on" data-responsive="off"
                                    data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textAlign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]" data-paddingright="[100,75,50,30]"
                                    data-paddingbottom="[0,0,0,0]" data-paddingleft="[100,75,50,30]">
                                <!-- start column layer -->
                                <div class="tp-caption" id="slide-3-layer-05" data-x="['left','left','left','left']"
                                        data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']"
                                        data-voffset="['100','100','100','100']" data-width="none" data-height="none"
                                        data-whitespace="nowrap" data-type="column" data-responsive_offset="on"
                                        data-responsive="off"
                                        data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-columnwidth="100%" data-verticalalign="top"
                                        data-textAlign="['center','center','center','center']">
                                    <!-- start subtitle layer -->
                                    <div class="tp-caption mx-auto text-uppercase" id="slide-3-layer-06"
                                            data-x="['center','center','center','center']"
                                            data-hoffset="['0','0','0','0']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-voffset="['0','0','0','0']" data-fontsize="['13','13','13','13']"
                                            data-lineheight="['20','20','20','20']"
                                            data-fontweight="['500','500','500','500']"
                                            data-letterspacing="['1','1','1','1']"
                                            data-color="['#ffffff','#ffffff','#ffffff','#ffffff']"
                                            data-width="['800','auto','auto','auto']" data-height="auto"
                                            data-whitespace="normal" data-basealign="grid" data-type="text"
                                            data-responsive_offset="off" data-verticalalign="middle"
                                            data-responsive="off"
                                            data-frames='[{"delay":2500,"speed":800,"frame":"0","from":"y:-50px;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"power3.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"power3.inOut"}]'
                                            data-textAlign="['center','center','center','center']"
                                            data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[25,25,10,10]" data-paddingleft="[0,0,0,0]"
                                            style="word-break: initial;">
                                        <i class="bi bi-award pe-5px icon-small"></i>APSSAI Indonesia
                                    </div>
                                    <!-- end subtitle layer -->
                                    <!-- start title layer -->
                                    <div class="tp-caption mx-auto" id="slide-3-layer-07"
                                            data-x="['center','center','center','center']"
                                            data-hoffset="['0','0','0','0']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-voffset="['0','0','0','0']" data-fontsize="['75','60','70','50']"
                                            data-lineheight="['70','65','75','55']"
                                            data-fontweight="['700','700','700','700']"
                                            data-letterspacing="['-2','-2','-2','0']"
                                            data-color="['#ffffff','#ffffff','#ffffff','#ffffff']"
                                            data-width="['700','600','600','auto']" data-height="auto"
                                            data-whitespace="normal" data-basealign="grid" data-type="text"
                                            data-responsive_offset="off" data-verticalalign="middle"
                                            data-responsive="on"
                                            data-frames='[{"delay":"1500","split":"chars","splitdelay":0.03,"speed":800,"split_direction":"middletoedge","frame":"0","from":"x:50px;opacity:0;fb:10px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":100,"frame":"999","to":"opacity:0;fb:0;","ease":"Power4.easeOut"}]'
                                            data-textAlign="['center','center','center','center']"
                                            data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[33,28,35,25]" data-paddingleft="[0,0,0,0]"
                                            style="word-break: initial; text-shadow: #0b1236 3px 3px 15px;">
                                            Asosiasi Program Studi S2 Akuntansi Indonesia
                                    </div>
                                    <!-- end title layer -->
                                    <!-- start text layer -->
                                    <div class="tp-caption mx-auto" id="slide-3-layer-08"
                                            data-x="['center','center','center','center']"
                                            data-hoffset="['0','0','0','0']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-voffset="['0','0','0','0']" data-fontsize="['20','20','24','20']"
                                            data-lineheight="['36','36','40','30']"
                                            data-fontweight="['300','300','300','300']"
                                            data-letterspacing="['0','0','0','0']"
                                            data-color="['#ffffff','#ffffff','#ffffff','#ffffff']"
                                            data-width="['500','500','auto','auto']" data-height="auto"
                                            data-whitespace="normal" data-basealign="grid" data-type="text"
                                            data-responsive_offset="off" data-verticalalign="middle"
                                            data-responsive="on"
                                            data-frames='[{"delay":2500,"speed":800,"frame":"0","from":"y:50px;opacity:0;fb:20px;","to":"o:0.6;fb:0;","ease":"power3.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"power3.inOut"}]'
                                            data-textAlign="['center','center','center','center']"
                                            data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[36,36,60,40]" data-paddingleft="[0,0,0,0]">
                                            Beranggotakan Program Studi S2 Akuntansi atau Magister Akuntansi dari universitas-universitas di seluruh Indonesia.
                                    </div>
                                    <!-- end text layer -->
                                    <!-- start button layer -->
                                    <div class="tp-caption tp-resizeme" id="slide-3-layer-09"
                                            data-x="['center','center','center','center']"
                                            data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']"
                                            data-voffset="['0','0','0','0']" data-width="auto" data-height="none"
                                            data-whitespace="nowrap" data-fontsize="['18','16','16','16']"
                                            data-lineheight="['70','55','55','55']" data-type="text"
                                            data-responsive_offset="off" data-responsive="off"
                                            data-frames='[{"delay":3000,"speed":1000,"frame":"0","from":"y:100px;opacity:0;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                            data-textAlign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]" data-paddingright="[75,70,65,60]"
                                            data-paddingbottom="[0,0,0,0]" data-paddingleft="[45,35,30,30]">
                                        <a href="#"
                                            class="btn btn-extra-large get-started-btn btn-rounded with-rounded btn-gradient-flamingo-amethyst-green btn-box-shadow">Tentang Kami<span class="bg-white text-base-color"><i
                                                    class="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                    <!-- end button layer -->
                                </div>
                                <!-- end column layer -->
                            </div>
                            <!-- end row layer -->
                        </div>
                        <!-- end row zone layer -->
                        <!-- start beige background layer -->
                        <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-base-color border-radius-50"
                                id="slide-3-layer-10" data-x="['center','center','center','center']"
                                data-hoffset="['510','410','310','0']" data-y="['middle','middle','middle','middle']"
                                data-voffset="['-320','-250','-250','0']" data-width="['122','122','120','120']"
                                data-height="['122','122','120','120']" data-visibility="['on','on','off','off']"
                                data-whitespace="nowrap" data-basealign="grid" data-type="shape"
                                data-responsive_offset="on"
                                data-frames='[{"delay":3500,"speed":1000,"frame":"0","from":"x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;","to":"o:1;","ease":"Back.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="z-index: 0;">
                        </div>
                        <!-- end beige background layer -->
                        <!-- start beige text layer -->
                        <div class="tp-caption d-inline-block" id="slide-3-layer-11"
                                data-x="['center','center','center','center']" data-hoffset="['510','410','310','0']"
                                data-y="['middle','middle','middle','middle']" data-voffset="['-305','-250','-250','0']"
                                data-visibility="['on','on','off','off']" data-fontsize="['13','13','13','13']"
                                data-lineheight="['16','16','16','16']" data-fontweight="['500','600','600','600']"
                                data-letterspacing="['0','0','0','0']"
                                data-color="['#ffffff','#ffffff','#ffffff','#ffffff']"
                                data-width="['100','100','100','100']" data-height="auto" data-whitespace="normal"
                                data-basealign="grid" data-type="text" data-responsive_offset="on"
                                data-verticalalign="middle" data-responsive="on"
                                data-frames='[{"delay":3700,"speed":1000,"frame":"0","from":"x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;","to":"o:1;","ease":"Back.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[33,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="word-break: initial;">
                            <i class="bi bi-patch-check-fill icon-extra-medium d-block pb-10px"></i> <span
                                class="d-block text-uppercase">APSSAI Indonesia</span>
                        </div>
                        <!-- end beige text layer -->
                    </li>
                </ul>
                <div class="tp-bannertimer"
                        style="height: 10px; background-color: rgba(0, 0, 0, 0.10); z-index: 98"></div>
            </div>
        </div>
    </section>
    <!-- end slider -->
    <!-- start section -->
    <section class="p-0 border-bottom border-color-extra-medium-gray">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 justify-content-center"
                    data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 0, "staggervalue": 500, "easing": "easeOutQuad" }'>
                <!-- start content box item -->
                <div
                    class="col pt-35px pb-35px md-pb-0 text-dark-gray border-end border-color-extra-medium-gray sm-border-end-0">
                    <div
                        class="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start">
                        <div class="flex-shrink-0 me-15px md-me-0">
                            <h2 class="mb-0 fw-800">Since<sup class="fs-24">2017</sup></h2>
                        </div>
                        <div>
                            <!-- <span class="lh-24 fw-600 d-block">Track and analyze <br />business reports.</span> -->
                        </div>
                    </div>
                </div>
                <!-- end content box item -->
                <!-- start content box item -->
                <div
                    class="col pt-35px pb-35px md-pb-0 text-dark-gray border-end border-color-extra-medium-gray sm-border-end-0">
                    <div
                        class="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start">
                        <div class="flex-shrink-0 me-15px md-me-0">
                            <h2 class="mb-0 fw-800 ls-minus-3px">{{ mitra_all.length }}</h2>
                        </div>
                        <div>
                            <div class="review-star-icon fs-20 d-inline-block text-gradient-orange-sky-blue">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                            </div>
                            <span class="lh-24 fw-600 d-block">Universitas Mitra</span>
                        </div>
                    </div>
                </div>
                <!-- end content box item -->
                <!-- start content box item -->
                <div class="col pt-35px pb-35px text-dark-gray">
                    <div
                        class="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start">
                        <div class="flex-shrink-0 me-15px md-me-0">
                            <h2 class="mb-0 fw-800">Nasional<sup class="fs-24"></sup></h2>
                        </div>
                        <div>
                            <span class="lh-24 fw-600 d-block">Hadir <br />di Seluruh Indonesia</span>
                        </div>
                    </div>
                </div>
                <!-- end content box item -->
            </div>
        </div>
    </section>
    <!-- end section -->
    <!-- start section -->
    <section>
        <div class="container">
            <div class="row justify-content-center align-items-center mb-6 sm-pb-9">
                <div class="col-lg-6 col-md-9 position-relative md-mb-15 text-center text-lg-start"
                        data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 15, "easing": "easeOutQuad" }'>
                    <div class="absolute-middle-center z-index-9 counter-style-02 text-center">
                        <span class="fs-160 fw-800 text-dark-gray ls-minus-10px xs-ls-minus-5px position-relative lg-fs-130 xs-fs-75">8<sub class="align-top fs-80 lg-fs-70 text-dark-gray position-relative top-minus-3px">+</sub></span>
                        <span class="d-block mx-auto fs-20 fw-500 lh-26 w-70 text-center text-dark-gray xs-w-100">Years Established </span>
                    </div>
                    <img src="/images/demo-corporate-03.png" alt="">
                    <img src="/images/apssai7.webp" class="position-absolute top-50 left-minus-100px lg-left-minus-40px sm-left-minus-30px lg-w-50 sm-w-55" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-220px)" alt="">
                    <img src="/images/demo-corporate-02.png" class="position-absolute top-0px xl-top-minus-10px w-170px right-20px md-right-40px xs-w-40" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)" alt="">
                </div>
                <div class="col-lg-6 ps-6 text-center text-lg-start lg-ps-15px" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <span class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">About Us</span>
                    <h3 class="text-dark-gray fw-700 ls-minus-1px">APSSAI INDONESIA</h3>
                    <p class="w-80 xl-w-90 lg-w-100 mb-40px sm-mb-25px">APSSAI (Asosiasi Program Studi S2 Akuntansi Indonesia) merupakan asosiasi pengelola program studi S2 yang saat ini beranggotakan Program Studi S2 Akuntansi atau Magister Akuntansi dari universitas di seluruh Indonesia, dan saat ini berjumlah lebih dari 81 program studi S2 Akuntansi. APSSAI didirikan Tanggal 10 Oktober 2017, di Makassar.</p>
                    <a href="demo-corporate-about.html" class="btn btn-large btn-dark-gray btn-hover-animation-switch btn-box-shadow btn-rounded me-25px xs-me-0">
                        <span>
                            <span class="btn-text">Read More</span>
                            <span class="btn-icon"><i class="feather icon-feather-arrow-right"></i></span>
                            <span class="btn-icon"><i class="feather icon-feather-arrow-right"></i></span>
                        </span>
                    </a>
                    <span class="text-dark-gray fw-700 ls-minus-05px d-block d-sm-inline-block sm-mt-15px"><a href="tel:1800222000"><i class="feather icon-feather-phone-call me-10px"></i>(0274) 513109</a></span>
                </div>
            </div>
        </div>
    </section>
    <!-- end section -->
    <!-- start section -->
    <section class="bg-gradient-quartz-white border-radius-6px lg-border-radius-0px pb-0">
        <div class="container">
            <div class="row justify-content-center mb-3">
                <div class="col-lg-7 text-center"
                        data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <h3 class="text-dark-gray fw-700 ls-minus-1px">Kegiatan Terbaru</h3>
                </div>
            </div>
            <div class="row mb-5 sm-mb-7">
                <div class="col-12">
                    <ul class="blog-grid blog-wrapper grid-loading grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
                        data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
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
    <!-- start section -->
    <section class="pt-0">
        <div class="container" v-if="mitra_all && mitra_all.length > 0">
            <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 text-center mb-1" data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <span class="text-dark-gray fw-700 fs-15 text-uppercase border-1 pb-5px border-bottom border-color-extra-medium-gray text-dark-gray">{{ mitra_all.length }} Mitra</span>
            </div>
            </div>
            <div class="row position-relative clients-style-08 mt-25px" data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 800, "delay":100, "staggervalue": 150, "easing": "easeOutQuad" }'>
            <div class="col swiper text-center feather-shadow" data-slider-options='{ "slidesPerView": 2, "spaceBetween":0, "speed": 3000, "loop": true, "pagination": { "el": ".slider-four-slide-pagination-2", "clickable": false }, "allowTouchMove": false, "autoplay": { "delay":0, "disableOnInteraction": false, "pauseOnMouseEnter": false}, "navigation": { "nextEl": ".slider-four-slide-next-2", "prevEl": ".slider-four-slide-prev-2" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 5 }, "768": { "slidesPerView": 3 }, "576": { "slidesPerView": 2 } }, "effect": "slide" }'>
                <div class="swiper-wrapper marquee-slide">
                <!-- start client item -->
                <div class="swiper-slide" v-for="(mitra, index) in mitra_all" :key="index">
                    <a href="javascript.void(0)"><img :src="apiUrl+mitra.logo" alt="" /></a>
                </div>
                <!-- end client item -->
                </div> 
            </div>  
            </div>
        </div>
    </section>
    <!-- end section -->
</template>
