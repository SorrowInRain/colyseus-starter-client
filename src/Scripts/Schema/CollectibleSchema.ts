// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.32
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { Vector2DSchema } from './Vector2DSchema'

export class CollectibleSchema extends Schema {
    @type("boolean") public isSpawned!: boolean;
    @type("uint16") public id!: number;
    @type(Vector2DSchema) public position: Vector2DSchema = new Vector2DSchema();
}
