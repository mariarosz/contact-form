<script setup>
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const schema = yup.object({
  name: yup.string().required().min(5).max(50),
  email: yup.string().required().email(),
  subject: yup.string().max(100),
  message: yup.string().max(500),
});

const onSubmit = (values) => {
  console.log(JSON.stringify(values, null, 2));
};

/* const validateEmail = (value) => {
  // if the field is empty
  if (!value) {
    return "This field is required";
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "This field must be a valid email";
  }
  // All is good
  return true;
}; */
</script>

<template>
  <div class="flex flex-mx-auto lg:ml-4 lg:mr-4">
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:col-span-2 md:mt-0">
          <Form @submit="onSubmit" :validation-schema="schema">
            <div class="overflow-hidden shadow sm:rounded-md">
              <div class="bg-white px-4 py-5 sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700"
                      >Name</label
                    >
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      v-model="name"
                      autocomplete="name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="name" />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                      >Email address</label
                    >
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      v-model="email"
                      autocomplete="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="email" />
                  </div>

                  <div class="col-span-6">
                    <label
                      for="subject"
                      class="block text-sm font-medium text-gray-700"
                      >Subject</label
                    >
                    <Field
                      type="text"
                      name="subject"
                      id="subject"
                      v-model="subject"
                      autocomplete="subject"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="subject" />
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      for="message"
                      class="block text-sm font-medium text-gray-700"
                      >Message</label
                    >
                    <Field
                      type="text-area"
                      name="message"
                      id="message"
                      v-model="message"
                      autocomplete="message"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="message" />
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
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
