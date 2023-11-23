<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
	image1 : {type : String},
	image2 : {type : String, required : true },
	image3 : {type : String, required : true },
	image4 : {type : String, required : true }
})
const base64Image = ref(props.image1);



</script>
<template>

	<div id="_idContainer005">

		<div id="_idContainer001" class="containerImg">
			<img :src="base64Image" alt="" class="image">
		</div>
		<div id="_idContainer002" class="containerImg">
			<img :src="image2" alt="" class="image">
		</div>
		<div id="_idContainer003" class="containerImg">
			<img :src="image3" alt="" class="image">
		</div>
		<div id="_idContainer004" class="containerImg">
			<img :src="image4" alt="" class="image">
		</div>
	</div>

</template>
<style scoped>
#_idContainer005 {
	border: solid 1px #000;
	border-radius: 20px;
	background-color: white;
	height: 256.95px;
	width:166.24px;
	position:relative;
}
.containerImg {
	height:60.39px;
	left:0px;
	position:absolute;
	top:0px;
	width:60.39px;
}
.image{
	width: 100%;
	height: 100%;
	object-fit: contain
}
#_idContainer001 {
	transform:translate(14.322px,61.417px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
}
#_idContainer005 #_idContainer001 .image {
	transform: rotate(90deg);
}
#_idContainer002 {
	transform:translate(14.322px,142.468px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
}
#_idContainer005 #_idContainer002 .image {
	transform: rotate(180deg);
}
#_idContainer003 {
	transform:translate(90.481px,61.417px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
}
#_idContainer005 #_idContainer003 .image {
	transform: rotate(270deg);
}

#_idContainer004 {
	transform:translate(90.481px,142.468px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
}

</style>