document.addEventListener('DOMContentLoaded', function() {
  // 获取按钮 A 元素
  const buttonA = document.getElementById('buttonA');
  // 获取用于显示点击信息的元素
  const infoDisplay = document.getElementById('infoDisplay');
  
  // 为按钮 A 添加点击事件监听器
  buttonA.addEventListener('click', function() {
    // 显示点击信息
    infoDisplay.textContent = '你好厲害';
    
    // 发起 fetch 请求
    fetch('8.8.8.8') // 将URL替换为你的API URL
      .then(response => {
        if (!response.ok) {
          throw new Error('网络请求失败');
        }
        return response.json(); // 将响应解析为 JSON
      })
      .then(data => {
        // 处理从后端返回的数据
        console.log(data); // 在控制台中打印数据，你可以根据需要进行其他操作
      })
      .catch(error => {
        // 处理错误
        console.error('发生错误:', error);
      });
  });
});
