<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* f7f7f7
43d8c9
95389e
100303 */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');
@import 'assets/css/tailwind.postcss';

body,
html {
  height: 100vh;
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-color: #43d8c9;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23f7f7f7' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}

.container {
  @apply mx-auto;
}
</style>
