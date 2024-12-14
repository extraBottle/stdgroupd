<template>
  <q-page>
    <q-img
      src="mapImage.png" 
      style="height: 100vh;"                 
    />
    <q-card
      class="slide-drawer slide-drawer--bottom fixed-bottom column no-wrap"
      :class="`slide-drawer--open-${drawerMode}`"
      :style="drawerStyle"
    >
      <q-card-section class="slide-drawer__handler--horizontal row flex-center q-pa-sm q-gutter-x-md" v-touch-pan.mouse.vertical="slideDrawer">        
        <div class="cursor-pointer" @click="cycleDrawer"></div>        
      </q-card-section>

      <q-card-section class="col relative-position">
        <div class="text-h6 text-bold q-pt-md q-pb-xs">Latest in the Area</div>        
        <Carousel v-bind="config">
          <Slide>
            <q-card style="border-radius: 20px;">
              <img src="cara.png" />
              <q-card-section class="q-py-sm">
                <div class="text-subtitle2 text-bold" style="text-align: start;">Small Bee Garden</div>
                <div class="text-caption" style="text-align: start;">2 miles away</div>
              </q-card-section>
            </q-card>
          </Slide>
          <Slide>
            <q-card style="border-radius: 20px;">
              <img src="cara2.png" />
              <q-card-section class="q-py-sm">
                <div class="text-subtitle2 text-bold" style="text-align: start;">Yonsei Bee Hotel</div>
                <div class="text-caption" style="text-align: start;">3 miles away</div>
              </q-card-section>
            </q-card>
          </Slide>
          <Slide>
            <q-card style="border-radius: 20px;">
              <img src="cara3.png" />
              <q-card-section class="q-py-sm">
                <div class="text-subtitle2 text-bold" style="text-align: start;">Acacia Tree</div>
                <div class="text-caption" style="text-align: start;">4 miles away</div>
              </q-card-section>
            </q-card>
          </Slide>
        </Carousel>
        <div class="text-primary text-subtitle1 text-bold absolute-bottom q-pb-md" style="text-align: center;">Look for more</div>        
      </q-card-section>
      <div class="bg-grey-2" style="height: 4px;"></div>
      <q-scroll-area style="height: 363px; max-width: 393px;" visible="false">
        <q-card-section v-if="drawerMode !== 'handler'" class="col">
          <q-list>
            <q-item>
              <q-item-section side>
                <q-btn round unelevated color="accent">
                  <q-avatar size="28px">
                    <img src="caraProfile.png">
                  </q-avatar>
                </q-btn>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-subtitle2 text-bold">Winnie the Pooh</q-item-label>
                <q-item-label caption>Local Guide</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn class="text-bold" rounded unelevated padding="xs md" color="primary" text-color="white" no-caps>
                  Follow
                  <q-icon name="add" size="xs" />
                </q-btn>                                  
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="q-py-md">
                <img src="cara4.png" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <div class="bg-grey-2" style="height: 4px;"></div>
        <q-card-section v-if="drawerMode !== 'handler'" class="col">
          <q-list>
            <q-item>
              <q-item-section side>
                <q-btn round unelevated color="accent">
                  <q-avatar size="28px">
                    <img src="caraProfile.png">
                  </q-avatar>
                </q-btn>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-subtitle2 text-bold">Winnie the Pooh</q-item-label>
                <q-item-label caption>Local Guide</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn class="text-bold" rounded unelevated padding="xs md" color="primary" text-color="white" no-caps>
                  Follow
                  <q-icon name="add" size="xs" />
                </q-btn>                                  
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="q-py-md">
                <img src="cara5.png" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-scroll-area>
    </q-card>    
  </q-page>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { useQuasar } from 'quasar'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel'
// import 'src/css/carousel.css'

const drawerMinHeight = 36
const drawerTopOffset = 100
const drawerOpenRatioHalf = 50

const $q = useQuasar()
const drawerPos = ref(drawerMinHeight)

const config = {
  itemsToShow: 2.2,
  gap: 13,
  snapAlign: 'start',
  height: 220
};

const drawerMaxHeight = computed(() => 
  Math.max(0, $q.screen.height - drawerTopOffset)
)
const drawerOpenRatio = computed(() => 
  Math.round(Math.max(0, drawerPos.value - drawerMinHeight) / Math.max(1, drawerMaxHeight.value - drawerMinHeight) * 100)
)
const drawerStyle = computed(() => ({
  height: `${drawerMaxHeight.value}px`,
  transform: `translateY(${-drawerPos.value}px)`
}))
const drawerMode = computed(() => {
  if (drawerOpenRatio.value > drawerOpenRatioHalf) {
    return 'full'
  }
  return drawerOpenRatio.value > 0 ? 'half' : 'handler'
})

function slideDrawer(ev) {
  const { direction, delta, isFinal } = ev

  drawerPos.value = Math.max(drawerMinHeight, Math.min(drawerMaxHeight.value, drawerPos.value - delta.y))

  if (isFinal === true) {
    const aboveHalf = drawerOpenRatio.value > drawerOpenRatioHalf
    const targetHeight = direction === 'up'
      ? (aboveHalf ? drawerMaxHeight.value : Math.round(drawerMaxHeight.value / 2))
      : (aboveHalf ? Math.round(drawerMaxHeight.value / 2) : drawerMinHeight)

    animateDrawerTo(targetHeight)
  }
}
function cycleDrawer() {
  const targetHeight = drawerMode.value === 'handler'
    ? Math.round(drawerMaxHeight.value / 2)
    : (drawerMode.value === 'half' ? drawerMaxHeight.value : drawerMinHeight)

  animateDrawerTo(targetHeight)
}

let animateTimeout

function animateDrawerTo(height) {
  clearTimeout(animateTimeout)

  const diff = height - drawerPos.value

  if (diff !== 0) {
    drawerPos.value += Math.abs(diff) < 2 ? diff : Math.round(diff / 2)

    animateTimeout = setTimeout(() => {
      animateDrawerTo(height)
    }, 30)
  }
}

onBeforeUnmount(() => {
  clearTimeout(animateTimeout)
})
</script>

<style lang="sass">
.slide-drawer
  &--bottom
    border-top-left-radius: 31px
    border-top-right-radius: 31px
    border-bottom-left-radius: 0
    border-bottom-right-radius: 0
    background-color: #FFFFFF
    bottom: unset
    top: 100%
    transition: background-color 0.3s ease-in-out

    > div:last-child,
    > img:last-child
      border-bottom-left-radius: 0
      border-bottom-right-radius: 0
    
    &.slide-drawer--open-half
      background-color: #FFFFFF
      
    &.slide-drawer--open-full
      background-color: #FFFFFF
    
  &__handler
    &--horizontal
      cursor: grab
      
      > div
        width: 60px
        height: 6px
        border-radius: 4px
        background-color: #000000
</style>
