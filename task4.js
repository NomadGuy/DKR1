// Метод ітерацій

function func(x) {
    return Math.pow(x, 3) + Math.pow(x, 2) - 3;
  }
  
  function iterativeMethod(initialGuess, tolerance, maxIterations) {
    let x = initialGuess;
  
    for (let i = 1; i <= maxIterations; i++) {
      let fx = func(x);
  
      if (Math.abs(fx) < tolerance) {
        console.log(`Корінь знайдено: ${x} (з точністю ${tolerance})`);
        return;
      }
  
      x = x - 0.1 * fx; 
    }
  
    console.log(`Досягнута максимальна кількість ітерацій (${maxIterations}).`);
  }
  
  iterativeMethod(1.0, 0.0001, 100);
  