<script setup lang="ts">
import {onMounted, ref} from "vue";
import AxiosHttp from "../http/AxiosHttp.ts";


let tableData = ref<DownloadStatus[]>([]);

interface DownloadStatus {
  serial: string,
  url: string,
  status: string,
  startTime: string,
  endTime: string
}

onMounted(() => {
  initTableData()
  setInterval(initTableData, 1000 * 5);
})

const initTableData = () => {
  AxiosHttp.get('/api/downloadstatus').then(res => {
    tableData.value = res.data;
  }).catch((error) => {
    console.log(error)
  })
}
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Status">
      <template #default="scope">
        <div>
          <div v-if="scope.row.status === 'downloading'">
            <div class="loading-container">
              <div class="loading-circle"></div>
            </div>
            downloading...
          </div>
          <div v-else-if="scope.row.status === 'complete'">✅ complete</div>
          <div v-else-if="scope.row.status === 'error'">❌ error</div>
          <div v-else-if="scope.row.status === 'waiting'">👀 waiting</div>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Serial">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.serial }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Start Time">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.startTime }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="End Time">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.endTime }}</span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<style>
.loading-container {
  width: 10px;
  height: 10px;
  position: relative;
}

.loading-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
}

.loading-circle::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid #5BC2E7;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  animation: spin 1s linear infinite;
}

.loading-circle::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid transparent;
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>