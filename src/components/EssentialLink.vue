<template>
  <q-item
    clickable
    :to="props.path"
  >
    <q-item-section
      v-if="props.icon"
      avatar
    >
      <q-icon color="primary" :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>      
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  path: {
    type: String,
    default: ''
  },

  title: {
    type: String,
    required: true
  },

  icon: {
    type: String,
    default: ''
  }
})
</script>
