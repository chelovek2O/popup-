

console.log('Script imported successfully');

  function inputlabel() {
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById("productPrice").value;
    const productName2 = document.getElementById("productName2").value;
    const productPrice2 = document.getElementById("productPrice2").value;
    alert(productName + ' ' + productPrice + ' ' + productName2 + ' '  + productPrice2 + ' ');
    console.log(productName)
    console.log(productPrice)
    console.log(productName2)
    console.log(productPrice2)
    
  }
  
  document.addEventListener('submit', function () {
    inputlabel()
  })
