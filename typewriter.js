const sentence = "hello there from lighthouse labs";
let timer = 150
const typewriter = function(sentence){
  console.log()
  
  for(const word of sentence) {
    timer +=150
    setTimeout(()=>{process.stdout.write(word)},timer)
    
  
  }
  
}

typewriter(sentence)

