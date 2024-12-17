<template>
    <div class="row justify-around q-pt-md">        
        <q-btn icon="arrow_back" flat :ripple="false" @click="router.go(-1)" />
        <div class="text-h6">Community</div>
        <q-btn class="invisible" icon="arrow_back" flat />
    </div>    
    <div class="text-h6 text-weight-bolder text-primary q-ml-xl q-my-md">New for You</div>
    <Carousel v-bind="config">
        <Slide>
            <q-card style="border-radius: 20px;" class="q-mb-sm">
                <q-img src="commu1.png" style="max-height: 160px;" />
                <q-card-section class="q-py-sm">
                    <div class="text-subtitle2 text-bold" >Abies Holophylla Tree Spotted</div>
                    <div class="text-caption" >Found this tree near Ehwa Womens University which helps provide some pollen for the bees.</div>
                </q-card-section>
            </q-card>
        </Slide>
        <Slide>
            <q-card style="border-radius: 20px;" class="q-mb-sm">
                <q-img src="commu2.png" style="max-height: 160px;" />
                <q-card-section class="q-py-sm">
                    <div class="text-subtitle2 text-bold" style="text-align: start;">Bee Friendly Cafe near Campus</div>
                    <div class="text-caption" style="text-align: start;">A cozy bee friendly cafe found! Can exchange with bee coupon and recieve a free snack! </div>
                </q-card-section>
            </q-card>
        </Slide>
        <Slide>
            <q-card style="border-radius: 20px;" class="q-mb-sm">
                <q-img src="commu1.png" style="max-height: 160px;"/>
                <q-card-section class="q-py-sm">
                    <div class="text-subtitle2 text-bold" style="text-align: start;">Abies Holophylla Tree Spotted</div>
                    <div class="text-caption" style="text-align: start;">Found this tree near Ehwa Womens University which helps provide some pollen for the bees.</div>
                </q-card-section>
            </q-card>
        </Slide>
        <Slide>
            <q-card style="border-radius: 20px;" class="q-mb-sm">
                <q-img src="commu2.png" style="max-height: 160px;"/>
                <q-card-section class="q-py-sm">
                    <div class="text-subtitle2 text-bold" style="text-align: start;">Bee Friendly Cafe near Campus</div>
                    <div class="text-caption" style="text-align: start;">A cozy bee friendly cafe found! Can exchange with bee coupon and recieve a free snack! </div>
                </q-card-section>
            </q-card>
        </Slide>
    </Carousel>
    <div class="text-h6 text-weight-bolder text-primary q-ml-xl q-mt-lg q-mb-md">Community Board</div>
    <div class="column q-mx-xl">
        <q-input class="q-mb-lg" dense label-color="negative" bg-color="info" rounded readonly standout label="New Bee Garden Installed" >
            <template v-slot:prepend>
                <q-icon name="local_fire_department" color="negative" />
            </template>
        </q-input>
        <div class="column q-pb-md">
            <div class="text-subtitle1 text-weight-bolder">Yonsei’s Biodiversity</div>
            <div>Yonsei University is buzzing with life! Learn how our campus gardens are fostering...</div>
            <div class="row items-center q-pt-md">
                <q-icon name="favorite" color="primary" class="q-mr-xs" />
                <div class="text-primary q-mr-sm">12</div>
                <q-icon name="comment" color="cyan-2" />
                <div class="text-cyan-2 q-mr-md">3</div>
                <div class="text-weight-thin">| 6 mins ago</div>
            </div>
        </div>
        <q-separator />
        <div class="column q-py-md">
            <div class="text-subtitle1 text-weight-bolder">Building a Bee-Friendly Campus</div>
            <div>Discover how Yonsei students and faculty are creating safe habitats for bees and supporting...</div>
            <div class="row items-center q-pt-md">
                <q-icon name="favorite" color="primary" class="q-mr-xs" />
                <div class="text-primary q-mr-sm">40</div>
                <q-icon name="comment" color="cyan-2" />
                <div class="text-cyan-2 q-mr-md">12</div>
                <div class="text-weight-thin">| 27 mins ago</div>
            </div>
        </div>
        <q-separator />
        <div class="column q-py-md">
            <div class="text-subtitle1 text-weight-bolder">Why It Matters at Yonsei</div>
            <div>Bees play a vital role in Yonsei's ecosystem. This post explores their impact on campus biodiversity...</div>
            <div class="row items-center q-pt-md">
                <q-icon name="favorite" color="primary" class="q-mr-xs" />
                <div class="text-primary q-mr-sm">25</div>
                <q-icon name="comment" color="cyan-2" />
                <div class="text-cyan-2 q-mr-md">3</div>
                <div class="text-weight-thin">| 3 hours ago</div>
            </div>
        </div>
        <q-separator />
    </div>   
    <div class="fixed-bottom q-mb-lg column items-center">
        <q-btn icon="edit" class="text-subtitle1 text-weight-bold" label="Write Post" no-caps color="primary" rounded />         
    </div>               
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel'
import { useRouter } from 'vue-router';

const router = useRouter();

const config = {
  itemsToShow: 1.6,
  gap: 40,
  wrapAround: true,
};
</script>  
