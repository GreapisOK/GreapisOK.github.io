// 创建一个函数来显示通知弹窗
function showNotice(message) {
    // 创建通知框的容器
    var noticeContainer = document.createElement('div');
    noticeContainer.className = 'web_notice';
    noticeContainer.style.position = 'fixed';
    noticeContainer.style.top = '0';
    noticeContainer.style.left = '0';
    noticeContainer.style.width = '100%';
    noticeContainer.style.height = '100%';
    noticeContainer.style.background = 'rgba(0,0,0,0.3)';
    noticeContainer.style.zIndex = '99999';
    noticeContainer.style.opacity = '0.9';
  
    // 创建通知内容容器
    var contentContainer = document.createElement('div');
    contentContainer.style.position = 'fixed';
    contentContainer.style.top = '50%';
    contentContainer.style.left = '50%';
    contentContainer.style.width = '350px';
    contentContainer.style.background = '#FFF';
    contentContainer.style.transform = 'translate(-50%, -50%)';
    contentContainer.style.borderRadius = '40px';
    contentContainer.style.padding = '20px 10px';
  
    // 创建标题
    var title = document.createElement('h4');
    title.style.fontWeight = 'bold';
    title.style.textAlign = 'center';
    title.style.fontSize = '20px';
    title.textContent = '网站通知';
  
    // 创建内容
    var content = document.createElement('div');
    content.style.fontSize = '16px';
    content.style.marginTop = '26px';
    content.style.lineHeight = '30px';
    content.style.color = '#999';
    content.innerHTML = message.replace(/\n/g, '<br>'); // 替换换行符为HTML的换行
  
    // 创建关闭按钮
    var closeButton = document.createElement('a');
    closeButton.style.display = 'block';
    closeButton.style.background = '#98a3ff';
    closeButton.style.color = '#FFF';
    closeButton.style.textAlign = 'center';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.fontSize = '13px';
    closeButton.style.lineHeight = '60px';
    closeButton.style.margin = '0 auto';
    closeButton.style.marginTop = '45px';
    closeButton.style.borderRadius = '32px';
    closeButton.style.width = '60%';
    closeButton.textContent = '我知道了';
    closeButton.onclick = function() {
      document.body.removeChild(noticeContainer);
    };
  
    // 将内容添加到通知内容容器
    contentContainer.appendChild(title);
    contentContainer.appendChild(content);
    contentContainer.appendChild(closeButton);
  
    // 将通知内容容器添加到通知框的容器
    noticeContainer.appendChild(contentContainer);
  
    // 将通知框的容器添加到body中
    document.body.appendChild(noticeContainer);
  }
  
  // 调用函数显示通知弹窗
  showNotice("网站公告代码测试测试网站公告代码测试测试\n网站公告代码测试测试网站公告代码测试测试\n网站公告代码测试测试网站公告代码测试测试\n网站公告代码测试测试网站公告代码测试测试");
  