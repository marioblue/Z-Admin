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
                                    <a href="javascript:;" v-on:click="openOperModal">操作</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="pagingBar" v-if="adPage && adPage.totalPage>0">
                        <span class="disabled">共<em>{{adPage.total}}</em>条</span>
                        <span v-if="adPage.first==true" class="disabled">首页</span>
                        <a href="javascript:void(0)" v-if="adPage.first==false" v-click="PageQuery(1)">首页</a>
                        <span v-if="adPage.first==true" class="disabled">上一页</span>
                        <a href="javascript:void(0)" v-if="adPage.first==false" v-click="PageQuery(adPage.previousIndex)" class="pagiv-prev">上一页</a>
                        <em v-for="link in adPage.betweenInd">
                            <a v-if="link != adPage.pageIndex" href="javascript:void(0)" v-click="PageQuery(link)" class="pagiv-number">{{link}}</a>
                            <span v-if="link == adPage.pageIndex" class="cur v-binding v-scope">{{link}}</span>
                        </em>
                        <span v-if="adPage.last==true" class="disabled">下一页</span>
                        <a href="javascript:void(0)" v-if="adPage.last==false" v-click="PageQuery(adPage.nextIndex)">下一页</a>
                        <span v-if="adPage.last==true" class="disabled">尾页</span>
                        <a href="javascript:void(0)" v-if="adPage.last==false" v-click="PageQuery(adPage.totalPage)">尾页</a>
                        <span class="disable">{{adPage.pageIndex}} / {{adPage.totalPage}}</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-xs-12" id="layer1" style="display: none;">
                <div class="row">
                    <div class="col-xs-12">
                        
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
                                                    <a href="javascript:;" v-on:click="openLayer2">操作</a>
                                                </td>
                                            </tr>
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
                                                    <a href="javascript:;" v-on:click="openLayer2">操作</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-xs-12" id="layer2" style="display: none;">
                <div class="row">
                    <div class="col-xs-12">
                        
                        <div class="row">
                            <div class="col-xs-12">
                                第二层layer
                            </div>
                        </div>
                        
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
                adList:[
                    
                ],
                adPage:{},
                message:'我要吃鸡',

            }
        },
        mounted(){
            var that = this;
            axios.get('/ad/getAdList', 
            {
                params: {
                    ID: 12345
                }
            })
            .then(function (response) {
                var pageData = response.data.data;
                that.adList = pageData.list;
                that.adPage = pageData;
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
                // $('#layer1').removeClass('hide');
            },
            openLayer2:function(event){
                layer.open({
                  type: 1,
                  area: ['800px', '600px'],
                  shadeClose: true, //点击遮罩关闭
                  content: $('#layer2'),
                  maxmin:true
                });
                // $('#layer2').removeClass('hide');
            }
        },
    }
</script>
