var express=require("express"),app=express(),http=require("http").Server(app),io=require("socket.io")(http);app.get("/",function(e,n){n.sendFile(__dirname+"/public/index.html")}),io.on("connection",function(e){console.log("Tenemos una nueva victima!!"),e.on("chat",function(e){io.emit("nuevo_mensaje",e)})});
