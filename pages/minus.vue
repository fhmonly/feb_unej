<template>
    <p>Program yang kurang</p>
    <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
</template>
<script lang="ts" setup>
const items = [
    { id: 1, name: 'home visi misi' },
];
</script>