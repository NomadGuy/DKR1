// Метод дотичних

function func(x) {
    return Math.pow(x, 3) + Math.pow(x, 2) - 3;
  }
  
  function derivative(x) {
    return 3 * Math.pow(x, 2) + 2 * x;
  }
  
  function newtonMethod(initialGuess, tolerance, maxIterations) {
    let x = initialGuess;
  
    for (let i = 1; i <= maxIterations; i++) {
      let fx = func(x);
      let dfx = derivative(x);
  
      if (Math.abs(fx) < tolerance) {
        console.log(`Корінь знайдено: ${x} (з точністю ${tolerance})`);
        return;
      }
  
      x = x - fx / dfx;
    }
  
    console.log(`Досягнута максимальна кількість ітерацій (${maxIterations}).`);
  }
  
  newtonMethod(1.0, 0.0001, 100);
  