import fetch from 'node-fetch';
import https from 'https';
import { IJsonSchema } from '@apitable/core';
import { IBaseAction, IUiSchema } from './interface/base.action';
import { AutomationAction } from './decorators/automation.action.decorator';
import { ResponseStatusCodeEnums } from './enum/response.status.code.enums';
import { IActionResponse, IErrorResponse, ISuccessResponse } from './interface/action.response';

interface IWebhookResponse {
  status: number;
  json?: any;
}

export async function sendJsonRequest(url: string, body: any): Promise<IActionResponse<any>> {
  const agentOpts = url.startsWith('https') ? { agent: new https.Agent({ rejectUnauthorized: false }) } : {};
  const newReqData = {
    // disable https certificate verification
    ...agentOpts,
    method: "POST",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  };

  try {
    const res = await fetch(url, newReqData);
    let respJson;
    try {
      respJson = await res.json();
    } catch (error) {
      console.log('error', error);
    }

    if(res.status >= 200 && res.status < 300) {
      const data: ISuccessResponse<IWebhookResponse> = {
        data: {
          status: res.status,
          json: respJson
        }
      };
      return {
        success: true,
        code: ResponseStatusCodeEnums.Success,
        data: data
      };
    }
    const data: IErrorResponse = {
      errors: [{
        message: `${res.status} ${res.statusText}`
      }]
    };
    return {
      success: false,
      data,
      code: res.status
    };
  } catch (error: any) {
    // network error
    const res: IErrorResponse = {
      errors: [{
        message: error.message
      }]
    };
    return {
      success: false,
      data: res,
      code: ResponseStatusCodeEnums.ServerError
    };
  }
}


@AutomationAction("FeishuBot")
export class FeishuBotAction implements IBaseAction {
  async endpoint(input: any): Promise<IActionResponse<any>> {
    console.log(`Entry customer connector. the input is ${input.content}`)

    const webhook = "https://open.feishu.cn/open-apis/bot/v2/hook/"
    const url = webhook + input.webhook;

    let msgType: string = "text";
    let content = {};
    switch (input.msgtype) {
      case "Text":
        msgType = "text";
        content = {
          "text": input.content
        };
        break;
      case "RichText":
        msgType = "post";
        // TODO
        break;
      case "Image":
        msgType = "image";
        // TODO
        break;
      default:
    }

    const data = {
      msg_type: msgType,
      content
    }
    return sendJsonRequest(url, data);
  }

  getInputSchema(): IJsonSchema {
    return {
      type: "object",
      required: [
        "webhook",
        "msgtype"
      ],
      properties: {
        webhook:{
          type:"string",
          title:"Feishu Webhook Key"
        },
        msgtype:{
          type:"string",
          title:"Message Type",
          "enum":[
            "Text",
            "RichText",
            "Image"
          ],
          "default":"Text"
        },
        content:{
          type:"string",
          title:"Content"
        }
      }
    };
  }

  getOutputSchema(): IJsonSchema {
    return {
      type: "object",
      required: [
      ],
      properties: {
        "message": {
          type: "string",
          title: "feishubot message result"
        }
      }
    };
  }

  getUISchema(): IUiSchema {
    return {
      "ui:order":[
        "webhook",
        "msgtype",
        "content"
      ]
    };
  }
}

