if(host.split(":")[0]!="127.0.0.1"){
    webUrl+="YT-ChartX/"
}

//当前配置
var currentConfig = null;
var currentOption = null;

//配置面板设置
function sectionSet() {
    // 设置折叠面板
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');
            const content = document.getElementById(sectionId);
            const isActive = content.classList.contains('active');
            // 关闭所有内容
            document.querySelectorAll('.section-content').forEach(el => {
                el.classList.remove('active');
            });
            // 切换当前内容
            if (!isActive) {
                content.classList.add('active');
            }
            // 更新箭头图标
            document.querySelectorAll('.section-header i.fa-chevron-down').forEach(icon => {
                icon.classList.remove('fa-chevron-up');
            });
            if (!isActive) {
                this.querySelector('i.fa-chevron-down').classList.add('fa-chevron-up');
            }
        });
    });
    // 默认打开第一个
    document.querySelector('.section-header').click();

    // 颜色预览
    document.querySelectorAll('input[type="text"][id$="color"]').forEach(input => {
        input.addEventListener('input', function () {
            const previewId = this.id.replace('color', 'preview');
            document.getElementById(previewId).style.background = this.value;
        });
    });

    // 大小滑块
    document.querySelectorAll('input[type="range"][id$="size"]').forEach(input => {
        input.addEventListener('input', function () {
            const previewId = this.id+"-value";            
            document.getElementById(previewId).textContent = this.value;
        });
    });
    // // 字体大小滑块
    // document.querySelectorAll('input[type="range"][id$="itemgap-size"]').forEach(input => {
    //     input.addEventListener('input', function () {
    //         const previewId = this.id+"-value";
    //         document.getElementById(previewId).textContent = this.value+ 'px';
    //     });
    // });

    // // 坐标轴标签大小滑块
    // document.getElementById('axis-label-size').addEventListener('input', function () {
    //     document.getElementById('axis-label-value').textContent = this.value + 'px';
    // });

    // 折叠面板按钮
    document.getElementById('toggle-panel').addEventListener('click', function () {
        const panel = document.getElementById('config-panel');
        panel.classList.add('collapsed');
        document.getElementById('expand-panel').style.display = 'block';
        const chartContainers = document.querySelectorAll('.chart-container');
        chartContainers.forEach(container => {
            // 添加新类
            container.classList.add('chart-container-expand');
            // 移除旧类
            container.classList.remove('chart-container');
        });
        renderChart();
    });

    // 展开面板按钮
    document.getElementById('expand-panel').addEventListener('click', function () {
        const panel = document.getElementById('config-panel');
        panel.classList.remove('collapsed');
        document.getElementById('expand-panel').style.display = 'none';
        const chartContainers = document.querySelectorAll('.chart-container-expand');
        chartContainers.forEach(container => {
            // 添加新类
            container.classList.add('chart-container');
            // 移除旧类
            container.classList.remove('chart-container-expand');
        });
        renderChart();
    });

    // 应用配置按钮
    document.getElementById('apply-config').addEventListener('click',  function () {
        renderChart();
        console.log(currentConfig);
        console.log(currentOption);

        // 获取表单值
        // currentConfig = {
            // chartType: document.getElementById('chart-type-select').value,
            // theme: document.getElementById('chart-theme').value,
            // animationType: document.getElementById('animation-type').value,
            // mainTitle: document.getElementById('main-title').value,
            // subTitle: document.getElementById('sub-title').value,
            // titleColor: document.getElementById('title-color').value,
            // titlePosition: document.getElementById('title-position').value,
            // titleFontSize: parseInt(document.getElementById('title-font-size').value),
            // xAxisData: document.getElementById('xaxis-data').value.split(',').map(item => item.trim()),
            // yAxisData: document.getElementById('yaxis-data').value.split(',').map(item => parseFloat(item.trim())) || 0,
            // dataColor: document.getElementById('data-color').value,
            // showDataLabels: document.getElementById('show-data-labels').value === 'true',
            // xAxisName: document.getElementById('xaxis-name').value,
            // yAxisName: document.getElementById('yaxis-name').value,
            // axisColor: document.getElementById('axis-color').value,
            // axisLabelSize: parseInt(document.getElementById('axis-label-size').value),
            // gridLines: document.getElementById('grid-lines').value === 'true',
            // showLegend: document.getElementById('show-legend').value === 'true',
            // legendPosition: document.getElementById('legend-position').value,
            // legendColor: document.getElementById('legend-color').value
        // }
    });

    
    // // 重置配置按钮
    // document.getElementById('reset-config').addEventListener('click', function () {
    //     // currentConfig = {...defaultConfig};
    //     // updateInputValues();
    //     // renderChart(currentConfig);
    //     // showNotification('配置已重置为默认值!', 'success');
    // });

    

}


