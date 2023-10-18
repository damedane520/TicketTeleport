document.addEventListener('DOMContentLoaded', function() {
  // 获取按钮元素
  const fetchButton = document.getElementById('fetchButton');

  // 为按钮添加点击事件监听器
  fetchButton.addEventListener('click', function() {
    // 发起 fetch 请求
    fetch('https://api.example.com/data') // 将URL替换为你的API URL
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
