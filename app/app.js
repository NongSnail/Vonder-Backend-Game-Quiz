// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// }) 

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })

// app.post('/', function(req, res){
//     res.send('Got a POST request')
// })

// app.put('/user',function(req, res){
//     res.send('Got a PUT request at /user')
// })

// app.delete('/user',function(req, res){
//     res.send('Got a DELETE request at /user')
// })


class Books {
    constructor(id, title, description, category, price) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
    }

    get getId(){
        return this.id;
    }

    get getTitle(){
        return this.title;
    }

    get getDescription(){
        return this.description;
    }

    get getCategory(){
        return this.category;
    }

    get getPrice(){
        return this.getPrice;
    } 

    
}

var book = new Books('854-59-0591','Ice Princess','imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin'
,'Music','$0.78');



console.log(book);

class Shelf {
    
    constructor(){
        this.shelf = [];
    }

    add(book) {
        this.shelf.push(book);
    }

    delete(book) {
        var bookName = book.getTitle;
        this.shelf.forEach( (e,i) => {
            if(e === bookName ){
                this.shelf.splice(i)
            }
        }
        )
    }


}

class Book_Shelf {
    constructor(){
        this.Book_Shelf = [];
    }
    add(shelf) {
        this.Book_Shelf.push(shelf);
    }

    delete(shelf) {
        this.Book_Shelf.splice(shelf);
    }

    search(){
        var bookName = book.getTitle;
        this.shelf.forEach( (e,i) => {
            if(e === bookName ){
                console.log(e);
                console.log(i);
            }
        }
        )
    }
}