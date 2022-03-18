/**
 * Represents a generic key schema element for a NoSQL database table.
 */
export interface IAttributeDefinition {
    /**
     * A name for the attribute.
     */
    AttributeName: string;

    /**
     * The data type for the attribute, where:
     *    S - the attribute is of type String
     *    N - the attribute is of type Number
     *    B - the attribute is of type Binary
     */
    AttributeType: "S" | "N" | "B" | string;
}