const http = require('http');
const path = require("path");
const fs = require("fs");
const { exit } = require('process');
const port = 3000;
const server = http.createServer();

fs.readFile("./test.txt", "utf-8", (error, info) => {
    if (error) {
        console.log(error);
        exit()
    } 
    else {
        if (info === '') {
            console.log("File is Empty");
            exit()
        } 
        else {
            fs.appendFile("./test1.txt", info, (err, data) => {
                if (err) {
                    console.log(err);
                    exit();
                }
                console.log(info);
                exit()
            });
        }
    }
});
server.listen(port);