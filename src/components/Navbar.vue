<script setup>

</script>

<template>
  <div>
    <RouterLink to="/">Products</RouterLink>
    <RouterLink to="/shoppingbag">Shopping bag</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/thankyounotes">Thank you notes</RouterLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  font-size: larger;
  justify-content: space-around;
  padding: 10px 0px;
  position: sticky;
  border-top: 3px solid #8b0000;
  border-bottom: 1px solid #8b0000;
}

div a {
  padding: 0 10px;
  color:black;
  font-size: large;
  text-decoration: none;
}

div a:hover {
  text-decoration: underline;
  text-shadow:darkred 3px 3px 10px ;}
</style>
