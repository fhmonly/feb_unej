<script setup>
    const config = useRuntimeConfig()
    const apiUrl = config.public.apiUrl
    

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
                        <img src="/images/bg-feb.webp" alt="/image"
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
                                        <i class="bi bi-award pe-5px icon-small"></i>FEB UNEJ
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
                                            Faculty of Economics and Business
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
                                           The Campus of Pancasila For the World Economy and Business
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
                                            class="btn btn-extra-large get-started-btn btn-rounded with-rounded btn-gradient-flamingo-amethyst-green btn-box-shadow">About Us<span class="bg-white text-base-color"><i
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
                                class="d-block text-uppercase">FEB UNEJ</span>
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
                        <img src="/images/tower-feb.jpg" alt="/image"
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
                                        FEB UNEJ
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
                                            Faculty of Economics and Business University of Jember
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
                                            The Campus of Pancasila For the World Economy and Business
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
                                            class="btn btn-extra-large get-started-btn btn-rounded with-rounded btn-gradient-flamingo-amethyst-green btn-box-shadow">About Us<span class="bg-white text-base-color"><i
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
                                class="d-block text-uppercase">FEB UNEJ</span>
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
                        <img src="/images/plaza.jpg" alt="/image"
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
                                        <i class="bi bi-award pe-5px icon-small"></i>FEB UNEJ
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
                                            Faculty of Economics and Business University of Jember
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
                                            The Campus of Pancasila For the World Economy and Business
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
                                            class="btn btn-extra-large get-started-btn btn-rounded with-rounded btn-gradient-flamingo-amethyst-green btn-box-shadow">About Us<span class="bg-white text-base-color"><i
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
                                class="d-block text-uppercase">FEB UNEJ</span>
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
                            <h2 class="mb-0 fw-800">Since<sup class="fs-24">1962</sup></h2>
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
                            <h2 class="mb-0 fw-800 ls-minus-3px">13</h2>
                        </div>
                        <div>
                            <div class="review-star-icon fs-20 d-inline-block text-gradient-orange-sky-blue">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                            </div>
                            <span class="lh-24 fw-600 d-block">Academics Programs</span>
                        </div>
                    </div>
                </div>
                <!-- end content box item -->
                <!-- start content box item -->
                <div class="col pt-35px pb-35px text-dark-gray">
                    <div
                        class="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start">
                        <div class="flex-shrink-0 me-15px md-me-0">
                            <h2 class="mb-0 fw-800">Excellent<sup class="fs-24"></sup></h2>
                        </div>
                        <div>
                            <span class="lh-24 fw-600 d-block">Accredited  <br />International</span>
                        </div>
                    </div>
                </div>
                <!-- end content box item -->
            </div>
        </div>
    </section>
    <!-- end section -->

    
            <!-- start section -->
            <section class="p-0">
                <div class="container">
                    <div class="row justify-content-center" data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <div class="col-12">
                            <div class="border-radius-6px h-450px md-h-350px sm-h-400px d-flex flex-wrap align-items-center justify-content-center overflow-hidden cover-background box-shadow-quadruple-large pt-15" style="background-image: url('/images/image.png')">
                                <div class="opacity-full-dark bg-gradient-regal-blue-transparent"></div>
                                <div class="row justify-content-center m-0">
                                    <div class="col-lg-7 col-md-8 z-index-1 text-center text-md-start sm-mb-20px">
                                        <h3 class="text-white mb-0 fw-400 fancy-text-style-4">The Campus of  <span class="fw-600" data-fancy-text='{ "effect": "rotate", "string": ["business!", "economic!", "pancasila!"] }'></span>
                                        </h3>
                                    </div>
                                    <div class="col-md-2 position-relative z-index-1 text-center sm-mb-20px">
                                        <a href="https://www.youtube.com/watch?v=aRXagk1rrnU" class="position-relative d-inline-block text-center border border-2 border-color-white rounded-circle video-icon-box video-icon-large popup-youtube">
                                            <span>
                                                <span class="video-icon">
                                                    <i class="fa-solid fa-play fs-20 text-white"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <!-- <div class="w-100 text-center position-relative mt-auto pt-20px pb-25px ps-15px pe-15px border-top border-color-transparent-white-light">
                                    <div class="fs-14 text-uppercase text-white fw-600 ls-05px">Learn More <a href="demo-corporate-contact.html" class="text-decoration-line-bottom text-white">Got a project in mind?</a></div>
                                </div> -->
                            </div>
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
                            <h3 class="text-dark-gray fw-700 ls-minus-1px">FEB News</h3>
                        </div>
                    </div>
                    <div class="row mb-5 sm-mb-7">
                        <div class="col-12">
                            <ul class="blog-grid blog-wrapper grid-loading grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
                                data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                                <li class="grid-sizer"></li>
                                <!-- start blog item -->
                                <li class="grid-item">
                                    <div class="card border-0 border-radius-5px box-shadow-quadruple-large box-shadow-quadruple-large-hover">
                                        <div class="blog-image">
                                            <a href="demo-corporate-blog-single-clean.html" class="d-block"><img src="https://placehold.co/600x430" alt="" /></a>
                                            <div class="blog-categories">
                                                <a href="demo-corporate-blog.html" class="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase fw-700">Agency</a>
                                            </div>
                                        </div>
                                        <div class="card-body p-12 lg-p-10">
                                            <a href="demo-corporate-blog-single-clean.html" class="card-title mb-15px fw-700 fs-19 text-dark-gray d-inline-block w-90 md-w-100">Build up healthy habits and strong peaceful life.</a>
                                            <p>Lorem ipsum dolor consectetur adipiscing eiusmod tempor...</p>
                                            <div class="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase">
                                                <div class="me-auto">
                                                    <span class="blog-date d-inline-block fw-700 text-dark-gray">30 August 2021</span>
                                                    <div class="d-inline-block author-name fw-700 text-dark-gray">By <a href="demo-corporate-blog.html" class="text-dark-gray text-decoration-line-bottom">Den viliamson</a></div>
                                                </div>
                                                <div class="like-count">
                                                    <a href="#"><i class="fa-regular fa-heart text-red"></i><span class="text-dark-gray align-middle fw-700">25</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <!-- end blog item -->
                                <!-- start blog item -->
                                <li class="grid-item">
                                    <div
                                        class="card border-0 border-radius-5px box-shadow-quadruple-large box-shadow-quadruple-large-hover">
                                        <div class="blog-image">
                                            <a href="demo-corporate-blog-single-clean.html" class="d-block"><img
                                                    src="https://placehold.co/600x430" alt="" /></a>
                                            <div class="blog-categories">
                                                <a href="demo-corporate-blog.html"
                                                   class="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase fw-700">Luxurious</a>
                                            </div>
                                        </div>
                                        <div class="card-body p-12 lg-p-10">
                                            <a href="demo-corporate-blog-single-clean.html" class="card-title mb-15px fw-700 fs-19 text-dark-gray d-inline-block w-90 md-w-100">How to bring the season into your great marketing.</a>
                                            <p>Lorem ipsum dolor consectetur adipiscing eiusmod tempor...</p>
                                            <div class="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase">
                                                <div class="me-auto">
                                                    <span class="blog-date d-inline-block fw-700 text-dark-gray">28 August 2021</span>
                                                    <div class="d-inline-block author-name fw-700 text-dark-gray">By <a href="demo-corporate-blog.html" class="text-dark-gray text-decoration-line-bottom">Hugh macleod</a></div>
                                                </div>
                                                <div class="like-count">
                                                    <a href="#"><i class="fa-regular fa-heart text-red"></i><span class="text-dark-gray align-middle fw-700">58</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <!-- end blog item -->
                                <!-- start blog item -->
                                <li class="grid-item">
                                    <div
                                        class="card border-0 border-radius-5px box-shadow-quadruple-large box-shadow-quadruple-large-hover">
                                        <div class="blog-image">
                                            <a href="demo-corporate-blog-single-clean.html" class="d-block"><img src="https://placehold.co/600x430" alt="" /></a>
                                            <div class="blog-categories">
                                                <a href="demo-corporate-blog.html" class="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase fw-700">Business</a>
                                            </div>
                                        </div>
                                        <div class="card-body p-12 lg-p-10">
                                            <a href="demo-corporate-blog-single-clean.html" class="card-title mb-15px fw-700 fs-19 text-dark-gray d-inline-block w-90 md-w-100">Be the strong willed one the public relationship.</a>
                                            <p>Lorem ipsum dolor consectetur adipiscing eiusmod tempor...</p>
                                            <div class="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase">
                                                <div class="me-auto">
                                                    <span class="blog-date d-inline-block fw-700 text-dark-gray">26 August 2021</span>
                                                    <div class="d-inline-block author-name fw-700 text-dark-gray">By <a href="demo-corporate-blog.html" class="text-dark-gray text-decoration-line-bottom">Walton smith</a></div>
                                                </div>
                                                <div class="like-count">
                                                    <a href="#"><i class="fa-regular fa-heart text-red"></i><span class="text-dark-gray align-middle fw-700">75</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <!-- end blog item -->
                            </ul>
                        </div>
                    </div>
                    <div class="row mb-7 sm-mb-9" data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <div class="col text-center">
                            <a href="demo-corporate-about.html" class="btn btn-large btn-dark-gray btn-hover-animation-switch btn-box-shadow btn-rounded me-25px xs-me-0">
                                <span>
                                    <span class="btn-text">Read More</span>
                                    <span class="btn-icon"><i class="feather icon-feather-arrow-right"></i></span>
                                    <span class="btn-icon"><i class="feather icon-feather-arrow-right"></i></span>
                                </span>
                            </a>
                        </div>
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
                        <span class="fs-100 fw-800 text-base-color ls-minus-10px xs-ls-minus-5px position-relative lg-fs-130 xs-fs-75">4000<sub class="align-top fs-80 lg-fs-70 text-base-color position-relative top-minus-3px">+</sub></span>
                        <span class="d-block mx-auto fs-20 fw-500 lh-26 w-70 text-center text-base-color xs-w-100">Active Student </span>
                    </div>
                    <img src="/images/demo-corporate-03.png" alt="">
                    <img src="/images/hero-feb-min.webp" class="position-absolute top-50 left-minus-100px lg-left-minus-40px sm-left-minus-30px lg-w-50 sm-w-55" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-220px)" alt="">
                    <img src="/images/demo-corporate-02.png" class="position-absolute top-0px xl-top-minus-10px w-170px right-20px md-right-40px xs-w-40" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)" alt="">
                </div>
                <div class="col-lg-6 ps-6 text-center text-lg-start lg-ps-15px" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <span class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">About Us</span>
                    <h3 class="text-dark-gray fw-700 ls-minus-1px">FEB UNEJ</h3>
                    <p class="w-80 xl-w-90 lg-w-100 mb-40px sm-mb-25px">Proud to be part of the academic community of the Faculty of Economics and Business, University of Jember, which always seeks to spread benefits to many people, especially in the Tridharma of Higher Education, namely education, research and community service in the economic and business fields.</p>
                    <a href="demo-corporate-about.html" class="btn btn-large btn-dark-gray btn-hover-animation-switch btn-box-shadow btn-rounded me-25px xs-me-0">
                        <span>
                            <span class="btn-text">Read More</span>
                            <span class="btn-icon"><i class="feather icon-feather-arrow-right"></i></span>
                            <span class="btn-icon"><i class="feather icon-feather-arrow-right"></i></span>
                        </span>
                    </a>
                    <!-- <span class="text-dark-gray fw-700 ls-minus-05px d-block d-sm-inline-block sm-mt-15px"><a href="tel:1800222000"><i class="feather icon-feather-phone-call me-10px"></i>(0274) 513109</a></span> -->
                </div>
                
                    <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2 justify-content-center counter-style-07 ps-3 pe-3" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <!-- start counter item -->
                        <div class="col text-center sm-mb-30px">
                            <h2 class="vertical-counter d-inline-flex text-dark-gray fw-800 mb-0 ls-minus-3px position-relative z-index-0" data-to="50">
                                <span class="text-highlight position-absolute bottom-9px w-100"><span class="bg-gradient-flamingo-amethyst-green h-10px opacity-2"></span></span>
                            </h2>
                            <span class="d-block fs-14 fw-700 text-uppercase text-dark-gray">Internasional Cooperation</span>
                        </div>
                        <!-- end counter item -->
                        <!-- start counter item -->
                        <div class="col text-center sm-mb-30px">
                            <h2 class="vertical-counter d-inline-flex text-dark-gray fw-800 mb-0 ls-minus-3px position-relative z-index-0" data-to="100">
                                <span class="text-highlight position-absolute bottom-9px w-100"><span class="bg-gradient-flamingo-amethyst-green h-10px opacity-2"></span></span>
                            </h2>
                            <span class="d-block fs-14 fw-700 text-uppercase text-dark-gray">National Cooperation</span>
                        </div>
                        <!-- end counter item -->
                        <!-- start counter item -->
                        <div class="col text-center sm-mb-30px">
                            <h2 class="vertical-counter d-inline-flex text-dark-gray fw-800 mb-0 ls-minus-3px position-relative z-index-0" data-to="127">
                                <span class="text-highlight position-absolute bottom-9px w-100"><span class="bg-gradient-flamingo-amethyst-green h-10px opacity-2"></span></span>
                            </h2>
                            <span class="d-block fs-14 fw-700 text-uppercase text-dark-gray">Lectures</span>
                        </div>
                        <!-- end counter item -->
                        <!-- start counter item -->
                        <div class="col text-center">
                            <h2 class="vertical-counter d-inline-flex text-dark-gray fw-800 mb-0 ls-minus-3px position-relative z-index-0" data-to="9">
                                <span class="text-highlight position-absolute bottom-9px w-100"><span class="bg-gradient-flamingo-amethyst-green h-10px opacity-2"></span></span>
                            </h2>
                            <span class="d-block fs-14 fw-700 text-uppercase text-dark-gray">Professor</span>
                        </div>
                        <!-- end counter item -->
                    </div>
            </div>
        </div>
    </section>
    <!-- end section -->



            <!-- start section -->
            <section class="overflow-hidden bg-regal-blue position-relative border-radius-6px lg-border-radius-0px z-index-0">
                <img src="/images/bg-feb.webp" class="position-absolute top-minus-150px left-minus-30px z-index-minus-1" data-bottom-top="transform: rotate(0deg) translateY(0)" data-top-bottom="transform:rotate(-20deg) translateY(0)" alt="" />
                <div class="container">
                    <div class="row align-items-center mb-6 sm-mb-9 text-center text-lg-start">
                        <div class="col-lg-5 md-mb-20px">
                            <span class="ps-25px pe-25px mb-10px text-uppercase text-white fs-13 lh-42px fw-600 border-radius-100px bg-gradient-blue-whale-transparent d-inline-block">Programs</span>
                            <h3 class="text-white fw-700 mb-0 ls-minus-1px">Study Program</h3>
                        </div>
                        <div class="col-lg-5 last-paragraph-no-margin md-mb-20px">
                            <!-- <p class="w-85 md-w-100">We strive to develop real-world web solutions that are ideal for small to large projects with bespoke your custom project requirements.</p> -->
                        </div>
                        <div class="col-lg-2 d-flex justify-content-center justify-content-lg-end">
                            <!-- start slider navigation -->
                            <div class="slider-one-slide-prev-1 icon-extra-medium text-white swiper-button-prev slider-navigation-style-04 border border-1 border-color-transparent-white-light">
                                <i class="feather icon-feather-chevron-left"></i>
                            </div>
                            <div class="slider-one-slide-next-1 icon-extra-medium text-white swiper-button-next slider-navigation-style-04 border border-1 border-color-transparent-white-light">
                                <i class="feather icon-feather-chevron-right"></i>
                            </div>
                            <!-- end slider navigation -->
                        </div>
                    </div>
                    <div class="row align-items-center mb-6">
                        <div class="col-12">
                            <div class="outside-box-right-25 sm-outside-box-right-0">
                                <div class="swiper magic-cursor slider-one-slide" data-slider-options='{ "slidesPerView": 1, "spaceBetween": 30, "loop": true, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 4000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 4 }, "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 2 }, "320": { "slidesPerView": 1 } }, "effect": "slide" }'>
                                    <div class="swiper-wrapper">
                                        <!-- start slider item -->
                                        <div class="swiper-slide">
                                            <!-- start interactive banner item -->
                                            <div class="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative">
                                                <img src="https://placehold.co/600x710" alt="" />
                                                <div class="opacity-extra-medium bg-gradient-dark-transparent"></div>
                                                <div class="image-content h-100 w-100 ps-15 pe-15 pt-13 pb-13 md-p-10 d-flex justify-content-bottom align-items-start flex-column">
                                                    <div class="hover-label-icon position-relative z-index-9">
                                                        <div class="label bg-base-color fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 ls-05px">Diploma</div>
                                                        <i class="line-icon-Medal-2 text-white icon-extra-large"></i>
                                                    </div>
                                                    <div class="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column">
                                                        <span class="text-white fw-600 fs-20">Company Management</span>
                                                        <span class="content-title text-white fs-13 fw-500 text-uppercase ls-05px">Read More</span>
                                                        <a href="demo-corporate-services-details.html" class="content-title-hover fs-13 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom">Read More</a>
                                                        <span class="content-arrow lh-42px rounded-circle bg-white w-50px h-50px ms-20px text-center"><i class="fa-solid fa-chevron-right text-dark-gray fs-16"></i></span>
                                                    </div>
                                                    <div class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9">
                                                    </div>
                                                    <div class="box-overlay bg-gradient-base-color-transparent"></div>
                                                    <a href="demo-corporate-services-details.html" class="position-absolute z-index-1 top-0px left-0px h-100 w-100"></a>
                                                </div>
                                            </div>
                                            <!-- end interactive banner item -->
                                        </div>
                                        <!-- end slider item -->
                                        <!-- start slider item -->
                                        <div class="swiper-slide">
                                            <!-- start interactive banner item -->
                                            <div class="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative">
                                                <img src="https://placehold.co/600x710" alt="" />
                                                <div class="opacity-very-light bg-slate-blue"></div>
                                                <div class="image-content h-100 w-100 ps-15 pe-15 pt-13 pb-13 md-p-10 d-flex justify-content-bottom align-items-start flex-column">
                                                    <div class="hover-label-icon position-relative z-index-9">
                                                        <div class="label bg-base-color fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 ls-05px">Bachelor</div>
                                                        <i class="line-icon-Archery-2 text-white icon-extra-large"></i>
                                                    </div>
                                                    <div class="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column">
                                                        <span class="text-white fw-600 fs-20">Management</span>
                                                        <span class="content-title text-white fs-13 fw-500 text-uppercase ls-05px">Read More</span>
                                                        <a href="demo-corporate-services-details.html" class="content-title-hover fs-13 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom">Read More</a>
                                                        <span class="content-arrow lh-42px rounded-circle bg-white w-50px h-50px ms-20px text-center"><i class="fa-solid fa-chevron-right text-dark-gray fs-16"></i></span>
                                                    </div>
                                                    <div class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9">
                                                    </div>
                                                    <div class="box-overlay bg-gradient-base-color-transparent"></div>
                                                    <a href="demo-corporate-services-details.html" class="position-absolute z-index-1 top-0px left-0px h-100 w-100"></a>
                                                </div>
                                            </div>
                                            <!-- end interactive banner item -->
                                        </div>
                                        <!-- end slider item -->
                                        <!-- start slider item -->
                                        <div class="swiper-slide">
                                            <!-- start interactive banner item -->
                                            <div class="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative">
                                                <img src="https://placehold.co/600x710" alt="" />
                                                <div class="opacity-very-light bg-slate-blue"></div>
                                                <div class="image-content h-100 w-100 ps-15 pe-15 pt-13 pb-13 md-p-10 d-flex justify-content-bottom align-items-start flex-column">
                                                    <div class="hover-label-icon position-relative z-index-9">
                                                        <div class="label bg-base-color fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 ls-05px">Master</div>
                                                        <i class="line-icon-Financial text-white icon-extra-large"></i>
                                                    </div>
                                                    <div class="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column">
                                                        <span class="text-white fw-600 fs-20">Management</span>
                                                        <span class="content-title text-white fs-13 fw-500 text-uppercase ls-05px">Read More</span>
                                                        <a href="demo-corporate-services-details.html" class="content-title-hover fs-13 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom">Read More</a>
                                                        <span class="content-arrow lh-42px rounded-circle bg-white w-50px h-50px ms-20px text-center"><i class="fa-solid fa-chevron-right text-dark-gray fs-16"></i></span>
                                                    </div>
                                                    <div class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9"></div>
                                                    <div class="box-overlay bg-gradient-base-color-transparent"></div>
                                                    <a href="demo-corporate-services-details.html" class="position-absolute z-index-1 top-0px left-0px h-100 w-100"></a>
                                                </div>
                                            </div>
                                            <!-- end interactive banner item -->
                                        </div>
                                        <!-- end slider item -->
                                        <!-- start slider item -->
                                        <div class="swiper-slide">
                                            <!-- start interactive banner item -->
                                            <div class="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative">
                                                <img src="https://placehold.co/600x710" alt="" />
                                                <div class="opacity-very-light bg-slate-blue"></div>
                                                <div class="image-content h-100 w-100 ps-15 pe-15 pt-13 pb-13 md-p-10 d-flex justify-content-bottom align-items-start flex-column">
                                                    <div class="hover-label-icon position-relative z-index-9">
                                                        <div class="label bg-base-color fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 ls-05px">Doctoral</div>
                                                        <i class="line-icon-Money-Bag text-white icon-extra-large"></i>
                                                    </div>
                                                    <div class="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column">
                                                        <span class="text-white fw-600 fs-20">Management</span>
                                                        <span class="content-title text-white fs-13 fw-500 text-uppercase ls-05px">Read More</span>
                                                        <a href="demo-corporate-services-details.html" class="content-title-hover fs-13 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom">Read More</a>
                                                        <span class="content-arrow lh-42px rounded-circle bg-white w-50px h-50px ms-20px text-center"><i class="fa-solid fa-chevron-right text-dark-gray fs-16"></i></span>
                                                    </div>
                                                    <div class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9"></div>
                                                    <div class="box-overlay bg-gradient-base-color-transparent"></div>
                                                    <a href="demo-corporate-services-details.html" class="position-absolute z-index-1 top-0px left-0px h-100 w-100"></a>
                                                </div>
                                            </div>
                                            <!-- end interactive banner item -->
                                        </div>
                                        <!-- end slider item -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col-12 text-center">
                            <i class="bi bi-envelope text-white d-inline-block align-middle icon-extra-medium me-10px md-m-5px"></i>
                            <div class="fs-18 text-white d-inline-block align-middle">Save your precious time and effort spent for finding a solution. <a href="demo-corporate-contact.html" class="text-white text-decoration-line-bottom">Contact us now</a></div>
                        </div>
                    </div> -->
                </div>
            </section>
            <!-- end section -->

            
            <!-- start section -->
            <section>
                <div class="container position-relative">
                    <div class="row align-items-center mb-7">
                        <div class="col-xxl-4 col-lg-5 md-mb-15 sm-mb-20 text-center text-lg-start">
                            <span class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">Vision and Mission</span>
                            <p class="text-dark-gray fw-700 mb-40px">To be the leading faculty in the development of economics and business with environmental and agro-industrial insight with an international reputation.</p>
                            <div class="row row-cols-1" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                                <!-- start process step item -->
                                <div class="col-12 process-step-style-05 position-relative hover-box">
                                    <div class="process-step-item d-flex">
                                        <div class="process-step-icon-wrap position-relative">
                                            <div class="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px fs-14 bg-light-red fw-700 position-relative">
                                                <span class="number position-relative z-index-1 text-dark-gray">01</span>
                                                <div class="box-overlay bg-base-color rounded-circle"></div>
                                            </div>
                                            <span class="progress-step-separator bg-dark-gray opacity-1"></span>
                                        </div>
                                        <div class="process-content ps-30px last-paragraph-no-margin mb-30px">
                                            <span class="d-block fw-700 text-dark-gray mb-5px fs-18">Agroindustry and Technology</span>
                                            <p class="w-90 lg-w-100 lh-32">Organizing environmental and agro-industry-oriented learning processes on and off campus with an output-based curriculum and information technology.</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- end process step item -->
                                <!-- start process step item -->
                                <div class="col-12 process-step-style-05 position-relative hover-box">
                                    <div class="process-step-item d-flex">
                                        <div class="process-step-icon-wrap position-relative">
                                            <div class="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px fs-14 bg-light-red fw-700 position-relative">
                                                <span class="number position-relative z-index-1 text-dark-gray">02</span>
                                                <div class="box-overlay bg-base-color rounded-circle"></div>
                                            </div>
                                            <span class="progress-step-separator bg-dark-gray opacity-1"></span>
                                        </div>
                                        <div class="process-content ps-30px last-paragraph-no-margin mb-30px">
                                            <span class="d-block fw-700 text-dark-gray mb-5px fs-18">Research and Service</span>
                                            <p class="w-90 lg-w-100 lh-32">Increasing the output of research and community service that is used and recognized both nationally and internationally.</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- end process step item -->
                                <!-- start process step item -->
                                <div class="col-12 process-step-style-05 position-relative hover-box xs-mb-30px">
                                    <div class="process-step-item d-flex">
                                        <div class="process-step-icon-wrap position-relative">
                                            <div class="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px fs-14 bg-light-red fw-700 position-relative">
                                                <span class="number position-relative z-index-1 text-dark-gray">03</span>
                                                <div class="box-overlay bg-base-color rounded-circle"></div>
                                            </div>
                                        </div>
                                        <div class="process-content ps-30px last-paragraph-no-margin">
                                            <span class="d-block fw-700 text-dark-gray mb-5px fs-18">Graduates Quality</span>
                                            <p class="w-90 lg-w-100 lh-32">Developing graduates who are competent, creative, innovative, adaptive, and with Pancasila character.</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- end process step item -->
                            </div>
                        </div>
                        <div class="col-lg-7 offset-xxl-1 position-relative md-mb-30px sm-mb-15"
                             data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                            <img src="/images/feb-front.jpg" class="position-relative z-index-9 top-40px" alt="">
                        </div>
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <div class="col-12 text-center align-items-center" data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                            <div class="fs-18 fw-500 text-dark-gray d-inline-block align-middle">About Us, <a href="demo-corporate-contact.html" class="text-dark-gray text-decoration-line-bottom fw-700">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end section -->

    <section id="registration" class="registration">
        <div class="container">
            <div class="row content align-items-center">
            <div class="col-md-5" data-aos="fade-right">
                <img src="https://feb.unej.ac.id/assets/temabiru/img/register.webp" class="img-fluid" loading="lazy" alt="Registration Image">
            </div>
            <div class="col-md-7 pt-4" data-aos="fade-up">
             <h3 class="text-dark-gray fw-700 ls-minus-1px">FEB UNEJ Registration</h3>
                <p class="w-80 xl-w-90 lg-w-100 mb-40px sm-mb-25px">
                Want to study at the Faculty of Economics and Business UNEJ? 
                </p>
                <p class="w-80 xl-w-90 lg-w-100 mb-40px sm-mb-25px">
                Get to know us and follow the registration to become part of the Faculty of Economics and Business, University of Jember.
                </p>
                <div class="text-center text-lg-start mt-4">
                <a href="https://unej.ac.id/penerimaan-mahasiswa-baru/" target="_blank" class="btn btn-primary btn-lg">Registration Information</a>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section id="team" class="team-section">
            <div class="container">

                <div class="section-title" data-aos="fade-up">
                    <h3 class="text-dark-gray fs-700">Faculty Leadership</h3>
                    <p class="team-subtitle">Leaders</p>
                </div>

                <div class="row" data-aos="fade-left">
                    <div class="col-lg-3 col-md-6">
                        <div class="team-member" data-aos="zoom-in" data-aos-delay="100">
                            <div class="team-pic">
                                <img src="https://feb.unej.ac.id/assets/uploads/foto_1728979456.png" class="img-fluid" loading="lazy" alt="Dean" />
                            </div>
                            <div class="team-info">
                                <h4 class="team-name">Prof. Dr. Isti Fadah, M.Si., CRA., CMA.</h4>
                                <span class="team-role">Dean</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div class="team-member" data-aos="zoom-in" data-aos-delay="200">
                            <div class="team-pic">
                                <img src="https://feb.unej.ac.id/assets/uploads/foto_1728634107.png" class="img-fluid" loading="lazy" alt="Vice Dean for Academic Affairs" />
                            </div>
                            <div class="team-info">
                                <h4 class="team-name">Prof. Dr. Novi Puspitasari, S.E., M.M</h4>
                                <span class="team-role">Vice Dean for Academic Affairs</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div class="team-member" data-aos="zoom-in" data-aos-delay="300">
                            <div class="team-pic">
                                <img src="https://feb.unej.ac.id/assets/uploads/foto_1736228689.jpeg" class="img-fluid" loading="lazy" alt="Vice Dean for General Affairs and Finance" />
                            </div>
                            <div class="team-info">
                                <h4 class="team-name">Dr. Nining Ika Wahyuni, S.E. M.Sc, Ak.</h4>
                                <span class="team-role">Vice Dean for General Affairs and Finance</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div class="team-member" data-aos="zoom-in" data-aos-delay="400">
                            <div class="team-pic">
                                <img src="https://feb.unej.ac.id/assets/uploads/foto_1728628968.png" class="img-fluid" loading="lazy" alt="Vice Dean for Student Affairs and Alumni" />
                            </div>
                            <div class="team-info">
                                <h4 class="team-name">Dr. Teguh Hadi Priyono, S.E., M.Si.</h4>
                                <span class="team-role">Vice Dean for Student Affairs and Alumni</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center" data-aos="fade-up">

                    <div class="col-lg-3 col-md-6 pt-5 mt-lg-0">
                        <div class="team-member" data-aos="zoom-in" data-aos-delay="200">
                            <div class="team-pic">
                                <img src="https://feb.unej.ac.id/assets/uploads/foto_1728544738.png" class="img-fluid" loading="lazy" alt="Vice Coordinator for Academic, Student and Alumni Affairs" />
                            </div>
                            <div class="team-info">
                                <h4 class="team-name">Sugianto, S.E., M.M.</h4>
                                <span class="team-role">Vice Coordinator for Academic, Student and Alumni Affairs</span>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-3 col-md-6 pt-5 mt-lg-0">
                        <div class="team-member" data-aos="zoom-in" data-aos-delay="400">
                            <div class="team-pic">
                                <img src="https://feb.unej.ac.id/assets/uploads/foto_1728544761.png" class="img-fluid" loading="lazy" alt="Vice Coordinator of Finance and Personnel" />
                            </div>
                            <div class="team-info">
                                <h4 class="team-name">Nurina Fitrianingtyas, SKM.</h4>
                                <span class="team-role">Vice Coordinator of Finance and Personnel</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        
            <!-- start section -->
            <section id="down-section">
                <div class="container"> 
                    <div class="row align-items-end justify-content-center mb-6 text-center text-lg-start sm-mb-8">                    
                        <div class="col-xl-5 col-lg-7 col-md-10 md-mb-25px" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                            <span class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">Contact</span>
                            <h3 class="text-dark-gray fw-700 ls-minus-1px mb-0">Contact Us</h3>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 mb-6 sm-mb-8" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <div class="col md-mb-30px text-center text-sm-start">
                            <span class="alt-font fs-18 fw-700 d-block w-90 text-dark-gray border-bottom border-2 border-color-dark-gray pb-15px mb-15px xs-w-100"><i class="feather icon-feather-map-pin d-inline-block icon-small me-10px"></i>Office location</span>
                            <div class="last-paragraph-no-margin">
                                <p>Gg. 5, Tegal Boto Lor, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur</p>
                            </div>
                        </div>
                        <div class="col md-mb-30px text-center text-sm-start">
                            <span class="alt-font fs-18 fw-700 d-block w-90 text-dark-gray border-bottom border-2 border-color-dark-gray pb-15px mb-15px xs-w-100"><i class="feather icon-feather-mail d-inline-block icon-small me-10px"></i>Send a message</span>
                            <a href="mailto:feb@unej.ac.id">feb@unej.ac.id</a><br>
                        </div>
                        <div class="col xs-mb-30px text-center text-sm-start">
                            <span class="alt-font fs-18 fw-700 d-block w-90 text-dark-gray border-bottom border-2 border-color-dark-gray pb-15px mb-15px xs-w-100"><i class="feather icon-feather-phone d-inline-block icon-small me-10px"></i>Call us directly</span>
                            <a href="tel:(0331) 337990">(0331) 337990</a><br>
                            <a href="tel:082337463327">082337463327</a>
                        </div>
                        <div class="col text-center text-sm-start">
                            <div class="col-lg-12 mt-2 mt-lg-0 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
                                

                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15797.384184376897!2d113.7161392!3d-8.1678486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca45a724fc9f671!2sFaculty%20of%20Economics%20and%20Business%2C%20University%20of%20Jember!5e0!3m2!1sen!2sid!4v1670591247177!5m2!1sen!2sid" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                </div>
                        </div>
                    </div>
                    <div class="row justify-content-center g-0" data-anime='{ "el": "childs", "translateX": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <div class="col-auto text-center last-paragraph-no-margin icon-with-text-style-08 pt-20px pb-20px ps-8 pe-8 md-ps-30px md-pe-30px bg-gradient-flamingo-amethyst-green border-radius-100px xs-border-radius-30px">
                            <div class="feature-box feature-box-left-icon-middle overflow-hidden">
                                <div class="feature-box-icon me-10px">
                                    <i class="bi bi-chat-text fs-24 icon-very-medium text-white"></i>
                                </div>
                                <!-- <div class="feature-box-content last-paragraph-no-margin text-white text-uppercase fs-15 fw-600 ls-05px xs-lh-24">
                                    Let's make something great work together. <a href="demo-corporate-contact.html" class="text-white text-decoration-line-bottom-medium">Got a project in mind?</a>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end section -->
    
</template>
