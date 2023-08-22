<!-- el-select 手动/默认全选页 -->
<script setup lang="ts">
import { ref } from 'vue'

let checked = ref(false)                                // 用于记录全选与否
let selectedArray = ref<String[] | null>(null)          // 用于存放选中的数组

// options选项内容
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
    selectedArray.value = valueArr                      // 注意在对ref对象赋值时，不能省略.value，否则会报错
    if (selectedArray.value.length === options.value.length) {
        // 当selectedArray的长度等于整个选项数组长度，则代表为全选，此时将全选复选框的状态改为true
        checked.value = true
    } else {
        checked.value = false
    }
}

/**
 * 实现全选控制
 */
function selectAll() {
    // selectedArray数组用于存放选中的数组
    selectedArray.value = []
    // 若全选复选框状态为true，将整个选项数组的value都压入selectedArray数组
    if (checked.value) {
        options.value.map((item) => {
            if (selectedArray.value) selectedArray.value.push(item.value)
        })
    } else {
        selectedArray.value = []
    }
}

/**
 * 打开网页默认为全选
 */
const defualtSelectedAll = () => {
    // 进入页面，checked状态为修改为true，默认为全选（这里也可以在声明checked时直接设为true），调用实现全选控制的函数
    checked.value = true
    selectAll()
}
defualtSelectedAll()
</script>
 
<template>
    <div class="wrap flex_row">
        <div class="show flex_col">
            <div class="title">所选中的值为：</div>
            <div class="itemSelected">{{ selectedArray }}</div>
        </div>
        <div class="select">
            <el-select clearable multiple collapse-tags v-model='selectedArray' @change='changeSelect' placeholder='请选择日期'>
                <el-checkbox class="myCheckBox" v-model="checked" @change='selectAll'>全选</el-checkbox>
                <el-option v-for='(item) in options' :key='item.value' :label='item.label' :value='item.value'></el-option>
            </el-select>
        </div>
    </div>
</template>

<style scoped lang="less">
.wrap {
    width: 100%;
    height: 50%;

    .show {
        width: 50%;
        padding: 0 20px;
    }

    .select {
        width: 50%;
        height: 100%;
        padding-left: 10%;
    }
}

// 将复选框向右靠齐
.el-checkbox {
    display: flex;
    justify-content: end;
    padding-right: 10px;
}
</style>