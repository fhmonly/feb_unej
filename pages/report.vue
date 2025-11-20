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
         <div class="container aos-init aos-animate" data-aos="fade-up">

            <p><strong>Laporan Kegiatan</strong></p>
            <ol>
            <li>Laporan Tahunan Annual Report 2023 - <a class="text-primary" href="https://cloud.feb.unej.ac.id/f/cf4cb53dc0504096a595/" target="_blank" rel="noopener">Download</a></li>
            <li>Laporan Tahunan Annual Report 2024 I - <a class="text-primary" href="https://cloud.feb.unej.ac.id/f/c7cda2594cfa4fa8bc0e" target="_blank" rel="noopener">Download</a></li>
            <li>Laporan Tahunan Annual Report 2024 II - <a class="text-primary" href="https://cloud.feb.unej.ac.id/f/7947fa4fdb7741409aa8/" target="_blank" rel="noopener">Download</a></li>
            <li>Laporan Tahunan Rapat Kerja 2024 - <a class="text-primary" href="https://cloud.feb.unej.ac.id/f/2328427fc2db4563bf8a" target="_blank" rel="noopener">Download</a></li>
            <li>Laporan PKM INTERNASIONAL APSSAI Juli 2024 -&nbsp;<a class="text-primary" href="https://cloud.feb.unej.ac.id/f/37e759204cfa46cc8134" target="_blank" rel="noopener">Download</a></li>
            </ol>



            </div>
        </section> 
    <!-- end page title -->
    
</template>