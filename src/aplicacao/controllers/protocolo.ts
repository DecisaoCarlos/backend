export interface HttpResponse<T> {
    status(statusCode: HttpStatusCode): unknown;
    statusCode: HttpStatusCode;
    body: T;
  }
  
  export interface HttpRequest<B> {
    params?: any;
    headers?: any;
    body?: B;
  }
  
  export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    SERVER_ERROR = 500,
  }
  export interface IGetatividade {
    id?:number;
    descricao?: string;
    estadoDaAtividade: boolean;
  }