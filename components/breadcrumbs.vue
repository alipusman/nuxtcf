<template>
    <v-breadcrumbs class="mb-2">
      <template v-slot:prepend>
        <v-breadcrumbs-item class="font-weight-bold" :to="'/'"><p style="text-decoration: underline;">Beranda</p></v-breadcrumbs-item>
      </template>
      <v-breadcrumbs-divider>/</v-breadcrumbs-divider>
      <v-breadcrumbs-item
        v-for="(item, index) in breadcrumbs"
        :key="index"
        :to="item.href"
        :disabled="item.disabled"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  
  const breadcrumbs = computed(() => {
    const pathSegments = route.path.split("/").filter(Boolean);
    let path = "";
  
    return pathSegments.map((segment, index) => {
      path += `/${segment}`;
      return {
        text: segment.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        href: path,
        disabled: index === pathSegments.length - 1,
      };
    });
  });
  </script>
  
  <style scoped>
  .text-h4 {
    margin-bottom: 16px;
  }
  .text-h5 {
    margin-bottom: 12px;
  }
  </style>
  