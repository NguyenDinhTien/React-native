function currentcy(num) {
  const price =
    "₫ " + num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  //const price = num.toFixed(3);
  //const price = num + `k`;
  return price;
}

export default currentcy;
