/^http(s*):\/\//.test(location.href) || alert('请先部署到 localhost 下再访问');

var chartxUrl=getCurrentScriptPath();
// alert(scriptUrl.split("/"))
chartxUrl=chartxUrl.replace(chartxUrl.split("/")[chartxUrl.split("/").length-1],"")
// alert(scriptUrl)

// let _data = [];
// //标题组件
// let _title = [{}];
// //图例组件
// let _legend = {};
// //直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）
// let _grid = [{}];
// //直角坐标系 grid 中的 x 轴
// let _xAxis = [{}];
// //直角坐标系 grid 中的 y 轴
// let _yAxis = [{}];
// //这是坐标轴指示器（axisPointer）的全局公用设置
// let _axisPointer = {};
// //提示框组件
// let _tooltip = {};
// //地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
// let _geo = [{}];
// //三维的地理坐标系组件
// let _geo3D = [{}];
// //系列（series）是很常见的名词。在 echarts 里，系列（series）是指：一组数值以及他们映射成的图
// let _series = [{}];
// //调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。 
// //默认为：['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
// let _color = [];
// //全局的字体样式
// let _textStyle = {};
// //dataZoom 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响
// let _dataZoom = [{}];
// let _option = {
//     title: _title,
//     legend: _legend,
//     grid: _grid,
//     xAxis: _xAxis,
//     yAxis: _yAxis,
//     axisPointer: _axisPointer,
//     tooltip: _tooltip,
//     geo: _geo,
//     geo3D: _geo3D,
//     series: _series,
//     color: _color,
//     textStyle: _textStyle,
//     dataZoom: _dataZoom,
//     // polar: [],//极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个角度轴和一个半径轴
//     // radiusAxis: [],//极坐标系的径向轴。
//     // angleAxis: [],//极坐标系的角度轴。
//     // radar: [],//雷达图坐标系组件，只适用于雷达图,
//     // visualMap: [],//visualMap 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）
//     // toolbox: [],//工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
//     // brush: [],//brush 是区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据，或者他们的一些统计计算结果
//     // parallel: [],//平行坐标系（Parallel Coordinates） 是一种常用的可视化高维数据的图表
//     // parallelAxis: [],//平行坐标系中的坐标轴
//     // singleAxis: [],//单轴。可以被应用到散点图中展现一维数据
//     // timeline: [],//timeline 组件，提供了在多个 ECharts option 间进行切换、播放等操作的功能
//     // graphic: [],//graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group
//     // calendar: [],//日历坐标系组件
//     // dataset: [],//数据集（dataset）组件用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以自由指定数据到视觉的映射。这在不少场景下能带来使用上的方便
//     // aria: [],//无障碍访问组件，默认关闭
//     // darkMode: [],//是否是暗黑模式，默认会根据背景色 backgroundColor 的亮度自动设置
//     // backgroundColor: 'transparent',//背景色，默认无背景。
//     // animation: true,//是否开启动画
//     // animationThreshold: 2000,//是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。
//     // animationDuration: 1000,//初始动画的时长，支持回调函数
//     // animationEasing: 'cubicOut',//初始动画的缓动效果
//     // animationDelay: 0,//初始动画的延迟，支持回调函数    
//     // animationDurationUpdate: 300,//数据更新动画的时长，支持回调函数    
//     // animationEasingUpdate: 'cubicInOut',//数据更新动画的缓动效果
//     // animationDelayUpdate: 0 ,//数据更新动画的延迟，支持回调函数
//     // stateAnimation: [],//状态切换的动画配置，支持在每个系列里设置单独针对该系列的配置
//     // blendMode: 'source-over',//图形的混合模式，默认为 'source-over'。 支持每个系列单独设置
//     // hoverLayerThreshold: 3000,//图形数量阈值，决定是否开启单独的 hover 层，在整个图表的图形数量大于该阈值时开启单独的 hover 层
//     // useUTC: false,//是否使用 UTC 时间。true: 表示 axis.type 为 'time' 时，依据 UTC 时间确定 tick 位置，并且 axisLabel 和 tooltip 默认展示的是 UTC 时间；false: 表示 axis.type 为 'time' 时，依据本地时间确定 tick 位置，并且 axisLabel 和 tooltip 默认展示的是本地时间
//     // options: [],//用于 timeline 的 option 数组。数组的每一项是一个 echarts option (ECUnitOption)
//     // media: [],//移动端自适应
// }




