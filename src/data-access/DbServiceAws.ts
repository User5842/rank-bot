import * as AWS from 'aws-sdk';
import {ServiceConfigurationOptions} from 'aws-sdk/lib/service';
import {IDbService} from "../interfaces/IDbService.interface";
import {IKeySchemaElement} from "../interfaces/IKeySchemaElement.interface";
import {IAttributeDefinition} from "../interfaces/IAttributeDefinition.interface";
import {ICreateTableOutput} from '../interfaces/ICreateTableOutput.interface';

const serviceConfigOptions: ServiceConfigurationOptions = {
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
};

console.log("Initializing database...");
AWS.config.update(serviceConfigOptions);
const dynamodb = new AWS.DynamoDB();
console.log("Database initialized!");

const DbServiceAWS: IDbService = {
    createTable(name: string, keySchema: IKeySchemaElement[], attributionDefinitions: IAttributeDefinition[], readCapacityUnits: number, writeCapacityUnits: number): Promise<ICreateTableOutput> {
        return new Promise<ICreateTableOutput>((resolve, reject) => {
            dynamodb.createTable({
                TableName: name,
                KeySchema: keySchema.map((a) => ({...a})),
                AttributeDefinitions: attributionDefinitions.map((a) => ({...a})),
                ProvisionedThroughput: {
                    ReadCapacityUnits: readCapacityUnits,
                    WriteCapacityUnits: writeCapacityUnits
                }
            }, function (err, data) {
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