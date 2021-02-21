const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world!')
}) 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.post('/', function(req, res){
    res.send('Got a POST request')
})

app.put('/user',function(req, res){
    res.send('Got a PUT request at /user')
})

app.delete('/user',function(req, res){
    res.send('Got a DELETE request at /user')
})


// class Books {
//     constructor(id, title, description, category, price) {
//         this.id = id;
//         this.title = title;
//         this.description = description;
//         this.category = category;
//         this.price = price;
//     }

//     get getId(){
//         this.id = id;
//     }

//     get getTitle(){
//         this.title = title;
//     }

//     get getDescription(){
//         this.description = description;
//     }

//     get getCategory(){
//         this.category = category;
//     }

//     get getPrice(){
//         this.price = price;
//     } 
// }

