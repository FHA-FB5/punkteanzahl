<template>
  <div class="h-screen flex justify-center items-center gap-64 text-center bg-green-700 text-gray-100">
    <div>
      <h2 class="text-7xl">{{ names.teamA }}</h2>
      <h1 class="text-9xl">{{ points.teamA }}</h1>
    </div>
    <div>
      <h2 class="text-7xl">{{ names.teamB }}</h2>
      <h1 class="text-9xl">{{ points.teamB }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">

const names = {
  teamA: "Tutoren",
  teamB: "Erstis",
};

const points = {
  teamA: 30,
  teamB: 10,
};

</script>

<style>

</style>
