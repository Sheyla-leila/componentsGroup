<!-- 验证码输入框页 -->
<script setup lang="ts">
/**
 * 实现思想:
 *  声明一个用于记录input值的数组
 *  通过原生html代码获取input dom
 *  借用数组的index来区分所获取dom数组中dom的顺序,以此实现焦点的跳转
 *  由于全程都是用过直接跳转焦点，没有失去焦点的情况，因此不会出现多次调起并关闭键盘的情况
 */
import { ref } from "vue";

const inputList = ref([{ val: "" }, { val: "" }, { val: "" }, { val: "" }, { val: "" }, { val: "" }])       // 用于记录input值
const domItems = ref<any>([]);          // 获取input dom

const inputCode = (e: any, index: number) => {
    // 由于input是通过inputList循环渲染出来的,因此其dom在数组中的顺序和inputList中值的顺序相同
    let currInput = domItems.value[index];      // 当前input dom
    let nextInput = domItems.value[index + 1];  // 下一个input dom
    let preInput = domItems.value[index - 1];   // 上一个input dom
    if (e.keyCode != 8 && e.keyCode != 112) {   // 若输入的值不是删除键(8是苹果和电脑的键值,112是安卓的键值)
        // 若当前所在index小于最后一个input所在index,焦点则自动跳转到下一个input dom
        if (index < 5) {
            nextInput.focus();
        } else {
            // 当输入最后一个数字后,该input框失去焦点
            currInput.blur();
            // 将输入的数组进行字符串拼接
            let codeStr = inputList.value.map(element => {
                return element.val
            }).join("")

            // 执行后续逻辑操作
            // 此处是模拟正确验证码为123456
            let rightCode = '123456'
            if (codeStr === rightCode) {
                alert("验证通过")
            } else {
                alert("验证失败")
                inputList.value.forEach(element => {
                    element.val = ""
                });
            }
        }
    } else {
        // 若输入的值是删除键，在跳回第一个输入框前，每删除一个数字，焦点都自动跳到前一个input框
        if (index != 0) {
            preInput.focus();
        }
    }
};
</script>

<template>
    <!-- <div class="codeBox flex_col flex_center"> -->
    <div class="code_warp flex_col flex_center">
        <div class="secondTitle">请输入验证码</div>
        <div class="codeList flex_row flex_center">
            <div class="list_wrap flex_row flex_around" v-for="(item, index) in inputList " :key="index">
                <input type="tel" maxlength="1" class="codeItem" ref="domItems" v-model="item.val"
                    @keyup="inputCode($event, index)" />
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<style scoped lang="scss">
.code_warp {
    width: 60%;
    height: 60%;
    background-color: #d0deaa;
    border-radius: 10px;

    position: relative;

    .secondTitle {
        width: 160px;
        height: 36px;
        position: absolute;
        top: 20%;

        line-height: 36px;
        text-align: center;
        font-size: 24px;
    }

    .codeList {
        width: 60%;

        .list_wrap {
            width: 100%;
            height: 100%;
            position: relative;

            .codeItem {
                width: 30px;
                height: 30px;
                border-radius: 5px;
                display: block;
                background-color: #8abcd1;

                text-align: center;
            }
        }
    }
}
</style>
