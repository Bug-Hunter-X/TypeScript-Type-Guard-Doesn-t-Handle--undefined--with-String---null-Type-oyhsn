function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null');
  }
}

printName(null); // Works fine
printName(undefined); // Error: Object is possibly 'undefined'
// error: Object is possibly 'undefined'