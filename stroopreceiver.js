const app = require('express')();
const fs = require('fs');

app.get('/stroopdata', (req, res) => {
  const data = {
    response: req.query.response ?? null,
    color: req.query.color ?? null,
    text: req.query.text ?? null,
    timeTaken: req.query.timeTaken ?? null,
    age: req.query.age ?? null,
    timestamp: new Date().toISOString(),
  };
  let responded = false;
  fs.appendFile('stroopdata.txt', `${JSON.stringify(data)}\n`, (err) => {
    if (!responded) {
      res.json({ success: true });
      responded = true;
    }
  });
  if (!responded) {
    res.json({ success: false });
    responded = true;
  }
});

app.listen(3001, () => {
  console.log('stroop receiver started on port 3001');
});
