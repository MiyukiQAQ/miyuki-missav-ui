<template>
  <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      router
  >
    <el-menu-item index="home">
      Miyuki MissAV UI
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="movies">Movies</el-menu-item>
    <el-menu-item index="collection">Collection</el-menu-item>
    <el-menu-item index="playlist">Playlist</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>

</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
