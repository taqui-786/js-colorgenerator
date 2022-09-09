let main = document.getElementById("main");
let tle= document.getElementById("title");
let result = document.getElementById("result")
   function change() {
     let num = [];
     let num2 = [];
     let num3 = [];
     // Rgb 1 defining      :
     let ran = Math.random();
     num += ran;
     f = num.slice(5, 7);
     Myrgb = "rgb(8 4 5)";
     charRgb = Myrgb.charAt(4);
     Newrgb = Myrgb.replace(charRgb, f);
     // console.log(Newrgb)
     // Rgb 2 defining      :
     let ran2 = Math.random();
     num2 += ran2;
     f2 = num2.slice(5, 7);
     Myrgb2 = String(Newrgb);
     charRgb2 = Myrgb2.charAt(7);
     Newrgb2 = Myrgb2.replace(charRgb2, f2);
     // console.log(Newrgb2)
     // Rgb 3 defining    :
     let ran3 = Math.random();
     num3 += ran3;
     f3 = num3.slice(5, 7);
     Myrgb3 = String(Newrgb2);
     charRgb3 = String(Myrgb3).charAt(10);
     Newrgb3 = String(Myrgb3).replace(charRgb3, f3);
     console.log(Newrgb3);
     // It is main output display
     result.innerHTML = Newrgb3
     main.style.backgroundColor = Newrgb3;
tle.style.display = "none"
result.style.display = "inline-grid"

   }