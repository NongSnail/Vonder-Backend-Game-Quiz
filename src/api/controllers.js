import AdminService from '../services/adminService.js'

class BaseController {

	static async get(req, res){
		return undefined
	}

	static async post(req, res){
		return undefined
	}

	static async put(req, res){
		return undefined
	}

	static async patch(req, res){
		return undefined
	}

	static async delete(req, res){
		return undefined
	}

}

export class BookController extends BaseController {

	static async get(req, res){
		res.send(undefined)
	}

	static async post(req, res){
		const {
			bookTitle,
			bookDescription,
			bookCategories,
			bookPrice,
		} = req.body
		const result = await AdminService.BookService().AddBook({
			bookTitle,
			bookDescription,
			bookCategories,
			bookPrice
		})
		res.status(200).json(result)
	}

	static async put(req, res){
		res.send(undefined)
	}

	static async patch(req, res){
		BookController.put(req, res)
	}

}

export class BookShelfLevelController extends BaseController {

	static async post(req, res){

	}

	static async delete(req, res){

	}

}

export class BookShelfController extends BaseController {

	static async get(req, res){
		const { bookTitle, bookCategories } = req.query

		const result = await AdminService.BookService().SearchBook({
			bookTitle,
			bookCategories,
		})

		res.status(200).json(result)
	}

	static async post(req, res){
		const { context } = req.body


		let result

		if(context === 'bookshelf'){
			result = await AdminService.BookService().AddBookShelf()
		}
		else if(context === 'bookshelf-level'){
			result = await AdminService.BookService().AddBookShelfLevel()
		}
		else if(context === 'bookshelf-level-book'){
			const {
				bookTitle,
				bookDescription,
				bookCategories,
				bookPrice
			} = req.body
			result = await AdminService.BookService().AddBook({
				bookTitle,
				bookDescription,
				bookCategories,
				bookPrice
			})
		}


		res.status(200).json(result)
	}

	static async put(req, res){
		const { oldBookTitle, bookTitle, bookDescription, bookCategories, bookPrice } = req.body
		const result = await AdminService.BookService().EditBook({
			oldBookTitle,
			bookTitle,
			bookDescription,
			bookCategories,
			bookPrice
		}) 
		res.status(200).json(result)
	}

	static async patch(req, res){
		BookShelfController.put(req, res)
	}

	static async delete(req, res){
		const { context } = req.body

		let result

		if(context === 'bookshelf'){
			result = await AdminService.BookService().DeleteBookShelf()
		}
		else if(context === 'bookshelf-level'){
			result = await AdminService.BookService().DeleteBookShelfLevel()
		}
		else if(context === 'bookshelf-level-book'){
			const { bookTitle } = req.body
			result = await AdminService.BookService().DeleteBook({ bookTitle })
		}

		res.status(200).json(result)
	}

}
