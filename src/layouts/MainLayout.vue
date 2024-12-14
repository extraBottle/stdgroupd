<template>
  <q-layout view="hhh Lpr lFf">
    <q-input v-if="route.path === '/'" class="q-px-md q-pt-sm fixed-top" standout rounded 
      input-style="color: black" label-color="primary" bg-color="grey-2" 
      v-model="searchBar" label="What's buzzin'?" style="z-index: 1;" >
      <template v-slot:prepend>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </template>
      <template v-slot:append>
        <q-btn color="primary" text-color="black" icon="person" round >
          <q-menu>
            <div>              
              <q-img src="profileExample.png" style="width: 150px; height: 200px;"/>              
            </div>
          </q-menu>
        </q-btn>        
      </template>
    </q-input>

    <q-drawer      
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label>
          <q-img            
            src="mainLogo.png"
            style="width: 200px;" />
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import EssentialLink from 'components/EssentialLink.vue'
import routes from 'src/router/routes'

const linksList = routes.slice(1, -1)

const leftDrawerOpen = ref(false)
const searchBar = ref()
const route = useRoute()

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
