var app=new Vue({
	el:"#app",
	data:{
		message:"",
		musiclist:[],
		musicurl:""
	},
	methods:{
		
		search:function(){
			var that = this;
			axios.get("https://autumnfish.cn/search?keywords="+this.message).then(function(response){
				that.musiclist=response.data.result.songs;
			},function(err){
				
			})
		},
		play:function(musicid){
			var that = this;
			axios.get("https://autumnfish.cn/song/url?id="+ musicid).then(function(response){
				//alert(response.data.data[0].url);
				that.musicurl=response.data.data[0].url;
			},function(err){
				
			})
		}
	}
})