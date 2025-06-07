import  express from 'express';

const app = express();
const Port=6969;
app.get('/', (req, res) => {
    res.json({ msg: "Hello, World!" });
});

//CRUD FUNCTIONALITY OF MOVIES

// R -- for Reading
app.get('/movies',()=>{
    
})

// C -- for Creating
app.post('/movies',()=>{

})

// U -- for Updating
app.put('/movies/:id',()=>{
})

// D -- for Deleting
app.delete('/movies/:id',()=>{

})


// Start the server

app.listen(Port,()=>{
    console.log(`The server is running at http://localhost:${Port}`);

});