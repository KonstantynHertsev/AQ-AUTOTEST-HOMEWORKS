function logical() {
    let num1 = 3;    
    let str1 = "Ivan";
    let bool1 = true;
    let x
    let emptyValue1 = null;
    let obj1 = { value: 10 };


   console.log (num1 < str1);
   console.log (num1 > str1);
   console.log (num1 <= str1);
   console.log (num1 >= str1);
   console.log (num1 == str1);
   console.log (num1 === str1);
   console.log (num1 != str1);
   console.log (num1 !== str1);
   console.log (num1 < bool1);
   console.log (num1 > bool1);
   console.log (num1 <= bool1);
   console.log (num1 >= bool1);
   console.log (num1 == bool1);
   console.log (num1 === bool1);
   console.log (num1 != bool1);
   console.log (num1 !== bool1);
   console.log (num1 < x);
   console.log (num1 > x);
   console.log (num1 <= x);
   console.log (num1 >= x);
   console.log (num1 == x);
   console.log (num1 === x);
   console.log (num1 != x);
   console.log (num1 !== x);
   console.log (num1 < emptyValue1);
   console.log (num1 > emptyValue1);
   console.log (num1 <= emptyValue1);
   console.log (num1 >= emptyValue1);
   console.log (num1 == emptyValue1);
   console.log (num1 === emptyValue1);
   console.log (num1 != emptyValue1);
   console.log (num1 !== emptyValue1);
   console.log (num1 < obj1.value);
   console.log (num1 > obj1.value);
   console.log (num1 <= obj1.value);
   console.log (num1 >= obj1.value);
   console.log (num1 == obj1.value);
   console.log (num1 === obj1.value);
   console.log (num1 != obj1.value);
   console.log (num1 !== obj1.value);
   console.log (str1 < bool1);
   console.log (str1 > bool1);
   console.log (str1 <= bool1);
   console.log (str1 >= bool1);
   console.log (str1 == bool1);
   console.log (str1 === bool1);
   console.log (str1 != bool1);
   console.log (str1 !== bool1);
   console.log (str1 < x);
   console.log (str1 > x);
   console.log (str1 <= x);
   console.log (str1 >= x);
   console.log (str1 == x);
   console.log (str1 === x);
   console.log (str1 != x);
   console.log (str1 !== x);
   console.log (str1 < emptyValue1);
   console.log (str1 > emptyValue1);
   console.log (str1 <= emptyValue1);
   console.log (str1 >= emptyValue1);
   console.log (str1 == emptyValue1);
   console.log (str1 === emptyValue1);
   console.log (str1 != emptyValue1);
   console.log (str1 !== emptyValue1);
   console.log (str1 < obj1.value);
   console.log (str1 > obj1.value);
   console.log (str1 <= obj1.value);
   console.log (str1 >= obj1.value);
   console.log (str1 == obj1.value);
   console.log (str1 === obj1.value);
   console.log (str1 != obj1.value);
   console.log (str1 !== obj1.value);
   console.log (bool1 < x);
   console.log (bool1 > x);
   console.log (bool1 <= x);
   console.log (bool1 >= x);
   console.log (bool1 == x);
   console.log (bool1 === x);
   console.log (bool1 != x);
   console.log (bool1 !== x);
   console.log (bool1 < emptyValue1);
   console.log (bool1 > emptyValue1);
   console.log (bool1 <= emptyValue1);
   console.log (bool1 >= emptyValue1);
   console.log (bool1 == emptyValue1);
   console.log (bool1 === emptyValue1);
   console.log (bool1 != emptyValue1);
   console.log (bool1 !== emptyValue1);
   console.log (bool1 < obj1.value);
   console.log (bool1 > obj1.value);
   console.log (bool1 <= obj1.value);
   console.log (bool1 >= obj1.value);
   console.log (bool1 == obj1.value);
   console.log (bool1 === obj1.value);
   console.log (bool1 != obj1.value);
   console.log (bool1 !== obj1.value);
   console.log (x < emptyValue1);
   console.log (x > emptyValue1);
   console.log (x <= emptyValue1);
   console.log (x >= emptyValue1);
   console.log (x == emptyValue1);
   console.log (x === emptyValue1);
   console.log (x != emptyValue1);
   console.log (x !== emptyValue1);
   console.log (x < obj1.value);
   console.log (x > obj1.value);
   console.log (x <= obj1.value);
   console.log (x >= obj1.value);
   console.log (x == obj1.value);
   console.log (x === obj1.value);
   console.log (x != obj1.value);
   console.log (x !== obj1.value);
   console.log (emptyValue1 < obj1.value);
   console.log (emptyValue1 > obj1.value);
   console.log (emptyValue1 <= obj1.value);
   console.log (emptyValue1 >= obj1.value);
   console.log (emptyValue1 == obj1.value);
   console.log (emptyValue1 === obj1.value);
   console.log (emptyValue1 != obj1.value);
   console.log (emptyValue1 !== obj1.value);
   console.log(bool1 && (num1 > 2));    
   console.log(bool1 && (num1 < 2));    
   console.log(str1 && (num1 > 2));    
   console.log(emptyValue1 && bool1);   
   console.log(obj1 && obj1.value);     
   console.log(bool1 || (num1 < 2));    
   console.log(emptyValue1 || bool1);   
   console.log(str1 || (num1 < 2));     
   console.log(x || "default");        
   console.log(obj1 || false);         
   console.log(!(num1 === 3));         
   console.log(!emptyValue1);          
   console.log(!bool1);                 
   console.log(!x);                     
   console.log(!(obj1.value === 10));   
   console.log(x ?? "default");         
   console.log(emptyValue1 ?? "default"); 
   console.log(str1 ?? "default");     
   console.log(obj1 ?? "default");      
}
logical();
