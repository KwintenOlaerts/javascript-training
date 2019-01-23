 

const makeChoice = () => {
    let input = window.prompt(`Kies 1, 2 of 3:`)
    switch(true) {
      case (input === "1"):
      window.alert(`1. Thank you`)
      break;
      case (input === "2"):
      window.alert(`2. Hello`)
      break;
      case (input === "3"):
      window.alert(`3. Good Bye`)
      break;
      default:
      window.alert(`Excuse me, what do you want?`)
    }
  }

 
  