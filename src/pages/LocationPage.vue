<template>
    <div v-if="$q.loading.isActive" class="fullscreen bg-primary"></div>
    <div class="row justify-around q-pt-md">        
        <q-btn icon="arrow_back" flat :ripple="false" @click="router.go(-1)" />
        <div class="text-h6">Hotel</div>
        <div class="row">
            <q-btn icon="upload" flat :ripple="false" dense />
            <q-btn icon="more_horiz" flat :ripple="false" dense />
        </div>
    </div>
    <div class="column q-ma-md">
        <q-img src="location1.png" style="border-radius: 20px;" />
        <div class="text-h6 text-weight-bold q-mt-md">Muak Bee Hotel</div>
        <div class="q-mt-xs">Last Updated: 11/12</div>
        <q-btn label="Directions" no-caps color="primary" class="text-weight-bold q-mt-md" rounded unelevated />
        <div class="row q-gutter-md q-mt-sm">
            <img class="col" src="location2.png" style="border-radius: 15px;" />
            <div class="col column">
                <img src="location3.png" style="border-radius: 15px;" />
                <img class="q-mt-md" src="location4.png" style="border-radius: 15px;" />
            </div>
        </div>
        <div class="q-mt-md">
            <q-btn-toggle
                v-model="model"
                spread
                no-caps
                unelevated
                rounded
                toggle-color="primary"
                color="white"
                text-color="black"
                :options="[
                {label: 'Overview', value: 'one'},
                {label: 'Reviews', value: 'two'},
                {label: 'Photos', value: 'three'},
                {label: 'Updates', value: 'four'}
                ]"
            />
        </div>
        <div class="row items-center q-mt-lg">
            <q-icon color="primary" size="lg" name="location_on" class="q-mr-md" />
            <div>85 Songdogwahak-ro, Yeonsu-gu, Incheon</div>
        </div>
        <div class="row q-mt-lg no-wrap">
            <q-icon color="primary" size="lg" name="info" class="q-mr-md" />
            <div>Donated by Urban Bee Seoul in 2024, the bee hotel was installed for the purpose of spreading awareness of honeybee colony decline to Yonsei University students </div>
        </div>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const router = useRouter();
const model = ref('one')

</script>  