let _data = [];

//标题组件
let _title = [{}];
//图例组件
let _legend = {};
//直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）
let _grid = [{}];
//直角坐标系 grid 中的 x 轴
let _xAxis = [{}];
//直角坐标系 grid 中的 y 轴
let _yAxis = [{}];
//这是坐标轴指示器（axisPointer）的全局公用设置
let _axisPointer = {};
//提示框组件
let _tooltip = {};
//地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
let _geo = [{}];
//三维的地理坐标系组件
let _geo3D = [{}];
//系列（series）是很常见的名词。在 echarts 里，系列（series）是指：一组数值以及他们映射成的图
let _series = [{}];
//调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。 
//默认为：['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
let _color = [];
//全局的字体样式
let _textStyle = {};
//dataZoom 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响
let _dataZoom = [{}];
let _option = {
    title: _title,
    legend: _legend,
    grid: _grid,
    xAxis: _xAxis,
    yAxis: _yAxis,
    axisPointer: _axisPointer,
    tooltip: _tooltip,
    geo: _geo,
    geo3D: _geo3D,
    series: _series,
    color: _color,
    textStyle: _textStyle,
    dataZoom: _dataZoom,
    // polar: [],//极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个角度轴和一个半径轴
    // radiusAxis: [],//极坐标系的径向轴。
    // angleAxis: [],//极坐标系的角度轴。
    // radar: [],//雷达图坐标系组件，只适用于雷达图,
    // visualMap: [],//visualMap 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）
    // toolbox: [],//工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
    // brush: [],//brush 是区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据，或者他们的一些统计计算结果
    // parallel: [],//平行坐标系（Parallel Coordinates） 是一种常用的可视化高维数据的图表
    // parallelAxis: [],//平行坐标系中的坐标轴
    // singleAxis: [],//单轴。可以被应用到散点图中展现一维数据
    // timeline: [],//timeline 组件，提供了在多个 ECharts option 间进行切换、播放等操作的功能
    // graphic: [],//graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group
    // calendar: [],//日历坐标系组件
    // dataset: [],//数据集（dataset）组件用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以自由指定数据到视觉的映射。这在不少场景下能带来使用上的方便
    // aria: [],//无障碍访问组件，默认关闭
    // darkMode: [],//是否是暗黑模式，默认会根据背景色 backgroundColor 的亮度自动设置
    // backgroundColor: 'transparent',//背景色，默认无背景。
    // animation: true,//是否开启动画
    // animationThreshold: 2000,//是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。
    // animationDuration: 1000,//初始动画的时长，支持回调函数
    // animationEasing: 'cubicOut',//初始动画的缓动效果
    // animationDelay: 0,//初始动画的延迟，支持回调函数    
    // animationDurationUpdate: 300,//数据更新动画的时长，支持回调函数    
    // animationEasingUpdate: 'cubicInOut',//数据更新动画的缓动效果
    // animationDelayUpdate: 0 ,//数据更新动画的延迟，支持回调函数
    // stateAnimation: [],//状态切换的动画配置，支持在每个系列里设置单独针对该系列的配置
    // blendMode: 'source-over',//图形的混合模式，默认为 'source-over'。 支持每个系列单独设置
    // hoverLayerThreshold: 3000,//图形数量阈值，决定是否开启单独的 hover 层，在整个图表的图形数量大于该阈值时开启单独的 hover 层
    // useUTC: false,//是否使用 UTC 时间。true: 表示 axis.type 为 'time' 时，依据 UTC 时间确定 tick 位置，并且 axisLabel 和 tooltip 默认展示的是 UTC 时间；false: 表示 axis.type 为 'time' 时，依据本地时间确定 tick 位置，并且 axisLabel 和 tooltip 默认展示的是本地时间
    // options: [],//用于 timeline 的 option 数组。数组的每一项是一个 echarts option (ECUnitOption)
    // media: [],//移动端自适应
}



// var ytchartx = function (ids, options, version, datas) {
//     console.log(_option);

// }
// var bind_ytchartx = function (id, option, version, data) {

// }



