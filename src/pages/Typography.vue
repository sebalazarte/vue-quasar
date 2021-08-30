<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Typography</span>
    <span class="text-h2">Typography</span>
    <span class="text-h3">Typography</span>
    <span class="text-h4">Typography</span>
    <span class="text-h5">Typography</span>

    <span class="text-subtitle1">subtitle</span>
    <span class="text-subtitle2">subtitle</span>

    <p class="text-body1">Reprehenderit est aliqua labore Lorem consequat et. Aliqua ut qui sint do aute consectetur eu consequat in aute est incididunt. Minim pariatur do et labore voluptate. Reprehenderit ut esse exercitation amet est velit consequat adipisicing.</p>

    <q-btn color="primary" :label="sideMenuOpen ? 'Cerrar menu lateral' :'Abrir menu lateral'" class="q-mt-md" @click="toogleSideMenu"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import useUi from '../composables/useUi';

export default defineComponent({
  name: 'Typegraphy',
  setup(){

    const {sideMenuOpen, toogleSideMenu} = useUi();

    return {
      sideMenuOpen,
      toogleSideMenu
    }

  }
})
</script>
