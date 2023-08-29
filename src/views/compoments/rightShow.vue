<script setup lang="ts">
import verificationCodeInput from "@/components/verificationCodeInput/index.vue"
import element_SelectedAll from "@/components/element_SelectedAll/index.vue"
import { ref } from "vue"

const props = defineProps({
    //子组件接收父组件传递过来的值
    receiptSelectedItem: Number,
})
console.log("选中组件Id值为：", props)

/**
 * 一、验证码组件
 *  1. 从父组件传入样式、配置等基础数据
 *  2. 从子组件接收所获取到的验证码数字
 *  3. 对输入的验证码进行判断处理
 *  4. 将是否通过判断的状态值传给子组件，进行相应处理
 */
// 1. 从父组件传入样式、配置等基础数据
const options_verificationCode = ref({
    style: {
        wrap: {
            width: "50%",            // 整个容器高度
            height: "50%",           // 整个容器高度
            bgColoer: "#d0deaa",     // 整个容器的背景色
            borderRadius: "10px"     // 整个容器的圆角
        },
        title: {
            width: "160px",         // 标题宽度（设置宽度是为了方便使用text-align使文字居中）
            height: "36px",         // 标题高度
            top: "25%",             // 标题距离盒子顶端高度
            lineHeight: "36px",     // 标题行高，和标题高度相等时文字竖向居中
            textAlign: "center",    // 标题字体横向居中
            fontSize: "24px",       // 标题的字体大小
            // color: "green"       // 标题字体颜色
        },
        myInput: {
            wrapWidth: "60%",                             // 输入框总长度
            inputItemWidth: "30px",                       // 单个输入框宽长
            inputItemHeight: "30px",                      // 单个输入框高度
            inputItemBorderRadius: "5px",                 // 单个输入框圆角
            inputItemBgcolor: "#8abcd1",                  // 单个输入框背景颜色-未选中
            borderCheckedStyle: '1px solid #E8C2BF',      // input选中的边框样式
            // borderCheckedBackground: "red",            // input选中的背景色
        }
    },
    config: {
        inputNumber: 6,         // 输入框的个数
        inputLength: "1",       // 输入框输入长度
        inputType: 'tel'        // 输入字符的类型
    }
})
// 2. 从子组件接收所获取到的验证码数字
const ValFromSon = (value: string) => {
    _handlingResult(value)          // 获取验证码数字后进行后续处理
}
// 3. 对输入的验证码进行判断处理
let isRight = ref(true)
const _handlingResult = (codeStr: String) => {
    // 此处是模拟正确验证码为123456
    let rightCode = '123456'
    if (codeStr === rightCode) {
        // 4. 将是否通过判断的状态值传给子组件
        isRight.value = true
        alert("验证通过")
    } else {
        // 4. 将是否通过判断的状态值传给子组件
        isRight.value = false
        alert("验证失败")
    }
}

/**
 * 二、element下拉框全选
 *  1. 从父组件传入样式、配置等基础数据
 */

const options_element_SelectedAll = ref({
    itemData: [
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
    ],
    isDefualtAll: true
})

</script>

<template>
    <div class="show_wrap flex_row flex_center">
        <div class="show flex_row flex_center">
            <verificationCodeInput v-if="receiptSelectedItem == 1" :options_verificationCode="options_verificationCode"
                :isRight="isRight" @SonValue="ValFromSon" />
            <element_SelectedAll v-if="receiptSelectedItem == 2"
                :options_element_SelectedAll="options_element_SelectedAll" />
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