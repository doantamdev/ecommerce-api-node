const orderService = require("../services/order.service.js")

const createOrder = async (req, res) => {
    const user = await req.user
    try {
        let createdOrder = await orderService.createOrder(user, req.body)
        return res.status(200).send(createdOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const findOrderById = async (req, res) => {
    try {
        let order = await orderService.findOrderById(req.params.id)
        return res.status(200).send(order);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const orderHistory = async (req, res) => {
    const user = await req.user
    try {
        let orderHistory = await orderService.usersOrderHistory(user._id)
        return res.status(200).send(orderHistory);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

module.exports = {
    createOrder,
    findOrderById,
    orderHistory,
}