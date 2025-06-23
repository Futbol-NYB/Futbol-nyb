<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-color: #000000;
  color: #ffffff;
  font-family: sans-serif;
}
</style>
