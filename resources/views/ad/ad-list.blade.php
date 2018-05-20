@extends('layout.master')
@section('breadcrumbs')
    <div class="breadcrumbs ace-save-state" id="breadcrumbs">
        <ul class="breadcrumb">
            <li>
                <i class="ace-icon fa fa-home home-icon"></i>
                <a href="/">Home</a>
            </li>
            <li class="active">广告位列表-@{{message}}</li>
        </ul><!-- /.breadcrumb -->

        <div class="nav-search hide" id="nav-search">
            <form class="form-search">
                <span class="input-icon">
                    <input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off"/>
                    <i class="ace-icon fa fa-search nav-search-icon"></i>
                </span>
            </form>
        </div><!-- /.nav-search -->
    </div>
@endsection
@section('main-content')
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
                                <td>@{{item.c1}}</td>
                                <td>@{{item.c2}}</td>
                                <td>@{{item.c3}}</td>
                                <td>@{{item.c4}}</td>
                                <td>@{{item.c5}}</td>
                                <td>@{{item.c6}}</td>
                                <td>
                                    <a href="javascript:;" v-on:click="openOperModal">操作</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        <!-- PAGE CONTENT ENDS -->
    </div><!-- /.col -->
@endsection

@section('layer')
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
                                        <td>@{{item.c1}}</td>
                                        <td>@{{item.c2}}</td>
                                        <td>@{{item.c3}}</td>
                                        <td>@{{item.c4}}</td>
                                        <td>@{{item.c5}}</td>
                                        <td>@{{item.c6}}</td>
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
@endsection

@section('script')
    <script type="text/javascript" src="js/adList.js"></script>
@endsection