/*
var echartsSetInfo = {
    "epaths": {                                     //echarts脚本文件路径（可以多个）（格式:{版本名：路径}，如：{ 'echarts.5.5.0': 'public/echarts/echarts.5.5.0' ,……}）
        'echarts.4.2.1': ePath + 'echarts.4.2.1',
        'echarts.5.0.2': ePath + 'echarts.5.0.2',
        'echarts.5.1.2': ePath + 'echarts.5.1.2',
        'echarts.5.5.0': ePath + 'echarts.5.5.0'
    },
    "version": "5.5.0",                             //echarts版本
    "eDivID": "",                                   //echarts展示所在div的ID
    "setAPI": {                                     //获取echarts配置信息接口信息，格式：{ "url": "", "params": null, "type": "get", "IsAsync": true }
        "url": "",                                  //api地址
        "params": null,                             //api入参{}
        "type": "post",                             // api请求类型（为空默认为post）
        "IsAsync": true                             //api是否异步请求（为空默认为false）
    },
    "dataAPI": {                                    //获取echarts数据接口信息，格式：{ "url": "", "params": null, "type": "get", "IsAsync": true }
        "url": "",                                  //api地址
        "params": null,                             //api入参{}
        "type": "post",                             //api请求类型（为空默认为post）
        "IsAsync": true                             //api是否异步请求（为空默认为false）
    },
    "dNames": ['name', 'value'],                    //数据字段名称数组（如：['name', 'value', 'value1', 'value2']），第一个留给xAxis（默认）或yAxis（需在oCallback回调更改）
    "snList": [],                                   //series.name数组（如：['示例1', '示例2', '示例3']）和echarts对象legend的data保持一致
    "stList": []                                    //series.type数组（如：['bar', 'line', 'bar']）
}
*/

