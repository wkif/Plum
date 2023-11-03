<script setup lang="ts">
import { ref } from 'vue'
import { showNotify } from 'vant'

const text = '精简版的梅花易数占卜程序，简单几步实现占卜,心诚意达。'
const active = ref(0)
const A = ref()
const B = ref()
const ANSList = {
  1: '外部环境“比合”自己：此事顺心顺意，百无禁忌；',
  2: '自己“克”外部环境：自己能力足以完成达成心愿，但需要付出努力；',
  3: '外部环境“克”自己：此事难成，有阻力，多坎坷；',
  4: '外部环境“生”自己：此事可谋，有人帮扶、促进；',
  5: '自己“生”外部环境：此事耗精力，需付出时间精力钱财方可成。'
}
const ANS = ref('')

function next() {
  active.value = 1
}
function submit() {
  if (A.value && B.value) {
    let self = 0
    let env = 0
    const top = A.value % 8
    const bottom = B.value % 8
    const C = Number(A.value) + Number(B.value)
    const D = C % 6
    if (D === 1 || D === 2 || D === 3) {
      self = top
      env = bottom
    }
    if (D === 0 || D === 4 || D === 5) {
      self = bottom
      env = top
    }
    const ANSArr = [
      [1, 4, 4, 5, 2, 2, 3, 1],
      [5, 1, 1, 2, 3, 3, 4, 5],
      [5, 1, 1, 2, 3, 3, 4, 5],
      [4, 3, 3, 1, 5, 5, 2, 4],
      [3, 2, 2, 4, 1, 1, 5, 3],
      [3, 2, 2, 4, 1, 1, 5, 3],
      [2, 5, 5, 3, 4, 4, 1, 2],
      [1, 4, 4, 5, 2, 2, 3, 1]
    ]
    ANS.value = ANSList[ANSArr[env][self]]
    active.value = 2
  } else {
    showNotify({ type: 'warning', message: '数字嘞数字嘞！' })
    active.value = 0
  }
}
function reset() {
  A.value = 0
  B.value = 0
  ANS.value = ''
  active.value = 0
}
</script>

<template>
  <div p-l-20px p-r-20px>
    <div m-t-20px text-30px>🤨这是啥？</div>
    <van-text-ellipsis
      p-30px
      text-30px
      rows="3"
      :content="text"
      expand-text="展开"
      collapse-text="收起"
    />
    <van-divider />
    <van-steps :active="active">
      <van-step>💖心念归一</van-step>
      <van-step>🔢报数起卦</van-step>
      <van-step>💭结论</van-step>
    </van-steps>
    <div>
      <div v-show="active === 0" class="step-0">
        <div class="desc" text-center p-30px>🗯️想着你要算的事情</div>
        <div flex items-center flex-col m-t-340px>
          <van-button type="primary" class="m-t-20px" @click="next">想好了</van-button>
        </div>
      </div>
      <div v-show="active === 1" class="step-1">
        <div class="desc" text-center p-30px>💫等待灵机一动的感觉，凭直觉报出甲、乙两个数字</div>
        <div class="input">
          <van-field v-model="A" type="number" label="数字甲" />
          <van-field v-model="B" type="number" label="数字乙" />
        </div>
        <div flex items-center flex-col m-t-340px>
          <van-button type="primary" class="m-t-20px" @click="submit">下一步</van-button>
        </div>
      </div>
      <div v-show="active === 2" class="step-2" m-t-140px p-50px bg="#07C160" rounded-20px>
        {{ ANS }}
      </div>
      <div flex items-center flex-col m-t-40px>
        <van-button icon="replay" type="default" @click="reset" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
