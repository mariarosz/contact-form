<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>

<template>
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <div class="overflow-hidden shadow sm:rounded-md">
      <h1
        class="mb-4 pt-6 text-4xl font-extrabold text-center text-gray-900 dark:text-white"
      >
        Thank you!
      </h1>
      <div class="bg-white px-4 py-5 sm:p-6">
        <h3>
          Your message got delivered to our inbox. /n/ We'll get back to you
          soon.
        </h3>
        <div
          class="bg-gray-50 flex justify-center items-center px-4 py-3 text-right sm:px-6"
        >
          <button
            @click="goBack"
            class="rounded-full w-1/2 border border-transparent bg-sky-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Go back to form
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
