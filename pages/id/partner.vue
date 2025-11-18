<script setup>

    definePageMeta({
        layout: 'id'
    })
    const config = useRuntimeConfig()
    const apiUrl = config.public.apiUrl
    

    const mitra_all = await $fetch(`${apiUrl}/api/mitra_all/`)

</script>


<template>
    <section id="contact" class="contact">
        <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="row" style="font-size: 12px">

            <div class="text-center mb-4 text-dark">
                <p class="fw-bold">Download Mitra Logo:</p>
                <a href="/images/logo_mitra.png" 
                   class="btn btn-large btn-white btn-box-shadow btn-hover-animation-switch btn-round-edge w-100 text-transform-none fw-700" 
                   type="button" 
                   target="_blank">
                   <i class="bi bi-file-earmark-zip"></i>&nbsp; Download Logo Mitra
                </a>
            </div>

   
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" v-for="mitra in mitra_all" :key="mitra.id"> 
        <div class="card text-center text-dark box-shadow-quadruple-large h-100">
            <a :href="mitra.website" target="_blank">  	
            <img :src="apiUrl+mitra.logo" class="card-img-top" alt="logo" style="width: 100%; object-fit: contain;">
            </a>	
        <div class="card-body">
            <a :href="mitra.website" target="_blank">  	
            <p class="fw-bold">{{ mitra.nama }}</p>
            <p class="card-text">{{ mitra.prodi }}</p>
            </a>  	
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
</template>