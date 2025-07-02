function Info(name,callback)
{
    return console.log(`Hello ${name} ${callback()}`);
}

const greet = () => {
  return "Ram Ram Ji"
}

Info('Vineet',greet)