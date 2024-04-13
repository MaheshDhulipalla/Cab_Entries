// server.js (Express.js)

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); // Import the mysql2 library
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// MySQL connection pool
const db = mysql.createConnection({
  host : 'localhost',
  port : '3306',
  user : 'root',
  password : 'password',
  database : 'db_cab'
});
// POST endpoint to save form data to MySQL database
app.post('/api/form-data', (req, res) => {
  try {
    //const sql = "INSERT INTO form_data (entry_date,Amount,Trips,KmReading,reason,paidBy,entry_type ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = {
      entry_date:req.body.Date,
      Amount:req.body.Amount,
      Trips:req.body.Trips,
      KmReading:req.body.KmReading,
      Reason:req.body.Reason,
      PaidBy:req.body.PaidBy,
      Type:req.body.Type}
    // db.query(sql, [values], (err, data) => {
    //   if (err){
    //     return res.json("Error");
    //   }
    //   return res.json(data);
    // });
    db.query("insert into form_data SET ?",values,(err,result)=>{
      if (err) {
        console.error('Error inserting data into database:', err);
        return res.status(500).send('Internal Server Error');
      }
      
      console.log('Data inserted successfully:', result);
      res.json(result);
    });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
