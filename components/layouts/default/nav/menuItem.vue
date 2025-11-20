<script setup lang="ts">
type MenuItem = {
    label: string
    to?: string
    icon?: string
    children?: MenuItem[]
}
type PropsType = {
    item: MenuItem,
    i18n_key_prefix?: string
}
const props = defineProps<PropsType>()
</script>

<template>
    <li :class="[
        'nav-item',
        props.item.children ? 'dropdown dropdown-with-icon-style02' : ''
    ]">
        <!-- Parent with dropdown -->
        <template v-if="props.item.children">
            <a href="#" class="nav-link">
                {{ $t(`${i18n_key_prefix || ''}.${props.item.label}`) }}
            </a>

            <i class="fa-solid fa-angle-down dropdown-toggle" data-bs-toggle="dropdown"></i>

            <ul class="dropdown-menu">
                <LayoutsDefaultNavMenuItem v-for="(child, i) in props.item.children" :key="i" :item="child"
                    :i18n_key_prefix="props.i18n_key_prefix" />
            </ul>
        </template>

        <!-- Single menu item -->
        <template v-else>
            <a :href="$localePath(props.item.to || '#')" class="nav-link">
                <i v-if="props.item.icon" :class="props.item.icon"></i>
                {{ $t(`${i18n_key_prefix || ''}.${props.item.label}`) }}
            </a>
            <!-- <NuxtLinkLocale :to="props.item.to" class="nav-link">
                <i v-if="props.item.icon" :class="props.item.icon"></i>
                {{ $t(`${i18n_key_prefix || ''}.${props.item.label}`) }}
            </NuxtLinkLocale> -->
        </template>
    </li>
</template>
