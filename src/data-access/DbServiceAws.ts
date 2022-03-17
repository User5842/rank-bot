import * as AWS from 'aws-sdk';
import {ServiceConfigurationOptions, } from 'aws-sdk/lib/service';
import {IDbService} from "../interfaces/IDbService.interface";
import {IKeySchemaElement} from "../interfaces/IKeySchemaElement.interface";
import {IAttributeDefinition} from "../interfaces/IAttributeDefinition.interface";

const serviceConfigOptions : ServiceConfigurationOptions = {
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
};


console.log("Initializing database...");
AWS.config.update(serviceConfigOptions);
const dynamodb = new AWS.DynamoDB();
console.log("Database initialized!");


const DbServiceAWS : IDbService = {
    createTable(name:string, keySchema:IKeySchemaElement[], attributionDefinitions: IAttributeDefinition[], readCapacityUnits:number, writeCapacityUnits:number):Promise<any> {
        let ks : AWS.DynamoDB.KeySchemaElement[] = [];
        for(const k of keySchema) {
            ks.push({ AttributeName: k.AttributeName, KeyType: k.KeyType});
        }

        let as : AWS.DynamoDB.AttributeDefinition[] = [];
        for(const k of attributionDefinitions) {
            as.push({ AttributeName: k.AttributeName, AttributeType: k.AttributeType});
        }

        return new Promise<any>((resolve, reject) => {
            dynamodb.createTable({
                TableName : name,
                KeySchema: ks,
                AttributeDefinitions: as,
                ProvisionedThroughput: { 
                    ReadCapacityUnits: readCapacityUnits,
                    WriteCapacityUnits: writeCapacityUnits
                }
            }, function(err, data) {
                if (err) {
                    console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
                    resolve(data);
                }
            });
        });

    }
}

export default DbServiceAWS;