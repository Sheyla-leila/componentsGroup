<script setup lang="ts">
import verificationCodeInput from "@/components/verificationCodeInput/index.vue"
</script>

<template>
    <div class="show_wrap flex_row flex_center">
        <div class="show flex_row flex_center">
            <verificationCodeInput />
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