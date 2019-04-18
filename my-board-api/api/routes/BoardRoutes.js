module.exports = (app) => {
	var boardController = require('../controllers/BoardController')

  	app.route('/board')
		.get(boardController.getAll)
	
	app.route('/board')
		.post(boardController.add);

  	app.route('/board/:boardId')
		.get(boardController.getById)
	
	app.route('/board/:boardId')
		.put(boardController.update)
	
	app.route('/board/:boardId')
    	.delete(boardController.delete)
};