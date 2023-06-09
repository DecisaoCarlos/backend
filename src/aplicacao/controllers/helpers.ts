import { Atividade } from "src/framework/sequelize/atividade";
import { HttpResponse, HttpStatusCode } from "./protocolo";

export const ok = <T>(body: any): HttpResponse<T> => ({
  statusCode: HttpStatusCode.OK,
  body,
});

export const created = <T>(body: any): HttpResponse<T> => ({
  statusCode: HttpStatusCode.CREATED,
  body,
});

export const badRequest = (message: string): HttpResponse<string> => {
  return {
    statusCode: HttpStatusCode.BAD_REQUEST,
    body: message,
  };
};

export const serverError = (): HttpResponse<string> => {
  return {
    statusCode: HttpStatusCode.SERVER_ERROR,
    body: "Json Invalido",
  };
};

export function validaErro(error: string | any) {
  const retorno = {
    descricao: '',
    codigo: 400
  }

  if (error instanceof Error) {
    retorno.descricao = error.message;
  } else {
    retorno.descricao = JSON.stringify(error)
  }
  return retorno
}