// Temporal Dead Zone

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a;
console.log(a);

// before declaration = not accessible (tdz)

// at declaration if no value initialized = becomes undefined

// after assignment = gets actual value

//tdz = time between variable is created(memory phase) and initialized (execution phase)
