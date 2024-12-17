<template>
    <div v-if="$q.loading.isActive" class="fullscreen bg-primary"></div>
    <div class="row justify-around q-pt-md">        
        <q-btn icon="arrow_back" flat :ripple="false" @click="router.go(-1)" />
        <div class="text-h6">Daily Quiz</div>
        <q-btn class="invisible" icon="arrow_back" flat />
    </div>
    <div class="column q-mx-xl items-center q-mt-md">
        <q-chip class="text-weight-bold" color="primary" text-color="white" icon="timer">
            10:00
        </q-chip>
        <q-linear-progress class="q-mt-md" size="20px" :value="progress" rounded color="primary" track-color="secondary" />
        <div class="q-my-md text-primary text-weight-bold full-width" style="text-align: left;">Question {{ progress * 5 }} out of 5 </div>
        <q-card class="bg-primary q-pa-md" style="border-radius: 20px;" flat>
            <q-card-section>
                <div class="text-white text-weight-bold text-h6">{{ question }}</div>
            </q-card-section>
        </q-card>
        <div class="row q-mt-md">
            <q-card class="col-6" style="border-radius: 20px;" flat :class="selectAnswer === 'first' ? 'bg-primary text-white' : 'bg-secondary text-black'" @click="chooseAnswer('first')">
                <q-card-section>
                    <div style="text-align: center;">{{ firstPick }}</div>
                </q-card-section>
            </q-card>            
            <q-card class="col-6" style="border-radius: 20px;" flat :class="selectAnswer === 'second' ? 'bg-primary text-white' : 'bg-secondary text-black'" @click="chooseAnswer('second')">
                <q-card-section>
                    <div style="text-align: center;">{{ secondPick }}</div>
                </q-card-section>
            </q-card>
            <q-card class="col-6 q-mt-md" style="border-radius: 20px;" flat :class="selectAnswer === 'third' ? 'bg-primary text-white' : 'bg-secondary text-black'" @click="chooseAnswer('third')">
                <q-card-section>
                    <div style="text-align: center;">{{ thirdPick }}</div>
                </q-card-section>
            </q-card>
            <q-card class="col-6 q-mt-md" style="border-radius: 20px;" flat :class="selectAnswer === 'fourth' ? 'bg-primary text-white' : 'bg-secondary text-black'" @click="chooseAnswer('fourth')">
                <q-card-section>
                    <div style="text-align: center;">{{ fourthPick }}</div>
                </q-card-section>
            </q-card>
        </div>
        <q-card class="invisible q-mt-md">
            <q-card-section>
                <div>Mating with the queen</div>
            </q-card-section>
        </q-card>
        <q-btn class="text-weight-bold" color="primary" label="Next Question" unelevated rounded no-caps @click="nextQuiz()" />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useQuasar, QSpinnerFacebook } from 'quasar';
import { ref, onBeforeMount } from 'vue'

const router = useRouter();
const $q = useQuasar();

const progress = ref(0.2)
const selectAnswer = ref()
const question = ref('What is the primary role of worker bees in a honeybee colony?')
const firstPick = ref('Laying eggs')
const secondPick = ref('Collecting nectar & pollen')
const thirdPick = ref('Guarding the hive')
const fourthPick = ref('Mating with the queen')

function chooseAnswer(ans){
    selectAnswer.value = ans
}
function nextQuiz(){
    progress.value = 0.4
    selectAnswer.value = ''
    question.value = "Why are dandelions important for honeybees?"
    firstPick.value = "Provide nectar and pollen early in the season when other flowers aren't blooming."
    secondPick.value = "Their seeds are a primary food source for honeybee larvae."
    thirdPick.value = "Honeybees use dandelion leaves to build their hives."
    fourthPick.value = "Dandelions produce a special substance that repels predators from hives."
}

onBeforeMount(() => {
    $q.loading.show({
          spinner: QSpinnerFacebook,
          spinnerColor: 'white',
          spinnerSize: 70,
          backgroundColor: 'primary',
          message: 'Loading...',
          messageColor: 'white'
        })
    setTimeout(() => {
        $q.loading.hide()
    }, "1000");
})
</script>  