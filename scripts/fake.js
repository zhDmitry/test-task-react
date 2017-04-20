const faker = require('faker');
const fs = require('fs');

const res = [];
for (let i = 0; i < 1000; i++) {
    const start = faker.date.past();
    res.push({
        id: faker.random.uuid(),
        date: faker.date.past(),
        startTime: start,
        endTime: faker.date.between(start, new Date()),
        comment: faker.lorem.sentences(2)
    })
}

fs.writeFileSync('../db.json', JSON.stringify(res));
