<script setup></script>

<template>
  <div class="mx-auto my-auto lg:max-w-xl">
    <form action="#" method="POST">
      <div class="overflow-hidden shadow sm:rounded-md">
        <div class="bg-white px-4 py-5 sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm font-medium text-gray-700"
                >Name</label
              >
              <input
                type="text"
                v-model="name"
                name="name"
                id="name"
                autocomplete="name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label
                for="email-address"
                class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6">
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700"
                >Subject</label
              >
              <input
                type="text"
                name="subject"
                id="subject"
                autocomplete="subject"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
              <label
                for="message"
                class="block text-sm font-medium text-gray-700"
                >Message</label
              >
              <input
                type="text-area"
                name="message"
                id="message"
                autocomplete="message"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
