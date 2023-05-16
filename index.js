const http = require('http');
const text = (req, res) => {
    let x = 45;
    let y = 10;
    res.write("The sum is  " + x + y);
    res.end();
}
http.createServer(text).listen(4500);

