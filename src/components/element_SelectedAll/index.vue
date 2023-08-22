<script setup lang="ts">
import { ref } from 'vue'

let checked = ref(false)
let selectedArray = ref<String[] | null>(null)
// let selectedArray :String[]
const options = ref([
    {
        label: "周一", value: 'monday'
    },
    {
        label: "周二", value: 'tuesday'
    },
    {
        label: "周三", value: 'wednesday'
    },
    {
        label: "周四", value: 'thursday'
    },
    {
        label: "周五", value: 'friday'
    },
    {
        label: "周六", value: 'saturday'
    },
    {
        label: "周日", value: 'sunday'
    }
])

/**
 * 判断全选与否
 */
const changeSelect = (valueArr: string[]) => {
    console.log('val', valueArr)
    selectedArray.value = valueArr
    console.log('判断', selectedArray.value === valueArr)
    if (valueArr.length === options.value.length) {
        // 当valueArr的长度等于整个选项数组长度，则代表为全选，此时将全选复选框的状态改为true
        checked.value = true
    } else {
        checked.value = false
    }
}



/**
 * 实现全选控制
 */
// const selectAll = () => {
//     // selectedArray数组用于存放选中的数组
//     selectedArray.value = []
//     // 若全选复选框状态为true，将整个选项数组的value都压入selectedArray数组
//     if (checked.value) {
//         console.log('checked', checked)
//         options.value.map((item) => {
//             if (selectedArray.value) selectedArray.value.push(item.value)
//         })
//     } else {
//         selectedArray.value = []
//     }
// }
const selectAll = () => {
    // selectedArray数组用于存放选中的数组
    selectedArray.value = []
    // 若全选复选框状态为true，将整个选项数组的value都压入selectedArray数组
    if (checked.value) {
        console.log('checked', checked)
        options.value.map((item) => {
            if (selectedArray.value) selectedArray.value.push(item.value)
        })
    } else {
        selectedArray.value = []
    }
}
</script>
 
<template>
    <!-- <div class="select"> -->
    <el-select clearable multiple collapse-tags v-model='selectedArray' @change='changeSelect' placeholder='请选择'>
        <el-checkbox v-model="checked" @change='selectAll'>全选</el-checkbox>
        <el-option v-for='(item) in options' :key='item.value' :label='item.label' :value='item.value'></el-option>
    </el-select>
    <!-- </div> -->
    <div class="show">所选中的值为： {{ selectedArray }}</div>
</template>

<style>
/* .el-checkbox {
    text-align: right;
    width: 100%;
    padding-right: 10px;
} */
</style>