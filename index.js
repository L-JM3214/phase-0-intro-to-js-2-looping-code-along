function writeCards(spy, giftType) {
    const thankYouMessages = [];
    for (let i = 0; i < spy.length; i++) {
      thankYouMessages.push(`Thank you, ${spy[i]}, for the wonderful ${giftType} gift!`);
    }
    return thankYouMessages;
  }

  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }