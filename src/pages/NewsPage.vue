<template>
    <div class="row justify-around q-pt-md">        
        <q-btn icon="arrow_back" flat :ripple="false" to="/" />
        <div class="text-h6">News</div>
        <q-btn class="invisible" icon="arrow_back" flat />
    </div>
    <div class="text-h6 text-weight-bolder text-primary q-ml-xl q-my-md">Popular</div>
    <Carousel v-bind="config">
        <Slide>
            
                <q-img src="news1.png" style="height: 248px; border-radius: 20px;" />                
            
        </Slide>
        <Slide>
            
                <q-img src="news2.png" style="height: 248px; border-radius: 20px;" />                
            
        </Slide>
        <Slide>
            
                <q-img src="news3.png" style="height: 248px; border-radius: 20px;" />                
            
        </Slide>
    </Carousel>
    <div class="text-h6 text-weight-bolder text-primary q-ml-xl q-mt-lg q-mb-md">For you</div>
    <div class="column q-mx-xl">
        <div class="col row justify-between q-pb-md no-wrap">
            <div class="column">
                <div class="col text-h6 text-weight-bold q-pr-md">10 ways to Save the Bees</div>
                <div class="q-pt-md">5 minute read<br/>4 months ago</div>
            </div>
            <img src="news4.png" style="object-fit: none;"/>
        </div>
        <q-separator />
        <div class="col row justify-between q-py-md no-wrap">
            <div class="column">
                <div class="col text-h6 text-weight-bold q-pr-md">The Truth About Honeybees</div>
                <div class="q-pt-md">5 minute read<br/>4 months ago</div>
            </div>
            <img src="news5.png" style="object-fit: none;"/>
        </div>
        <q-separator />
        <div class="col row justify-between q-py-md no-wrap">
            <div class="column">
                <div class="col text-h6 text-weight-bold q-pr-md">Why you shouldn't always dig up weeds</div>
                <div class="q-pt-md">5 minute read<br/>4 months ago</div>
            </div>
            <img src="news6.png" style="object-fit: none;" />
        </div>
        <q-separator />
        <div class="text-h6 text-weight-bolder text-primary q-mt-lg q-mb-md">Discover</div> 
        <div class="relative-position q-mb-md">
            <q-card class="q-mb-md" style="border-radius: 20px;" @click="router.push({ path: '/resources/quiz' })">
                <img src="news7.png" />
                <q-card-section class="q-py-sm">
                <div class="text-subtitle1 text-bold q-pb-md" style="text-align: start;">Basic Knowledge Quiz</div>            
                </q-card-section>
            </q-card>        
            <q-chip color="warning" class="text-weight-bold absolute-bottom-right">
                Earn 5 pts!
            </q-chip>
        </div>   
        <div class="relative-position q-mb-md">
            <q-card class="q-mb-md" style="border-radius: 20px;" @click="router.push({ path: '/resources/quiz' })">
                <img src="news8.png" />
                <q-card-section class="q-py-sm">
                <div class="text-subtitle1 text-bold q-pb-md" style="text-align: start;">Fun Bee Facts</div>            
                </q-card-section>
            </q-card>        
            <q-chip color="warning" class="text-weight-bold absolute-bottom-right">
                Earn 3 pts!
            </q-chip>
        </div>            
    </div>    
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel'
import { useRouter } from 'vue-router';

const router = useRouter();

const config = {
  itemsToShow: 1.3,
  wrapAround: true,
  transition: 300,
};
</script>  

<style>
.carousel__slide {
  padding: 5;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(0.95);
}
</style>
