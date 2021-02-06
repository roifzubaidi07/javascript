function panggilSplice() {
  var kota = ['jakarta', 'bandung', 'malang', 'sumenep'];
  console.log(kota);
  // kota.splice(2, 0, 'sumedang');
  kota.splice(2, 1);
  return kota;
}

console.log(panggilSplice());
