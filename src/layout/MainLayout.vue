<template>
    <div class="container">
        <!-- Sidebar Section -->
        <SideNav></SideNav>
    </div>
</template>

<script setup lang="ts">
import SideNav from './components/SideNav.vue'
</script>

<style lang="scss" scoped>
/* Container styles */
.container {
    display: grid;
    /* 该元素的行为类似块级元素并且根据网格模型布局它的内容。 */
    /* 网格布局教程：https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html */
    width: 96%;
    margin: 0 auto;
    gap: 1.8rem;
    /* CSS gap 属性是用来设置网格行与列之间的间隙（gutters），该属性是 row-gap 和 column-gap 的简写形式。 */
    grid-template-columns: 12rem auto 23rem;
    /* 定义每一列的列宽 */
}
</style>
