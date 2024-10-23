document.getElementById("showsen").onclick = function(){
    let numRows = document.getElementById("senum").value;
    let sentence = document.getElementById("sentence").value;
 
    while(numRows > 0){
        const write = document.createElement("p");
        write.innerHTML = sentence;
        
        document.getElementById("results").appendChild(write);
        console.log(numRows);
        numRows--;
    }

    

}