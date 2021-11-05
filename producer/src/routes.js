import express from "express";

const routes = express.Router();

routes.post('/certifications', async (req, res) => {
    await req.producer.send({
        topic: 'issue-certificate',
        messages: [
            {value: 'Hello kafka!'}
        ]
    })

    return res.json({ ok: true })
});

export default routes;