//****************************************************************************************************************************************************
//加载echarts图表-开始
//----------------------------------------------------------------------------------------------------------------------------------------------------
//调用入口
/*  
    echarts,    echarts对象
    echartsSetInfo
        version，   echarts版本
        epaths,     echarts脚本文件路径（可以多个）（格式:{版本名：路径}，如：{ 'echarts.5.5.0': 'public/echarts/echarts.5.5.0' ,……}）
        eDivID,     echarts展示所在div的ID
        setAPI,     获取echarts配置信息接口信息，格式：{ "url": "", "params": null, "type": "get", "IsAsync": true }
            url     api地址
            params  api入参{}
            type    api请求类型（为空默认为post）
            IsAsync api是否异步请求（为空默认为false）
        dataAPI,    获取echarts数据接口信息，格式：{ "url": "", "params": null, "type": "get", "IsAsync": true }
            url     api地址
            params  api入参{}
            type    api请求类型（为空默认为post）
            IsAsync api是否异步请求（为空默认为false）
        dNames,     数据字段名称数组（如：['name', 'value', 'value1', 'value2']），
                    第一个留给xAxis（默认）或yAxis（需要在oCallback回调方法更改）
        snList      series.name数组（如：['示例1', '示例2', '示例3']）和echarts对象legend的data保持一致
        stList,     series.type数组（如：['bar', 'line', 'bar']）
    oCallback,  option赋值完后的回调方法 （多用于对option中的各个属性进行补充扩展）
    eCallback   echarts对象加载完后的回调方法（多用于对myChart的补充扩展，例如添加点击事件）
*/
var showEcharts = function (echartsSetInfo, oCallback, eCallback) {
    try {
        var version = echartsSetInfo.version;
        var epaths = echartsSetInfo.epaths;
        var eDivID = echartsSetInfo.eDivID;

        var setAPI = echartsSetInfo.setAPI;
        var dataAPI = echartsSetInfo.dataAPI;

        var dNames = echartsSetInfo.dNames;
        var snList = echartsSetInfo.snList;
        var stList = echartsSetInfo.stList;

        require.config({
            paths: epaths
        });

        require(['echarts.' + version], function (echarts) {
            getEchartsSet(setAPI, function (setData) {
                getEchartsData(dataAPI, setData, function (option, data) {
                    var dList = Array.from({ length: dNames.length }, () => []);
                    for (var i = 0; i < data.length; i++) {
                        for (var n = 0; n < dNames.length; n++) {
                            dList[n].push(data[i][dNames[n]]);
                        }
                    }
                    try { option.legend[0].data = (IsNull(snList) == "" ? dList[0] : snList); } catch (e) { }
                    try { option.xAxis[0].data = dList[0]; } catch (e) { }

                    for (var i = 0; i < stList.length; i++) {
                        if (typeof option.series[i] !== 'undefined' && option.series[i] !== null) {
                            option.series[i].name = snList[i];
                            option.series[i].type = stList[i];
                            if (stList[i] == "pie") {
                                option.series[i].data = dList[0].map(function (name, index) {
                                    return {
                                        value: dList[i + 1][index],
                                        name: name
                                    };
                                });
                            }
                            else {
                                option.series[i].data = dList[i + 1];
                            }
                        } else {
                            var seriess = JSON.parse(JSON.stringify(option.series[0]));
                            option.series.push(seriess);
                            option.series[i].name = snList[i];
                            option.series[i].type = stList[i];
                            if (stList[i] == "pie") {
                                option.series[i].data = dList[0].map(function (name, index) {
                                    return {
                                        value: dList[i + 1][index],
                                        name: name
                                    };
                                });
                            }
                            else {
                                option.series[i].data = dList[i + 1];
                            }
                        }
                    }
                    option.version = "ECharts." + echarts.version
                    if (typeof oCallback === 'function') oCallback(option);

                    console.log(option);

                    var myChart = echarts.init(document.getElementById(eDivID));
                    myChart.dispose();
                    myChart.clear();
                    myChart = echarts.init(document.getElementById(eDivID));
                    myChart.setOption(option, true);

                    if (typeof eCallback === 'function') eCallback(myChart);

                    $(window).resize(function () {
                        myChart.resize();
                    });
                })
            });
        });
    } catch (e) {
        alert(e)
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
//获取echarts图表设置信息
var getEchartsSet = function name(setAPI, callback) {
    jQuery.support.cors = true;
    $.ajax({
        cache: false,
        type: (setAPI.type == "" ? "POST" : setAPI.type),
        async: ((IsNull(setAPI.IsAsync) === false || IsNull(setAPI.IsAsync) == "") ? false : true),
        url: setAPI.url,
        data: JSON.stringify(setAPI.params),
        dataType: "jsonp",
        contentType: "application/json;charset=utf-8",
        success: function (setData) {
            if (typeof callback === 'function') callback(setData);
        },
        error: function (xhr, status, err) {
            console.error("加载失败:", status, err);
        }
    });
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
//获取echarts图表展现数据
var getEchartsData = function name(dataAPI, setData,callback) {
    jQuery.support.cors = true;
    $.ajax({
        cache: false,
        type: (dataAPI.type == "" ? "POST" : dataAPI.type),
        async: ((IsNull(dataAPI.IsAsync) === false || IsNull(dataAPI.IsAsync) == "") ? false : true),
        url: dataAPI.url,
        data: JSON.stringify(dataAPI.params),
        dataType: "jsonp",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            if (typeof callback === 'function') callback(setData, data);
        },
        error: function (xhr, status, err) {
            console.error("加载失败:", status, err);
        }
    });
}
/* 调用示例
showEcharts({
        "epaths": { 'echarts.5.5.0': webUrl + 'public/echarts/echarts.5.5.0' },
        "version": "5.5.0",
        "eDivID": "eDiv1",
        "setAPI": { "url": webUrl + "data/echarts/base/1.json", "params": null, "type": "get", "IsAsync": true },
        "dataAPI": { "url": webUrl + "data/echarts/data/bar/bar_1_data.json", "params": null, "type": "get", "IsAsync": true },
        "dNames": ['name', 'value'],
        "snList": [],
        "stList": ['bar']
    },
    function (option) {
        option.xAxis[0].show = true
        console.log(option);
    },
    function (myChart) {
        myChart.on('click', (params) => {
            console.log(params);
            alert(params.name + "\r\n" + params.value)
        })
    }
)
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------
//加载echarts图表-结束
//****************************************************************************************************************************************************
//****************************************************************************************************************************************************
//获取此脚本的访问路径-开始
//----------------------------------------------------------------------------------------------------------------------------------------------------
function getCurrentScriptPath() {
  const scripts = document.getElementsByTagName('script');
  const currentScript = scripts[scripts.length - 1];
  return currentScript.src;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
//获取此脚本的访问路径-结束
//****************************************************************************************************************************************************






//****************************************************************************************************************************************************
//XXXXX-开始
//----------------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------------
//XXXXX-结束
//****************************************************************************************************************************************************