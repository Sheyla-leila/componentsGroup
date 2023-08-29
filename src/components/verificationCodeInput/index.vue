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

const props = defineProps({
    options_verificationCode: Object,
})

// 样式相关配置
const options_style = props?.options_verificationCode?.style
const options_config = props?.options_verificationCode?.config


let inputArr: number[] = []
const inputDom = ref<any>([])
const inputCode = (e: any, index: number) => {
    // 由于input是通过inputList循环渲染出来的,因此其dom在数组中的顺序和inputList中值的顺序相同
    let currInput = inputDom.value[index];      // 当前input dom
    let nextInput = inputDom.value[index + 1];  // 下一个input dom
    let preInput = inputDom.value[index - 1];   // 上一个input dom

    if (e.keyCode != 8 && e.keyCode != 112 && e.keyCode != 37 && e.keyCode != 39) {   // 若输入的值不是删除键(8是苹果和电脑的键值,112是安卓的键值,37是键盘左键,39是键盘右键)
        // 若当前所在index小于最后一个input所在index,焦点则自动跳转到下一个input dom
        if (index < options_config.inputNumber - 1) {
            nextInput.focus();
        } else {
            // 当输入最后一个数字后,该input框失去焦点
            currInput.blur();
            // 将输入的数组进行字符串拼接
            let codeStr = inputArr.map(element => {
                return element
            }).join("")

            // 执行后续逻辑操作
            _handlingResult(codeStr)
        }
    } else {
        // 若输入的值是删除键，在跳回第一个输入框前，每删除一个数字，焦点都自动跳到前一个input框
        if (index != 0) {
            preInput.focus();
        }
    }
};

const _handlingResult = (codeStr: String) => {
    // 此处是模拟正确验证码为123456
    let rightCode = '123456'
    if (codeStr === rightCode) {
        alert("验证通过")
    } else {
        alert("验证失败")
        inputArr = []
        console.log('inputArr', inputArr)
    }
}
</script>

<template>
    <!-- <div class="codeBox flex_col flex_center"> -->
    <div class="code_warp flex_col flex_center">
        <div class="secondTitle">请输入验证码</div>
        <div class="codeList flex_row flex_center">
            <div class="list_wrap flex_row flex_around" v-for="n in options_config.inputNumber " :key="n">
                <input :type="options_config.inputType" :maxlength="options_config.inputLength" class="codeItem"
                    ref="inputDom" v-model="inputArr[n - 1]" @keyup="inputCode($event, n - 1)" />
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<style scoped lang="scss">
.code_warp {
    width: v-bind("options_style.wrap.width ?? '60%'");
    height: v-bind("options_style.wrap.height ?? '60%'");
    background-color: v-bind("options_style.wrap.bgColoer ?? '#d0deaa'");
    border-radius: v-bind("options_style.wrap.borderRadius ?? '10px'");

    position: relative;

    .secondTitle {
        width: v-bind("options_style.title.width ?? '160px'");
        height: v-bind("options_style.title.height ?? '36px'");
        position: absolute;
        top: v-bind("options_style.title.top ?? '30%'");

        line-height: v-bind("options_style.title.lineHeight ?? '36px'");
        text-align: v-bind("options_style.title.textAlign ?? 'center'");
        font-size: v-bind("options_style.title.fontSize ?? '24px'");
        color: v-bind("options_style.title.color ?? '#000000'");
    }

    .codeList {
        width: v-bind("options_style.myInput.wrapWidth ?? '60%'");

        .list_wrap {
            width: 100%;
            height: 100%;
            position: relative;

            .codeItem {
                width: v-bind("options_style.myInput.inputItemWidth ?? '30px'");
                height: v-bind("options_style.myInput.inputItemHeight ?? '30px'");
                border-radius: v-bind("options_style.myInput.inputItemBorderRadius ?? '5px'");
                display: block;
                background-color: v-bind("options_style.myInput.inputItemBgcolor ?? '#8abcd1'");

                text-align: center;
            }

            //获取焦点时input输入框样式
            input:focus {
                // outline: 1px solid #E8C2BF; //边框不用border，用outline
                outline: v-bind("options_style.myInput.borderCheckedStyle ?? '1px solid #000000'"); //边框不用border，用outline
                background: v-bind("options_style.myInput.borderCheckedBackground ?? 'rgba(0,0,0,0)'");
                ; //背景色
            }
        }
    }
}
</style>
