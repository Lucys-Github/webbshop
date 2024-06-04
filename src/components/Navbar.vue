<script setup>

</script>

<template>
    <div>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/thankyounotes">Thank you notes</RouterLink>
      <RouterLink to="/shoppingbag">Shopping bag</RouterLink>
    </div>
</template>

<style scoped>
div{
  display: flex;
  justify-content: space-around;
  margin: 10px 0px;
  position: sticky;
}

div a {
  color: black;
  font-size: large;
  text-decoration: none;
}

div a:hover{
  text-decoration: underline;
  color: red;
}
</style>
