<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'transition-all duration-300 focus:outline-none',
      full ? 'w-full' : '',
      sizeClasses,
      roundedClasses,
      fontClasses,
      disabled ? disabledClasses : variantClasses,
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: { type: String, default: "button" },
  disabled: { type: Boolean, default: false },
  full: { type: Boolean, default: false },
  size: { type: String, default: "md" },
  rounded: { type: String, default: "md" },
  font: { type: String, default: "medium" },
  variant: { type: String, default: "primary" },
});

const sizeClasses = computed(() => {
  return {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-3 text-xl",
  }[props.size];
});

const roundedClasses = computed(() => {
  return {
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  }[props.rounded];
});

const fontClasses = computed(() => {
  return {
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }[props.font];
});

const variantClasses = computed(() => {
  return {
    primary: "bg-[#1d58d6] text-white hover:bg-[#386ad7]",
    secondary: "bg-[#2460e2] text-white hover:bg-[#1447E6]",
    gray: "bg-gray-400 text-white cursor-not-allowed",
  }[props.variant];
});

const disabledClasses = "bg-gray-400 text-white cursor-not-allowed opacity-70";
</script>
