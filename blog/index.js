// khai báo dêpndency express - cái mk đã khai báo lưu ở trong package.json và node_modules
const express = require('express')
const app = express()
const port = 3000

// định nghĩa route - tuyến đường - url 
// đây là cách viết ngắn gọn 
app.get('/', (req, res) => {
    var a = 1
    var b = 2
    var c = a + b    
    res.send('Hello World!')})

// đây là cách viết đầy đủ
app.get('/goodbye', function(req, res){
    return res.send('Goodbye World!')
})

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})