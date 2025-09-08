<template>
  <div
    class="min-h-fit w-full flex justify-center items-center px-4 sm:px-6 lg:px-8"
  >
    <BaseCard>
      <div class="mb-8 sm:mb-12 text-center">
        <h1 class="text-2xl sm:text-3xl lg:text-3xl font-bold mb-3">
          Welcome to Learning
        </h1>
        <p class="text-gray-500 text-sm sm:text-base">
          Access your educational dashboard
        </p>
      </div>

      <form @submit.prevent="logIn" class="mt-4 sm:mt-6">
        <label for="id" class="text-sm font-medium">Staff/Student ID</label>
        <input
          type="text"
          name="id"
          placeholder="Enter your ID"
          v-model="UserStore.user.id"
          required
          class="w-full px-3 sm:px-4 py-2 sm:py-3 mb-4 mt-1 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8FAEF3]"
        />

        <label for="pass" class="text-sm font-medium">Password</label>
        <input
          type="password"
          name="pass"
          placeholder="Enter your Password"
          v-model="UserStore.user.pass"
          required
          class="w-full px-3 sm:px-4 py-2 sm:py-3 mb-5 sm:mb-6 mt-1 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8FAEF3]"
        />

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-[#1d58d6] text-white py-3 sm:py-3 rounded-lg mb-6 hover:bg-[#386ad7] transition duration-300 text-sm sm:text-base font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {{ loading ? "Signing In..." : "Sign In" }}
        </button>
      </form>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from "../UI/BaseCard.vue";
import { ref } from "vue";
import { useUserStore } from "~/stores/UserStore";

const UserStore = useUserStore();
const loading = ref(false);

const logIn = () => {
  loading.value = true;
  setTimeout(() => {
    navigateTo("/options");
    loading.value = false;
  }, 1000);
};
</script>
