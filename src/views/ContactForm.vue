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

const schema = yup.object({
  name: yup.string().required().min(5).max(50),
  email: yup.string().required().email(),
  subject: yup.string().max(100),
  message: yup.string().required().max(500),
});

async function onSubmit(values) {
  const response = await sendMessage(values);
  if (response === 201) {
    //reset all fields
    router.push("/confirmation");
  } else {
    //keep all fields and show error message
    alert("Something went wrong");
  }
}

configure({
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: false,
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
          <div class="col-span-6 sm:col-span-3">
            <label for="name" class="block text-sm font-medium text-gray-700"
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
            <ErrorMessage name="name" class="text-red-400" />
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
              class="mt-1 block p-3 w-full text-sm rounded-lg border border-gray-200 shadow-sm focus:border-sky-400 focus:ring-sky-500 sm:text-sm"
            />
            <ErrorMessage name="email" />
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
              autocomplete="subject"
              class="mt-1 block p-3 w-full text-sm rounded-lg border border-gray-200 shadow-sm focus:border-sky-400 focus:ring-sky-500 sm:text-sm"
            />
            <div class="flex gap-2">
              <ErrorMessage name="subject" class="text-red-100" />
              <p class="text-gray-200 font-sm">
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
              autocomplete="message"
              class="mt-1 block p-3 w-full text-sm rounded-lg border border-gray-200 shadow-sm focus:border-sky-400 focus:ring-sky-500 sm:text-sm"
            />
            <div class="flex flex-row flex-end">
              <p class="text-gray-200 font-sm">
                {{ `${message.length}/100` }}
              </p>
              <ErrorMessage name="message" />
            </div>
          </div>
        </div>

        <div
          class="bg-gray-50 flex justify-center items-center px-4 py-3 text-right sm:px-6"
        >
          <button
            type="submit"
            class="rounded-full w-1/2 border border-transparent bg-sky-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Send
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
