import {IKeySchemaElement} from "./IKeySchemaElement.interface";
import {IAttributeDefinition} from "./IAttributeDefinition.interface";

/**
 * Represents a generic NoSQL database service.
 */
export interface IDbService {
    /**
     * Create a table in the database.
     *
     * @param name The name of the table.
     * @param keySchema The key schema for the table, consisting of a list of IKeySchemaElement objects.
     * @param attributionDefinitions The attribute definitions for the table, consisting of a list of IAttributionDefinition objects.
     * @param readCapacityUnits A read capacity unit represents one strongly consistent read per second, or two eventually consistent reads per second, for an item up to 4 KB in size.
     * @param writeCapacityUnits A write capacity unit represents one write per second, for an item up to 1 KB in size.
     */
    createTable(name: string, keySchema: IKeySchemaElement[], attributionDefinitions: IAttributeDefinition[], readCapacityUnits: number, writeCapacityUnits: number): Promise<any>;
}