/**
 * Represents a generic output from a Create Table command of a NoSQL database table.
 */
import {ITableDescription} from "./ITableDescription.interface";

export interface ICreateTableOutput {
    /**
     * Represents the properties of the table.
     */
    TableDescription?: ITableDescription;
}