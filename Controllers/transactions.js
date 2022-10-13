const {Transaction} = require('../models');

class ControllerTransaction {
    static async addTrans(req, res, next){
        try {
            const {id: UserId} = req.user
            console.log(req.body);
            await Transaction.create({
                ...req.body,
                UserId
            })
            res.status(201).json({
                message: `Transaction Success`
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerTransaction