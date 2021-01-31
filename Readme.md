# Vue3는 뭐가 달라진걸까?

## Vue 생성자 함수 대신 createApp() 함수 사용

---

기존보다 명시적으로 변함

```js
// 기존
new Vue({
  render: (h) => h(App),
}).$mount("#app");

// 현재
createApp(App).mount("#app");
```

<br/>
<br/>

## Template 태그의 Fragments 역할

---

이제 억지로 Root Element를 만들어서 감쌀 필요가 없어졌다.

```js
// 기존
<template>
  <div id="root">
    <h1>총 합계 금액 : {{ totalPrice }}</h1>
    <h2>할인 금액 : {{ discountPrice }}</h2>
  </div>
</template>


// 현재
<template>
  <h1>총 합계 금액 : {{ totalPrice }}</h1>
  <h2>할인 금액 : {{ discountPrice }}</h2>
</template>
```

<br/>
<br/>

## Reactive API

---

기존 vue 2.x 버전에서는 data() 옵션에 return을 지정하거나 Vue.set()을 활용하였으나,<br/>
vue3 버전에서는 ref(), reactive() 를 사용한다.<br/>

reactive는 객체를 받아야하며,<br/>
reactive를 통해 생성된 객체는 모두 깊은 비교를 통해 수행되어져서,<br/>
객체가 중첩된 상황에서도 반응형 데이터를 쉽게 조작하고 처리할 수 있다.<br/>

2.x 버전에서는 ref가 뷰 템플릿의 DOM 또는 컴포넌트를 가리키는 속성이였지만,<br/>
3 버전에서는 ref가 reactive reference를 의미한다.<br/>

reactive 안에 ref 값을 사용하면 .value로 접근할 필요가 없다.<br/>

```js
// 기존
var vm = new Vue({
  data: { a: 1 },
  methods: {
    plus: () => {
      this.a++;
    },
  },
});

// 현재
import { ref, watch } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}

console.log(count.value); // 0

count.value++;
console.log(count.value); // 1

// reactive
const state = reactive({
  count: 0,
  double: computed(() => state.count * 2),
});

// no need to use `state.double.value`
console.log(state.double);

// https://joshua1988.github.io/vue-camp/vue3.html#ref 참고
```

기효님께서는 reactive는 기존 뷰 문법의 data 속성 느낌이고,<br/>
ref는 좀 더 리액티브 속성을 개별적으로 선언하는 느낌이라고 하신다.<br/>

하지만 reactive는 Template에서 접근할 때 event.으로 접근해야 하므로<br/>
도낀개낀 같아 보인다.<br/>

```js
<template>
    <!-- reactive -->
    <div>count: {{ event.count }}</div>
    <div>doubled: {{ event.doubled }}</div>
</template>

function setup() {
  const event = reactive({
    count: 3,
    doubled: computed(() => state.count * 2),
  });

  // 정상 문법
  return { event };
}

// https://joshua1988.github.io/vue-camp/vue3.html#ref 참고
```

하지만 구조분해할당(desructuring)을 이용한다면,<br/>
좀 더 편해질 수 있다.<br/>

```js
<template>
    <!-- reactive -->
    <div>count: {{ count }}</div>
    <div>doubled: {{ doubled }}</div>
</template>

import { toRefs } from 'vue';

function setup() {
  const event = reactive({
    count: 3,
    doubled: computed(() => state.count * 2),
  });

  // 구조 분해 할당
  // 템플릿의 객체 분해를 위한 toRef를 사용하지 않으면 템플릿에서 접근이 불가하다.
  // toRefs를 안쓰면 반응이 느슨해진다.
  return { ...toRefs(event) };
}

// https://joshua1988.github.io/vue-camp/vue3.html#ref 참고
```

<br/>
<br/>

## Composition API

---

컴포넌트 로직을 유연하게 구성할 수 있는 API 모음이다.<br/>
React의 Custom Hooks와 같은 느낌이다.<br/>

써봐야 알테지만, hooks처럼 별도로 분리하여 운영한다면,<br/>
생각보다 많은 컴포넌트의 의존성 문제를 해결할 수 있을 것 같다.<br/>

써본 결과 React Custom Hooks와 동일하게<br/>
Composition API로 만들어서 hooks를 만든 부분도 별도의 상태를 유지한다.<br/>

단, 주입받은 상태를 Props로 내리는 경우, 원하는 결과를 받을 수 없다.<br/>
값이 갱신되지 않음<br/>

<br/>
<br/>

## LifeCycle

---

```
(기존) => (현재)

beforeCreate -> setup

created -> setup

beforeMount -> onBeforeMount

mounted -> onMounted

beforeUpdate -> onBeforeUpdate

updated -> onUpdated

beforeDestroy -> onBeforeUnmount

destroyed -> onUnmounted

errorCaptured -> onErrorCaptured
```

컴포넌트당 하나의 생명 주기 훅을 사용했지만,<br/>
컴포지션 API를 사용할 경우 아래와 같이 여러개로 나누어 사용할 수 있다.<br/>

```js
const something1 = () => {
  onMounted(() => {
    // do action
  });
};

const something2 = () => {
  onMounted(() => {
    // do action
  });
};

const something3 = () => {
  onMounted(() => {
    // do action
  });
};

export default {
  setup() {
    something1();
    something2();
    something3();
  },
};

// https://geundung.dev/102 참고
```
