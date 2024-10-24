<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p>Lorem ipsum dolor, sit amet </p>
    </div>
  </div>
</template>

<script setup>
  defineProps(['title']);
</script>