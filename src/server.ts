import app from './app';

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Local server: http://localhost:${PORT}`);
    });
}

export default app;
