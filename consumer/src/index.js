import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092']
});

const topic = 'kafka-sample'
const consumer = kafka.consumer({ groupId: 'certificate-group' });

async function run() {
    await consumer.connect();
    await consumer.subscribe({ topic })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                topic,
                partition,
                offset: message.offset,
                value: message.value.toString(),
            })
        },
    })
}

run().catch(console.error)