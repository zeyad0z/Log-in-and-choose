<template>
  <div class="flex w-full min-h-screen">
    <div class="flex-1 flex justify-center items-center bg-gray-50">
      <BaseCard>
        <div class="flex justify-center mb-5">
          <div
            class="bg-green-100 p-4 rounded-full flex items-center justify-center"
          >
            <UIcon name="i-heroicons-check" class="w-8 h-8 text-[#00A63E]" />
          </div>
        </div>

        <h2 class="text-2xl font-bold text-center mb-1 text-black">
          Welcome Back!
        </h2>
        <p class="text-gray-500 text-center mb-12 text-sm">
          Ready to continue learning
        </p>

        <div
          class="flex items-center gap-3 bg-gray-100 rounded-md p-4 mb-6 text-gray-600"
        >
          <div
            class="bg-[#DCE6F7] border-2 border-[#B7CCF4] w-[3rem] h-[3rem] rounded-full flex items-center justify-center"
          >
            <UIcon
              name="i-heroicons-user"
              class="w-[1.8rem] h-[1.7rem] text-[#2563EB]"
            />
          </div>

          <div class="flex flex-col">
            <span class="text-lg font-semibold text-gray-800">
              {{ UserStore.user?.id }}
            </span>
            <span class="text-sm text-gray-500"
              >ID: {{ UserStore.user?.id }}</span
            >
          </div>
        </div>

        <div
          class="bg-gray-100 rounded-md px-3 py-3 mb-6 text-gray-600 space-y-2"
        >
          <div class="flex items-center">
            <UIcon
              name="i-heroicons-book-open"
              class="w-4 h-4 mr-2 text-gray-500"
            />
            <span class="text-gray-500">Position:</span>
            <div
              class="ml-2 text-[#2563EB] text-xs font-semibold bg-[#DCE6F7] rounded-lg px-2 py-1"
            >
              {{ UserStore.user?.role }}
            </div>
          </div>

          <div class="flex items-center">
            <UIcon
              name="i-heroicons-building-office"
              class="w-4 h-4 mr-2 text-gray-500"
            />
            <span class="text-gray-500">Branch:</span>
            <span
              class="ml-2 text-[#2563EB] text-xs font-semibold bg-[#F1F5F9] border-2 border-[#DCE6F7] rounded-lg px-2 py-1"
            >
              {{ UserStore.user?.branch }}
            </span>
          </div>
        </div>

        <button
          :disabled="!UserStore.user.role || !UserStore.user.branch"
          @click="goDashboard"
          class="mb-6"
          :class="[
            'w-full py-3 rounded-md font-medium cursor-pointer transition-all duration-300',
            !UserStore.user.role || !UserStore.user.branch
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-[#1d58d6] text-white hover:bg-[#386ad7]',
          ]"
        >
          Enter Dashboard
        </button>
      </BaseCard>
    </div>

    <div class="flex-1 hidden lg:block">
      <HomePageSideSection />
    </div>
  </div>
</template>

<script setup>
import BaseCard from "../components/UI/BaseCard.vue";
import { useUserStore } from "~/stores/UserStore";

const UserStore = useUserStore();

const goDashboard = () => {
  if (UserStore.user.role && UserStore.user.branch) {
    UserStore.user.id = "";
    UserStore.user.pass = "";
    navigateTo("/");
  }
};
</script>
