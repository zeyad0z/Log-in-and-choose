<template>
  <div class="h-screen w-full flex justify-center items-center">
    <div
      class="max-w-[28rem] shadow-black/25 shadow-2xl p-8 rounded-lg mt-20 bg-gray-50"
    >
      <div class="mb-15">
        <h1 class="text-3xl font-bold text-center mb-4">Welcome to Learning</h1>
        <p class="text-gray-500 text-center">
          Access your educational dashboard
        </p>
      </div>

      <div>
        <form @submit.prevent="logIn" class="mt-6">
          <label for="id" class="text-sm font-medium">Staff/Student ID</label>
          <input
            type="text"
            name="id"
            placeholder="Enter your ID"
            v-model="UserStore.user.id"
            required
            class="w-full px-4 py-3 mb-4 mt-1 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-3 focus:ring-[#8FAEF3]"
          />

          <label for="pass" class="text-sm font-medium">Password</label>
          <input
            type="password"
            name="pass"
            placeholder="Enter your Password"
            v-model="UserStore.user.pass"
            required
            class="w-full px-4 py-3 mb-6 mt-1 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-3 focus:ring-[#8FAEF3]"
          />

          <button
            type="submit"
            class="w-full bg-[#1d58d6] text-white py-4 rounded-lg hover:bg-[#386ad7] transition duration-300 text-sm font-semibold"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/UserStore";

const UserStore = useUserStore();

const logIn = () => {
  if (UserStore.user.id && UserStore.user.pass) {
    navigateTo("/options");
  }
};
</script>
