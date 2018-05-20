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
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-xs-12 hide" id="layer1">
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
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-xs-12 hide" id="layer2">
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
                that.adList = response.data.list;
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
        },
    }
</script>
