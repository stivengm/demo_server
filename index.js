import express from 'express';

import { accountRouter } from './src/routes/account.route.js';

const app = express();


app.get('/api/v1/account', accountRouter);



const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});