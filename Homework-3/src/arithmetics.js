function arithmetics() {
    let num1 = 3;
    const num2 = 6;
    const num3 = 0;
    const num4 = 1;
    const num5 = 2;
    const num6 = 53;

    const str1 = "Ivan";
    const str2 = "Punkin";
    let str3 = "6";

    let bool1 = true;
    const bool2 = false;

    let x;
    let y;


    let emptyValue1 = null;
    let emptyValue2 = null;

    const obj1 = { value: 10 };
    const obj2 = { value: 8 };

    console.log (num1 + num2);
    console.log (num1 - num2);
    console.log (num1 * num2);
    console.log (num1 / num2);
    console.log (num1 % num2);
    console.log (num1 ** num2);
    console.log (num3 / num3);
    console.log (num4 / num3);
    console.log ((num4 /num3) + num1); //I think this code is not necessary, but I decided to leave it, in case I'm wrong.
    console.log ((num4 /num3) - num1); //I think this code is not necessary, but I decided to leave it, in case I'm wrong.
    console.log ((num4 /num3) * num1); // I think this code is not necessary, but I decided to leave it, in case I'm wrong.
    console.log ((num4 /num3) / num1); // I think this code is not necessary, but I decided to leave it, in case I'm wrong.
    console.log ((num4 /num3) % num1);
    console.log ((num4 /num3) ** num1); // I think this code is not necessary, but I decided to leave it, in case I'm wrong.
    console.log ((num5 ** num6) - num4); // BigInt
    console.log (((num5 ** num6) - num4) + num1);
    console.log (((num5 ** num6) - num4) - num1);
    console.log (((num5 ** num6) - num4) * num1);
    console.log (((num5 ** num6) - num4) / num1);
    console.log (((num5 ** num6) - num4) % num1);
    console.log (((num5 ** num6) - num4) ** num1);
    console.log (str1 + str2);
    console.log (str1 - str2);
    console.log (`Hello, ${str1+str2}`);
    console.log (str3 + str1);
    console.log (str3 - str1);
    console.log (str3 + str3);
    console.log (str3 - str3);
    console.log (str3 * str3);
    console.log (str3 / str3);
    console.log (str3 % str3);
    console.log (str3 ** str3);
    console.log (num1 + str1);
    console.log (str3 + num1);
    console.log (str3 - num1);
    console.log (str3 * num1);
    console.log (str3 / num1);
    console.log (str3 % num1);
    console.log (str3 ** num1);
    console.log ((num4 / num3) + str2);
    console.log ((num4 / num3) - str2);
    console.log ((num4 / num3) + str3);
    console.log ((num4 / num3) / str3);
    console.log (bool1 + bool2);
    console.log (bool1 - bool2);
    console.log (bool1 / bool2);
    console.log (bool1 * bool2);
    console.log (bool1 % bool2);
    console.log (bool1 ** bool2);
    console.log (bool1 + num1);
    console.log (bool1 - num1);
    console.log (bool1 * num1);
    console.log (bool1 / num1);
    console.log (bool1 % num1);
    console.log (bool1 ** num1);
    console.log (bool1 + str3);
    console.log (bool1 - str3);
    console.log (bool1 * str3);
    console.log (bool1 / str3);
    console.log (bool1 % str3);
    console.log (bool1 ** str3);
    console.log (bool1 + str1);
    console.log (bool2 + str1);
    console.log (bool2 - str1); // I'm not sure whether to keep outputting arithmetic results as they will give the NaN value.
    console.log (x);
    console.log (x + y); // I'm not sure whether to keep outputting arithmetic results as they will give the NaN value.
    console.log (x + num1); // I'm not sure whether to keep outputting arithmetic results as they will give the NaN value.
    console.log (x + str1); // I'm not sure whether to keep outputting arithmetic results as they will give the NaN value.
    console.log (x + bool1); // I'm not sure whether to keep outputting arithmetic results as they will give the NaN value.
    console.log (emptyValue1);
    console.log (emptyValue1 + emptyValue2);
    console.log (emptyValue1 - emptyValue2);
    console.log (emptyValue1 * emptyValue2);
    console.log (emptyValue1 / emptyValue2);
    console.log (emptyValue1 % emptyValue2);
    console.log (emptyValue1 ** emptyValue2);
    console.log (emptyValue1 + num1);
    console.log (emptyValue1 - num1);
    console.log (emptyValue1 * num1);
    console.log (emptyValue1 / num1);
    console.log (emptyValue1 % num1);
    console.log (emptyValue1 ** num1);
    console.log (emptyValue1 + str1); // I'm not sure whether to keep outputting arithmetic results as they will give the NaN value.
    console.log (emptyValue1 + str3);
    console.log (emptyValue1 - str3);
    console.log (emptyValue1 * str3);
    console.log (emptyValue1 / str3);
    console.log (emptyValue1 % str3);
    console.log (emptyValue1 ** str3);
    console.log (emptyValue1 + bool1);
    console.log (emptyValue1 - bool1);
    console.log (emptyValue1 * bool1);
    console.log (emptyValue1 / bool1);
    console.log (emptyValue1 % bool1);
    console.log (emptyValue1 ** bool1);
    console.log (emptyValue1 + bool2);
    console.log (emptyValue1 - bool2);
    console.log (emptyValue1 * bool2);
    console.log (emptyValue1 / bool2);
    console.log (emptyValue1 % bool2);
    console.log (emptyValue1 ** bool2);
    console.log (emptyValue1 + x); // I'm not sure whether to keep outputting arithmetic results as they will give the NaN value.
    console.log (obj1.value + obj2.value);
    console.log (obj1.value - obj2.value);
    console.log (obj1.value * obj2.value);
    console.log (obj1.value / obj2.value);
    console.log (obj1.value % obj2.value);
    console.log (obj1.value ** obj2.value);
    console.log (obj1.value + num1);
    console.log (obj1.value - num1);
    console.log (obj1.value * num1);
    console.log (obj1.value / num1);
    console.log (obj1.value % num1);
    console.log (obj1.value ** num1);
    console.log (obj1.value + str1); // I'm not sure whether to keep outputting arithmetic results as they will give the NaN value.
    console.log (obj1.value + str3);
    console.log (obj1.value - str3);
    console.log (obj1.value * str3);
    console.log (obj1.value / str3);
    console.log (obj1.value % str3);
    console.log (obj1.value ** str3);
    console.log (obj1.value + bool1);
    console.log (obj1.value - bool1);
    console.log (obj1.value * bool1);
    console.log (obj1.value / bool1);
    console.log (obj1.value % bool1);
    console.log (obj1.value ** bool1);
    console.log (obj1.value + bool2);
    console.log (obj1.value - bool2);
    console.log (obj1.value * bool2);
    console.log (obj1.value / bool2);
    console.log (obj1.value % bool2);
    console.log (obj1.value ** bool2);
    console.log (obj1.value + x); // I'm not sure whether to keep outputting arithmetic results as they will give the NaN value.
    console.log (obj1.value + emptyValue1);
    console.log (obj1.value - emptyValue1);
    console.log (obj1.value * emptyValue1);
    console.log (obj1.value / emptyValue1);
    console.log (obj1.value % emptyValue1);
    console.log (obj1.value ** emptyValue1);
    console.log (num1 += num2);
    console.log (num1 -= num2);
    console.log (num1 *= num2);
    console.log (num1 /= num2);
    console.log (num1 ++);
    console.log (num1 --);
    console.log (num1 += str3);
    console.log (num1 -= str3);
    console.log (num1 *= str3);
    console.log (num1 /= str3);
    console.log (str3 ++);
    console.log (str3 --);
    console.log (num1 += bool1);
    console.log (num1 -= bool1);
    console.log (num1 *= bool1);
    console.log (num1 /= bool1);
    console.log (bool1 ++);
    console.log (bool1 --);
    console.log (num1 += x);
    console.log (num1 -= x);
    console.log (num1 *= x);
    console.log (num1 /= x);
    console.log (x ++);
    console.log (x --);
    console.log (num1 += emptyValue1);
    console.log (num1 -= emptyValue1);
    console.log (num1 *= emptyValue1);
    console.log (num1 /= emptyValue1);
    console.log (emptyValue1 ++);
    console.log (emptyValue1 --);
    console.log (num1 += obj1.value);
    console.log (num1 -= obj1.value);
    console.log (num1 *= obj1.value);
    console.log (num1 /= obj1.value);
    console.log (obj1.value ++);
    console.log (obj1.value --);
    console.log (str3 += str1);
    console.log (str3 -= str1);
    console.log (str3 *= str1);
    console.log (str3 /= str1);
    console.log (str3 += bool1);
    console.log (str3 -= bool1);
    console.log (str3 *= bool1);
    console.log (str3 /= bool1);
    console.log (str3 += x);
    console.log (str3 -= x);
    console.log (str3 *= x);
    console.log (str3 /= x);
    console.log (str3 += emptyValue1);
    console.log (str3 -= emptyValue1);
    console.log (str3 *= emptyValue1);
    console.log (str3 /= emptyValue1);
    console.log (str3 += obj1.value);
    console.log (str3 -= obj1.value);
    console.log (str3 *= obj1.value);
    console.log (str3 /= obj1.value);
    console.log (bool1 += bool2);
    console.log (bool1 -= bool2);
    console.log (bool1 *= bool2);
    console.log (bool1 /= bool2);
    console.log (bool1 += x);
    console.log (bool1 -= x);
    console.log (bool1 *= x);
    console.log (bool1 /= x);
    console.log (bool1 += emptyValue1);
    console.log (bool1 -= emptyValue1);
    console.log (bool1 *= emptyValue1);
    console.log (bool1 /= emptyValue1);
    console.log (bool1 += obj1.value);
    console.log (bool1 -= obj1.value);
    console.log (bool1 *= obj1.value);
    console.log (bool1 /= obj1.value);
    console.log (x += y);
    console.log (x -= y);
    console.log (x *= y);
    console.log (x /= y);
    console.log (x += emptyValue1);
    console.log (x -= emptyValue1);
    console.log (x *= emptyValue1);
    console.log (x /= emptyValue1);
    console.log (x += obj1.value);
    console.log (x -= obj1.value);
    console.log (x *= obj1.value);
    console.log (x /= obj1.value);
    console.log (emptyValue2 += emptyValue1);
    console.log (emptyValue2 -= emptyValue1);
    console.log (emptyValue2 *= emptyValue1);
    console.log (emptyValue2 /= emptyValue1);
    console.log (emptyValue2 += obj1.value);
    console.log (emptyValue2 -= obj1.value);
    console.log (emptyValue2 *= obj1.value);
    console.log (emptyValue2 /= obj1.value);
    console.log (obj2.value += obj1.value);
    console.log (obj2.value -= obj1.value);
    console.log (obj2.value *= obj1.value);
    console.log (obj2.value /= obj1.value);

}
arithmetics();


