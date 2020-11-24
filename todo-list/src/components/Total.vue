<template>
  <hr class="mt-6" />
  <div class="mt-4 text-gray-500">
    Total: <span class="font-bold">{{ pTotal }}</span
    >, Done: <span class="font-bold">{{ pDone }}</span
    >, Not Done: <span class="font-bold">{{ pNotDone }}</span>
  </div>
</template>

<script>
export default {
  props: {
    pTotal: {
      type: Number,
      required: true
    },
    pDone: {
      type: Number,
      required: true
    },
    pNotDone: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped></style>
