<template>
	<div class="row" v-if="pageData && pageData.totalPage>0">
        <div class="col-xs-4">
            <div class="dataTables_info">
                <span class="disabled">共<em>{{pageData.total}}</em>条</span> 
            </div>
        </div>
        <div class="col-xs-8">
            <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">
                <ul class="pagination">
                    <li v-if="pageData.first==true" class="paginate_button previous disabled">
                        <span  class="disabled">首页</span> 
                    </li>
                    <li class="paginate_button" v-if="pageData.first==false">
                        <a href="javascript:void(0)"  v-on:click="pageQuery(1)">首页</a> 
                    </li>
                    <li v-if="pageData.first==true" class="paginate_button disabled" >
                        <span class="disabled">上一页</span> 
                    </li>
                    <li class="paginate_button" v-if="pageData.first==false">
                        <a href="javascript:void(0)"  v-on:click="pageQuery(pageData.preIndex)" class="pagiv-prev">上一页</a> 
                    </li>
                    <li v-for="link in pageData.linkNumbers" v-bind:class="{paginate_button:true,'active':link == pageData.pageIndex}"> 
                        <a v-if="link != pageData.pageIndex" href="javascript:void(0)" v-on:click="pageQuery(link)" class="pagiv-number">{{link}}</a> 
                        <span v-if="link == pageData.pageIndex" class="cur">{{link}}</span>
                    </li> 
                    <li v-if="pageData.last==true" class="paginate_button next disabled">
                        <span>下一页</span> 
                    </li>
                    <li class="paginate_button next" v-if="pageData.last==false">
                        <a href="javascript:void(0)" v-on:click="pageQuery(pageData.nextIndex)">下一页</a>
                    </li>
                    <li v-if="pageData.last==true" class="paginate_button disabled">
                        <span  class="disabled">尾页</span> 
                    </li>
                    <li v-if="pageData.last==false" class="paginate_button ">
                        <a href="javascript:void(0)"  v-on:click="pageQuery(pageData.totalPage)">尾页</a> 
                    </li>
                    <li>
                        <span class="disable">{{pageData.pageIndex}} / {{pageData.totalPage}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
	export default{
		props:{
			pageData:{
				type:Object,
				default:{},
				require:true
			}
		},
		methods:{
			pageQuery:function(idx){
				this.$emit('pageQuery',idx);
			}
		},
		computed:{

		}
	}
</script>