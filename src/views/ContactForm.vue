<script setup>
import { ref } from "vue";
import { Form, Field, ErrorMessage, configure } from "vee-validate";
import * as yup from "yup";
import sendMessage from "../services/APIservice";
import { useRouter } from "vue-router";

const router = useRouter();

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
let errorMessage = ref("");
let isDisabled = ref(true);

const schema = yup.object({
  name: yup.string().required().min(5).max(50),
  email: yup.string().required().email(),
  subject: yup.string().max(100),
  message: yup.string().required().max(500),
});

async function onSubmit(values, { resetForm }) {
  //add a loading state
  const response = await sendMessage(values);
  if (response === 201) {
    resetForm();
    router.push("/confirmation");
  } else {
    errorMessage.value = "Upss 🫢 Something went wrong. Please try again.";
  }
}

configure({
  validateOnBlur: true,
  validateOnChange: false,
  validateOnInput: true,
  validateOnModelUpdate: false,
});
</script>

<template>
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <div class="overflow-hidden shadow sm:rounded-md">
      <Form @submit="onSubmit" :validation-schema="schema">
        <h1
          class="mb-4 pt-6 text-4xl font-extrabold text-center text-gray-900 dark:text-white"
        >
          Say hello
        </h1>
        <div class="bg-white px-4 py-5 sm:p-6">
          <p v-if="errorMessage" class="text-rose-500 pb-4">
            {{ errorMessage }}
          </p>
          <div class="col-span-6 sm:col-span-3">
            <label for="name" class="block text-md font-medium text-gray-700"
              >Name</label
            >
            <Field
              type="text"
              name="name"
              id="name"
              v-model="name"
              placeholder="Joe"
              autocomplete="name"
              class="mt-1 block p-3 w-full text-sm rounded-lg border border-gray-200 shadow-sm focus:border-sky-400 focus:ring-sky-500 sm:text-sm"
            />
            <p class="text-rose-500 pb-6">
              <ErrorMessage name="name" class="p-0.5" />
            </p>
          </div>

          <div class="col-span-6 sm:col-span-4">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <Field
              type="text"
              name="email"
              id="email"
              v-model="email"
              placeholder="joe@mail.com"
              autocomplete="email"
              class="mt-1 block p-3 w-full text-md rounded-lg border border-gray-200 shadow-sm focus:border-sky-400 focus:ring-sky-500 sm:text-sm"
            />
            <p class="text-rose-500 pb-6">
              <ErrorMessage name="email" class="p-0.5" />
            </p>
          </div>

          <div class="col-span-6">
            <label for="subject" class="block text-sm font-medium text-gray-700"
              >Subject</label
            >

            <Field
              type="text"
              name="subject"
              id="subject"
              v-model="subject"
              placeholder="I want to talk about..."
              class="mt-1 block p-3 w-full text-md rounded-lg border border-gray-200 shadow-sm focus:border-sky-400 focus:ring-sky-500 sm:text-sm"
            />
            <div class="flex justify-between">
              <p class="text-rose-500 pb-6">
                <ErrorMessage name="subject" class="p-0.5" />
              </p>
              <p class="text-gray-200 text-sm">
                {{ `${subject.length}/100` }}
              </p>
            </div>
          </div>

          <div class="col-span-6 gap-2 sm:col-span-6 lg:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700"
              >Message</label
            >
            <Field
              as="textarea"
              name="message"
              id="message"
              v-model="message"
              placeholder="I'm writing to you because..."
              class="mt-1 block p-3 w-full text-sm rounded-lg border border-gray-200 shadow-sm focus:border-sky-400 focus:ring-sky-500 sm:text-sm"
            />
            <div class="flex justify-between">
              <p class="text-rose-500 pb-6">
                <ErrorMessage name="message" class="p-0.5" />
              </p>
              <p class="text-gray-200 text-sm">
                {{ `${message.length}/500` }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="bg-gray-50 flex justify-center items-center px-4 py-3 text-right sm:px-6"
        >
          <button
            type="submit"
            :disabled="isDisabled"
            class="rounded-full w-1/2 border border-transparent bg-sky-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-65 disabled:bg-gray-400"
          >
            Send
            <font-awesome-icon icon="fa-solid fa-paper-plane" />
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
