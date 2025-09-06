<template>
  <div
    class="h-fit w-full bg-gradient-to-tl from-[#15a4f2] via-[#2d78f9] to-[#2B67EB] relative"
  >
    <div
      class="absolute inset-0 opacity-20 pointer-events-none"
      style="
        background-image: radial-gradient(
            circle at 20% 30%,
            white 2px,
            transparent 2px
          ),
          radial-gradient(circle at 60% 70%, white 1.6px, transparent 1.6px),
          radial-gradient(circle at 80% 20%, white 2.4px, transparent 2.4px),
          radial-gradient(circle at 30% 80%, white 1.2px, transparent 1.2px),
          radial-gradient(circle at 70% 40%, white 2px, transparent 2px);
        background-size: 120px 120px, 80px 80px, 100px 100px, 150px 150px,
          90px 90px;
        background-position: 0 0, 40px 40px, 20px 60px, 80px 20px, 60px 80px;
      "
    ></div>

    <div class="relative z-10 p-6">
      <div class="text-center mb-12">
        <div class="flex justify-center mb-5 mt-7">
          <div
            class="w-[6rem] h-[6rem] bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center"
          >
            <UIcon
              name="i-heroicons-building-office"
              class="w-[4rem] h-[4rem] text-white"
            />
          </div>
        </div>

        <h1 class="text-4xl font-bold text-white mb-3">Your School Name</h1>
        <h2 class="text-xl font-semibold text-blue-100 mb-2">
          Excellence in Education
        </h2>
        <p class="text-lg text-blue-100/90 max-w-lg mx-auto font-medium">
          Empowering minds and shaping futures through innovative learning
          experiences
        </p>
      </div>

      <div class="grid grid-cols-2 gap-7 max-w-[40rem] mx-auto mb-6">
        <UCard
          v-for="card in cards"
          :key="card.title"
          class="bg-white/10 hover:bg-white/15 backdrop-blur-md transition-all duration-300 group cursor-pointer"
        >
          <template #header>
            <div class="flex flex-col items-center text-center p-2">
              <div class="w-11 h-11 flex items-center justify-center mb-3">
                <UIcon :name="card.icon" class="w-[3rem] h-[3rem] text-white" />
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">
                {{ card.title }}
              </h3>
              <p class="text-blue-100/80 text-sm font-semibold">
                {{ card.text }}
              </p>
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: "Knowledge",
    text: "Comprehensive curriculum and learning resources",
    icon: "i-heroicons-book-open",
  },
  {
    title: "Community",
    text: "Collaborative learning environment",
    icon: "i-heroicons-users",
  },
  {
    title: "Excellence",
    text: "Striving for academic achievement",
    icon: "i-heroicons-trophy",
  },
  {
    title: "Growth",
    text: "Personal and academic development",
    icon: "clarity:target-line",
  },
];
</script>
