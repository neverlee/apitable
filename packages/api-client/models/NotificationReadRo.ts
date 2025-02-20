/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* User marked read notification
*/
export class NotificationReadRo {
    /**
    * Notification ID, supporting batch
    */
    'id': Array<string>;
    /**
    * Full 1 full, 0 incomplete
    */
    'isAll'?: NotificationReadRoIsAllEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "isAll",
            "baseName": "isAll",
            "type": "NotificationReadRoIsAllEnum",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return NotificationReadRo.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum NotificationReadRoIsAllEnum {
    NUMBER_null
}

