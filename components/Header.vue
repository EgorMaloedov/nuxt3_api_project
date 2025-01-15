<template>
  <header>
    <NuxtImg @click="logoHandler" id="logo" src="/media/logo.png" alt="Logo" />
    <nav id="navbar">
      <span v-for="link of navLinks" class="navItem">
        <RouterLink :to="link.path">{{link.name}}</RouterLink>
      </span>
    </nav>
  </header>
</template>

<script setup lang="ts">

type TNavLink = {
  path: String;
  name: String;
}

const router = useRouter()

const logoHandler = ()=>{
  router.push("/");
}

const navLinks: Array<TNavLink> = [
  {
    name: "Главная",
    path: "/",
  },
  {
    name: "Моковая страница",
    path: "/mock",
  },
]

</script>

<style scoped>
header {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  gap: 2rem;
}

#navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5em;
  flex: 1;
  height: 50%;
}

#logo {
  cursor: pointer;
  height: 3em;
}

#logo:hover {
  transform: scale(1.02);
}

.navItem a {
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5em 1em;
  transition: background-color 0.3s, color 0.3s;
}


.navItem a.router-link-active {
  background-color: #00DC82;
  color: #fff;
  border-radius: 5px;
}
</style>