import { RequestInfoModel, ResponseMessageModel } from "../interfaces/http.model";

export const requestInfo: RequestInfoModel[] = [
  {
    endpoint: "/followers",
    loader: true,
    treatError: true,
    messages: {
      success: {
        title: "Requisição de Amigos",
        message: "requisição feita com sucesso,segue os amigos",
        severity: "success"
      },
      error: {
        title: "Requisição de Amigos",
        message: "Erro ao buscar amigos",
        severity: "error"
      }
    },
  }
];

export const defaultRequestInfo: ResponseMessageModel =  {
  messages: {
    success: {
      title: "Requisição Default",
      message: "Requisição Default feita com sucesso",
      severity: "success"
    },
    error: {
      title: "Requisição Default",
      message: "Erro inesperado",
      severity: "error"
    }
  },
}
