const express = require('express');

const app = express();

const specialDays = require('./special.json');

app.get('/', (req, res) => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const monthDay = `${month}/${day}`;

    if (specialDays[monthDay]) {
        res.json({ specialDay: specialDays[monthDay].name, color: specialDays[monthDay].color });
    } else {
        res.json({ specialDay: 'Today is not a special day.', color: '#FFFFFF' });
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});