function sayHello() {
    alert("为我们伊一点赞一次");
    alert("点赞总次数为'like()'次");
     let likes = 0;

    function like() {
      likes++;
      document.getElementById("count").innerText = "点赞数：" + likes;
    }
    <button onclick="like()">👍 点赞</button>
  <div id="count">点赞数：0</div>
  }
  
