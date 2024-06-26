<template>
  <div class="ml-4">
    <p class="text-sm text-gray-600">
      © Made with love in {{ currentYear }} by DarekRepos. All rights reserved.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
