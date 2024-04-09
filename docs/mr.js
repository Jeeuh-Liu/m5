
type Config = {
  gid?: string;
};

type MapReduceConfig = {
  keys: any;
  map: any;
  reduce: any;
};

type Callback = (error: Error | null, result: any[]) => void;

const mr = function(config:Config) {

  return {
    exec: (mrConfig:MapReduceConfig, callback:Callback) => {
      /* Change this with your own exciting Map Reduce code! */
      callback(null, []);
    },
  };
};

module.exports = mr;
