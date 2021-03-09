const sentence = 'Loading⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳';

let typewriter = function(sentence) {
  let interval = 0;
  
  for (const char of sentence) {
    
    setTimeout(() => {
      process.stdout.write(char);
    }, interval);
    interval += 100;
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, interval);
};
    
typewriter(sentence);

