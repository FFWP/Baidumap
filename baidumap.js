 var markers = [];
	// 百度地图API功能	
	map = new BMap.Map("allmap");
  map.enableScrollWheelZoom();//滚轮
  map.addControl(new BMap.NavigationControl());//缩放控件
  map.addControl(new BMap.MapTypeControl(
		{
			mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP],
			anchor: BMAP_ANCHOR_TOP_RIGHT
		}
	)); //卫星地图切换
	map.centerAndZoom(new BMap.Point(116.404, 35.915), 5);
	var data_info = [
      	[118.37385020629881,31.283815735686073,"<a href=\"https://lvx.ee/412wuhu.html\" target=\"_blank\"><h4 style='margin:0 0 5px 0;padding:0.2em 0'>➤安徽师范大学</h4></a><img style='float:left;margin:4px' src='https://lvx.ee/wp-content/uploads/2019/08/2019082508475180-1024x768.jpg' width='300' height='250'/>"],

					];
	var opts = {
				width : 300,     // 信息窗口宽度
				height: 250,     // 信息窗口高度
				//title : "信息窗口" , // 信息窗口标题
				enableMessage:true//设置允许信息窗发送短息
			   };
	for(var i=0;i<data_info.length;i++){
		var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
		var content = data_info[i][2];
      markers.push(marker);
		map.addOverlay(marker);               // 将标注添加到地图中
     
		addClickHandler(content,marker);
	}
  
    var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});//点聚合
  
  
	function addClickHandler(content,marker){
		marker.addEventListener("click",function(e){
			openInfo(content,e)}
		);
	}
	function openInfo(content,e){
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	}