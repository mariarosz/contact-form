<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goBack() {
  router.go("/");
}
</script>

<template>
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <div
      class="overflow-hidden shadow sm:rounded-md flex flex-col items-center"
    >
      <h1 class="mb-1 pt-10 text-4xl font-extrabold text-center text-gray-900">
        Thank you!
      </h1>

      <h3
        class="mb-4 pt-6 text-xl font-medium text-center text-gray-700 dark:text-white"
      >
        Your message got delivered to our inbox.
      </h3>

      <h3
        class="mb-4 text-xl font-medium text-center text-gray-700 dark:text-white"
      >
        We'll get back to you soon.
      </h3>

      <button
        @click="goBack"
        class="rounded-full w-1/2 border border-transparent bg-sky-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 mb-8"
      >
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
        Back to Form
      </button>
    </div>
  </div>
</template>
