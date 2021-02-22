import mongoose from 'mongoose'
import { FixedLengthValidator } from './validators.js'

const { Schema } = mongoose
const { ObjectId } = Schema

const bookSchema = new Schema({
	bookTitle: { type: String, unique: true, required: true},
	bookDescription: String,
	bookCategories: [String],
	bookPrice: { type: Number, min: 0 },
	// bookDeleted: Boolean,
	// bookDeletedDate: {
	// 	type: Date, 
	// 	default: function(){
	// 		if(this.bookDeleted){
	// 			return Date.now()
	// 		} return null
	// 	},
})

const bookShelfLevelSchema = new Schema({
	bookShelfLevelSlots: [
		{
			type: bookSchema,
			default: [null, null, null, null, null],
			validate: {
				validator: val => FixedLengthValidator(val, 5)
			}
		}
	],
})

const bookShelfSchema = new Schema({
	bookShelfLevels: [bookShelfLevelSchema],
})

// bookSchema.methods.editBook = () => {
// 	return undefined
// }
// bookSchema.methods.removeBook = () => {
// 	return undefined
// }

// bookShelfLevelSchema.methods.addBook = () => {
// 	return undefined
// }
// bookShelfLevelSchema.methods.editBook = () => {
// 	return undefined
// }
// bookShelfLevelSchema.methods.searchBook = () => {
// 	return undefined
// }
// bookShelfLevelSchema.methods.removeBook = () => {
// 	return undefined
// }

// bookShelfSchema.methods.addBookShelfLevel = () => {
// 	return undefined
// }
// bookShelfSchema.methods.removeBookShelfLevel = () => {
// 	return undefined
// }
// bookShelfSchema.methods.searchBook = () => {
// 	return undefined
// }


// export const Book = mongoose.model('Book', bookSchema)
export const BookShelf = mongoose.model('BookShelf', bookShelfSchema)
// export const BookShelfLevel = mongoose.model('BookShelfLevel', bookShelfLevelSchema)
