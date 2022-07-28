const http = require('http')
const fs = require('fs')
const port = 3333


const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type': 'text/html'
    })
    fs.readFile('index.html', (err,data) => {
        if(!err){
            console.log('In !error ')
            res.write(data)
            res.end()
        }else{
            console.log('In !error')
            res.writeHead(404)
            res.write('File not found!!')
            res.end()
        }
    })
    
})

server.listen(port,(err)=>{

    if(err){
        console.log('Error Deteected!!',err)
    }else{
        console.log('Server running on port '+port)
    }
})