
<template>
<div align="center" style='font-family:"微软雅黑"'>
    <img src="http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/404.png" border="0" height="" style="margin:10vh 0 0 0"/>
    <br>
    找不到这个页面啊！是不是打错啦!<br><br>
    <el-button @click="handleBack">返回引导页</el-button>
    <br><br> &copy; Ranger_C-137
</div>
</template>

<script>
export default{
    methods:{
        handleBack() {
            this.$router.push("/")
        }
    }
}
</script>