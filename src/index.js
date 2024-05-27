const express = require("express")
const path = require("path")
const app = express()
// const hbs = require("hbs")
const LogInCollection = require("./mongo")
const port = process.env.PORT || 3000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))


// hbs.registerPartials(partialPath)


app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/', (req, res) => {
    res.render('login')
})




// app.get('/home', (req, res) => {
//     res.render('home')
// })

app.post('/signup', async (req, res) => {
    try {
      const checking = await LogInCollection.findOne({ name: req.body.name });
  
      if (checking) {
        res.send("user details already exists");
      } else {
        const data = {
          name: req.body.name,
          password: req.body.password
        };
        await LogInCollection.insertMany([data]);
        res.status(201).render("home", { naming: req.body.name });
      }
    } catch (e) {
      res.send("wrong inputs");
    }
  });


app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
        

    }


})
const session = require('express-session');

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.get('/logout', (req, res) => {
    console.log(req.session);
    // Clear the user session or perform any other logout logic
    req.session.destroy();
    res.sendStatus(200); // Send a success response
  });




app.listen(port, () => {
    console.log('port connected');
})