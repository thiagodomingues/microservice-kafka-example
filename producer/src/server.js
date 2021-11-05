
import express from 'express';
import { Kafka } from 'kafkajs';
import routes from './routes';

const app = express();

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092']
});

/**
 * Inject producer to all routes
 */
 app.use((req, res, next) => {
    req.producer = producer;
  
    return next();
})


app.use(routes);

const producer = kafka.producer();

async function run() {
    await producer.connect()
    app.listen(3333);
}

run().catch(error => console.log(error));


