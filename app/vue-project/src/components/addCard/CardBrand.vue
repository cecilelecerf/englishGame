<script setup lang="ts">
const props = defineProps({
	title : {type : String, required : true},
})
</script>
<template>
	<div >
        <p>
            {{ title }}
        </p>
	</div>
</template>
<style scoped>


div{
    border: 1px solid black;
    border-radius: 20px;
    height: 256.95px;
    width: 166.24px;
    background-color: white;
    position: relative;
}
p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>