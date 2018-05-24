<template>
    <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->

        <div class="row">
            <div class="col-xs-12">

                <p><select id="drop-state">
                        <option value="1">已发布</option>
                        <option value="2">已删除</option>
                    </select>
                    <button class="btn btn-info btn-sm tooltip-info" id="btn-query">查询</button>
                </p>


                <p>
                    <button class="btn btn-white btn-info btn-bold" id="btn-batch-start">
                        <i class="ace-icon fa fa-floppy-o bigger-120 blue"></i>
                        批量发布
                    </button>

                    <button class="btn btn-white btn-warning btn-bold" id="btn-batch-stop">
                        <i class="ace-icon fa fa-trash-o bigger-120 orange"></i>
                        批量删除
                    </button>

                </p>


                <!-- div.table-responsive -->

                <!-- div.dataTables_borderWrap -->
                <div>
                    <table id="dynamic-table" class="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="center">
                                    <label class="pos-rel">
                                        <input type="checkbox" class="ace"/>
                                        <span class="lbl"></span>
                                    </label>
                                </th>
                                <th>编号</th>
                                <th>标题</th>
                                <th>排序</th>
                                <th>图片</th>
                                <th>

                                    添加时间
                                </th>
                                <th>

                                    状态
                                </th>


                                <th>操作</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(item,index) in adList">
                                <td class="center">
                                    <label class="pos-rel">
                                        <input type="checkbox" class="ace"/>
                                        <span class="lbl"></span>
                                    </label>
                                </td>
                                <td>{{item.c1}}</td>
                                <td>{{item.c2}}</td>
                                <td>{{item.c3}}</td>
                                <td>{{item.c4}}</td>
                                <td>{{item.c5}}</td>
                                <td>{{item.c6}}</td>
                                <td>
                                    <router-link to="/adDetail">查看</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="pagingBar" v-if="pageData && pageData.totalPages>0">
                        <span class="disabled">共<em>{{pageData.totalElements}}</em>条</span> 
                        <span v-if="pageData.first==true" class="disabled">首页</span> 
                        <a href="javascript:void(0)" v-if="pageData.first==false" v-click="pageQuery(1)">首页</a> 
                        <span v-if="pageData.first==true" class="disabled">上一页</span> 
                        <a href="javascript:void(0)" v-if="pageData.first==false" v-click="pageQuery(pageData.previousIndex)" class="pagiv-prev">上一页</a>
                        <em v-for="link in pageData.linkNumbers"> 
                            <a v-if="link != pageData.pageIndex" href="javascript:void(0)" v-click="pageQuery(link)" class="pagiv-number">{{link}}</a> 
                            <span v-if="link == pageData.pageIndex" class="cur">{{link}}</span>
                        </em> 
                        <span v-if="pageData.last==true" class="disabled">下一页</span> 
                        <a href="javascript:void(0)" v-if="pageData.last==false" v-click="pageQuery(pageData.nextIndex)">下一页</a> 
                        <span v-if="pageData.last==true" class="disabled">尾页</span> 
                        <a href="javascript:void(0)" v-if="pageData.last==false" v-click="pageQuery(pageData.totalPages)">尾页</a> 
                        <span class="disable">{{pageData.pageIndex}} / {{pageData.totalPages}}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- PAGE CONTENT ENDS -->
    </div><!-- /.col -->
</template>

<script>
    export default {
        data(){
            return {
                adList:[],
                pageData:{},
                message:'大吉大利',

            }
        },
        mounted(){
            var that = this;
            pageQuery(1);
        },
        methods:{
            pageQuery:function(idx){
                var that=this;
                axios.get('/ad/getAdList', 
                {
                    params: {
                        ID: 12345
                    }
                })
                .then(function (response) {
                    that.pageData = response.data.data;
                    that.adList = pageData.list;
                    adminHelper.setPagination(that.pageData);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
    }
</script>
