<template>    
    <div class="row justify-around q-pt-md">        
        <q-btn icon="arrow_back" flat :ripple="false" to="/" />
        <div class="text-h6">Contribute</div>
        <q-btn class="invisible" icon="arrow_back" flat />
    </div>
    <div class="column q-px-lg">
        <img class="col q-mt-lg" src="uploadTitle.png" />
        <q-btn class="col q-mt-lg text-weight-bold" label="Take Photo" rounded color="primary" unelevated to="/camera" />
        <q-btn class="col q-mt-lg text-weight-bold" label="Choose from Camera Roll" rounded color="primary" unelevated />
    </div>
</template>

<script setup>

</script>  