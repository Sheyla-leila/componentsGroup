<script setup lang="ts">
import leftList from "./compoments/leftList.vue"
import rightShow from "./compoments/rightShow.vue"
import { ref } from "vue"

let receiptSelectedItem = ref(0)
const sendSelectedItem = (sendId: number) => {
    // sendId是接收到的子组件值的形参
    receiptSelectedItem.value = sendId
}
</script>

<template>
    <div class="menu_wrap  flex_row flex_between">
        <div class="itemList">
            <leftList class="pseudoClass" @on-click="sendSelectedItem" />
            <!-- <leftList class="pseudoClass" /> -->
        </div>
        <div class="itemShow">
            <rightShow :receiptSelectedItem="receiptSelectedItem" />
            <!-- <rightShow /> -->
        </div>

    </div>
</template>

<style scoped>
.menu_wrap {
    background-image: linear-gradient(to right, #E8C2BF 0%, #b9dec9 70%);

    .itemList {
        width: 30%;
        height: 100vh;
        position: relative;

        /* .pseudoClass::after {
            content: '';
            width: 2px;
            height: 100px;
            position: absolute;
            right: 0;
            background-color: #fff;
        } */
    }


    .itemShow {
        width: 70%;
        height: 100vh;
    }
}
</style>