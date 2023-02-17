function isPrime(num) {
    if (num < 0 || num > 1000) return "Данные неверны";
      for (let i = 2; i <= num / 2; i++)
                if (num % i === 0) return "Составное число";
          if (num === 0 || num === 1) return "Число не является ни простым, ни составным";
      return "Простое число";
  }
  console.log(isPrime(1001));