import Navbar from "./components/Navbar.vue"
import Card from "./components/Card.vue"

const app = new Vue ({
	el:"#app",
	components:{
		Navbar, Card
	},
	data:{
		newCard:'',
		prezdivky:[
		'']
	},

})