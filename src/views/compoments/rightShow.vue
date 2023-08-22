<script setup lang="ts">
import verificationCodeInput from "@/components/verificationCodeInput/index.vue"
import element_SelectedAll from "@/components/element_SelectedAll/index.vue"

const props = defineProps({
    //子组件接收父组件传递过来的值
    receiptSelectedItem: Number,
})
console.log("选中组件Id值为：", props)
</script>

<template>
    <div class="show_wrap flex_row flex_center">
        <div class="show flex_row flex_center">
            <verificationCodeInput v-if="receiptSelectedItem == 1" />
            <element_SelectedAll v-if="receiptSelectedItem == 2" />
        </div>
    </div>
</template>

<style scoped>
.show_wrap {
    width: 100%;
    height: 100%;

    .show {
        width: 80%;
        height: 90%;
        border: 2px solid #de7897;
        border-radius: 10px;
    }
}
</style>