function renderChart() {
    echartsSetInfo.version=document.getElementById('chart-version-select').value;
    echartsSetInfo.eDivID=document.getElementById('chart-divid').value;

    showEcharts(
        function(eSetInfo){
            eSetInfo.setAPI.url = chartxUrl + "template/"+document.getElementById('chart-template-select').value
            eSetInfo.setAPI.type = "get"
            eSetInfo.dataAPI.url = chartxUrl + "data/base/base_1_data.json"
            eSetInfo.dataAPI.type = "get"
            eSetInfo.dNames = ['name', 'value1']
            eSetInfo.stList = [document.getElementById('series-type-select').value]
            eSetInfo.eDivID = document.getElementById('chart-divid').value

            currentConfig={...eSetInfo}
        },
        function (option) {
            option.title[0].show=document.getElementById('title-show').value;
            option.title[0].text=document.getElementById('main-title').value;
            option.title[0].subtext=document.getElementById('sub-title').value;
            option.title[0].left=document.getElementById('title-left').value;
            option.title[0].top=document.getElementById('title-top').value;
            option.title[0].textStyle.color=document.getElementById('title-color').value;
            option.title[0].textStyle.fontSize=parseInt(document.getElementById('title-font-size').value);
            option.title[0].textStyle.fontFamily=document.getElementById('title-font-family').value;
            option.title[0].subtextStyle.color=document.getElementById('sub-title-color').value;
            option.title[0].subtextStyle.fontSize=parseInt(document.getElementById('sub-title-font-size').value);
            option.title[0].subtextStyle.fontFamily=document.getElementById('sub-title-font-family').value;
            option.title[0].itemGap=parseInt(document.getElementById('title-itemgap-size').value);
            

            option.xAxis[0].name=document.getElementById('xaxis-name').value;
            option.xAxis[0].type=document.getElementById('xaxis-type').value;
            if(option.xAxis[0].type=="category"){
                option.xAxis[0].boundaryGap=document.getElementById('xaxis-boundaryGap').value;
            }
            option.xAxis[0].nameTextStyle.color=document.getElementById('xaxis-name-font-color').value;
            option.xAxis[0].nameTextStyle.fontSize=parseInt(document.getElementById('xaxis-name-font-size').value);
            option.xAxis[0].nameTextStyle.fontFamily=document.getElementById('xaxis-name-font-family').value;
            option.xAxis[0].axisLine.show=document.getElementById('xaxis-Line-show').value;
            option.xAxis[0].axisLine.lineStyle.color=document.getElementById('xaxis-Line-color').value;
            option.xAxis[0].axisLine.lineStyle.width=parseInt(document.getElementById('xaxis-Line-width-size').value);
            option.xAxis[0].axisLabel.show=document.getElementById('xaxis-Label-show').value;
            option.xAxis[0].axisLabel.textStyle.color=document.getElementById('xaxis-Label-font-color').value;
            option.xAxis[0].axisLabel.textStyle.fontSize=parseInt(document.getElementById('xaxis-Label-font-size').value);
            option.xAxis[0].axisLabel.textStyle.fontFamily=document.getElementById('xaxis-Label-font-family').value;
            option.xAxis[0].splitLine.show=document.getElementById('xaxis-splitLine-show').value;
            option.xAxis[0].splitLine.lineStyle.type=document.getElementById('xaxis-splitLine-type').value;
            option.xAxis[0].splitLine.lineStyle.color=document.getElementById('xaxis-splitLine-color').value;
            

            option.yAxis[0].name=document.getElementById('yaxis-name').value;
            option.yAxis[0].type=document.getElementById('yaxis-type').value;
            if(option.yAxis[0].type=="category"){
                option.yAxis[0].boundaryGap=document.getElementById('yaxis-boundaryGap').value;
            }
            option.yAxis[0].nameTextStyle.color=document.getElementById('yaxis-name-font-color').value;
            option.yAxis[0].nameTextStyle.fontSize=parseInt(document.getElementById('yaxis-name-font-size').value);
            option.yAxis[0].nameTextStyle.fontFamily=document.getElementById('yaxis-name-font-family').value;
            option.yAxis[0].axisLine.show=document.getElementById('yaxis-Line-show').value;
            option.yAxis[0].axisLine.lineStyle.color=document.getElementById('yaxis-Line-color').value;
            option.yAxis[0].axisLine.lineStyle.width=parseInt(document.getElementById('yaxis-Line-width-size').value);
            option.yAxis[0].axisLabel.show=document.getElementById('yaxis-Label-show').value;
            option.yAxis[0].axisLabel.textStyle.color=document.getElementById('yaxis-Label-font-color').value;
            option.yAxis[0].axisLabel.textStyle.fontSize=parseInt(document.getElementById('yaxis-Label-font-size').value);
            option.yAxis[0].axisLabel.textStyle.fontFamily=document.getElementById('yaxis-Label-font-family').value;
            option.yAxis[0].splitLine.show=document.getElementById('yaxis-splitLine-show').value;
            option.yAxis[0].splitLine.lineStyle.type=document.getElementById('yaxis-splitLine-type').value;
            option.yAxis[0].splitLine.lineStyle.color=document.getElementById('yaxis-splitLine-color').value;                    


            option.series[0].type=document.getElementById('series-type-select').value;
            option.series[0].name=document.getElementById('series-name').value;
            option.series[0].label.show=document.getElementById('series-Label-show').value;
            option.series[0].label.position=document.getElementById('series-Label-position').value;
            option.series[0].label.textStyle.color=document.getElementById('series-Label-font-color').value;
            option.series[0].label.textStyle.fontSize=parseInt(document.getElementById('series-Label-font-size').value);
            option.series[0].label.textStyle.fontFamily=document.getElementById('series-Label-font-family').value;
            
            option.series[0].itemStyle.borderColor=document.getElementById('series-itemStyle-border-color').value;
            option.series[0].itemStyle.borderWidth=parseInt(document.getElementById('series-itemStyle-border-width-size').value);
            option.series[0].itemStyle.borderRadius=parseInt(document.getElementById('series-itemStyle-border-radius-size').value);
            
            option.series[0].labelLine.show=document.getElementById('series-labelLine-show').value;
            option.series[0].labelLine.length=parseInt(document.getElementById('series-labelLine-length-size').value);
            option.series[0].labelLine.length2=parseInt(document.getElementById('series-labelLine-length2-size').value);
            option.series[0].labelLine.smooth=parseFloat(document.getElementById('series-labelLine-smooth-size').value);
            option.series[0].labelLine.lineStyle.width=parseInt(document.getElementById('series-labelLine-width-size').value);
            
            option.series[0].barWidth=parseInt(document.getElementById('series-bar-width-size').value);
            
            option.series[0].smooth=document.getElementById('series-line-smooth').value;
            option.series[0].symbol=document.getElementById('series-line-symbol').value;
            option.series[0].symbolSize=parseInt(document.getElementById('series-line-symbol-size').value);
            option.series[0].areaStyle.color=document.getElementById('series-line-areaStyle-color').value;
            
            option.series[0].avoidLabelOverlap=document.getElementById('series-pie-avoidLabelOverlap').value;
            option.series[0].padAngle=parseFloat(document.getElementById('series-pie-padAngle-size').value);
            option.series[0].radius=document.getElementById('series-pie-radius').value.split(",");
                                
            option.legend[0].show=document.getElementById('legend-show').value;
            option.legend[0].orient=document.getElementById('legend-orient').value;
            option.legend[0].left=document.getElementById('legend-left').value;
            option.legend[0].top=document.getElementById('legend-top').value;
            option.legend[0].align=document.getElementById('legend-align').value;
            option.legend[0].textStyle.color=document.getElementById('legend-font-color').value;
            option.legend[0].textStyle.fontSize=parseInt(document.getElementById('legend-font-size').value);
            option.legend[0].textStyle.fontFamily=document.getElementById('legend-font-family').value;

            
            option.tooltip.show=document.getElementById('tooltip-show').value;
            option.tooltip.trigger=document.getElementById('tooltip-trigger').value;
            option.tooltip.backgroundColor=document.getElementById('tooltip-background-color').value;
            option.tooltip.borderColor=document.getElementById('tooltip-border-color').value;
            option.tooltip.padding=document.getElementById('tooltip-padding').value.split(",");
            option.tooltip.formatter=document.getElementById('tooltip-formatter').value;
            option.tooltip.textStyle.color=document.getElementById('tooltip-font-color').value;
            option.tooltip.textStyle.fontSize=parseInt(document.getElementById('tooltip-font-size').value);
            option.tooltip.textStyle.fontFamily=document.getElementById('tooltip-font-family').value;
            option.tooltip.axisPointer.type=document.getElementById('tooltip-axisPointer-type').value;
            option.tooltip.axisPointer.label.backgroundColor=document.getElementById('tooltip-axisPointer-label-background-color').value;
            option.tooltip.axisPointer.label.borderColor=document.getElementById('tooltip-axisPointer-label-border-color').value;
            option.tooltip.axisPointer.label.borderWidth=parseInt(document.getElementById('tooltip-axisPointer-label-borderWidth-size').value);
            option.tooltip.axisPointer.label.color=document.getElementById('tooltip-axisPointer-label-font-color').value;
            option.tooltip.axisPointer.label.fontSize=parseInt(document.getElementById('tooltip-axisPointer-label-font-size').value);
            option.tooltip.axisPointer.label.fontFamily=document.getElementById('tooltip-axisPointer-label-font-family').value;                    
            option.tooltip.axisPointer.lineStyle.type=document.getElementById('tooltip-axisPointer-line-type').value;
            option.tooltip.axisPointer.lineStyle.color=document.getElementById('tooltip-axisPointer-line-color').value;
            option.tooltip.axisPointer.lineStyle.width=parseInt(document.getElementById('tooltip-axisPointer-line-width-size').value);
            option.tooltip.axisPointer.lineStyle.opacity=parseFloat(document.getElementById('tooltip-axisPointer-line-opacity-size').value);
            

            
            option.grid[0].show=document.getElementById('grid-show').value;
            option.grid[0].top=parseInt(document.getElementById('grid-top-size').value);
            option.grid[0].bottom=parseInt(document.getElementById('grid-bottom-size').value);
            option.grid[0].left=parseInt(document.getElementById('grid-left-size').value);
            option.grid[0].right=parseInt(document.getElementById('grid-right-size').value);
            option.grid[0].borderWidth=parseInt(document.getElementById('grid-borderWidth-size').value);
            
            if(option.series[0].type=="pie"||option.series[0].type=="funnel"){
                delete option.xAxis[0]
                delete option.yAxis[0]
                delete option.tooltip.axisPointer
                option.tooltip.trigger="item"
            }

            currentOption={...option}
        },
        function (myChart) {
            myChart.on('click', (params) => {
                // console.log(params);
                alert(params.name + "\r\n" + params.value)
            });
            
            // 导出按钮
            document.getElementById('export-btn').addEventListener('click', function () {
                const url = myChart.getDataURL({
                    type: 'png',
                    pixelRatio: 2,
                    backgroundColor: '#252836'
                });
                const a = document.createElement('a');
                a.href = url;
                a.download = 'echarts-chart.png';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                showNotification('图表已导出为PNG图片!', 'success');
            });
        }
    )
}
// // 初始化ECharts实例
// let chartDom = document.getElementById('main-chart');
// let myChart = echarts.init(chartDom);

