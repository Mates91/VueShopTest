<template>
	<li>
		<img :src="selectedImage">
		<article class="name">{{ name }}</article>
		<!--<article>${{ price }}</article>-->	

		<button > Cena  {{ count }} CZK</button>
		<div class="change-price">
		<button v-on:click="count++"> Plus</button>
		<button v-on:click="count--"> Minus</button>
		</div>
		
	</li>
</template>

<script>
	export default{
		props:[
			'name',
		],
		data:function(){
		return{
			count: 0,
			images:['https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png',
			'https://www.freepngimg.com/thumb/shoes/26170-4-vector-shoes-image.png']

		}
		},
		created(){
			const idx = Math.floor(Math.random() * this.images.length)
			this.selectedImage = this.images[idx]
		},
		computed:{
			image(){
				return this.images[this.selected]
			}
		}

	}

</script>

<style scoped>
	
	body{
		box-sizing: border-box;
	}
	li{
		height: 20px;
		width: 20px;	
		margin: 20px;
		text-decoration: none;
		list-style-type: none;
		padding-top: 0;
		display: inline-table;

	}
	li img {
		width: 200px;
		background: ;
	}	

	li article {
		
	}
	.name {
		color: rgb(38, 38, 38);
		font-weight: bold;
		text-align: center;
		font-size: 40px;
	}

	li button{
		color: white;
		background: rgb(67, 159, 30);
		border-radius: 8px;
		border: none;
		outline: none;
		text-align: center;
		padding: 5px;
		width: 100%;
		height: 30px;
		cursor: pointer;
		box-shadow: 0 4px 8px grey;
	}

	button:hover {
		box-shadow: none;
		background: rgb(67, 140, 0);
		transition: all 0.5s linear;
	}

	.change-price button{
		margin: 3px;
		background: black
	}
</style>