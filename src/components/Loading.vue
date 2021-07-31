<template>
  <img src="@/assets/Spinner-1.2s-91px.svg" />
</template>

<style scoped>
img {
  text-align: center;
  animation: rotation 1s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
