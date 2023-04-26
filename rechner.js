function rechner(num1, num2, operation) {
    let ergebnis;
    
    if (operation === "summe") {
      ergebnis = summe(num1, num2);
    } else if (operation === "differenz") {
      ergebnis = differenz(num1, num2);
    } else {
      console.log("Ungültige Operation.");
      return;
    }
    
    console.log("Das Ergebnis lautet: " + ergebnis);
  }
  
  function summe(num1, num2) {
    return num1 + num2;
  }
  
  function differenz(num1, num2) {
    return num1 - num2;
  }

rechner(5, 3, "summe"); 
rechner(5, 3, "differenz");