<script setup lang="ts">
import { ref } from "vue"

const menuList = ref([
    {
        id: 1,
        name: "验证码输入框",
        data: "2023/08/16",
        isSelected: false
    },
    {
        id: 2,
        name: "登录/注册",
        data: "2023/08/16",
        isSelected: false
    },
    {
        id: 3,
        name: "车牌键盘",
        data: "2023/08/16",
        isSelected: false
    },
    {
        id: 4,
        name: "白天/黑夜模式",
        data: "2023/08/16",
        isSelected: false
    },
    {
        id: 5,
        name: "验证码输入框5",
        data: "2023/08/16",
        isSelected: false
    }
])

const isSelect = (id: number) => {
    menuList.value.forEach(element => {
        element.isSelected = false
    });

    const item = menuList.value.find(item => item.id === id)
    if (item) item.isSelected = true
}
</script>

<template>
    <div class="list_wrap flex_row flex_around">
        <div class="list">
            <div class="listTitle ellipticalSingleText">组件列表</div>
            <ul class="listContent flex_col" v-for="(item) in menuList" :key="item.id">
                <li class="item ellipticalSingleText" :class="item.isSelected ? 'selected' : ''"
                    @click="isSelect(item.id)">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.list_wrap {
    width: 100%;
    height: 100%;

    .list {
        width: 60%;
        height: 90%;
        border: 2px solid #69a794;
        border-radius: 10px;
        backdrop-filter: blur(30px);
        padding: 0 20px;

        .listTitle {
            width: 100%;
            padding: 10px 0;
            border-bottom: 2px solid #69a794;

            font-size: 30px;
            text-align: center;
        }

        .listContent {
            .item {
                padding: 10px 0;
            }

            .item:hover {
                background-image: linear-gradient(to right, #E8C2BF, #b9dec9);
                border-radius: 5px;
            }

            .selected {
                background-image: linear-gradient(to right, #E8C2BF, #b9dec9);
                border-radius: 5px;
            }
        }
    }
}

.list_wrap::after {
    content: '';
    width: 2px;
    height: 90%;
    position: absolute;
    right: 0;
    border-radius: 10px;
    background-image: linear-gradient(to bottom, #de7897, #69a794);
}
</style>