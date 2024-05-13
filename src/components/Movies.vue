<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Serial" >
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.serial }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Url" >
      <template #default="scope">
        <div style="display: flex; align-items: center" >
          <el-link @click="openPage(scope.row.url)">{{scope.row.url}}</el-link>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Title" >
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
    <el-table-column label="Actress" >
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.actress }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="ReleaseDate" >
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.releaseDate }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Collected" >
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.collected }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Playlist" >
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.playlist }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Operations" >
      <template #default="scope">
        <el-button
            size="small"
            type="success"
            @click="handleEdit(scope.$index, scope.row)">
          Download
        </el-button>
        <el-button
            size="small"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)"
        >
          Edit
        </el-button>
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>

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
  tag: string[]
}

const handleEdit = (index: number, row: Movie) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: Movie) => {
  console.log(index, row)
}
const openPage = (url: string) => {
  window.open(url, '_blank');
}



const tableData: Movie[] = [
  {
    serial: 'OKK-070',
    url: 'https://missav.com/okk-070',
    title: 'Inception',
    actress: 'Ellen Page',
    releaseDate: '2010-07-16',
    collected: true,
    playlist: 'mi',
    type: 'Science Fiction',
    description: 'A thief who enters the dreams of others to steal secrets from their subconscious.',
    tag: ['Mind-bending', 'Action', 'Thriller']
  },
  {
    serial: 'OKK-070',
    url: 'https://missav.com/okk-070',
    title: 'The Shawshank Redemption',
    actress: 'Morgan Freeman',
    releaseDate: '1994-09-23',
    collected: true,
    playlist: 'mi',
    type: 'Drama',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    tag: ['Redemption', 'Prison', 'Hope']
  },
  {
    serial: 'OKK-070',
    url: 'https://missav.com/okk-070',
    title: 'The Dark Knight',
    actress: 'Heath Ledger',
    releaseDate: '2008-07-18',
    collected: true,
    playlist: 'mi',
    type: 'Action',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    tag: ['Batman', 'Crime', 'Thriller']
  },
  {
    serial: 'OKK-070',
    url: 'https://missav.com/okk-070',
    title: 'Forrest Gump',
    actress: 'Tom Hanks',
    releaseDate: '1994-07-06',
    collected: true,
    playlist: 'mi',
    type: 'Drama',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    tag: ['Life', 'Love', 'Hope']
  },
];

</script>
