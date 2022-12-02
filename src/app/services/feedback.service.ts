import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root',
})
export class FeedBackService {

  constructor(private messageService: MessageService) { }

 show(severity: "success" |"info" |"warn" | "error", title: string, message: string) {
  this.messageService.add({
    severity: severity,
    summary: title,
    detail: message,
  });
  console.log("17")
 }

}
