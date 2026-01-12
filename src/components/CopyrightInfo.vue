<template>
  <div class="ml-4">
    <p class="text-sm text-gray-600">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    i18n: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    text() {
      const template =
        typeof this.i18n.copyright === "string"
          ? this.i18n.copyright
          : "© Made with love in {year} by DarekRepos. All rights reserved.";

      return template.replace("{year}", String(this.currentYear));
    }
  }
};
</script>
