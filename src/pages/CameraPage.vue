<template>    
    <q-page>
        <div class="row justify-around q-pt-md">        
            <q-btn icon="arrow_back" flat :ripple="false" to="/community/upload" />
            <div class="text-h6">Contribute</div>
            <q-btn class="invisible" icon="arrow_back" flat />
        </div>
        <div class="column q-px-lg">
            <q-img class="col q-mt-lg" src="uploadCam.png" />
            <div class="text-subtitle1 text-weight-bold q-mt-md q-ml-md">Place Details</div>
            <q-input class="q-mt-lg" rounded outlined v-model="location" label="Name of the Location" />
            <q-input class="q-mt-md" rounded outlined v-model="ddescription" label="Add Description" />
            <q-input class="q-mt-md" rounded outlined v-model="address" label="Address" />
            <q-input class="q-my-md" rounded outlined v-model="description" label="Add Description" />
        </div>
    </q-page>
</template>

<script setup>
import { ref } from 'vue'

const location = ref()
const address = ref()
const description = ref()
const ddescription = ref()

</script>  