<template>
  <!-- <q-item
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
  </q-item> -->
  <q-expansion-item>
    <template v-slot:header>
      <q-item-section avatar>
        <q-icon color="primary" :name="props.icon" />
      </q-item-section>

      <q-item-section class="text-subtitle1 text-weight-bold">
        {{ props.title }}
      </q-item-section>
    </template>
    <q-card>
      <q-card-section>
        <q-item
          v-for="link in props.children"
          :key="link.path"
          v-bind="link"
          clickable
          :to= "props.path + '/' + link.path">
          <q-item-section>
            <q-item-label class="text-subtitle2 text-weight-medium">{{ link.title }}</q-item-label>      
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>
  </q-expansion-item>
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
  },

  children: {
    type: Array,
    required: true
  }
})
</script>
