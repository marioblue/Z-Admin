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
    <!-- 路由出口 -->
    <router-view></router-view>

    
@endsection

@section('layer')
            
@endsection

@section('script')
    <script type="text/javascript" src="{{ mix('js/adList.js') }}"></script>
@endsection