// // 默认配置
// const defaultConfig = {
//     chartType: 'bar',
//     mainTitle: '销售数据统计',
//     subTitle: '2023年各季度数据',
//     titleColor: '#3498db',
//     titlePosition: 'center',
//     titleFontSize: 24,
//     xAxisData: ['第一季度', '第二季度', '第三季度', '第四季度'],
//     yAxisData: [120, 200, 150, 80],
//     dataColor: '#2ecc71',
//     showDataLabels: true,
//     xAxisName: '季度',
//     yAxisName: '销售额（万元）',
//     axisColor: '#e0e0e0',
//     axisLabelSize: 14,
//     gridLines: true,
//     showLegend: true,
//     legendPosition: 'top',
//     legendColor: '#f1c40f',
//     theme: 'default',
//     animationType: 'linear'
// };

// // 当前配置
// let currentConfig = {...defaultConfig};

// 初始化图表
// function initChart() {
// renderChart(currentConfig);
// bindEvents();
// setupAccordions();
// updateInputValues();
// }

// // 渲染图表
// function renderChart(config) {
//     chartDom = document.getElementById('main-chart');
//     myChart = echarts.init(chartDom);
//     const option = {
//         title: {
//             text: config.mainTitle,
//             subtext: config.subTitle,
//             left: config.titlePosition,
//             textStyle: {
//                 color: config.titleColor,
//                 fontSize: config.titleFontSize
//             },
//             subtextStyle: {
//                 fontSize: config.titleFontSize - 4
//             }
//         },
//         tooltip: {
//             trigger: 'axis',
//             backgroundColor: 'rgba(0, 0, 0, 0.7)',
//             borderColor: '#333',
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         animation: true,
//         animationType: config.animationType,
//         animationDuration: 1000,
//         legend: {
//             show: config.showLegend,
//             data: ['销售额'],
//             textStyle: {
//                 color: config.legendColor
//             },
//             top: config.legendPosition === 'top' ? 30 :
//                  config.legendPosition === 'bottom' ? 'bottom' :
//                  config.legendPosition,
//             left: config.legendPosition === 'left' ? 'left' :
//                   config.legendPosition === 'right' ? 'right' : 'center'
//         },
//         grid: {
//             left: '3%',
//             right: '4%',
//             bottom: '3%',
//             containLabel: true
//         },
//         xAxis: {
//             type: 'category',
//             data: config.xAxisData,
//             name: config.xAxisName,
//             nameTextStyle: {
//                 color: '#aaa'
//             },
//             axisLine: {
//                 lineStyle: {
//                     color: config.axisColor
//                 }
//             },
//             axisLabel: {
//                 color: '#aaa',
//                 fontSize: config.axisLabelSize
//             }
//         },
//         yAxis: {
//             type: 'value',
//             name: config.yAxisName,
//             nameTextStyle: {
//                 color: '#aaa'
//             },
//             axisLine: {
//                 lineStyle: {
//                     color: config.axisColor
//                 }
//             },
//             splitLine: {
//                 show: config.gridLines,
//                 lineStyle: {
//                     color: 'rgba(255, 255, 255, 0.1)'
//                 }
//             },
//             axisLabel: {
//                 color: '#aaa',
//                 fontSize: config.axisLabelSize
//             }
//         },
//         series: [
//             {
//                 name: '销售额',
//                 type: config.chartType,
//                 data: config.yAxisData,
//                 itemStyle: {
//                     color: config.dataColor
//                 },
//                 label: {
//                     show: config.showDataLabels,
//                     position: 'top',
//                     color: '#fff'
//                 }
//             }
//         ]
//     };

