import express from 'express';
const app = express();


app.get('/profile/:username', (req, res) => {
    const username = req.params.username;
    console.log(`Username: ${username}`);
    res.send(`<h1>Profile of ${username}</h1>`);
});

app.get('/profile/:username/:id',(req,res)=>{
    const username = req.params.username;
    const id=req.params.id;
    res.send(`<h1>Hey ${username}! this is your ID:${id}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);