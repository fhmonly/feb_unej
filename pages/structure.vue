<script setup>
definePageMeta({
    layout: 'id'
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
                    <h1 class="m-auto text-white text-shadow-double-large fw-600 ls-minus-2px">Struktur Organisasi Utama
                        APSSAI</h1>
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
    <section class="position-relative overflow-hidden">
        <div class="container">
            <ul class="nav nav-tabs nav-tabs-bordered" role="tablist">

                <li class="nav-item" role="presentation"><button class="nav-link active" data-bs-toggle="tab"
                        data-bs-target="#profile-overview" aria-selected="true" role="tab"><b>Struktur
                            Utama</b></button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab"
                        data-bs-target="#profile-bidang1" aria-selected="false" tabindex="-1" role="tab"><b>Bidang
                            1</b></button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab"
                        data-bs-target="#profile-bidang2" aria-selected="false" tabindex="-1" role="tab"><b>Bidang
                            2</b></button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab"
                        data-bs-target="#profile-bidang3" aria-selected="false" tabindex="-1" role="tab"><b>Bidang
                            3</b></button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab"
                        data-bs-target="#profile-bidang4" aria-selected="false" tabindex="-1" role="tab"><b>Bidang
                            4</b></button></li>

            </ul>
            <div class="tab-content pt-2">

                <div class="tab-pane fade show active profile-overview" id="profile-overview" role="tabpanel">


                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807091436.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Prof. Dr. Abdul Halim, M.B.A, Akt</p>
                                    <p class="fw-bold"><b>Ketua Umum</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807091159.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Prof Dr. Zaki Baridwan, MSc., Ak.,CA </p>
                                    <p class="fw-bold"><b>Penasehat</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240806164516.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Prof. Dr. Mardiasmo., MBA., AK., CA</p>
                                    <p class="fw-bold"><b>Penasehat</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240806165047.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Prof. Dr. Dian Agustia, M.Si, Ak, CA, CMA</p>
                                    <p class="fw-bold"><b>Penasehat</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240714122248.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 220px;">
                                    <p class="w-100 xl-w-100">PROF. DR. Mursalim Laekkeng, SE., M.Si., Akt., CA., CPAI.,
                                        CPA., CSP., CSRS., ASEAN CPA.</p>
                                    <p class="fw-bold"><b>Ketua Harian 2</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240806171534.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 220px;">
                                    <p class="w-100 xl-w-100">Dr. Haryono., MSi., Ak., CA., CPA., ASEAN-CPA </p>
                                    <p class="fw-bold"><b>Ketua Harian 1</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240806172056.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 220px;">
                                    <p class="w-100 xl-w-100">Dr. Fazli Syam BZ, SE, M.Si.Ak, CA </p>
                                    <p class="fw-bold"><b>Wakil Ketua Wilayah Sumatra</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/wahyudin_nor.jpg"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 220px;">
                                    <p class="w-100 xl-w-100">Dr. Wahyudin Nor, SE, M. Si, Ak, CA, CSRS, CSRA </p>
                                    <p class="fw-bold"><b>Wakil Ketua Wilayah Kalimantan, Bali, NTT dan NTB</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240806174246.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 220px;">
                                    <p class="w-100 xl-w-100">Dr. Umi Muawanah MSi., Ak., CA.</p>
                                    <p class="fw-bold"><b>Wakil Ketua Wilayah Jawa</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/aini.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 220px;">
                                    <p class="w-100 xl-w-100">Dr. Aini Indrijawati</p>
                                    <p class="fw-bold"><b>Wakil Ketua Wilayah Sulawesi, Maluku dan Papua</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240806175521.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 220px;">
                                    <p class="w-100 xl-w-100">Dr. Sekar Mayangsari, Ak., CA., CMA. </p>
                                    <p class="fw-bold"><b>Sekretaris 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240806175346.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 220px;">
                                    <p class="w-100 xl-w-100">Dr.R Nelly Nur Apandi.,SE., MSi., Ak., ACPA., QRMO., CGRC
                                    </p>
                                    <p class="fw-bold"><b>Sekretaris 2</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240806175923.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 220px;">
                                    <p class="w-100 xl-w-100">Dr. Siti Maria Wardayati, M.Si, Ak. CA., CPA.</p>
                                    <p class="fw-bold"><b>Bendahara 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240806175752.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 220px;">
                                    <p class="w-100 xl-w-100">Dr. Etty Gurendrawati.,MSi.,Ak </p>
                                    <p class="fw-bold"><b>Bendahara 2</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                </div>

                <div class="tab-pane fade profile-bidang1 pt-3" id="profile-bidang1" role="tabpanel">

                    <br>
                    <h4 align="center"><b>Struktur Organisasi Bidang 1</b></h4>
                    <br>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807134848.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Elizabeth Lucky Maretha Sitinjak, SE, M.Si, CPA</p>
                                    <p class="fw-bold"><b>Ketua Bidang 1</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807135031.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Ronny Prabowo,Ph.D</p>
                                    <p class="fw-bold"><b>Koordinator Bidang Lulusan dan Mahasiswa (IKU 1)</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807135200.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Rahima Br Purba.,M.SI.,Ak.,CA</p>
                                    <p class="fw-bold"><b>Anggota 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/lilik.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Lilik Handajani, SE, MSA, Ak, CA</p>
                                    <p class="fw-bold"><b>Anggota 2</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/atik.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Atik Djajanti.,Ak.,CA</p>
                                    <p class="fw-bold"><b>Anggota 3</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807135406.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Puji Harto, S.E., M.Si., Akt., Ph.D</p>
                                    <p class="fw-bold"><b>Koordinator Bidang MBKM (IKU 2)</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807135549.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Makaryanawati.,SE.,MSi.,Ak.,CA.,CSRA</p>
                                    <p class="fw-bold"><b>Anggota 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/agnes.jpeg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Agnes Utari Widyaningdyah, M.Si., Ak.</p>
                                    <p class="fw-bold"><b>Anggota 2</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/megawati.webp"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Megawati Oktorina S.E., M.S.Ak.</p>
                                    <p class="fw-bold"><b>Anggota 3</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807135737.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Deliana, SE. Ak., MSi., CA.</p>
                                    <p class="fw-bold"><b>Koordinator Bidang Dosen (IKU 3)</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/nurmala.webp" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Eka Nurmalasari</p>
                                    <p class="fw-bold"><b>Anggota 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/lilis.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Lilis Ardini, SE., M.Si.,Ak., CA</p>
                                    <p class="fw-bold"><b>Anggota 2</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/fitriana.webp"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Fitriana</p>
                                    <p class="fw-bold"><b>Anggota 3</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                </div>

                <div class="tab-pane fade profile-bidang2 pt-3" id="profile-bidang2" role="tabpanel">

                    <br>
                    <h4 align="center"><b>Struktur Organisasi Bidang 2</b></h4>
                    <br>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807135916.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Nureni Wijayati, Ph.D., CA.</p>
                                    <p class="fw-bold"><b>Ketua Bidang 2</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/harnovinsyah.jpg"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Harnovinsyah</p>
                                    <p class="fw-bold"><b>Koordinator Bidang Sertifikasi (IKU 4)</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/estralia.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr.Estralita Trisnawati.,SE.,Ak.,MSi</p>
                                    <p class="fw-bold"><b>Anggota 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/tarjo.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Tarjo, S.E., M.Si., CFE., CFrA., CPA., CSRS., CRP</p>
                                    <p class="fw-bold"><b>Anggota 2</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/ranto.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Ranto Sihombing</p>
                                    <p class="fw-bold"><b>Anggota 3</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/hafiz.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Hafiz Sofyani.,Ph.D</p>
                                    <p class="fw-bold"><b>Koordinator Bidang Publikasi Dosen (IKU 5)</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/fadjar.webp" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Ahmad Fadjar.,SE.,MSi.,Ak.,CA</p>
                                    <p class="fw-bold"><b>Anggota 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807140025.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Rindang Widuri, S.Kom., MM., PhD.</p>
                                    <p class="fw-bold"><b>Anggota 2</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807140054.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Enny Susilowati Mardjono, MSi, Akt, Ph.D, CA, CFMA, ASEAN
                                        CPA</p>
                                    <p class="fw-bold"><b>Anggota 3</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/nanny.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 230px;">
                                    <p class="w-100 xl-w-100">Dr. Nanny Dewi, MComm., Ak, CA</p>
                                    <p class="fw-bold"><b>Koordinator Bidang Kerjasama Kemitraan (IKU 6)</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/indrawati.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 230px;">
                                    <p class="w-100 xl-w-100">Dr. Novita Indrawati, Ak.,CA</p>
                                    <p class="fw-bold"><b>Anggota 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/wiralestari.jpeg"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 230px;">
                                    <p class="w-100 xl-w-100">Dr. Wiralestari, S.E., M.Si., CIQnR</p>
                                    <p class="fw-bold"><b>Member 2</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807140253.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 230px;">
                                    <p class="w-100 xl-w-100">Dr. Anak Agung Gde Satia Utama, SE.,M.Ak.,Ak.,CA</p>
                                    <p class="fw-bold"><b>Anggota 3</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                </div>

                <div class="tab-pane fade profile-bidang3 pt-3" id="profile-bidang3" role="tabpanel">

                    <br>
                    <h4 align="center"><b>Struktur Organisasi Bidang 3</b></h4>
                    <br>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807140403.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Prof. Faisal, SE, M.Si, Ph.D, CMA, CRP, CERG</p>
                                    <p class="fw-bold"><b>Ketua Bidang 3</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807140626.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Hendrawan Santosa Putra,SE.,MSi.,Ak.,CA.,CRP</p>
                                    <p class="fw-bold"><b>Koordinator Bidang Pembelajaran (IKU 7)</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/zahra.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. E. FEMILIA ZAHRA, SE., M.Sc</p>
                                    <p class="fw-bold"><b>Anggota 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/otniel.jpeg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr Otniel Safkaur.,SE.,MSi.,CA.,CMA.,CPA.,CRA.,CRP</p>
                                    <p class="fw-bold"><b>Anggota 2</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/irwansyah.jpg"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Irwansyah, SE., M.Si., Ak., CA</p>
                                    <p class="fw-bold"><b>Anggota 3</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807140735.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Ni Putu Sri Harta Mimba</p>
                                    <p class="fw-bold"><b>Koordinator Bidang Akreditasi Internasional (IKU 8)</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807140902.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Rindu Rika Gamayuni, SE, MSi.</p>
                                    <p class="fw-bold"><b>Anggota 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/imam.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Imam Abu Hanifah.,Ak.,CA</p>
                                    <p class="fw-bold"><b>Anggota 2</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/rapina.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Rapina,S.E.,M.Si.,Ak.</p>
                                    <p class="fw-bold"><b>Anggota 3</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                    </div>

                </div>

                <div class="tab-pane fade profile-bidang4 pt-3" id="profile-bidang4" role="tabpanel">

                    <br>
                    <h4 align="center"><b>Struktur Organisasi Bidang 4</b></h4>
                    <br>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807141034.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Meinarni Asnawi, SE.M.Si.CBV.,CMA</p>
                                    <p class="fw-bold"><b>Ketua Bidang 4</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/elok.png" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Elok Heniwati, SE, MSi, Ak, PhD, CA.</p>
                                    <p class="fw-bold"><b>Koordinator Bidang Jurnal</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/puspita.png" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr.Puspita Rani,SE.,M.Ak</p>
                                    <p class="fw-bold"><b>Anggota 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/suhendri.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Sulhendri, SE, MSi </p>
                                    <p class="fw-bold"><b>Anggota 2</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/pupung.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Pupung Purnamasari</p>
                                    <p class="fw-bold"><b>Anggota 3</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807141137.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Aristanti Widyaningsih, S.Pd.,MSi.,CPMA.,CRMP.,CGRCP
                                    </p>
                                    <p class="fw-bold"><b>Koordinator Bidang Promosi</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/poppy.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Poppy Dian Indira Kusuma, M.Si., Ak., CA.</p>
                                    <p class="fw-bold"><b>Anggota 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/shodiq.png" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. M. Ja'far Shodiq, Ak., CA., CSRS.,CSRA.</p>
                                    <p class="fw-bold"><b>Anggota 2</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/novis.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 200px;">
                                    <p class="w-100 xl-w-100">Dr. Novi S. Budiarso, SE.Ak,MSA,CA </p>
                                    <p class="fw-bold"><b>Anggota 3</b></p>

                                </div>
                            </div><br>
                        </div>
                    </div>

                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/wahyu.jpeg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 230px;">
                                    <p class="w-100 xl-w-100">Dr.Wahyu Widarjo</p>
                                    <p class="fw-bold"><b>Koordinator Bidang Webinar</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/baldric.PNG" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 230px;">
                                    <p class="w-100 xl-w-100">Prof. Dr. Baldric Siregar.,SE.,MSi</p>
                                    <p class="fw-bold"><b>Anggota 1</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/harim.webp" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 230px;">
                                    <p class="w-100 xl-w-100">Dr.Hariman Bone.,SE.,MSc.,AK</p>
                                    <p class="fw-bold"><b>Anggota 2</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/anggota_20240807141412.png"
                                    class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 230px;">
                                    <p class="w-100 xl-w-100">Dr. Yie Ke Feliana, S.E., M.Com., Ak., BAP.</p>
                                    <p class="fw-bold"><b>Anggota 3</b></p>

                                </div>
                            </div><br>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative border-radius-6px box-shadow-quadruple-large border-0">
                                <img src="https://superadmin.apssai.com/media/anggota/agustin.jpg" class="card-img-top"
                                    alt="" style="height: 300px; object-fit: cover;">
                                <div class="card-body" align="center" style="height: 230px;">
                                    <p class="w-100 xl-w-100">Dr.Agustin Fadjarenie,M.Ak.,CA.,Ak</p>
                                    <p class="fw-bold"><b>Anggota 4</b></p>
                                </div>
                            </div><br>
                        </div>
                    </div>

                </div>

            </div><!-- End Bordered Tabs -->
        </div>
    </section>
    <p style="text-align: center;">
        <iframe src="/sk2025.pdf" width="100%" height="800px" style="border: none;"></iframe>
    </p>
</template>
