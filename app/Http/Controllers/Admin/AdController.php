<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdController extends Controller
{
    //
    public function ad_list(){
    	return view('ad.ad-list');
    }
    public function getAdList(Request $request){
        $pageIndex = request()->pageIndex;
    	return response()->json([
            'data'=>[
                'list'=>[
                    ['c1'=>'code1','c2'=>'title','c3'=>'sort','c4'=>'pic','c5'=>time(),'c6'=>'state'],
                    ['c1'=>'code2','c2'=>'title','c3'=>'sort','c4'=>'pic','c5'=>time(),'c6'=>'state'],
                    ['c1'=>'code1','c2'=>'title','c3'=>'sort','c4'=>'pic','c5'=>time(),'c6'=>'state'],
                    ['c1'=>'code2','c2'=>'title','c3'=>'sort','c4'=>'pic','c5'=>time(),'c6'=>'state'],
                    ['c1'=>'code1','c2'=>'title','c3'=>'sort','c4'=>'pic','c5'=>time(),'c6'=>'state'],
                    ['c1'=>'code2','c2'=>'title','c3'=>'sort','c4'=>'pic','c5'=>time(),'c6'=>'state'],
                    ['c1'=>'code1','c2'=>'title','c3'=>'sort','c4'=>'pic','c5'=>time(),'c6'=>'state'],
                    ['c1'=>'code2','c2'=>'title','c3'=>'sort','c4'=>'pic','c5'=>time(),'c6'=>'state'],
                    ['c1'=>'code1','c2'=>'title','c3'=>'sort','c4'=>'pic','c5'=>time(),'c6'=>'state'],
                    ['c1'=>'code2','c2'=>'title','c3'=>'sort','c4'=>'pic','c5'=>time(),'c6'=>'state'],
                ],
                'pageIndex'=>$pageIndex,
                'pageSize'=>10,
                'total'=>255,
                'totalPage'=>26,
            ],
        		
    	]);
    }
}
