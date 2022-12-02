import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse, HttpResponseBase } from "@angular/common/http";
import { HeaderDefaultOption, HeaderOptionType, InterceptorRequest, InterpectorResponse, ResponseMessageModel } from "../interfaces/http.model";
import { catchError, finalize, map, Observable, of } from "rxjs";
import { FeedBackService } from '../services/feedback.service';
import { LoaderService } from '../services/loader.service';
import {defaultRequestInfo, requestInfo} from "../utils/request-info";

@Injectable()
export class Interceptor implements HttpInterceptor {
    private readonly apiKey = environment.apiKey;

    constructor(private feedbackService: FeedBackService, private loaderService: LoaderService) { }

    intercept(req: HttpRequest<InterceptorRequest>, next: HttpHandler): Observable<HttpEvent<InterpectorResponse | any>> {

      let currentRequest = requestInfo.filter(request => req.url?.includes(request.endpoint))[0];

      if(currentRequest) {
        currentRequest.loader && this.loaderService.toggleLoader(true);
      } else {
        this.loaderService.toggleLoader(true);
      }

      let clonedRequest: HttpRequest<InterceptorRequest>;

      let headerOptions = {} as HeaderOptionType;

      if(req.url.includes(environment.apiURL)) {
        headerOptions['Authorization'] = `${this.apiKey}`;
      }

      let headers = new HttpHeaders(headerOptions as unknown as HeaderDefaultOption);

      clonedRequest = req.clone({
        headers: headers,
      });

      let returnResponse = {} as ResponseMessageModel['messages']['success'] | ResponseMessageModel['messages']['error'] ;


      return next.handle(clonedRequest).pipe(map(res => {
        let typedResponse = res as HttpResponseBase;

        if(typedResponse?.status) {
          returnResponse = currentRequest ? currentRequest.messages.success: defaultRequestInfo.messages.success
        }
        return typedResponse
      }),
      catchError((error) => {
        let typedError: HttpErrorResponse = error;
        if(typedError.status === 401) {
          // refreshtoken
        } else {
          returnResponse = currentRequest ? currentRequest.messages.error : defaultRequestInfo.messages.error;
          console.log("return", returnResponse)
        }

        return of(error);
      }), finalize(() => {
        this.loaderService.toggleLoader(false);
        if(currentRequest) {
          currentRequest.treatError &&
          this.feedbackService.show(
            returnResponse.severity,
            returnResponse.title,
            returnResponse.message
          );
        } else {
          this.feedbackService.show(
            returnResponse.severity,
            returnResponse.title,
            returnResponse.message
          );
        }
      })
      );
    }
}
