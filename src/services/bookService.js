import { BookShelf } from '../model/schemas.js'


export default class BookService {

	static async AddBook(data){
		const { bookTitle, bookDescription, bookCategories, bookPrice } = data
		let bookShelf = await BookShelf.findOne().exec()
		let bookObj = await BookShelf.findOne('')
		if (Object.keys(bookShelf).length && bookShelf.bookShelfLevels.length){
			const linerAddBook = async () => { 
				for (let i=0; i < bookShelf.bookShelfLevels.length; i++){
					for (let k=0; k < bookShelf.bookShelfLevels[i].bookShelfLevelSlots.length; k++){
						if(bookShelf.bookShelfLevels[i].bookShelfLevelSlots[k] === null){
							bookShelf.bookShelfLevels[i].bookShelfLevelSlots[k] = { bookTitle, bookDescription, bookDescription, bookPrice }
							await bookShelf.save(err => {
								if(err) throw new Error(err)
							})
							return bookShelf.bookShelfLevels[i].bookShelfLevelSlots[k]
						}
					}
				}
				bookShelf = await BookService.AddBookShelfLevel()
				bookShelfLevelsLength = bookShelf.bookShelfLevels.length
				bookShelf.bookShelfLevels[bookShelfLevelsLength-1].bookShelfLevelSlots[0] = { bookTitle, bookDescription, bookDescription, bookPrice }
				return bookShelf.bookShelfLevels[bookShelfLevelsLength-1].bookShelfLevelSlots[0]
			}
			return await linerAddBook()
		}

	}

	static async EditBook(data){
		const { oldBookTitle, bookTitle, bookDescription, bookCategories, bookPrice } = data
		const bookShelf = await BookShelf.findOne().exec()
		if (Object.keys(bookShelf).length && bookShelf.bookShelfLevels.length){
			for (let i=0; i < bookShelf.bookShelfLevels.length; i++){
				for (let k=0; k < bookShelf.bookShelfLevels[i].bookShelfLevelSlots.length; k++){
					if(bookShelf.bookShelfLevels[i].bookShelfLevelSlots[k].bookTitle === oldBookTitle){
						bookShelf.bookShelfLevels[i].bookShelfLevelSlots[k] = { bookTitle, bookDescription, bookDescription, bookPrice }
						await bookShelf.save(err => {
							if(err) throw new Error(err)
						})
						return bookShelf.bookShelfLevels[i].bookShelfLevelSlots[k]
					}
				}
			}
		}
	}

	static async DeleteBook(data){
		const { bookTitle } = data
		const bookShelf = await BookShelf.findOne().exec()
		if (Object.keys(bookShelf).length && bookShelf.bookShelfLevels.length){
			for (let i=0; i < bookShelf.bookShelfLevels.length; i++){
				for (let k=0; k < bookShelf.bookShelfLevels[i].bookShelfLevelSlots.length; k++){
					if(bookTitle && bookShelf.bookShelfLevels[i].bookShelfLevelSlots[k] && bookShelf.bookShelfLevels[i].bookShelfLevelSlots[k].bookTitle === bookTitle){
						bookShelf.bookShelfLevels[i].bookShelfLevelSlots[k] = null
						await bookShelf.save(err => {
							if(err) throw new Error(err)
						})
						return { bookTitle }
					}
				}
			}
		}
	}

	static async SearchBook(data){
		const { bookTitle, bookCategories } = data
		const bookShelf = await BookShelf.findOne().exec()
		if (Object.keys(bookShelf).length && bookShelf.bookShelfLevels.length){
			const result = []
			for (let i=0; i < bookShelf.bookShelfLevels.length; i++){
				for (let k=0; k < bookShelf.bookShelfLevels[i].bookShelfLevelSlots.length; k++){
					if(bookTitle && bookShelf.bookShelfLevels[i].bookShelfLevelSlots[k] && bookShelf.bookShelfLevels[i].bookShelfLevelSlots[k].bookTitle === bookTitle){
						result.push(`${bookTitle} at level ${i+1} slot ${k+1}`)
					} if(bookCategories && bookCategories.every(bookCategory => book.bookCategories.includes(bookCategory))){
						result.push(`${bookTitle} at level ${i+1} slot ${k+1}`)
					}
				}
			} 
			return result
		}
	}

	static async AddBookShelfLevel(){
		const bookShelf = await BookShelf.findOne().exec()
		bookShelf.bookShelfLevels.push({ bookShelfLevelSlots: [null, null, null, null, null]})
		await bookShelf.save(err => {
			if(err) throw new Error(err)
		})
		return bookShelf
	}

	static async DeleteBookShelfLevel(){
		const bookShelf =  await BookShelf.findOne().exec()
		const poppedBookShelfLevel = bookShelf.bookShelfLevels.pop()
		await bookShelf.save(err => {
			if(err) throw new Error(err)
		})
		return poppedBookShelfLevel
	}

	static async AddBookShelf(){
		const newBookShelf = new BookShelf()
		await newBookShelf.save(err => {
			if(err) throw new Error(err)
		})
		return newBookShelf
	}

	static async DeleteBookShelf(data){
		return await BookShelf.deleteOne(data)
	}

}
