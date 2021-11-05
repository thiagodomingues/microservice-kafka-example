import express from "express";

const routes = express.Router();

routes.post('/send-message', async (req, res) => {
    await req.producer.send({
        topic: 'kafka-sample',
        messages: [
            { value: 'Hello kafka!' }
        ]
    })

    return res.json({ ok: true })
});

export default routes;