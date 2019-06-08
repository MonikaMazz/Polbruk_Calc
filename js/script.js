var x;
var y;
var z;
var wynik;

function solveIt() {
    const width = document.getElementById("szerokosc").value; // szerokość jezdni
    const kostka1 = document.getElementById("kostka1").value; //szerokość pierwszej kostki
    const kostka2 = document.getElementById("kostka2").value; //szerokość drugiej kostki
    const kostka3 = document.getElementById("kostka3").value; // szerokość trzeciej kostki
    document.getElementById("lista").innerHTML = " ";
    // if (width%kostka1==0 || width%kostka2==0 || width%kostka3==0) { 
    for (x = 0; x < (width / kostka1 + 1); x++) {
        for (y = 0; y < (width / kostka2 + 1); y++) {
            for (z = 0; z < (width / kostka3 + 1); z++) {
                // console.log(" x = " + x + " y = " + y + " z = " + z )
                var wynik = kostka1 * x + kostka2 * y + kostka3 * z;
                // console.log(wynik);
                if (wynik == width) {
                    const el = document.createElement("tr");
                    var tableElement = "<td>" + x + " x " + kostka1 + " cm " + "</td><td>" + y + " x " + kostka2 + " cm </td><td>" + z + " x " + kostka3 + " cm </td>";
                    el.innerHTML = tableElement;
                    const lista = document.getElementById("lista");
                    lista.appendChild(el);
                    //             if (  document.getElementById("lista").innerText == ""
                    // ) {
                    //               alert("Danej szerokości nie da się ułożyć z określonych kostek.");
                    // }
                }
            }
        }
        // }
    }
    //   else {
    //     // alert("Zostaje reszta!");
    //     let reszta1 = width%kostka1; 
    //     let reszta2 = width%kostka2;
    //     let reszta3 = width%kostka3;
    //     let reszta = Math.min(reszta1,reszta2,reszta3);
    //     alert("Zostaje " + reszta + " - trzeba dociąć.");
    //     let newWidth = width-reszta;
    //     for (x = 0; x < (newWidth/kostka1); x++) { 
    //       for (y = 0; y < (newWidth/kostka2); y++) {
    //         for (z = 0; z < (newWidth/kostka3); z++) {
    //           // console.log(" x = " + x + " y = " + y + " z = " + z )
    //           var wynik = kostka1*x + kostka2*y + kostka3*z;
    //           // console.log(wynik);
    //           if (wynik == newWidth) {
    //             // console.log("dupa");
    //             const el = document.createElement("li");
    //             var listElement = x + "kostek 9 cm," + y + "kostek 12 cm," + z + "kostek 18 cm";  
    //             el.innerHTML = listElement;
    //             const lista = document.getElementById("lista");
    //             lista.appendChild(el); 
    //         }
    //     }
    // }
    // }
    // }

}