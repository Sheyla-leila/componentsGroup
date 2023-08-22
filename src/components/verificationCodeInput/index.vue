<!-- 验证码输入框页 -->
<script setup lang="ts">
import { ref } from "vue";

const inputList = ref([{ val: "" }, { val: "" }, { val: "" }, { val: "" }, { val: "" }, { val: "" }])
const domItems = ref<any>([]);

const inputCode = (e: any, index: number) => {
    let currInput = domItems.value[index];
    let nextInput = domItems.value[index + 1];
    let preInput = domItems.value[index - 1];
    if (e.keyCode != 8 && e.keyCode != 112) {
        if (index < 5) {
            nextInput.focus();
        } else {
            currInput.blur();
            let codeStr = inputList.value.map(element => {
                return element.val
            }).join("")
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
