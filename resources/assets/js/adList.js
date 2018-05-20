
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data:{
    	adList:[
    		{
    			c1:'c1',c2:'c2',c3:'c3',c4:'c4',c5:'c5','c6':'c6',c7:'c7'
    		},
    		{
    			c1:'c1',c2:'c2',c3:'c3',c4:'c4',c5:'c5','c6':'c6',c7:'c7'
    		},
    		{
    			c1:'c1',c2:'c2',c3:'c3',c4:'c4',c5:'c5','c6':'c6',c7:'c7'
    		}
    		,{
    			c1:'c1',c2:'c2',c3:'c3',c4:'c4',c5:'c5','c6':'c6',c7:'c7'
    		},
    		{
    			c1:'c2341',c2:'c2342',c3:'c2343',c4:'c2344',c5:'c2345',c6:'c2346',c7:'c2347'
    		}
    	],
    	message:'我要吃鸡',

    },
    mounted:function(){
        console.log(this.message);
        axios.get('/ad/getAdList', 
        {
            params: {
                ID: 12345
            }
        })
        .then(function (response) {
            app.adList = response.data.list;
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods:{
        openOperModal:function(event){
            layer.open({
              type: 1,
              area: ['800px', '600px'],
              shadeClose: true, //点击遮罩关闭
              content: $('#layer1'),
              maxmin:true
            });
            $('#layer1').removeClass('hide');
        },
        openLayer2:function(event){
            layer.open({
              type: 1,
              area: ['800px', '600px'],
              shadeClose: true, //点击遮罩关闭
              content: $('#layer2'),
              maxmin:true
            });
            $('#layer2').removeClass('hide');
        }
    }
});
