<template>
  <div class="flex flex-col items-center bg-[#F3F8FE] w-full min-h-screen">
    <div class="w-full flex justify-between flex-row p-5 mb-10 gap-3">
      <button
        @click="backToLogin"
        class="flex items-center gap-2 hover:bg-[#0EA5E9] px-3 py-2 rounded-md"
      >
        <div class="flex items-center gap-4">
          <UIcon
            name="i-lucide-arrow-left"
            class="w-[1rem] h-[1rem] text-gray-600"
          />
          <p class="text-sm font-semibold text-gray-600">Back to Login</p>
        </div>
      </button>
      <div class="flex flex-col items-end">
        <p class="text-sm font-base text-gray-700">
          Welcome, {{ UserStore.user.id }}
        </p>
        <p class="text-xs font-base text-gray-500">
          ID: {{ UserStore.user.id }}
        </p>
      </div>
    </div>

    <div
      :class="[selectedRole ? 'md:mt-0' : 'md:mt-30']"
      class="flex flex-col items-center text-center p-2 mb-9"
    >
      <div
        class="w-[5rem] h-[5rem] flex bg-[#DBEAFE] rounded-full items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
      >
        <UIcon
          name="i-heroicons-book-open"
          class="w-[2.8rem] h-[2.8rem] text-[#155DFC]"
        />
      </div>
      <h1 class="text-4xl sm:text-4xl font-bold text-[#1D293D] mb-5">
        Choose Your Role
      </h1>
      <p class="text-gray text-xl max-w-sm md:max-w-2xl">
        Select your position and branch to access your personalized dashboard
      </p>
    </div>

    <div
      class="flex flex-col sm:flex-row flex-wrap gap-6 justify-center my-2 px-3"
    >
      <div v-for="role in roles" :key="role.name">
        <button
          @click="selectRole(role.name)"
          :class="[
            'flex flex-col items-center gap-2 bg-[#F8FAFC] border rounded-2xl px-36 md:px-5 py-5  w-full sm:w-[18rem] shadow-sm hover:shadow-md relative cursor-pointer',
            selectedRole === role.name
              ? 'border-blue-500 bg-blue-50 border-2'
              : 'border-gray-200',
            selectedRole ? 'h-[16rem]' : 'h-[14rem]',
          ]"
        >
          <div
            class="bg-[#DBEAFE] rounded-full w-[4rem] h-[4rem] flex items-center justify-center mb-3"
          >
            <UIcon :name="role.icon" class="w-[2rem] h-[2rem] text-[#155DFC]" />
          </div>

          <p class="text-xl sm:text-xl font-semibold text-[#1D293D]">
            {{ role.name }}
          </p>
          <p class="text-sm sm:text-base text-gray-600">
            {{ role.branches }} branches available
          </p>

          <div v-if="selectedRole === role.name" class="absolute bottom-4">
            <UIcon
              name="i-heroicons-check-circle"
              class="w-7 h-7 text-blue-600"
            />
          </div>
        </button>
      </div>
    </div>

    <div
      v-if="selectedRole"
      class="bg-[#FFFFFF] border border-gray-200 rounded-2xl mt-5 px-5 py-7 flex flex-col items-center w-[89%] sm:w-[90%] lg:w-[57rem] shadow-md shadow-black/20"
    >
      <h1 class="text-2xl font-semibold text-[#1D293D] mb-6 mt-3">
        Select Your Branch
      </h1>
      <div
        class="flex flex-col sm:flex-row flex-wrap gap-5 justify-start w-[94%] md:w-[100%]"
      >
        <div
          v-for="branch in filteredBranches"
          :key="branch.name"
          class="w-full sm:w-auto"
        >
          <button
            @click="selectBranch(branch.name)"
            :class="[
              'flex items-center justify-between gap-2 border-2 rounded-lg px-6 py-6 w-full sm:w-[17rem] h-fit relative cursor-pointer hover:border-2 hover:border-blue-300',
              selectedBranch === branch.name
                ? 'bg-blue-50 border-blue-500 border-2'
                : 'bg-white border-gray-200',
            ]"
          >
            <div class="flex items-center gap-3">
              <div
                class="bg-[#EFF6FF] rounded-lg w-[3rem] h-[3rem] flex items-center justify-center"
              >
                <UIcon
                  name="i-heroicons-building-office"
                  class="w-[2rem] h-[2rem] text-[#45556C]"
                />
              </div>
              <div>
                <p class="text-base font-semibold text-[#1D293D]">
                  {{ branch.name }}
                </p>
                <p class="text-sm text-gray-600">Branch Location</p>
              </div>
            </div>

            <div v-if="selectedBranch === branch.name">
              <UIcon
                name="i-heroicons-check-circle"
                class="w-7 h-7 text-blue-600"
              />
            </div>
          </button>
        </div>
      </div>
    </div>

    <button
      :disabled="!selectedRole || !selectedBranch"
      :class="[
        'flex items-center gap-2 px-10 py-2 rounded-xl mt-7 mb-8 text-xl font-semibold transition-all duration-200',
        !selectedRole || !selectedBranch
          ? 'bg-[#83AAFD] text-white cursor-not-allowed'
          : 'bg-[#2460e2] hover:bg-[#1447E6] text-white cursor-pointer',
      ]"
      @click="countinueToDashboard"
    >
      Continue to Dashboard
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useUserStore } from "~/stores/UserStore";

const UserStore = useUserStore();
const selectedRole = ref(null);
const selectedBranch = ref(null);

const branches = [
  { name: "Main Campus" },
  { name: "North Branch" },
  { name: "South Branch" },
];
const roles = [
  { name: "Administrator", branches: 3, icon: "i-heroicons-academic-cap" },
  { name: "Teacher", branches: 2, icon: "i-heroicons-academic-cap" },
  { name: "Student Affairs", branches: 1, icon: "i-heroicons-academic-cap" },
];

const countinueToDashboard = () => {
  UserStore.user.role = selectedRole.value;
  UserStore.user.branch = selectedBranch.value;
  navigateTo("/data");
};
const filteredBranches = computed(() => {
  if (selectedRole.value === "Administrator") {
    return branches;
  }
  if (selectedRole.value === "Teacher") {
    return branches.filter((b) => b.name !== "South Branch");
  }
  if (selectedRole.value === "Student Affairs") {
    return branches.filter(
      (b) => b.name !== "South Branch" && b.name !== "North Branch"
    );
  }
  return [];
});

const backToLogin = () => navigateTo("/");

function selectRole(role) {
  selectedRole.value = role;
  selectedBranch.value = null;
}

function selectBranch(branch) {
  selectedBranch.value = branch;
}
</script>
