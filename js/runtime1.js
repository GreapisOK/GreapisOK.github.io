setInterval(() => {
    let create_time = Math.round(new Date('2024-12-30 00:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);
  
    var nol = function(h){
      return h>9?h:'0'+h;
    }
    if (second >= 365 * 24 * 3600) {
      time[0] = parseInt(second / (365 * 24 * 3600));
      second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
      time[1] = parseInt(second / (24 * 3600));
      second %= 24 * 3600;
    }
    if (second >= 3600) {
      time[2] = nol(parseInt(second / 3600));
      second %= 3600;
    }
    if (second >= 60) {
      time[3] = nol(parseInt(second / 60));
      second %= 60;
    }
    if (second > 0) {
      time[4] = nol(second);
    }
    
    // 假设我们要在显示的时间字符串前添加一些文本
    let prefixText = "网站已运行："; // 这是我们要添加的字符串
    
    // 根据时间构建字符串
    let timeString = time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4];
    
    // 根据时间段决定显示不同的图标和文本
    let sign;
    if ((Number(time[2]) < 22) && (Number(time[2]) > 7)) {
      sign = "<img class='boardsign' src='https://img.shields.io/badge/侑子の店-营业中-6adea8?style=social&logo=cakephp' title='距离百年老店也就差不到一百年~'>";
    } else {
      sign = "<img class='boardsign' src='https://img.shields.io/badge/侑子の店-打烊了-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，熬夜对身体不好哦'>";
    }
    
    // 将所有部分组合成一个字符串
    let currentTimeHtml = sign + "<div id='runtime'>" + prefixText + timeString + '</div>';
  
    // 将字符串设置到页面上
    document.getElementById("workboard").innerHTML = currentTimeHtml;
  }, 1000);
  
  
  //   // 创建显示字符串
  //   message += `<div style="font-size:13px;font-weight:bold">
  //   本站居然运行了 ${days} 天${hours} 小时 ${minutes} 分${seconds} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br>
  //   旅行者 1 号当前距离地球 ${currentDistance} 千米，约为${auDistance} 个天文单位 🚀
  // </div>`;