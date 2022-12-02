export interface InterpectorResponse {
  body: { recordings: number; approved: number; rejected: number };
  headers: Object;
  ok: boolean;
  status: number;
  statusText: string;
  type: number;
  url: string;
}

export interface InterceptorRequest {
  body: string;
  context: Object;
  headers: Object;
  method: string;
  params: Object;
  reportProgress: boolean;
  responseType: string;
  url: string;
  urlWithParams: string;
  withCredentials: boolean;
}
export interface FriendsModel {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: false;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface HeaderOptionType {
  ['Authorization']: string;
}

export type HeaderDefaultOption =
  | string
  | { [name: string]: string | string[] }
  | undefined;

export interface RequestInfoModel {
  endpoint: string;
  loader: boolean;
  treatError: boolean;
  messages:ResponseMessageModel['messages']
}

export interface ResponseMessageModel {
  messages: {
    success: {
      title: string;
      message: string;
      severity: 'success' | 'info' | 'warn';
    };
    error: {
      title: string;
      message: string;
      severity: 'error';
    };
  };
}
