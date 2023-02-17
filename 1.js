function showEvenOddZero() {

    let arr = [0, 1, 2, 3, 4, 5, 6, null, 'a', '#'];
    let countEven = 0;
    let countOdd = 0;
    let countZero = 0;
    
    for (let i = 0; i < arr.length; i++){
      if ((arr[i] === 0)) {
        countZero++;
        } else {
          if (arr[i] % 2 === 0) {
            countEven++;
            } else {
              if (arr[i] % 1 === 0) {
                countOdd++;
              }
            }
        }
    }
    console.log("Чётных элементов - " + countEven);
    console.log("Нечётных элементов - " + countOdd);
    console.log("Нулевой элемент - " + countZero);  
    }
    showEvenOddZero();