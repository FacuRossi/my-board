const Board = require('../pojos/Board')

exports.getAll = (req, res) => {
	Board.find({}, (err,result) => {
        res.status(200).send(result)
	})
}

exports.add = (req, res) => {
	let board = new Board(
	    {
		name: req.body.name,
		desc: req.body.desc
	    }
	);
	board.save(function (err) {
	    if (err) {
		return next(err);
	    }
	    res.status(201).send({message: "Board created successfully"})
	})
    };

exports.getById = (req, res) => {
	Board.findOne({ _id : req.params.boardId}, (err,result) => {
        res.status(200).send(result)
	})
}

exports.update = (req, res) => {
    Board.findOneAndUpdate(req.params.boardId, {$set: req.body}, (err, result) => {
        if (err) return next(err);
        res.status(200).send(req.body)
	})
}

exports.delete = (req, res) => {
    Board.findOneAndDelete(req.params.boardId, (err) => {
        if (err) return next(err);
        res.send({message: "Board deleted successfully"})
    })
}