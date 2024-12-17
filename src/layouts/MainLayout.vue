<template>
  <q-layout view="hhh Lpr lFf">
    <div v-if="route.path === '/'" class="fixed-top" style="z-index: 1;">
      <q-input class="q-px-md q-pt-sm" standout rounded 
        input-style="color: black" label-color="primary" bg-color="grey-2" 
        v-model="searchBar" label="What's buzzin'?" >
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
      <q-scroll-area class="q-mt-sm" style="height: 37px; max-width: 393px;" :horizontal-bar-style="eraseSrollBar" :horizontal-thumb-style="eraseSrollBar">
        <div class="row no-wrap">
          <q-btn class="q-ml-sm text-weight-bold" :color="selectCategory === 'All' ? 'primary' : 'grey-2'" :text-color="selectCategory === 'All' ? 'white' : 'primary'" @click="toggleCategory('All')"  label="All" rounded unelevated />
          <q-btn class="q-ml-sm text-weight-bold" :color="selectCategory === 'Shops' ? 'primary' : 'grey-2'" :text-color="selectCategory === 'Shops' ? 'white' : 'primary'" @click="toggleCategory('Shops')" label="Shops" rounded unelevated />
          <q-btn class="q-ml-sm text-weight-bold" :color="selectCategory === 'Hotel' ? 'primary' : 'grey-2'" :text-color="selectCategory === 'Hotel' ? 'white' : 'primary'" @click="toggleCategory('Hotel')" label="Hotel" rounded unelevated />
          <q-btn class="q-ml-sm text-weight-bold" :color="selectCategory === 'Garden' ? 'primary' : 'grey-2'" :text-color="selectCategory === 'Garden' ? 'white' : 'primary'" @click="toggleCategory('Garden')" label="Garden" rounded unelevated />
          <q-btn class="q-mx-sm text-weight-bold" :color="selectCategory === 'Plants' ? 'primary' : 'grey-2'" :text-color="selectCategory === 'Plants' ? 'white' : 'primary'" @click="toggleCategory('Plants')" label="Plants" rounded unelevated />
        </div>
      </q-scroll-area>
      <div class="row justify-end q-pr-md"><q-btn class="q-mt-md" size="18px" color="primary" icon="photo_camera" round to="/community/upload" /></div>      
    </div>

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

const linksList = routes.slice(1, 4)

const leftDrawerOpen = ref(false)
const searchBar = ref()
const route = useRoute()

const selectCategory = ref('All')

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
function toggleCategory(name){
  selectCategory.value = name
}

const eraseSrollBar = ref({opacity: 0})
</script>
