/* process.args is a array its elements are [node get_input2.js create get2.txt "My name is Sumit"] this 
command */

console.warn(process.argv);
// node get_input.js hello
// After running above command we get three arguments in the process 

// So to access third argumnet just  pass this command :
console.warn(process.argv[2]);

console.warn(process.argv[3]);

// node get_input.js hello Sumit
/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\Sumit\\Web Development\\Web Dev Pgm\\MERN\\NODE JS_2\\get_input.js',
  'hello',
  'Sumit'
]
*/

