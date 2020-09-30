<template>
	<nav>
	  <a href="">About</a>
	  <a href="">Home</a>
	  <img src="https://www.oc-silesia.cz/obj/files//28/sys_media_9204.svg" alt="png">
	  
	  <a href="">Contact</a>
	  <a> Košík {{ count }}</a>
	</nav>
</template>

<script>
	

	export default{

	}

</script>

<style scoped>
	body{
		padding: 0;
	}
	
	nav{	
		
		align-items: center;
		justify-content: center;
	}

	a{
		width: 20%;
		position: relative;
		text-decoration: none;
		list-style-type: none;
		color: rgb(67, 67, 67);
		font-size: 25px;
		padding: 30px;
		margin: 0 20px;


	}
	

	img {
		width: 20%;
		margin: 0 100px;
	}

	
</style>