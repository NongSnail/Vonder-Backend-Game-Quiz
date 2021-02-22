import { 
	BookController,
	BookShelfLevelController,
	BookShelfController,
} from './controllers.js'


const BASE_API = '/api'

export const registerRoutes = async app => {
	app.get('/', (req, res) => {
		res.send('Hello world!')
	})

	app.get(BASE_API + '/bookshelf', BookShelfController.get)
	app.post(BASE_API + '/bookshelf', BookShelfController.post)
	app.put(BASE_API + '/bookshelf', BookShelfController.put)
	app.patch(BASE_API + '/bookshelf', BookShelfController.patch)
	app.delete(BASE_API + '/bookshelf', BookShelfController.delete)

	return app
}
