<template>
    <div id="index">
<!--        轮播图-->
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                    <img class="banner" :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
<!--        滑动分类-->
        <cube-slide ref="slidelists" :data="lists" @change="changePage">
            <cube-slide-item v-for="(item, index) in lists" :key="index" >
                <ul class="listul">
                    <li class="listli" v-for="(item,index1) in lists" :key="index1">
                        <a :href="item.url">
                            <img :src="item.image">
                            <p>{{item.label}}</p>
                        </a>
                    </li>
                </ul>
            </cube-slide-item>
        </cube-slide>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items:[],//轮播图数组
                lists:[]//滚动分类数组
            }
        },
        methods: {
            changePage(current) {
                // console.log('当前轮播图序号为:' + current)
            },
            clickHandler(item, index) {
                console.log(item, index)
            }
        },
       async created() {
            try{
                //注册轮播图数量
                const items = await this.$http.get('/api/banner')
                this.items=items.data
                //滚动分类数据
                const lists = await this.$http.get('/api/rollimglist')
                this.lists=lists.data

            }catch(err){
                console.log(err)
            }
        }
    }
</script>

<style lang="scss" scoped>
.banner{
    display: block;
    width: 100%;
    height: 175px;
}
    .listul{
        display: flex;
        flex-wrap: wrap;
        .listli{
            width: 20%;
            justify-content: center;
            img{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                padding: 5px 0;
            }
            p{
                font-size:14px ;
                padding-bottom: 10px;
            }
        }
    }


</style>