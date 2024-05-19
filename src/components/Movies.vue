<template>
  <div style="display: flex; justify-content: center;">
    <el-input
        v-model="url"
        style="width: 400px"
        placeholder="movie url here"
        clearable
    />
    <el-button
        v-loading="isLoadingParse"
        size="default"
        type="success"
        @click="handleParseUrl">
      Parse
    </el-button>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Serial">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.serial }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Url">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-link @click="openPage(scope.row.url)">{{ scope.row.url }}</el-link>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Title">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>description: {{ scope.row.description }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.title }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="Actress">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.actress }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="ReleaseDate">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.releaseDate }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Collected">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.collected }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Playlist">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.playlist }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button
            size="small"
            type="success"
            @click="handleDownload(scope.row)">
          Download
        </el-button>
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import AxiosHttp from "../http/AxiosHttp.ts";
import {ElMessage} from 'element-plus'

interface Movie {
  serial: string
  url: string
  title: string
  actress: string
  releaseDate: string
  collected: boolean
  playlist: string
  type: string
  description: string
}

let isLoadingParse = ref(false)

const url = ref()

let tableData = ref<Movie[]>([]);

const handleDownload = (row: Movie) => {
  AxiosHttp.post('/api/movie/' + row.serial + '/download').then((res) => {
    if (res) {
      ElMessage.success('movie successfully added to download queue')
    }
  }).catch((error) => {
    ElMessage.error(error)
  }).finally(() => {

  })
}
const handleDelete = (row: Movie) => {
  AxiosHttp.delete('/api/movie/' + row.serial).then((res) => {
    if (res) {
      ElMessage.success('movie delete successfully')
    }
    initTableData()
  }).catch((error) => {
    ElMessage.error(error)
  }).finally(() => {

  })
}
const openPage = (url: string) => {
  window.open(url, '_blank');
}

onMounted(() => {
  initTableData()
})

const initTableData = () => {
  AxiosHttp.get('/api/movies').then(res => {
    tableData.value = res.data;
  }).catch((error) => {
    console.log(error)
  })
}

const handleParseUrl = () => {
  isLoadingParse.value = true
  AxiosHttp.post(`/api/movie/url`, {url: url.value}).then(res => {
    if (res) {
      ElMessage.success('URL parsed successfully')
    }
    initTableData()
  }).catch((error) => {
    ElMessage.error(error)
    isLoadingParse.value = false
  }).finally(() => {
    isLoadingParse.value = false
    url.value = null
  })
}

</script>