//     // 特殊图表类型处理
//     if (config.chartType === 'pie') {
//         option.series[0] = {
//             name: '销售额',
//             type: 'pie',
//             radius: '70%',
//             data: config.xAxisData.map((name, index) => ({
//                 name: name,
//                 value: config.yAxisData[index]
//             })),
//             itemStyle: {
//                 color: config.dataColor
//             },
//             label: {
//                 show: config.showDataLabels,
//                 color: '#fff'
//             },
//             emphasis: {
//                 itemStyle: {
//                     shadowBlur: 10,
//                     shadowOffsetX: 0,
//                     shadowColor: 'rgba(0, 0, 0, 0.5)'
//                 }
//             }
//         };

//         delete option.xAxis;
//         delete option.yAxis;
//     }

//     // 应用主题
//     if (config.theme !== 'default') {
//         echarts.dispose(myChart);
//         myChart = echarts.init(chartDom, config.theme);
//     }

//     myChart.setOption(option);
// }


// }



// // 更新输入框值
// function updateInputValues() {
//     document.getElementById('chart-type-select').value = currentConfig.chartType;
//     document.getElementById('chart-theme').value = currentConfig.theme;
//     document.getElementById('animation-type').value = currentConfig.animationType;
//     document.getElementById('main-title').value = currentConfig.mainTitle;
//     document.getElementById('sub-title').value = currentConfig.subTitle;
//     document.getElementById('title-color').value = currentConfig.titleColor;
//     document.getElementById('title-position').value = currentConfig.titlePosition;
//     document.getElementById('title-font-size').value = currentConfig.titleFontSize;
//     document.getElementById('font-size-value').textContent = currentConfig.titleFontSize + 'px';
//     document.getElementById('xaxis-data').value = currentConfig.xAxisData.join(', ');
//     document.getElementById('yaxis-data').value = currentConfig.yAxisData.join(', ');
//     document.getElementById('data-color').value = currentConfig.dataColor;
//     document.getElementById('show-data-labels').value = currentConfig.showDataLabels;
//     document.getElementById('xaxis-name').value = currentConfig.xAxisName;
//     document.getElementById('yaxis-name').value = currentConfig.yAxisName;
//     document.getElementById('axis-color').value = currentConfig.axisColor;
//     document.getElementById('axis-label-size').value = currentConfig.axisLabelSize;
//     document.getElementById('axis-label-value').textContent = currentConfig.axisLabelSize + 'px';
//     document.getElementById('grid-lines').value = currentConfig.gridLines;
//     document.getElementById('show-legend').value = currentConfig.showLegend;
//     document.getElementById('legend-position').value = currentConfig.legendPosition;
//     document.getElementById('legend-color').value = currentConfig.legendColor;

//     // 更新颜色预览
//     document.getElementById('title-preview').style.background = currentConfig.titleColor;
//     document.getElementById('data-preview').style.background = currentConfig.dataColor;
//     document.getElementById('axis-preview').style.background = currentConfig.axisColor;
//     document.getElementById('legend-preview').style.background = currentConfig.legendColor;
// }

// // 显示通知
// function showNotification(message, type) {
//     const notif = document.createElement('div');
//     notif.className = `notification ${type}`;
//     notif.textContent = message;
//     notif.style.cssText = `
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         padding: 15px 25px;
//         background: ${type === 'success' ? '#2ecc71' : '#e74c3c'};
//         color: white;
//         border-radius: 5px;
//         box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//         z-index: 1000;
//         animation: slideIn 0.3s, fadeOut 0.5s 2.5s;
//     `;

//     document.body.appendChild(notif);

//     setTimeout(() => {
//         notif.remove();
//     }, 3000);
// }

// // 页面加载时初始化
// window.addEventListener('load', initChart);

// // 响应窗口大小变化
// window.addEventListener('resize', function() {
//     myChart.resize();
// });