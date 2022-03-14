export const parseQueryIntoObject = (querystring) => {
  const params = new URLSearchParams(querystring);
  const obj = {};

  for (const key of params.keys()) {
    if (params.getAll(key).length > 1) {
      obj[key] = params.getAll(key);
    } else {
      obj[key] = params.get(key);
    }
  }

  return obj;
};

export const makeQueryStringFromObject = (object) => {
  const result = [];
  for (let [k, v] of Object.entries(object)) {
    if (Array.isArray(v)) {
      result.push(...v.map((el) => `${k}=${el}`));
    } else {
      result.push(`${k}=${v}`);
    }
  }
  return "?" + result.join("&");
};
