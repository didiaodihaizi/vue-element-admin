<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
    <el-table-column label="日期" width="180">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="姓名" width="180">
      <template scope="scope">

            <el-tag>{{ scope.row.name }}</el-tag>

      </template>
    </el-table-column>
    <el-table-column label="地址" >
      <template scope="scope">

            <el-tag>{{ scope.row.address }}</el-tag>

      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template scope="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>

    </el-table-column>
  </el-table>
        <div v-show="show" >

        </div>
  </div>

</template>
<script>
    // import code1Img from
    export default {
      components: {  },
      data() {
       return {

       };
     },
     methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
    };
</script>
