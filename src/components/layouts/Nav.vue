<template>
  <nav>
    <router-link to="/">도트 마인드</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  font-size: 40px;
  padding: 30px;
  text-align: center;

  > a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
