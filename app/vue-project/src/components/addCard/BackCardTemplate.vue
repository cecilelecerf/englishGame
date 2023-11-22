<script setup lang="ts">
// defineProps<{
// 	props :({
// 		title ?: String
// 	})

import { ref } from 'vue';

// }>()
const props = defineProps({
	title : {type : String, required : false},
	image1 : {type : String},
	image2 : {type : String, required : true },
	image3 : {type : String, required : true },
	image4 : {type : String, required : true }
})
// console.log(props.image1)
const base64Image = ref(props.image1); // Ajoutez votre chaîne base64 ici



</script>
<template id="backCard ">
	<div id="carte">
		<div class="_idGenObjectLayout-1">
			<div id="_idContainer005">
				<div id="_idContainer000" class="Basic-Graphics-Frame _idGenObjectStyleOverride-1">
				</div>
				<div id="_idContainer001" class="Basic-Graphics-Frame _idGenObjectStyleOverride-2">
					<img :src="base64Image" alt="" class="image">
				</div>
				<div id="_idContainer002" class="Basic-Graphics-Frame _idGenObjectStyleOverride-2">
					<img :src="image2" alt="" class="image">
				</div>
				<div id="_idContainer003" class="Basic-Graphics-Frame _idGenObjectStyleOverride-2">
					<img :src="image3" alt="" class="image">
				</div>
				<div id="_idContainer004" class="Basic-Graphics-Frame _idGenObjectStyleOverride-2">
					<img :src="image4" alt="" class="image">
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>

#carte{
 width: fit-content;
 height: fit-content;
}
.image{
	width: 100%;
	height: 100%;
	object-fit: contain;
}
#_idContainer005 #_idContainer001 .image {
	transform: rotate(90deg);
}
#_idContainer005 #_idContainer002 .image {
	transform: rotate(180deg);
}
#_idContainer005 #_idContainer003 .image {
	transform: rotate(270deg);
}
body, div, dl, dt, dd, h1, h2, h3, h4, h5, h6, p, pre, code, blockquote {
	margin:0;
	padding:0;
	border-width:0;
}

div.Basic-Graphics-Frame {
	border-color:#000000;
	border-width:1px;
	border-style:solid;
}
#_idContainer000 {
	-ms-transform:translate(0.000px,0.000px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	-ms-transform-origin:0% 0%;
	-webkit-transform:translate(0.000px,0.000px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	-webkit-transform-origin:0% 0%;
	height:256.95px;
	left:0px;
	/* position:absolute; */
	top:0px;
	transform:translate(0.000px,0.000px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	transform:translate(0.000px,0.000px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	transform-origin:0% 0%;
	transform-origin:0% 0%;
	width:166.24px;
	z-index:0;
}
#_idContainer001 {
	-ms-transform:translate(14.322px,61.417px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	-ms-transform-origin:0% 0%;
	-webkit-transform:translate(14.322px,61.417px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	-webkit-transform-origin:0% 0%;
	height:60.39px;
	left:0px;
	position:absolute;
	top:0px;
	transform:translate(14.322px,61.417px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	transform:translate(14.322px,61.417px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	transform-origin:0% 0%;
	transform-origin:0% 0%;
	width:60.39px;
	z-index:2;
}
#_idContainer002 {
	-ms-transform:translate(14.322px,142.468px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	-ms-transform-origin:0% 0%;
	-webkit-transform:translate(14.322px,142.468px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	-webkit-transform-origin:0% 0%;
	height:60.39px;
	left:0px;
	position:absolute;
	top:0px;
	transform:translate(14.322px,142.468px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	transform:translate(14.322px,142.468px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	transform-origin:0% 0%;
	transform-origin:0% 0%;
	width:60.39px;
	z-index:1;
}
#_idContainer003 {
	-ms-transform:translate(90.481px,61.417px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	-ms-transform-origin:0% 0%;
	-webkit-transform:translate(90.481px,61.417px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	-webkit-transform-origin:0% 0%;
	height:60.39px;
	left:0px;
	position:absolute;
	top:0px;
	transform:translate(90.481px,61.417px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	transform:translate(90.481px,61.417px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	transform-origin:0% 0%;
	transform-origin:0% 0%;
	width:60.39px;
	z-index:3;
}
#_idContainer004 {
	-ms-transform:translate(90.481px,142.468px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	-ms-transform-origin:0% 0%;
	-webkit-transform:translate(90.481px,142.468px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	-webkit-transform-origin:0% 0%;
	height:60.39px;
	left:0px;
	position:absolute;
	top:0px;
	transform:translate(90.481px,142.468px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	transform:translate(90.481px,142.468px) rotate(0.000deg) skew(0.000deg) scale(1.000,1.000);
	transform-origin:0% 0%;
	transform-origin:0% 0%;
	width:60.39px;
	z-index:4;
}
#_idContainer005 {
	display:inline-block;
	height:fit-content;
	position:relative;
	width:fit-content;
}
div._idGenObjectStyleOverride-1 {
	background-color:#ffffff;
	border-bottom-left-radius:20px;
	border-bottom-right-radius:20px;
	border-top-left-radius:20px;
	border-top-right-radius:20px;
}
div._idGenObjectStyleOverride-2 {
	background-color:#ffffff;
	border-color:white;
}
div._idGenObjectLayout-1 {
	text-align:center;
	width: fit-content;
	height: fit-content;
}

</style>