<template>
  <div
    class="h-fit w-full bg-gradient-to-tl from-[#15a4f2] via-[#2d78f9] to-[#2B67EB]"
  >
    <div class="relative z-10 p-6">
      <div class="text-center mb-12">
        <div class="flex justify-center mb-5 mt-7">
          <div
            class="w-[6rem] h-[6rem] bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30"
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
          class="bg-white/10 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
        >
          <template #header>
            <div class="flex flex-col items-center text-center p-2">
              <div
                class="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
              >
                <UIcon
                  name="i-heroicons-book-open"
                  class="w-[3rem] h-[3rem] text-white"
                />
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Knowledge</h3>
              <p class="text-blue-100/80 text-sm font-semibold">
                Comprehensive curriculum and learning resources
              </p>
            </div>
          </template>
        </UCard>

        <UCard
          class="bg-white/10 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
        >
          <template #header>
            <div class="flex flex-col items-center text-center p-2">
              <div
                class="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
              >
                <UIcon
                  name="i-heroicons-users"
                  class="w-[3rem] h-[3rem] text-white"
                />
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Community</h3>
              <p class="text-blue-100/80 text-sm font-semibold">
                Collaborative learning environment
              </p>
            </div>
          </template>
        </UCard>

        <UCard
          class="bg-white/10 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
        >
          <template #header>
            <div class="flex flex-col items-center text-center p-2">
              <div
                class="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
              >
                <UIcon
                  name="i-heroicons-trophy"
                  class="w-[3rem] h-[3rem] text-white"
                />
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Excellence</h3>
              <p class="text-blue-100/80 text-sm font-semibold">
                Striving for academic achievement
              </p>
            </div>
          </template>
        </UCard>

        <UCard
          class="bg-white/10 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
        >
          <template #header>
            <div class="flex flex-col items-center text-center p-2">
              <div
                class="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
              >
                <UIcon
                  name="clarity:target-line"
                  class="w-[3rem] h-[3rem] text-white"
                />
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Growth</h3>
              <p class="text-blue-100/80 text-sm font-semibold">
                Personal and academic development
              </p>
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>
