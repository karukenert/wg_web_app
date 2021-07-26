<template>
  <div class="card">
    <!-- TODO refactor -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  // props: {},
};
</script>

<style>
.card {
  padding: 16px;
  margin-bottom: 16px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
}
</style>