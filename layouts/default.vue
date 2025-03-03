<template>
  <v-layout>
    <header-menu />
    <v-app>
      <VitePwaManifest />
      <v-main>
        <slot />
        <live-chat />
      </v-main>
      <footer-bar />
    </v-app>
  </v-layout>
</template>

<script setup>
onMounted(()=>{
 
})

</script>

