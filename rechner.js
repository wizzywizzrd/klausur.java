function rechner(num1, num2, operation) {
    let ergebnis;
    
    if (operation === "summe") {
      ergebnis = summe(num1, num2);
    } else if (operation === "produkt") {
      ergebnis = produkt(num1, num2);
    } else {
      console.log("Ungültige Operation.");
      return;
    }
    
    console.log("Das Ergebnis lautet: " + ergebnis);
  }
  
  function summe(num1, num2) {
    return num1 + num2;
  }
  
  function produkt(num1, num2) {
    return num1 * num2;
  }

rechner(26, 5, "summe"); 
rechner(12, 9, "produkt");