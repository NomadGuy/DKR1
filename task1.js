// Метод половинного поділу

function func(x) {
    return Math.pow(x, 3) + Math.pow(x, 2) - 3;
  }
  
  function bisectionMethod(a, b, tolerance, maxIterations) {
    let fa = func(a);
    let fb = func(b);
  
    if (fa * fb >= 0) {
      console.log("Не гарантується наявність кореня у заданому інтервалі.");
      return;
    }
  
    let c;
  
    for (let i = 1; i <= maxIterations; i++) {
      c = (a + b) / 2;
      let fc = func(c);
  
      if (Math.abs(fc) < tolerance) {
        console.log(`Корінь знайдено: ${c} (з точністю ${tolerance})`);
        return;
      }
  
      if (fa * fc < 0) {
        b = c;
        fb = fc;
      } else {
        a = c;
        fa = fc;
      }
    }
  
    console.log(`Досягнута максимальна кількість ітерацій (${maxIterations}).`);
  }
  
  bisectionMethod(0.6, 1.4, 0.0001, 100);
  