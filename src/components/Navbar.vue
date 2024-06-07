<script setup>

</script>

<template>
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/thankyounotes">Thank you notes</RouterLink>
      <RouterLink to="/shoppingbag">Shopping bag</RouterLink>
    </div>
</template>

<style scoped>
div{
  display: flex;
  font-size: larger;
  justify-content: space-around;
  padding: 10px 0px;
  position: sticky;
  border-top: 3px solid darkred;
  border-bottom: 1px solid darkred;
}

div a {
 color: black;
  font-size: large;
  text-decoration: none;

}

div a:hover{
  text-decoration: underline;
  color: darkred;
}
</style>
