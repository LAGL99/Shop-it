
export function toReqRespUsuarioListado(json) {
  return JSON.parse(json);
}

export function reqRespUsuarioListadoToJson(value) {
  return JSON.stringify(value, null, 2);
}

export const typeMap = {
  
  "Product":{
    "id": 0,
    "title": "",
    "price": 0.1,
    "description": "",
    "category": "",
    "image": ""
    },
};

export default {
  toReqRespUsuarioListado,
  reqRespUsuarioListadoToJson
};