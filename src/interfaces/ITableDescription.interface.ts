import {IAttributeDefinition} from "./IAttributeDefinition.interface";
import {IKeySchemaElement} from "./IKeySchemaElement.interface";

export interface ITableDescription {
    /**
     * An array of AttributeDefinition objects. Each of these objects describes one attribute in the table and index key schema. Each AttributeDefinition object in this array is composed of:    AttributeName - The name of the attribute.    AttributeType - The data type for the attribute.
     */
    AttributeDefinitions?: IAttributeDefinition[];
    /**
     * The name of the table.
     */
    TableName?: string;
    /**
     * The primary key structure for the table. Each KeySchemaElement consists of:    AttributeName - The name of the attribute.    KeyType - The role of the attribute:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.    For more information about primary keys, see Primary Key in the Amazon DynamoDB Developer Guide.
     */
    KeySchema?: IKeySchemaElement[];
}