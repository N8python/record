function record(obj){
  return Object.freeze({
    ...obj,
    with(spec){
      return record(Object.assign({}, {...obj}, {...spec}));
    }
  });
}
record.factory = () => obj => record(obj);
