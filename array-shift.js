function panggilShift() {
  var kota = ['jakarta', 'bandung', 'malang', 'surabaya', 'sumenep'];
  console.log(kota);
  console.log('===============');
  kota2 = kota.shift();
  console.log(kota2);
  return kota;
}

console.log(panggilShift());
