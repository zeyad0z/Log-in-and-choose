<template>
  <div
    class="min-h-fit w-full flex justify-center items-center px-4 sm:px-6 lg:px-8"
  >
    <BaseCard class="mx-5">
      <div class="mb-8 sm:mb-10 pb-4 text-center">
        <h1 class="text-2xl text-black/85 sm:text-[1.95rem] font-bold mb-3">
          Welcome to Learning
        </h1>
        <p class="text-gray-500 text-sm sm:text-[1.02rem] mt-3">
          Access your educational dashboard
        </p>
      </div>

      <form @submit.prevent="logIn" class="mt-4 sm:mt-6">
        <label for="id" class="text-sm font-medium">Staff/Student ID</label>
        <input
          type="text"
          name="id"
          :placeholder="
            v$.$error && v$.id.$error ? 'ID is required' : 'Enter your ID'
          "
          v-model="state.id"
          :class="[
            'w-full px-3 sm:px-4 py-2 sm:py-3 mb-4 mt-1 border bg-white rounded-lg focus:outline-none',
            v$.$error && v$.id.$error
              ? 'border-2 border-red-400 placeholder-red-400'
              : 'border-gray-200 focus:ring-2 focus:ring-[#8FAEF3]',
          ]"
        />

        <label for="pass" class="text-sm font-medium">Password</label>
        <input
          type="password"
          name="pass"
          :placeholder="
            v$.$error && v$.pass.required.$invalid
              ? 'Password is required'
              : 'Enter your Password'
          "
          v-model="state.pass"
          :class="[
            'w-full px-3 sm:px-4 py-2 sm:py-3 mt-1 border bg-white rounded-lg focus:outline-none',
            v$.$error && v$.pass.$error
              ? 'border-2 border-red-400 placeholder-red-400'
              : 'border-gray-200 focus:ring-2 focus:ring-[#8FAEF3]',
            v$.$error && v$.pass.minLength.$invalid ? 'mb-1' : 'mb-6',
          ]"
        />
        <p
          v-if="v$.$error && v$.pass.minLength.$invalid"
          class="text-red-500 text-sm mb-4"
        >
          Password must be at least 6 characters
        </p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-[#1d58d6] text-white py-3 sm:py-3 rounded-lg mb-6 hover:bg-[#386ad7] transition duration-300 text-sm sm:text-base font-semibold disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
        >
          {{ loading ? "Signing In..." : "Sign In" }}
        </button>
      </form>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from "../UI/BaseCard.vue";
import { ref, reactive } from "vue";
import { useUserStore } from "~/stores/UserStore";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

const UserStore = useUserStore();
const loading = ref(false);

const state = reactive({
  id: "",
  pass: "",
});
const rules = {
  id: { required },
  pass: { required, minLength: minLength(6) },
};
const v$ = useVuelidate(rules, state);
const submitForm = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    UserStore.user.id = state.id;
    console.log("✅ Valid form:", state);
    navigateTo("/options");
  } else {
    console.log("❌ Invalid form");
  }
};

const logIn = () => {
  loading.value = true;
  setTimeout(() => {
    submitForm();
    loading.value = false;
  }, 1000);
};
</script>
