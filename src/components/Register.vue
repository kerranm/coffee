<template>
  <div class="h-full flex items-center p-4">
    <div class="w-full">
      <h1>Register</h1>
      <label for="email">Email</label><br>
      <input type="text" id="email" name="">
      <label for="password">Password</label><br>
      <input type="password" id="password" name="">
      <div class="flex justify-end">
        <router-link tag="btn" class="btn" to="/onboarding">
          Let's go
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
