<template>
  <q-layout view="hhh Lpr lFf">
    <div v-if="route.path === '/'" class="fixed-top relative-position" style="z-index: 1;">
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
            <q-menu ref="menuRef" @hide="beforeHoney = true">
              <div v-if="beforeHoney" class="column no-wrap q-pb-md q-ml-md" style="min-width: 300px;">
                <div class="row justify-end"><q-btn icon="close" @click="closeMenu" flat /></div>   
                <div class="row items-center q-pl-md q-pb-md">
                  <q-btn color="secondary" text-color="primary" icon="person" round unelevated />
                  <div class="text-h6 text-weight-bold q-pl-md" >Hello, Sue Kim</div>
                </div>                                                               
                <div class="text-subtitle1 text-weight-bold q-pl-md q-pb-md" >My Coupons</div>
                <Carousel v-bind="config">
                  <Slide>
                    <q-card style="border-radius: 15px;" class="q-mb-xs bg-primary">
                      <div class="text-white q-pt-md">PETER PAN</div>
                      <q-card-section class="row items-center no-wrap q-gutter-md">
                        <div class="text-h4 text-weight-bold text-white">2,000<span class="text-h6">won</span></div>
                        <q-btn icon="download" color="white" text-color="primary" round />
                      </q-card-section>
                      <div class="text-white q-pb-md">USE BY: 2024/12/31</div>
                    </q-card>
                  </Slide>
                  <Slide>
                    <q-card style="border-radius: 15px;" class="q-mb-xs bg-primary">
                      <div class="text-white q-pt-md">YONSEI COOP</div>
                      <q-card-section class="row items-center no-wrap q-gutter-md">
                        <div class="text-h4 text-weight-bold text-white">1,000<span class="text-h6">won</span></div>
                        <q-btn icon="download" color="white" text-color="primary" round />
                      </q-card-section>
                      <div class="text-white q-pb-md">USE BY: 2024/12/31</div>
                    </q-card>
                  </Slide>
                </Carousel>
                <div class="text-subtitle1 text-weight-bold q-pl-md q-py-md" >Achievements</div>
                <Carousel v-bind="config2">
                  <Slide>
                    <q-card style="border-radius: 15px; width: 160px; height: 142px;" class="q-mb-xs bg-secondary" @click="beforeHoney = false">                      
                      <q-card-section>
                        <img src="profile1.png" />
                        <div class="text-primary text-weight-bold">HoneyComb Process</div>
                      </q-card-section>                                   
                    </q-card>
                  </Slide>
                  <Slide>
                    <q-card style="border-radius: 15px; width: 160px; height: 142px;" class="q-mb-xs bg-primary">                      
                      <q-card-section>
                        <img src="profile2.png" />
                        <div class="text-secondary text-weight-bold">Badges</div>
                      </q-card-section>                        
                                        
                    </q-card>
                  </Slide>
                  <Slide>
                    <q-card style="border-radius: 15px; width: 160px; height: 142px;" class="q-mb-xs bg-secondary">                      
                      <q-card-section>
                        <img class="q-my-md" src="profile3.png" />
                        <div class="text-primary text-weight-bold">Achievements</div>
                      </q-card-section>
                    </q-card>
                  </Slide>
                </Carousel>
              </div>
              <div v-else class="column no-wrap q-pb-md q-ml-lg" style="min-width: 300px;">
                <div class="row justify-end"><q-btn icon="close" @click="closeMenu" flat /></div>   
                <div class="text-h6 text-weight-bold q-pl-md q-mb-md" >My Honey Comb</div>
                <q-card class="q-mr-lg relative-position" style="border-radius: 15px;">
                  <q-img src="profile4.png" fit="scale-down" />
                  <q-card-section class="bg-primary text-white text-weight-bold text-subtitle1" style="border-radius: 0 0 15px 15px;">
                    Complete Daily Mission
                  </q-card-section>
                  <q-chip class="absolute-bottom-left q-mb-xl" color="secondary" text-color="primary" >
                    7/15 completed
                  </q-chip>
                </q-card>
                <q-card class="q-mt-lg q-mr-lg bg-secondary relative-position" style="border-radius: 15px;">
                  <q-img src="profile4.png" fit="scale-down" class="invisible" />
                  <q-card-section class="bg-primary text-white text-weight-bold text-subtitle1 invisible">
                    Complete Daily Mission
                  </q-card-section>
                  <div class="column items-center absolute-center">
                    <q-icon class="q-mr-md" name="lock" color="primary" size="xl" />
                    <div class="text-primary">Complete your hive to unlock this stage!</div>
                  </div>
                </q-card>
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
      <img v-if="selectCategory == 'All' || selectCategory == 'Shops'" src="map1.png" class="absolute" style="bottom: -150%; right: 10%;" @click="router.push('location')" />
      <img v-if="selectCategory == 'All' || selectCategory == 'Garden'" src="map2.png" class="absolute" style="bottom: -70%; right: 20%;" @click="router.push('location')"/>
      <img v-if="selectCategory == 'All' || selectCategory == 'Plants'" src="map3.png" class="absolute" style="bottom: -130%; right: 70%;" @click="router.push('location')"/>
      <img v-if="selectCategory == 'All' || selectCategory == 'Shops'" src="map1.png" class="absolute" style="bottom: -240%; right: 80%;" @click="router.push('location')"/>
      <img v-if="selectCategory == 'All' || selectCategory == 'Garden'" src="map2.png" class="absolute" style="bottom: -160%; right: 50%;" @click="router.push('location')"/>
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
import { useRoute, useRouter } from 'vue-router';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel'
import EssentialLink from 'components/EssentialLink.vue'
import routes from 'src/router/routes'

const linksList = routes.slice(1, 4)
const router = useRouter()

const leftDrawerOpen = ref(false)
const searchBar = ref()
const route = useRoute()

const selectCategory = ref('All')
const menuRef = ref(null)
const beforeHoney = ref(true)

const config = {
  itemsToShow: 1.5,
  gap: 8
};
const config2 = {
  itemsToShow: 1.8
};

function closeMenu(){
  menuRef.value.hide()
}
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
function toggleCategory(name){
  selectCategory.value = name
}

const eraseSrollBar = ref({opacity: 0})
</script>
