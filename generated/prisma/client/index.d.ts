
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model EquipmentPurchaseOrder
 * 
 */
export type EquipmentPurchaseOrder = $Result.DefaultSelection<Prisma.$EquipmentPurchaseOrderPayload>
/**
 * Model EquipmentEntryList
 * 
 */
export type EquipmentEntryList = $Result.DefaultSelection<Prisma.$EquipmentEntryListPayload>
/**
 * Model EquipmentList
 * 
 */
export type EquipmentList = $Result.DefaultSelection<Prisma.$EquipmentListPayload>
/**
 * Model EquipmentRequest
 * 
 */
export type EquipmentRequest = $Result.DefaultSelection<Prisma.$EquipmentRequestPayload>
/**
 * Model EquipmentBorrowGroup
 * 
 */
export type EquipmentBorrowGroup = $Result.DefaultSelection<Prisma.$EquipmentBorrowGroupPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  HARDWARE: 'HARDWARE',
  SOFTWARE: 'SOFTWARE',
  NETWORK: 'NETWORK',
  GENERAL: 'GENERAL'
};

export type Category = (typeof Category)[keyof typeof Category]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const Status: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentPurchaseOrder`: Exposes CRUD operations for the **EquipmentPurchaseOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentPurchaseOrders
    * const equipmentPurchaseOrders = await prisma.equipmentPurchaseOrder.findMany()
    * ```
    */
  get equipmentPurchaseOrder(): Prisma.EquipmentPurchaseOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentEntryList`: Exposes CRUD operations for the **EquipmentEntryList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentEntryLists
    * const equipmentEntryLists = await prisma.equipmentEntryList.findMany()
    * ```
    */
  get equipmentEntryList(): Prisma.EquipmentEntryListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentList`: Exposes CRUD operations for the **EquipmentList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentLists
    * const equipmentLists = await prisma.equipmentList.findMany()
    * ```
    */
  get equipmentList(): Prisma.EquipmentListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentRequest`: Exposes CRUD operations for the **EquipmentRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentRequests
    * const equipmentRequests = await prisma.equipmentRequest.findMany()
    * ```
    */
  get equipmentRequest(): Prisma.EquipmentRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentBorrowGroup`: Exposes CRUD operations for the **EquipmentBorrowGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentBorrowGroups
    * const equipmentBorrowGroups = await prisma.equipmentBorrowGroup.findMany()
    * ```
    */
  get equipmentBorrowGroup(): Prisma.EquipmentBorrowGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Employee: 'Employee',
    Request: 'Request',
    Comment: 'Comment',
    EquipmentPurchaseOrder: 'EquipmentPurchaseOrder',
    EquipmentEntryList: 'EquipmentEntryList',
    EquipmentList: 'EquipmentList',
    EquipmentRequest: 'EquipmentRequest',
    EquipmentBorrowGroup: 'EquipmentBorrowGroup',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "employee" | "request" | "comment" | "equipmentPurchaseOrder" | "equipmentEntryList" | "equipmentList" | "equipmentRequest" | "equipmentBorrowGroup" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      EquipmentPurchaseOrder: {
        payload: Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>
        fields: Prisma.EquipmentPurchaseOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentPurchaseOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPurchaseOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentPurchaseOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPurchaseOrderPayload>
          }
          findFirst: {
            args: Prisma.EquipmentPurchaseOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPurchaseOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentPurchaseOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPurchaseOrderPayload>
          }
          findMany: {
            args: Prisma.EquipmentPurchaseOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPurchaseOrderPayload>[]
          }
          create: {
            args: Prisma.EquipmentPurchaseOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPurchaseOrderPayload>
          }
          createMany: {
            args: Prisma.EquipmentPurchaseOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentPurchaseOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPurchaseOrderPayload>[]
          }
          delete: {
            args: Prisma.EquipmentPurchaseOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPurchaseOrderPayload>
          }
          update: {
            args: Prisma.EquipmentPurchaseOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPurchaseOrderPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentPurchaseOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentPurchaseOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentPurchaseOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPurchaseOrderPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentPurchaseOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPurchaseOrderPayload>
          }
          aggregate: {
            args: Prisma.EquipmentPurchaseOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentPurchaseOrder>
          }
          groupBy: {
            args: Prisma.EquipmentPurchaseOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentPurchaseOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentPurchaseOrderCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentPurchaseOrderCountAggregateOutputType> | number
          }
        }
      }
      EquipmentEntryList: {
        payload: Prisma.$EquipmentEntryListPayload<ExtArgs>
        fields: Prisma.EquipmentEntryListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentEntryListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentEntryListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentEntryListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentEntryListPayload>
          }
          findFirst: {
            args: Prisma.EquipmentEntryListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentEntryListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentEntryListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentEntryListPayload>
          }
          findMany: {
            args: Prisma.EquipmentEntryListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentEntryListPayload>[]
          }
          create: {
            args: Prisma.EquipmentEntryListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentEntryListPayload>
          }
          createMany: {
            args: Prisma.EquipmentEntryListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentEntryListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentEntryListPayload>[]
          }
          delete: {
            args: Prisma.EquipmentEntryListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentEntryListPayload>
          }
          update: {
            args: Prisma.EquipmentEntryListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentEntryListPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentEntryListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentEntryListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentEntryListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentEntryListPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentEntryListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentEntryListPayload>
          }
          aggregate: {
            args: Prisma.EquipmentEntryListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentEntryList>
          }
          groupBy: {
            args: Prisma.EquipmentEntryListGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentEntryListGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentEntryListCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentEntryListCountAggregateOutputType> | number
          }
        }
      }
      EquipmentList: {
        payload: Prisma.$EquipmentListPayload<ExtArgs>
        fields: Prisma.EquipmentListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentListPayload>
          }
          findFirst: {
            args: Prisma.EquipmentListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentListPayload>
          }
          findMany: {
            args: Prisma.EquipmentListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentListPayload>[]
          }
          create: {
            args: Prisma.EquipmentListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentListPayload>
          }
          createMany: {
            args: Prisma.EquipmentListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentListPayload>[]
          }
          delete: {
            args: Prisma.EquipmentListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentListPayload>
          }
          update: {
            args: Prisma.EquipmentListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentListPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentListPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentListPayload>
          }
          aggregate: {
            args: Prisma.EquipmentListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentList>
          }
          groupBy: {
            args: Prisma.EquipmentListGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentListGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentListCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentListCountAggregateOutputType> | number
          }
        }
      }
      EquipmentRequest: {
        payload: Prisma.$EquipmentRequestPayload<ExtArgs>
        fields: Prisma.EquipmentRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentRequestPayload>
          }
          findFirst: {
            args: Prisma.EquipmentRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentRequestPayload>
          }
          findMany: {
            args: Prisma.EquipmentRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentRequestPayload>[]
          }
          create: {
            args: Prisma.EquipmentRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentRequestPayload>
          }
          createMany: {
            args: Prisma.EquipmentRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentRequestPayload>[]
          }
          delete: {
            args: Prisma.EquipmentRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentRequestPayload>
          }
          update: {
            args: Prisma.EquipmentRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentRequestPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentRequestPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentRequestPayload>
          }
          aggregate: {
            args: Prisma.EquipmentRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentRequest>
          }
          groupBy: {
            args: Prisma.EquipmentRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentRequestCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentRequestCountAggregateOutputType> | number
          }
        }
      }
      EquipmentBorrowGroup: {
        payload: Prisma.$EquipmentBorrowGroupPayload<ExtArgs>
        fields: Prisma.EquipmentBorrowGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentBorrowGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentBorrowGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentBorrowGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentBorrowGroupPayload>
          }
          findFirst: {
            args: Prisma.EquipmentBorrowGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentBorrowGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentBorrowGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentBorrowGroupPayload>
          }
          findMany: {
            args: Prisma.EquipmentBorrowGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentBorrowGroupPayload>[]
          }
          create: {
            args: Prisma.EquipmentBorrowGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentBorrowGroupPayload>
          }
          createMany: {
            args: Prisma.EquipmentBorrowGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentBorrowGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentBorrowGroupPayload>[]
          }
          delete: {
            args: Prisma.EquipmentBorrowGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentBorrowGroupPayload>
          }
          update: {
            args: Prisma.EquipmentBorrowGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentBorrowGroupPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentBorrowGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentBorrowGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentBorrowGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentBorrowGroupPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentBorrowGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentBorrowGroupPayload>
          }
          aggregate: {
            args: Prisma.EquipmentBorrowGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentBorrowGroup>
          }
          groupBy: {
            args: Prisma.EquipmentBorrowGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentBorrowGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentBorrowGroupCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentBorrowGroupCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    employee?: EmployeeOmit
    request?: RequestOmit
    comment?: CommentOmit
    equipmentPurchaseOrder?: EquipmentPurchaseOrderOmit
    equipmentEntryList?: EquipmentEntryListOmit
    equipmentList?: EquipmentListOmit
    equipmentRequest?: EquipmentRequestOmit
    equipmentBorrowGroup?: EquipmentBorrowGroupOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    requests: number
    comments: number
    equipmentRequests: number
    equipmentGroups: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    equipmentRequests?: boolean | UserCountOutputTypeCountEquipmentRequestsArgs
    equipmentGroups?: boolean | UserCountOutputTypeCountEquipmentGroupsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEquipmentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEquipmentGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentBorrowGroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    requests: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | EmployeeCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }


  /**
   * Count Type RequestCountOutputType
   */

  export type RequestCountOutputType = {
    comments: number
  }

  export type RequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | RequestCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestCountOutputType
     */
    select?: RequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type EquipmentPurchaseOrderCountOutputType
   */

  export type EquipmentPurchaseOrderCountOutputType = {
    entries: number
  }

  export type EquipmentPurchaseOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | EquipmentPurchaseOrderCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * EquipmentPurchaseOrderCountOutputType without action
   */
  export type EquipmentPurchaseOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrderCountOutputType
     */
    select?: EquipmentPurchaseOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentPurchaseOrderCountOutputType without action
   */
  export type EquipmentPurchaseOrderCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentEntryListWhereInput
  }


  /**
   * Count Type EquipmentEntryListCountOutputType
   */

  export type EquipmentEntryListCountOutputType = {
    equipmentLists: number
  }

  export type EquipmentEntryListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentLists?: boolean | EquipmentEntryListCountOutputTypeCountEquipmentListsArgs
  }

  // Custom InputTypes
  /**
   * EquipmentEntryListCountOutputType without action
   */
  export type EquipmentEntryListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryListCountOutputType
     */
    select?: EquipmentEntryListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentEntryListCountOutputType without action
   */
  export type EquipmentEntryListCountOutputTypeCountEquipmentListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentListWhereInput
  }


  /**
   * Count Type EquipmentListCountOutputType
   */

  export type EquipmentListCountOutputType = {
    requests: number
  }

  export type EquipmentListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | EquipmentListCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * EquipmentListCountOutputType without action
   */
  export type EquipmentListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentListCountOutputType
     */
    select?: EquipmentListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentListCountOutputType without action
   */
  export type EquipmentListCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentRequestWhereInput
  }


  /**
   * Count Type EquipmentBorrowGroupCountOutputType
   */

  export type EquipmentBorrowGroupCountOutputType = {
    requests: number
  }

  export type EquipmentBorrowGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | EquipmentBorrowGroupCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * EquipmentBorrowGroupCountOutputType without action
   */
  export type EquipmentBorrowGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroupCountOutputType
     */
    select?: EquipmentBorrowGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentBorrowGroupCountOutputType without action
   */
  export type EquipmentBorrowGroupCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
    employeeId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
    employeeId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    employeeId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    employeeId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    employeeId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    employeeId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    role: string
    createdAt: Date
    updatedAt: Date
    employeeId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employeeId?: boolean
    employee?: boolean | User$employeeArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    equipmentRequests?: boolean | User$equipmentRequestsArgs<ExtArgs>
    equipmentGroups?: boolean | User$equipmentGroupsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employeeId?: boolean
    employee?: boolean | User$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employeeId?: boolean
    employee?: boolean | User$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employeeId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "createdAt" | "updatedAt" | "employeeId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | User$employeeArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    equipmentRequests?: boolean | User$equipmentRequestsArgs<ExtArgs>
    equipmentGroups?: boolean | User$equipmentGroupsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | User$employeeArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | User$employeeArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      requests: Prisma.$RequestPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      equipmentRequests: Prisma.$EquipmentRequestPayload<ExtArgs>[]
      equipmentGroups: Prisma.$EquipmentBorrowGroupPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      role: string
      createdAt: Date
      updatedAt: Date
      employeeId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends User$employeeArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipmentRequests<T extends User$equipmentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$equipmentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipmentGroups<T extends User$equipmentGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$equipmentGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly employeeId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.employee
   */
  export type User$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.equipmentRequests
   */
  export type User$equipmentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
    where?: EquipmentRequestWhereInput
    orderBy?: EquipmentRequestOrderByWithRelationInput | EquipmentRequestOrderByWithRelationInput[]
    cursor?: EquipmentRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentRequestScalarFieldEnum | EquipmentRequestScalarFieldEnum[]
  }

  /**
   * User.equipmentGroups
   */
  export type User$equipmentGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupInclude<ExtArgs> | null
    where?: EquipmentBorrowGroupWhereInput
    orderBy?: EquipmentBorrowGroupOrderByWithRelationInput | EquipmentBorrowGroupOrderByWithRelationInput[]
    cursor?: EquipmentBorrowGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentBorrowGroupScalarFieldEnum | EquipmentBorrowGroupScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    employee_code: string | null
    employee_name_th: string | null
    employee_name_en: string | null
    gender: string | null
    position: string | null
    department: string | null
    work_location: string | null
    supervisor_name: string | null
    start_date: Date | null
    end_date: Date | null
    status: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    employee_code: string | null
    employee_name_th: string | null
    employee_name_en: string | null
    gender: string | null
    position: string | null
    department: string | null
    work_location: string | null
    supervisor_name: string | null
    start_date: Date | null
    end_date: Date | null
    status: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    employee_code: number
    employee_name_th: number
    employee_name_en: number
    gender: number
    position: number
    department: number
    work_location: number
    supervisor_name: number
    start_date: number
    end_date: number
    status: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    employee_code?: true
    employee_name_th?: true
    employee_name_en?: true
    gender?: true
    position?: true
    department?: true
    work_location?: true
    supervisor_name?: true
    start_date?: true
    end_date?: true
    status?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    employee_code?: true
    employee_name_th?: true
    employee_name_en?: true
    gender?: true
    position?: true
    department?: true
    work_location?: true
    supervisor_name?: true
    start_date?: true
    end_date?: true
    status?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    employee_code?: true
    employee_name_th?: true
    employee_name_en?: true
    gender?: true
    position?: true
    department?: true
    work_location?: true
    supervisor_name?: true
    start_date?: true
    end_date?: true
    status?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    employee_code: string
    employee_name_th: string
    employee_name_en: string | null
    gender: string | null
    position: string | null
    department: string | null
    work_location: string | null
    supervisor_name: string | null
    start_date: Date | null
    end_date: Date | null
    status: string | null
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_code?: boolean
    employee_name_th?: boolean
    employee_name_en?: boolean
    gender?: boolean
    position?: boolean
    department?: boolean
    work_location?: boolean
    supervisor_name?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    requests?: boolean | Employee$requestsArgs<ExtArgs>
    user?: boolean | Employee$userArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_code?: boolean
    employee_name_th?: boolean
    employee_name_en?: boolean
    gender?: boolean
    position?: boolean
    department?: boolean
    work_location?: boolean
    supervisor_name?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_code?: boolean
    employee_name_th?: boolean
    employee_name_en?: boolean
    gender?: boolean
    position?: boolean
    department?: boolean
    work_location?: boolean
    supervisor_name?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    employee_code?: boolean
    employee_name_th?: boolean
    employee_name_en?: boolean
    gender?: boolean
    position?: boolean
    department?: boolean
    work_location?: boolean
    supervisor_name?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employee_code" | "employee_name_th" | "employee_name_en" | "gender" | "position" | "department" | "work_location" | "supervisor_name" | "start_date" | "end_date" | "status", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Employee$requestsArgs<ExtArgs>
    user?: boolean | Employee$userArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      requests: Prisma.$RequestPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employee_code: string
      employee_name_th: string
      employee_name_en: string | null
      gender: string | null
      position: string | null
      department: string | null
      work_location: string | null
      supervisor_name: string | null
      start_date: Date | null
      end_date: Date | null
      status: string | null
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends Employee$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Employee$userArgs<ExtArgs> = {}>(args?: Subset<T, Employee$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly employee_code: FieldRef<"Employee", 'String'>
    readonly employee_name_th: FieldRef<"Employee", 'String'>
    readonly employee_name_en: FieldRef<"Employee", 'String'>
    readonly gender: FieldRef<"Employee", 'String'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly department: FieldRef<"Employee", 'String'>
    readonly work_location: FieldRef<"Employee", 'String'>
    readonly supervisor_name: FieldRef<"Employee", 'String'>
    readonly start_date: FieldRef<"Employee", 'DateTime'>
    readonly end_date: FieldRef<"Employee", 'DateTime'>
    readonly status: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.requests
   */
  export type Employee$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Employee.user
   */
  export type Employee$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    request_code: string | null
    type_request: string | null
    description: string | null
    reason: string | null
    category: $Enums.Category | null
    priority: $Enums.Priority | null
    status: $Enums.Status | null
    approval: string | null
    approval_status: string | null
    approval_comment: string | null
    approval_date: Date | null
    it_approval: string | null
    it_approval_status: string | null
    it_approval_comment: string | null
    it_approval_date: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    request_code: string | null
    type_request: string | null
    description: string | null
    reason: string | null
    category: $Enums.Category | null
    priority: $Enums.Priority | null
    status: $Enums.Status | null
    approval: string | null
    approval_status: string | null
    approval_comment: string | null
    approval_date: Date | null
    it_approval: string | null
    it_approval_status: string | null
    it_approval_comment: string | null
    it_approval_date: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    employeeId: number
    request_code: number
    type_request: number
    description: number
    reason: number
    category: number
    priority: number
    status: number
    approval: number
    approval_status: number
    approval_comment: number
    approval_date: number
    it_approval: number
    it_approval_status: number
    it_approval_comment: number
    it_approval_date: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RequestMinAggregateInputType = {
    id?: true
    employeeId?: true
    request_code?: true
    type_request?: true
    description?: true
    reason?: true
    category?: true
    priority?: true
    status?: true
    approval?: true
    approval_status?: true
    approval_comment?: true
    approval_date?: true
    it_approval?: true
    it_approval_status?: true
    it_approval_comment?: true
    it_approval_date?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    employeeId?: true
    request_code?: true
    type_request?: true
    description?: true
    reason?: true
    category?: true
    priority?: true
    status?: true
    approval?: true
    approval_status?: true
    approval_comment?: true
    approval_date?: true
    it_approval?: true
    it_approval_status?: true
    it_approval_comment?: true
    it_approval_date?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    employeeId?: true
    request_code?: true
    type_request?: true
    description?: true
    reason?: true
    category?: true
    priority?: true
    status?: true
    approval?: true
    approval_status?: true
    approval_comment?: true
    approval_date?: true
    it_approval?: true
    it_approval_status?: true
    it_approval_comment?: true
    it_approval_date?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    employeeId: string
    request_code: string
    type_request: string
    description: string
    reason: string | null
    category: $Enums.Category
    priority: $Enums.Priority
    status: $Enums.Status
    approval: string | null
    approval_status: string | null
    approval_comment: string | null
    approval_date: Date | null
    it_approval: string | null
    it_approval_status: string | null
    it_approval_comment: string | null
    it_approval_date: Date | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    request_code?: boolean
    type_request?: boolean
    description?: boolean
    reason?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    approval?: boolean
    approval_status?: boolean
    approval_comment?: boolean
    approval_date?: boolean
    it_approval?: boolean
    it_approval_status?: boolean
    it_approval_comment?: boolean
    it_approval_date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Request$commentsArgs<ExtArgs>
    _count?: boolean | RequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    request_code?: boolean
    type_request?: boolean
    description?: boolean
    reason?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    approval?: boolean
    approval_status?: boolean
    approval_comment?: boolean
    approval_date?: boolean
    it_approval?: boolean
    it_approval_status?: boolean
    it_approval_comment?: boolean
    it_approval_date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    request_code?: boolean
    type_request?: boolean
    description?: boolean
    reason?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    approval?: boolean
    approval_status?: boolean
    approval_comment?: boolean
    approval_date?: boolean
    it_approval?: boolean
    it_approval_status?: boolean
    it_approval_comment?: boolean
    it_approval_date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    employeeId?: boolean
    request_code?: boolean
    type_request?: boolean
    description?: boolean
    reason?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    approval?: boolean
    approval_status?: boolean
    approval_comment?: boolean
    approval_date?: boolean
    it_approval?: boolean
    it_approval_status?: boolean
    it_approval_comment?: boolean
    it_approval_date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "request_code" | "type_request" | "description" | "reason" | "category" | "priority" | "status" | "approval" | "approval_status" | "approval_comment" | "approval_date" | "it_approval" | "it_approval_status" | "it_approval_comment" | "it_approval_date" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Request$commentsArgs<ExtArgs>
    _count?: boolean | RequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      request_code: string
      type_request: string
      description: string
      reason: string | null
      category: $Enums.Category
      priority: $Enums.Priority
      status: $Enums.Status
      approval: string | null
      approval_status: string | null
      approval_comment: string | null
      approval_date: Date | null
      it_approval: string | null
      it_approval_status: string | null
      it_approval_comment: string | null
      it_approval_date: Date | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Request$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Request$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly employeeId: FieldRef<"Request", 'String'>
    readonly request_code: FieldRef<"Request", 'String'>
    readonly type_request: FieldRef<"Request", 'String'>
    readonly description: FieldRef<"Request", 'String'>
    readonly reason: FieldRef<"Request", 'String'>
    readonly category: FieldRef<"Request", 'Category'>
    readonly priority: FieldRef<"Request", 'Priority'>
    readonly status: FieldRef<"Request", 'Status'>
    readonly approval: FieldRef<"Request", 'String'>
    readonly approval_status: FieldRef<"Request", 'String'>
    readonly approval_comment: FieldRef<"Request", 'String'>
    readonly approval_date: FieldRef<"Request", 'DateTime'>
    readonly it_approval: FieldRef<"Request", 'String'>
    readonly it_approval_status: FieldRef<"Request", 'String'>
    readonly it_approval_comment: FieldRef<"Request", 'String'>
    readonly it_approval_date: FieldRef<"Request", 'DateTime'>
    readonly userId: FieldRef<"Request", 'String'>
    readonly createdAt: FieldRef<"Request", 'DateTime'>
    readonly updatedAt: FieldRef<"Request", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request.comments
   */
  export type Request$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    parentId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requestId: string | null
    userId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    parentId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requestId: string | null
    userId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    parentId: number
    content: number
    createdAt: number
    updatedAt: number
    requestId: number
    userId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    parentId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    requestId?: true
    userId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    parentId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    requestId?: true
    userId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    parentId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    requestId?: true
    userId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    parentId: string | null
    content: string
    createdAt: Date
    updatedAt: Date
    requestId: string
    userId: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    userId?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    userId?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    userId?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    parentId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    userId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parentId" | "content" | "createdAt" | "updatedAt" | "requestId" | "userId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      request: Prisma.$RequestPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentId: string | null
      content: string
      createdAt: Date
      updatedAt: Date
      requestId: string
      userId: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends RequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequestDefaultArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly requestId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentPurchaseOrder
   */

  export type AggregateEquipmentPurchaseOrder = {
    _count: EquipmentPurchaseOrderCountAggregateOutputType | null
    _avg: EquipmentPurchaseOrderAvgAggregateOutputType | null
    _sum: EquipmentPurchaseOrderSumAggregateOutputType | null
    _min: EquipmentPurchaseOrderMinAggregateOutputType | null
    _max: EquipmentPurchaseOrderMaxAggregateOutputType | null
  }

  export type EquipmentPurchaseOrderAvgAggregateOutputType = {
    quantity: number | null
  }

  export type EquipmentPurchaseOrderSumAggregateOutputType = {
    quantity: number | null
  }

  export type EquipmentPurchaseOrderMinAggregateOutputType = {
    id: string | null
    po_code: string | null
    list: string | null
    detail: string | null
    quantity: number | null
    reason_order: string | null
    picture: string | null
    buyer: string | null
    reviewer: string | null
    approver: string | null
    date_order: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentPurchaseOrderMaxAggregateOutputType = {
    id: string | null
    po_code: string | null
    list: string | null
    detail: string | null
    quantity: number | null
    reason_order: string | null
    picture: string | null
    buyer: string | null
    reviewer: string | null
    approver: string | null
    date_order: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentPurchaseOrderCountAggregateOutputType = {
    id: number
    po_code: number
    list: number
    detail: number
    quantity: number
    reason_order: number
    picture: number
    buyer: number
    reviewer: number
    approver: number
    date_order: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentPurchaseOrderAvgAggregateInputType = {
    quantity?: true
  }

  export type EquipmentPurchaseOrderSumAggregateInputType = {
    quantity?: true
  }

  export type EquipmentPurchaseOrderMinAggregateInputType = {
    id?: true
    po_code?: true
    list?: true
    detail?: true
    quantity?: true
    reason_order?: true
    picture?: true
    buyer?: true
    reviewer?: true
    approver?: true
    date_order?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentPurchaseOrderMaxAggregateInputType = {
    id?: true
    po_code?: true
    list?: true
    detail?: true
    quantity?: true
    reason_order?: true
    picture?: true
    buyer?: true
    reviewer?: true
    approver?: true
    date_order?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentPurchaseOrderCountAggregateInputType = {
    id?: true
    po_code?: true
    list?: true
    detail?: true
    quantity?: true
    reason_order?: true
    picture?: true
    buyer?: true
    reviewer?: true
    approver?: true
    date_order?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentPurchaseOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentPurchaseOrder to aggregate.
     */
    where?: EquipmentPurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentPurchaseOrders to fetch.
     */
    orderBy?: EquipmentPurchaseOrderOrderByWithRelationInput | EquipmentPurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentPurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentPurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentPurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentPurchaseOrders
    **/
    _count?: true | EquipmentPurchaseOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentPurchaseOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentPurchaseOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentPurchaseOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentPurchaseOrderMaxAggregateInputType
  }

  export type GetEquipmentPurchaseOrderAggregateType<T extends EquipmentPurchaseOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentPurchaseOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentPurchaseOrder[P]>
      : GetScalarType<T[P], AggregateEquipmentPurchaseOrder[P]>
  }




  export type EquipmentPurchaseOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentPurchaseOrderWhereInput
    orderBy?: EquipmentPurchaseOrderOrderByWithAggregationInput | EquipmentPurchaseOrderOrderByWithAggregationInput[]
    by: EquipmentPurchaseOrderScalarFieldEnum[] | EquipmentPurchaseOrderScalarFieldEnum
    having?: EquipmentPurchaseOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentPurchaseOrderCountAggregateInputType | true
    _avg?: EquipmentPurchaseOrderAvgAggregateInputType
    _sum?: EquipmentPurchaseOrderSumAggregateInputType
    _min?: EquipmentPurchaseOrderMinAggregateInputType
    _max?: EquipmentPurchaseOrderMaxAggregateInputType
  }

  export type EquipmentPurchaseOrderGroupByOutputType = {
    id: string
    po_code: string | null
    list: string | null
    detail: string | null
    quantity: number
    reason_order: string | null
    picture: string | null
    buyer: string | null
    reviewer: string | null
    approver: string | null
    date_order: Date
    status: string
    createdAt: Date
    updatedAt: Date
    _count: EquipmentPurchaseOrderCountAggregateOutputType | null
    _avg: EquipmentPurchaseOrderAvgAggregateOutputType | null
    _sum: EquipmentPurchaseOrderSumAggregateOutputType | null
    _min: EquipmentPurchaseOrderMinAggregateOutputType | null
    _max: EquipmentPurchaseOrderMaxAggregateOutputType | null
  }

  type GetEquipmentPurchaseOrderGroupByPayload<T extends EquipmentPurchaseOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentPurchaseOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentPurchaseOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentPurchaseOrderGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentPurchaseOrderGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentPurchaseOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    po_code?: boolean
    list?: boolean
    detail?: boolean
    quantity?: boolean
    reason_order?: boolean
    picture?: boolean
    buyer?: boolean
    reviewer?: boolean
    approver?: boolean
    date_order?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entries?: boolean | EquipmentPurchaseOrder$entriesArgs<ExtArgs>
    _count?: boolean | EquipmentPurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentPurchaseOrder"]>

  export type EquipmentPurchaseOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    po_code?: boolean
    list?: boolean
    detail?: boolean
    quantity?: boolean
    reason_order?: boolean
    picture?: boolean
    buyer?: boolean
    reviewer?: boolean
    approver?: boolean
    date_order?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipmentPurchaseOrder"]>

  export type EquipmentPurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    po_code?: boolean
    list?: boolean
    detail?: boolean
    quantity?: boolean
    reason_order?: boolean
    picture?: boolean
    buyer?: boolean
    reviewer?: boolean
    approver?: boolean
    date_order?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipmentPurchaseOrder"]>

  export type EquipmentPurchaseOrderSelectScalar = {
    id?: boolean
    po_code?: boolean
    list?: boolean
    detail?: boolean
    quantity?: boolean
    reason_order?: boolean
    picture?: boolean
    buyer?: boolean
    reviewer?: boolean
    approver?: boolean
    date_order?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentPurchaseOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "po_code" | "list" | "detail" | "quantity" | "reason_order" | "picture" | "buyer" | "reviewer" | "approver" | "date_order" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["equipmentPurchaseOrder"]>
  export type EquipmentPurchaseOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | EquipmentPurchaseOrder$entriesArgs<ExtArgs>
    _count?: boolean | EquipmentPurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentPurchaseOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipmentPurchaseOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipmentPurchaseOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentPurchaseOrder"
    objects: {
      entries: Prisma.$EquipmentEntryListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      po_code: string | null
      list: string | null
      detail: string | null
      quantity: number
      reason_order: string | null
      picture: string | null
      buyer: string | null
      reviewer: string | null
      approver: string | null
      date_order: Date
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipmentPurchaseOrder"]>
    composites: {}
  }

  type EquipmentPurchaseOrderGetPayload<S extends boolean | null | undefined | EquipmentPurchaseOrderDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload, S>

  type EquipmentPurchaseOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentPurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentPurchaseOrderCountAggregateInputType | true
    }

  export interface EquipmentPurchaseOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentPurchaseOrder'], meta: { name: 'EquipmentPurchaseOrder' } }
    /**
     * Find zero or one EquipmentPurchaseOrder that matches the filter.
     * @param {EquipmentPurchaseOrderFindUniqueArgs} args - Arguments to find a EquipmentPurchaseOrder
     * @example
     * // Get one EquipmentPurchaseOrder
     * const equipmentPurchaseOrder = await prisma.equipmentPurchaseOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentPurchaseOrderFindUniqueArgs>(args: SelectSubset<T, EquipmentPurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma__EquipmentPurchaseOrderClient<$Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentPurchaseOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentPurchaseOrderFindUniqueOrThrowArgs} args - Arguments to find a EquipmentPurchaseOrder
     * @example
     * // Get one EquipmentPurchaseOrder
     * const equipmentPurchaseOrder = await prisma.equipmentPurchaseOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentPurchaseOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentPurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentPurchaseOrderClient<$Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentPurchaseOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentPurchaseOrderFindFirstArgs} args - Arguments to find a EquipmentPurchaseOrder
     * @example
     * // Get one EquipmentPurchaseOrder
     * const equipmentPurchaseOrder = await prisma.equipmentPurchaseOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentPurchaseOrderFindFirstArgs>(args?: SelectSubset<T, EquipmentPurchaseOrderFindFirstArgs<ExtArgs>>): Prisma__EquipmentPurchaseOrderClient<$Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentPurchaseOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentPurchaseOrderFindFirstOrThrowArgs} args - Arguments to find a EquipmentPurchaseOrder
     * @example
     * // Get one EquipmentPurchaseOrder
     * const equipmentPurchaseOrder = await prisma.equipmentPurchaseOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentPurchaseOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentPurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentPurchaseOrderClient<$Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentPurchaseOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentPurchaseOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentPurchaseOrders
     * const equipmentPurchaseOrders = await prisma.equipmentPurchaseOrder.findMany()
     * 
     * // Get first 10 EquipmentPurchaseOrders
     * const equipmentPurchaseOrders = await prisma.equipmentPurchaseOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentPurchaseOrderWithIdOnly = await prisma.equipmentPurchaseOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentPurchaseOrderFindManyArgs>(args?: SelectSubset<T, EquipmentPurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentPurchaseOrder.
     * @param {EquipmentPurchaseOrderCreateArgs} args - Arguments to create a EquipmentPurchaseOrder.
     * @example
     * // Create one EquipmentPurchaseOrder
     * const EquipmentPurchaseOrder = await prisma.equipmentPurchaseOrder.create({
     *   data: {
     *     // ... data to create a EquipmentPurchaseOrder
     *   }
     * })
     * 
     */
    create<T extends EquipmentPurchaseOrderCreateArgs>(args: SelectSubset<T, EquipmentPurchaseOrderCreateArgs<ExtArgs>>): Prisma__EquipmentPurchaseOrderClient<$Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentPurchaseOrders.
     * @param {EquipmentPurchaseOrderCreateManyArgs} args - Arguments to create many EquipmentPurchaseOrders.
     * @example
     * // Create many EquipmentPurchaseOrders
     * const equipmentPurchaseOrder = await prisma.equipmentPurchaseOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentPurchaseOrderCreateManyArgs>(args?: SelectSubset<T, EquipmentPurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentPurchaseOrders and returns the data saved in the database.
     * @param {EquipmentPurchaseOrderCreateManyAndReturnArgs} args - Arguments to create many EquipmentPurchaseOrders.
     * @example
     * // Create many EquipmentPurchaseOrders
     * const equipmentPurchaseOrder = await prisma.equipmentPurchaseOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentPurchaseOrders and only return the `id`
     * const equipmentPurchaseOrderWithIdOnly = await prisma.equipmentPurchaseOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentPurchaseOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentPurchaseOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentPurchaseOrder.
     * @param {EquipmentPurchaseOrderDeleteArgs} args - Arguments to delete one EquipmentPurchaseOrder.
     * @example
     * // Delete one EquipmentPurchaseOrder
     * const EquipmentPurchaseOrder = await prisma.equipmentPurchaseOrder.delete({
     *   where: {
     *     // ... filter to delete one EquipmentPurchaseOrder
     *   }
     * })
     * 
     */
    delete<T extends EquipmentPurchaseOrderDeleteArgs>(args: SelectSubset<T, EquipmentPurchaseOrderDeleteArgs<ExtArgs>>): Prisma__EquipmentPurchaseOrderClient<$Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentPurchaseOrder.
     * @param {EquipmentPurchaseOrderUpdateArgs} args - Arguments to update one EquipmentPurchaseOrder.
     * @example
     * // Update one EquipmentPurchaseOrder
     * const equipmentPurchaseOrder = await prisma.equipmentPurchaseOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentPurchaseOrderUpdateArgs>(args: SelectSubset<T, EquipmentPurchaseOrderUpdateArgs<ExtArgs>>): Prisma__EquipmentPurchaseOrderClient<$Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentPurchaseOrders.
     * @param {EquipmentPurchaseOrderDeleteManyArgs} args - Arguments to filter EquipmentPurchaseOrders to delete.
     * @example
     * // Delete a few EquipmentPurchaseOrders
     * const { count } = await prisma.equipmentPurchaseOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentPurchaseOrderDeleteManyArgs>(args?: SelectSubset<T, EquipmentPurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentPurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentPurchaseOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentPurchaseOrders
     * const equipmentPurchaseOrder = await prisma.equipmentPurchaseOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentPurchaseOrderUpdateManyArgs>(args: SelectSubset<T, EquipmentPurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentPurchaseOrders and returns the data updated in the database.
     * @param {EquipmentPurchaseOrderUpdateManyAndReturnArgs} args - Arguments to update many EquipmentPurchaseOrders.
     * @example
     * // Update many EquipmentPurchaseOrders
     * const equipmentPurchaseOrder = await prisma.equipmentPurchaseOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentPurchaseOrders and only return the `id`
     * const equipmentPurchaseOrderWithIdOnly = await prisma.equipmentPurchaseOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentPurchaseOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentPurchaseOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentPurchaseOrder.
     * @param {EquipmentPurchaseOrderUpsertArgs} args - Arguments to update or create a EquipmentPurchaseOrder.
     * @example
     * // Update or create a EquipmentPurchaseOrder
     * const equipmentPurchaseOrder = await prisma.equipmentPurchaseOrder.upsert({
     *   create: {
     *     // ... data to create a EquipmentPurchaseOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentPurchaseOrder we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentPurchaseOrderUpsertArgs>(args: SelectSubset<T, EquipmentPurchaseOrderUpsertArgs<ExtArgs>>): Prisma__EquipmentPurchaseOrderClient<$Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentPurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentPurchaseOrderCountArgs} args - Arguments to filter EquipmentPurchaseOrders to count.
     * @example
     * // Count the number of EquipmentPurchaseOrders
     * const count = await prisma.equipmentPurchaseOrder.count({
     *   where: {
     *     // ... the filter for the EquipmentPurchaseOrders we want to count
     *   }
     * })
    **/
    count<T extends EquipmentPurchaseOrderCountArgs>(
      args?: Subset<T, EquipmentPurchaseOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentPurchaseOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentPurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentPurchaseOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentPurchaseOrderAggregateArgs>(args: Subset<T, EquipmentPurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetEquipmentPurchaseOrderAggregateType<T>>

    /**
     * Group by EquipmentPurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentPurchaseOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentPurchaseOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentPurchaseOrderGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentPurchaseOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentPurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentPurchaseOrder model
   */
  readonly fields: EquipmentPurchaseOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentPurchaseOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentPurchaseOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends EquipmentPurchaseOrder$entriesArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentPurchaseOrder$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EquipmentPurchaseOrder model
   */
  interface EquipmentPurchaseOrderFieldRefs {
    readonly id: FieldRef<"EquipmentPurchaseOrder", 'String'>
    readonly po_code: FieldRef<"EquipmentPurchaseOrder", 'String'>
    readonly list: FieldRef<"EquipmentPurchaseOrder", 'String'>
    readonly detail: FieldRef<"EquipmentPurchaseOrder", 'String'>
    readonly quantity: FieldRef<"EquipmentPurchaseOrder", 'Int'>
    readonly reason_order: FieldRef<"EquipmentPurchaseOrder", 'String'>
    readonly picture: FieldRef<"EquipmentPurchaseOrder", 'String'>
    readonly buyer: FieldRef<"EquipmentPurchaseOrder", 'String'>
    readonly reviewer: FieldRef<"EquipmentPurchaseOrder", 'String'>
    readonly approver: FieldRef<"EquipmentPurchaseOrder", 'String'>
    readonly date_order: FieldRef<"EquipmentPurchaseOrder", 'DateTime'>
    readonly status: FieldRef<"EquipmentPurchaseOrder", 'String'>
    readonly createdAt: FieldRef<"EquipmentPurchaseOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"EquipmentPurchaseOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentPurchaseOrder findUnique
   */
  export type EquipmentPurchaseOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrder
     */
    select?: EquipmentPurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentPurchaseOrder
     */
    omit?: EquipmentPurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentPurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentPurchaseOrder to fetch.
     */
    where: EquipmentPurchaseOrderWhereUniqueInput
  }

  /**
   * EquipmentPurchaseOrder findUniqueOrThrow
   */
  export type EquipmentPurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrder
     */
    select?: EquipmentPurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentPurchaseOrder
     */
    omit?: EquipmentPurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentPurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentPurchaseOrder to fetch.
     */
    where: EquipmentPurchaseOrderWhereUniqueInput
  }

  /**
   * EquipmentPurchaseOrder findFirst
   */
  export type EquipmentPurchaseOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrder
     */
    select?: EquipmentPurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentPurchaseOrder
     */
    omit?: EquipmentPurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentPurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentPurchaseOrder to fetch.
     */
    where?: EquipmentPurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentPurchaseOrders to fetch.
     */
    orderBy?: EquipmentPurchaseOrderOrderByWithRelationInput | EquipmentPurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentPurchaseOrders.
     */
    cursor?: EquipmentPurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentPurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentPurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentPurchaseOrders.
     */
    distinct?: EquipmentPurchaseOrderScalarFieldEnum | EquipmentPurchaseOrderScalarFieldEnum[]
  }

  /**
   * EquipmentPurchaseOrder findFirstOrThrow
   */
  export type EquipmentPurchaseOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrder
     */
    select?: EquipmentPurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentPurchaseOrder
     */
    omit?: EquipmentPurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentPurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentPurchaseOrder to fetch.
     */
    where?: EquipmentPurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentPurchaseOrders to fetch.
     */
    orderBy?: EquipmentPurchaseOrderOrderByWithRelationInput | EquipmentPurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentPurchaseOrders.
     */
    cursor?: EquipmentPurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentPurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentPurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentPurchaseOrders.
     */
    distinct?: EquipmentPurchaseOrderScalarFieldEnum | EquipmentPurchaseOrderScalarFieldEnum[]
  }

  /**
   * EquipmentPurchaseOrder findMany
   */
  export type EquipmentPurchaseOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrder
     */
    select?: EquipmentPurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentPurchaseOrder
     */
    omit?: EquipmentPurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentPurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentPurchaseOrders to fetch.
     */
    where?: EquipmentPurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentPurchaseOrders to fetch.
     */
    orderBy?: EquipmentPurchaseOrderOrderByWithRelationInput | EquipmentPurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentPurchaseOrders.
     */
    cursor?: EquipmentPurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentPurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentPurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentPurchaseOrders.
     */
    distinct?: EquipmentPurchaseOrderScalarFieldEnum | EquipmentPurchaseOrderScalarFieldEnum[]
  }

  /**
   * EquipmentPurchaseOrder create
   */
  export type EquipmentPurchaseOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrder
     */
    select?: EquipmentPurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentPurchaseOrder
     */
    omit?: EquipmentPurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentPurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipmentPurchaseOrder.
     */
    data: XOR<EquipmentPurchaseOrderCreateInput, EquipmentPurchaseOrderUncheckedCreateInput>
  }

  /**
   * EquipmentPurchaseOrder createMany
   */
  export type EquipmentPurchaseOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentPurchaseOrders.
     */
    data: EquipmentPurchaseOrderCreateManyInput | EquipmentPurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentPurchaseOrder createManyAndReturn
   */
  export type EquipmentPurchaseOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrder
     */
    select?: EquipmentPurchaseOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentPurchaseOrder
     */
    omit?: EquipmentPurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentPurchaseOrders.
     */
    data: EquipmentPurchaseOrderCreateManyInput | EquipmentPurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentPurchaseOrder update
   */
  export type EquipmentPurchaseOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrder
     */
    select?: EquipmentPurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentPurchaseOrder
     */
    omit?: EquipmentPurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentPurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipmentPurchaseOrder.
     */
    data: XOR<EquipmentPurchaseOrderUpdateInput, EquipmentPurchaseOrderUncheckedUpdateInput>
    /**
     * Choose, which EquipmentPurchaseOrder to update.
     */
    where: EquipmentPurchaseOrderWhereUniqueInput
  }

  /**
   * EquipmentPurchaseOrder updateMany
   */
  export type EquipmentPurchaseOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentPurchaseOrders.
     */
    data: XOR<EquipmentPurchaseOrderUpdateManyMutationInput, EquipmentPurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentPurchaseOrders to update
     */
    where?: EquipmentPurchaseOrderWhereInput
    /**
     * Limit how many EquipmentPurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * EquipmentPurchaseOrder updateManyAndReturn
   */
  export type EquipmentPurchaseOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrder
     */
    select?: EquipmentPurchaseOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentPurchaseOrder
     */
    omit?: EquipmentPurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentPurchaseOrders.
     */
    data: XOR<EquipmentPurchaseOrderUpdateManyMutationInput, EquipmentPurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentPurchaseOrders to update
     */
    where?: EquipmentPurchaseOrderWhereInput
    /**
     * Limit how many EquipmentPurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * EquipmentPurchaseOrder upsert
   */
  export type EquipmentPurchaseOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrder
     */
    select?: EquipmentPurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentPurchaseOrder
     */
    omit?: EquipmentPurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentPurchaseOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipmentPurchaseOrder to update in case it exists.
     */
    where: EquipmentPurchaseOrderWhereUniqueInput
    /**
     * In case the EquipmentPurchaseOrder found by the `where` argument doesn't exist, create a new EquipmentPurchaseOrder with this data.
     */
    create: XOR<EquipmentPurchaseOrderCreateInput, EquipmentPurchaseOrderUncheckedCreateInput>
    /**
     * In case the EquipmentPurchaseOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentPurchaseOrderUpdateInput, EquipmentPurchaseOrderUncheckedUpdateInput>
  }

  /**
   * EquipmentPurchaseOrder delete
   */
  export type EquipmentPurchaseOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrder
     */
    select?: EquipmentPurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentPurchaseOrder
     */
    omit?: EquipmentPurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentPurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter which EquipmentPurchaseOrder to delete.
     */
    where: EquipmentPurchaseOrderWhereUniqueInput
  }

  /**
   * EquipmentPurchaseOrder deleteMany
   */
  export type EquipmentPurchaseOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentPurchaseOrders to delete
     */
    where?: EquipmentPurchaseOrderWhereInput
    /**
     * Limit how many EquipmentPurchaseOrders to delete.
     */
    limit?: number
  }

  /**
   * EquipmentPurchaseOrder.entries
   */
  export type EquipmentPurchaseOrder$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListInclude<ExtArgs> | null
    where?: EquipmentEntryListWhereInput
    orderBy?: EquipmentEntryListOrderByWithRelationInput | EquipmentEntryListOrderByWithRelationInput[]
    cursor?: EquipmentEntryListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentEntryListScalarFieldEnum | EquipmentEntryListScalarFieldEnum[]
  }

  /**
   * EquipmentPurchaseOrder without action
   */
  export type EquipmentPurchaseOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentPurchaseOrder
     */
    select?: EquipmentPurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentPurchaseOrder
     */
    omit?: EquipmentPurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentPurchaseOrderInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentEntryList
   */

  export type AggregateEquipmentEntryList = {
    _count: EquipmentEntryListCountAggregateOutputType | null
    _avg: EquipmentEntryListAvgAggregateOutputType | null
    _sum: EquipmentEntryListSumAggregateOutputType | null
    _min: EquipmentEntryListMinAggregateOutputType | null
    _max: EquipmentEntryListMaxAggregateOutputType | null
  }

  export type EquipmentEntryListAvgAggregateOutputType = {
    quantity: number | null
  }

  export type EquipmentEntryListSumAggregateOutputType = {
    quantity: number | null
  }

  export type EquipmentEntryListMinAggregateOutputType = {
    id: string | null
    purchase_id: string | null
    list: string | null
    brand_name: string | null
    quantity: number | null
    unit: string | null
    recipient: string | null
    date_received: Date | null
    item_type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentEntryListMaxAggregateOutputType = {
    id: string | null
    purchase_id: string | null
    list: string | null
    brand_name: string | null
    quantity: number | null
    unit: string | null
    recipient: string | null
    date_received: Date | null
    item_type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentEntryListCountAggregateOutputType = {
    id: number
    purchase_id: number
    list: number
    brand_name: number
    quantity: number
    unit: number
    recipient: number
    date_received: number
    item_type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentEntryListAvgAggregateInputType = {
    quantity?: true
  }

  export type EquipmentEntryListSumAggregateInputType = {
    quantity?: true
  }

  export type EquipmentEntryListMinAggregateInputType = {
    id?: true
    purchase_id?: true
    list?: true
    brand_name?: true
    quantity?: true
    unit?: true
    recipient?: true
    date_received?: true
    item_type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentEntryListMaxAggregateInputType = {
    id?: true
    purchase_id?: true
    list?: true
    brand_name?: true
    quantity?: true
    unit?: true
    recipient?: true
    date_received?: true
    item_type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentEntryListCountAggregateInputType = {
    id?: true
    purchase_id?: true
    list?: true
    brand_name?: true
    quantity?: true
    unit?: true
    recipient?: true
    date_received?: true
    item_type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentEntryListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentEntryList to aggregate.
     */
    where?: EquipmentEntryListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentEntryLists to fetch.
     */
    orderBy?: EquipmentEntryListOrderByWithRelationInput | EquipmentEntryListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentEntryListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentEntryLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentEntryLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentEntryLists
    **/
    _count?: true | EquipmentEntryListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentEntryListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentEntryListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentEntryListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentEntryListMaxAggregateInputType
  }

  export type GetEquipmentEntryListAggregateType<T extends EquipmentEntryListAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentEntryList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentEntryList[P]>
      : GetScalarType<T[P], AggregateEquipmentEntryList[P]>
  }




  export type EquipmentEntryListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentEntryListWhereInput
    orderBy?: EquipmentEntryListOrderByWithAggregationInput | EquipmentEntryListOrderByWithAggregationInput[]
    by: EquipmentEntryListScalarFieldEnum[] | EquipmentEntryListScalarFieldEnum
    having?: EquipmentEntryListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentEntryListCountAggregateInputType | true
    _avg?: EquipmentEntryListAvgAggregateInputType
    _sum?: EquipmentEntryListSumAggregateInputType
    _min?: EquipmentEntryListMinAggregateInputType
    _max?: EquipmentEntryListMaxAggregateInputType
  }

  export type EquipmentEntryListGroupByOutputType = {
    id: string
    purchase_id: string
    list: string | null
    brand_name: string | null
    quantity: number
    unit: string | null
    recipient: string | null
    date_received: Date | null
    item_type: string
    createdAt: Date
    updatedAt: Date
    _count: EquipmentEntryListCountAggregateOutputType | null
    _avg: EquipmentEntryListAvgAggregateOutputType | null
    _sum: EquipmentEntryListSumAggregateOutputType | null
    _min: EquipmentEntryListMinAggregateOutputType | null
    _max: EquipmentEntryListMaxAggregateOutputType | null
  }

  type GetEquipmentEntryListGroupByPayload<T extends EquipmentEntryListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentEntryListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentEntryListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentEntryListGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentEntryListGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentEntryListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchase_id?: boolean
    list?: boolean
    brand_name?: boolean
    quantity?: boolean
    unit?: boolean
    recipient?: boolean
    date_received?: boolean
    item_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchaseOrder?: boolean | EquipmentPurchaseOrderDefaultArgs<ExtArgs>
    equipmentLists?: boolean | EquipmentEntryList$equipmentListsArgs<ExtArgs>
    _count?: boolean | EquipmentEntryListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentEntryList"]>

  export type EquipmentEntryListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchase_id?: boolean
    list?: boolean
    brand_name?: boolean
    quantity?: boolean
    unit?: boolean
    recipient?: boolean
    date_received?: boolean
    item_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchaseOrder?: boolean | EquipmentPurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentEntryList"]>

  export type EquipmentEntryListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchase_id?: boolean
    list?: boolean
    brand_name?: boolean
    quantity?: boolean
    unit?: boolean
    recipient?: boolean
    date_received?: boolean
    item_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchaseOrder?: boolean | EquipmentPurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentEntryList"]>

  export type EquipmentEntryListSelectScalar = {
    id?: boolean
    purchase_id?: boolean
    list?: boolean
    brand_name?: boolean
    quantity?: boolean
    unit?: boolean
    recipient?: boolean
    date_received?: boolean
    item_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentEntryListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "purchase_id" | "list" | "brand_name" | "quantity" | "unit" | "recipient" | "date_received" | "item_type" | "createdAt" | "updatedAt", ExtArgs["result"]["equipmentEntryList"]>
  export type EquipmentEntryListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | EquipmentPurchaseOrderDefaultArgs<ExtArgs>
    equipmentLists?: boolean | EquipmentEntryList$equipmentListsArgs<ExtArgs>
    _count?: boolean | EquipmentEntryListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentEntryListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | EquipmentPurchaseOrderDefaultArgs<ExtArgs>
  }
  export type EquipmentEntryListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | EquipmentPurchaseOrderDefaultArgs<ExtArgs>
  }

  export type $EquipmentEntryListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentEntryList"
    objects: {
      purchaseOrder: Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>
      equipmentLists: Prisma.$EquipmentListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchase_id: string
      list: string | null
      brand_name: string | null
      quantity: number
      unit: string | null
      recipient: string | null
      date_received: Date | null
      item_type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipmentEntryList"]>
    composites: {}
  }

  type EquipmentEntryListGetPayload<S extends boolean | null | undefined | EquipmentEntryListDefaultArgs> = $Result.GetResult<Prisma.$EquipmentEntryListPayload, S>

  type EquipmentEntryListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentEntryListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentEntryListCountAggregateInputType | true
    }

  export interface EquipmentEntryListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentEntryList'], meta: { name: 'EquipmentEntryList' } }
    /**
     * Find zero or one EquipmentEntryList that matches the filter.
     * @param {EquipmentEntryListFindUniqueArgs} args - Arguments to find a EquipmentEntryList
     * @example
     * // Get one EquipmentEntryList
     * const equipmentEntryList = await prisma.equipmentEntryList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentEntryListFindUniqueArgs>(args: SelectSubset<T, EquipmentEntryListFindUniqueArgs<ExtArgs>>): Prisma__EquipmentEntryListClient<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentEntryList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentEntryListFindUniqueOrThrowArgs} args - Arguments to find a EquipmentEntryList
     * @example
     * // Get one EquipmentEntryList
     * const equipmentEntryList = await prisma.equipmentEntryList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentEntryListFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentEntryListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentEntryListClient<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentEntryList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentEntryListFindFirstArgs} args - Arguments to find a EquipmentEntryList
     * @example
     * // Get one EquipmentEntryList
     * const equipmentEntryList = await prisma.equipmentEntryList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentEntryListFindFirstArgs>(args?: SelectSubset<T, EquipmentEntryListFindFirstArgs<ExtArgs>>): Prisma__EquipmentEntryListClient<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentEntryList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentEntryListFindFirstOrThrowArgs} args - Arguments to find a EquipmentEntryList
     * @example
     * // Get one EquipmentEntryList
     * const equipmentEntryList = await prisma.equipmentEntryList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentEntryListFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentEntryListFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentEntryListClient<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentEntryLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentEntryListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentEntryLists
     * const equipmentEntryLists = await prisma.equipmentEntryList.findMany()
     * 
     * // Get first 10 EquipmentEntryLists
     * const equipmentEntryLists = await prisma.equipmentEntryList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentEntryListWithIdOnly = await prisma.equipmentEntryList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentEntryListFindManyArgs>(args?: SelectSubset<T, EquipmentEntryListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentEntryList.
     * @param {EquipmentEntryListCreateArgs} args - Arguments to create a EquipmentEntryList.
     * @example
     * // Create one EquipmentEntryList
     * const EquipmentEntryList = await prisma.equipmentEntryList.create({
     *   data: {
     *     // ... data to create a EquipmentEntryList
     *   }
     * })
     * 
     */
    create<T extends EquipmentEntryListCreateArgs>(args: SelectSubset<T, EquipmentEntryListCreateArgs<ExtArgs>>): Prisma__EquipmentEntryListClient<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentEntryLists.
     * @param {EquipmentEntryListCreateManyArgs} args - Arguments to create many EquipmentEntryLists.
     * @example
     * // Create many EquipmentEntryLists
     * const equipmentEntryList = await prisma.equipmentEntryList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentEntryListCreateManyArgs>(args?: SelectSubset<T, EquipmentEntryListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentEntryLists and returns the data saved in the database.
     * @param {EquipmentEntryListCreateManyAndReturnArgs} args - Arguments to create many EquipmentEntryLists.
     * @example
     * // Create many EquipmentEntryLists
     * const equipmentEntryList = await prisma.equipmentEntryList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentEntryLists and only return the `id`
     * const equipmentEntryListWithIdOnly = await prisma.equipmentEntryList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentEntryListCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentEntryListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentEntryList.
     * @param {EquipmentEntryListDeleteArgs} args - Arguments to delete one EquipmentEntryList.
     * @example
     * // Delete one EquipmentEntryList
     * const EquipmentEntryList = await prisma.equipmentEntryList.delete({
     *   where: {
     *     // ... filter to delete one EquipmentEntryList
     *   }
     * })
     * 
     */
    delete<T extends EquipmentEntryListDeleteArgs>(args: SelectSubset<T, EquipmentEntryListDeleteArgs<ExtArgs>>): Prisma__EquipmentEntryListClient<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentEntryList.
     * @param {EquipmentEntryListUpdateArgs} args - Arguments to update one EquipmentEntryList.
     * @example
     * // Update one EquipmentEntryList
     * const equipmentEntryList = await prisma.equipmentEntryList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentEntryListUpdateArgs>(args: SelectSubset<T, EquipmentEntryListUpdateArgs<ExtArgs>>): Prisma__EquipmentEntryListClient<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentEntryLists.
     * @param {EquipmentEntryListDeleteManyArgs} args - Arguments to filter EquipmentEntryLists to delete.
     * @example
     * // Delete a few EquipmentEntryLists
     * const { count } = await prisma.equipmentEntryList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentEntryListDeleteManyArgs>(args?: SelectSubset<T, EquipmentEntryListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentEntryLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentEntryListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentEntryLists
     * const equipmentEntryList = await prisma.equipmentEntryList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentEntryListUpdateManyArgs>(args: SelectSubset<T, EquipmentEntryListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentEntryLists and returns the data updated in the database.
     * @param {EquipmentEntryListUpdateManyAndReturnArgs} args - Arguments to update many EquipmentEntryLists.
     * @example
     * // Update many EquipmentEntryLists
     * const equipmentEntryList = await prisma.equipmentEntryList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentEntryLists and only return the `id`
     * const equipmentEntryListWithIdOnly = await prisma.equipmentEntryList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentEntryListUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentEntryListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentEntryList.
     * @param {EquipmentEntryListUpsertArgs} args - Arguments to update or create a EquipmentEntryList.
     * @example
     * // Update or create a EquipmentEntryList
     * const equipmentEntryList = await prisma.equipmentEntryList.upsert({
     *   create: {
     *     // ... data to create a EquipmentEntryList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentEntryList we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentEntryListUpsertArgs>(args: SelectSubset<T, EquipmentEntryListUpsertArgs<ExtArgs>>): Prisma__EquipmentEntryListClient<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentEntryLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentEntryListCountArgs} args - Arguments to filter EquipmentEntryLists to count.
     * @example
     * // Count the number of EquipmentEntryLists
     * const count = await prisma.equipmentEntryList.count({
     *   where: {
     *     // ... the filter for the EquipmentEntryLists we want to count
     *   }
     * })
    **/
    count<T extends EquipmentEntryListCountArgs>(
      args?: Subset<T, EquipmentEntryListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentEntryListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentEntryList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentEntryListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentEntryListAggregateArgs>(args: Subset<T, EquipmentEntryListAggregateArgs>): Prisma.PrismaPromise<GetEquipmentEntryListAggregateType<T>>

    /**
     * Group by EquipmentEntryList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentEntryListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentEntryListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentEntryListGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentEntryListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentEntryListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentEntryListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentEntryList model
   */
  readonly fields: EquipmentEntryListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentEntryList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentEntryListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchaseOrder<T extends EquipmentPurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentPurchaseOrderDefaultArgs<ExtArgs>>): Prisma__EquipmentPurchaseOrderClient<$Result.GetResult<Prisma.$EquipmentPurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipmentLists<T extends EquipmentEntryList$equipmentListsArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentEntryList$equipmentListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EquipmentEntryList model
   */
  interface EquipmentEntryListFieldRefs {
    readonly id: FieldRef<"EquipmentEntryList", 'String'>
    readonly purchase_id: FieldRef<"EquipmentEntryList", 'String'>
    readonly list: FieldRef<"EquipmentEntryList", 'String'>
    readonly brand_name: FieldRef<"EquipmentEntryList", 'String'>
    readonly quantity: FieldRef<"EquipmentEntryList", 'Int'>
    readonly unit: FieldRef<"EquipmentEntryList", 'String'>
    readonly recipient: FieldRef<"EquipmentEntryList", 'String'>
    readonly date_received: FieldRef<"EquipmentEntryList", 'DateTime'>
    readonly item_type: FieldRef<"EquipmentEntryList", 'String'>
    readonly createdAt: FieldRef<"EquipmentEntryList", 'DateTime'>
    readonly updatedAt: FieldRef<"EquipmentEntryList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentEntryList findUnique
   */
  export type EquipmentEntryListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentEntryList to fetch.
     */
    where: EquipmentEntryListWhereUniqueInput
  }

  /**
   * EquipmentEntryList findUniqueOrThrow
   */
  export type EquipmentEntryListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentEntryList to fetch.
     */
    where: EquipmentEntryListWhereUniqueInput
  }

  /**
   * EquipmentEntryList findFirst
   */
  export type EquipmentEntryListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentEntryList to fetch.
     */
    where?: EquipmentEntryListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentEntryLists to fetch.
     */
    orderBy?: EquipmentEntryListOrderByWithRelationInput | EquipmentEntryListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentEntryLists.
     */
    cursor?: EquipmentEntryListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentEntryLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentEntryLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentEntryLists.
     */
    distinct?: EquipmentEntryListScalarFieldEnum | EquipmentEntryListScalarFieldEnum[]
  }

  /**
   * EquipmentEntryList findFirstOrThrow
   */
  export type EquipmentEntryListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentEntryList to fetch.
     */
    where?: EquipmentEntryListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentEntryLists to fetch.
     */
    orderBy?: EquipmentEntryListOrderByWithRelationInput | EquipmentEntryListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentEntryLists.
     */
    cursor?: EquipmentEntryListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentEntryLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentEntryLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentEntryLists.
     */
    distinct?: EquipmentEntryListScalarFieldEnum | EquipmentEntryListScalarFieldEnum[]
  }

  /**
   * EquipmentEntryList findMany
   */
  export type EquipmentEntryListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentEntryLists to fetch.
     */
    where?: EquipmentEntryListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentEntryLists to fetch.
     */
    orderBy?: EquipmentEntryListOrderByWithRelationInput | EquipmentEntryListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentEntryLists.
     */
    cursor?: EquipmentEntryListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentEntryLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentEntryLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentEntryLists.
     */
    distinct?: EquipmentEntryListScalarFieldEnum | EquipmentEntryListScalarFieldEnum[]
  }

  /**
   * EquipmentEntryList create
   */
  export type EquipmentEntryListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipmentEntryList.
     */
    data: XOR<EquipmentEntryListCreateInput, EquipmentEntryListUncheckedCreateInput>
  }

  /**
   * EquipmentEntryList createMany
   */
  export type EquipmentEntryListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentEntryLists.
     */
    data: EquipmentEntryListCreateManyInput | EquipmentEntryListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentEntryList createManyAndReturn
   */
  export type EquipmentEntryListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentEntryLists.
     */
    data: EquipmentEntryListCreateManyInput | EquipmentEntryListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentEntryList update
   */
  export type EquipmentEntryListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipmentEntryList.
     */
    data: XOR<EquipmentEntryListUpdateInput, EquipmentEntryListUncheckedUpdateInput>
    /**
     * Choose, which EquipmentEntryList to update.
     */
    where: EquipmentEntryListWhereUniqueInput
  }

  /**
   * EquipmentEntryList updateMany
   */
  export type EquipmentEntryListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentEntryLists.
     */
    data: XOR<EquipmentEntryListUpdateManyMutationInput, EquipmentEntryListUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentEntryLists to update
     */
    where?: EquipmentEntryListWhereInput
    /**
     * Limit how many EquipmentEntryLists to update.
     */
    limit?: number
  }

  /**
   * EquipmentEntryList updateManyAndReturn
   */
  export type EquipmentEntryListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentEntryLists.
     */
    data: XOR<EquipmentEntryListUpdateManyMutationInput, EquipmentEntryListUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentEntryLists to update
     */
    where?: EquipmentEntryListWhereInput
    /**
     * Limit how many EquipmentEntryLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentEntryList upsert
   */
  export type EquipmentEntryListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipmentEntryList to update in case it exists.
     */
    where: EquipmentEntryListWhereUniqueInput
    /**
     * In case the EquipmentEntryList found by the `where` argument doesn't exist, create a new EquipmentEntryList with this data.
     */
    create: XOR<EquipmentEntryListCreateInput, EquipmentEntryListUncheckedCreateInput>
    /**
     * In case the EquipmentEntryList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentEntryListUpdateInput, EquipmentEntryListUncheckedUpdateInput>
  }

  /**
   * EquipmentEntryList delete
   */
  export type EquipmentEntryListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListInclude<ExtArgs> | null
    /**
     * Filter which EquipmentEntryList to delete.
     */
    where: EquipmentEntryListWhereUniqueInput
  }

  /**
   * EquipmentEntryList deleteMany
   */
  export type EquipmentEntryListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentEntryLists to delete
     */
    where?: EquipmentEntryListWhereInput
    /**
     * Limit how many EquipmentEntryLists to delete.
     */
    limit?: number
  }

  /**
   * EquipmentEntryList.equipmentLists
   */
  export type EquipmentEntryList$equipmentListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListInclude<ExtArgs> | null
    where?: EquipmentListWhereInput
    orderBy?: EquipmentListOrderByWithRelationInput | EquipmentListOrderByWithRelationInput[]
    cursor?: EquipmentListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentListScalarFieldEnum | EquipmentListScalarFieldEnum[]
  }

  /**
   * EquipmentEntryList without action
   */
  export type EquipmentEntryListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentEntryList
     */
    select?: EquipmentEntryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentEntryList
     */
    omit?: EquipmentEntryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentEntryListInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentList
   */

  export type AggregateEquipmentList = {
    _count: EquipmentListCountAggregateOutputType | null
    _avg: EquipmentListAvgAggregateOutputType | null
    _sum: EquipmentListSumAggregateOutputType | null
    _min: EquipmentListMinAggregateOutputType | null
    _max: EquipmentListMaxAggregateOutputType | null
  }

  export type EquipmentListAvgAggregateOutputType = {
    payout_amount: number | null
    remaining: number | null
  }

  export type EquipmentListSumAggregateOutputType = {
    payout_amount: number | null
    remaining: number | null
  }

  export type EquipmentListMinAggregateOutputType = {
    id: string | null
    eq_code: string | null
    equipment_entry_id: string | null
    payout_amount: number | null
    remaining: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentListMaxAggregateOutputType = {
    id: string | null
    eq_code: string | null
    equipment_entry_id: string | null
    payout_amount: number | null
    remaining: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentListCountAggregateOutputType = {
    id: number
    eq_code: number
    equipment_entry_id: number
    payout_amount: number
    remaining: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentListAvgAggregateInputType = {
    payout_amount?: true
    remaining?: true
  }

  export type EquipmentListSumAggregateInputType = {
    payout_amount?: true
    remaining?: true
  }

  export type EquipmentListMinAggregateInputType = {
    id?: true
    eq_code?: true
    equipment_entry_id?: true
    payout_amount?: true
    remaining?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentListMaxAggregateInputType = {
    id?: true
    eq_code?: true
    equipment_entry_id?: true
    payout_amount?: true
    remaining?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentListCountAggregateInputType = {
    id?: true
    eq_code?: true
    equipment_entry_id?: true
    payout_amount?: true
    remaining?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentList to aggregate.
     */
    where?: EquipmentListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentLists to fetch.
     */
    orderBy?: EquipmentListOrderByWithRelationInput | EquipmentListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentLists
    **/
    _count?: true | EquipmentListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentListMaxAggregateInputType
  }

  export type GetEquipmentListAggregateType<T extends EquipmentListAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentList[P]>
      : GetScalarType<T[P], AggregateEquipmentList[P]>
  }




  export type EquipmentListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentListWhereInput
    orderBy?: EquipmentListOrderByWithAggregationInput | EquipmentListOrderByWithAggregationInput[]
    by: EquipmentListScalarFieldEnum[] | EquipmentListScalarFieldEnum
    having?: EquipmentListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentListCountAggregateInputType | true
    _avg?: EquipmentListAvgAggregateInputType
    _sum?: EquipmentListSumAggregateInputType
    _min?: EquipmentListMinAggregateInputType
    _max?: EquipmentListMaxAggregateInputType
  }

  export type EquipmentListGroupByOutputType = {
    id: string
    eq_code: string | null
    equipment_entry_id: string
    payout_amount: number | null
    remaining: number
    status: string | null
    createdAt: Date
    updatedAt: Date
    _count: EquipmentListCountAggregateOutputType | null
    _avg: EquipmentListAvgAggregateOutputType | null
    _sum: EquipmentListSumAggregateOutputType | null
    _min: EquipmentListMinAggregateOutputType | null
    _max: EquipmentListMaxAggregateOutputType | null
  }

  type GetEquipmentListGroupByPayload<T extends EquipmentListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentListGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentListGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eq_code?: boolean
    equipment_entry_id?: boolean
    payout_amount?: boolean
    remaining?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipmentEntry?: boolean | EquipmentEntryListDefaultArgs<ExtArgs>
    requests?: boolean | EquipmentList$requestsArgs<ExtArgs>
    _count?: boolean | EquipmentListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentList"]>

  export type EquipmentListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eq_code?: boolean
    equipment_entry_id?: boolean
    payout_amount?: boolean
    remaining?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipmentEntry?: boolean | EquipmentEntryListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentList"]>

  export type EquipmentListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eq_code?: boolean
    equipment_entry_id?: boolean
    payout_amount?: boolean
    remaining?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipmentEntry?: boolean | EquipmentEntryListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentList"]>

  export type EquipmentListSelectScalar = {
    id?: boolean
    eq_code?: boolean
    equipment_entry_id?: boolean
    payout_amount?: boolean
    remaining?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eq_code" | "equipment_entry_id" | "payout_amount" | "remaining" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["equipmentList"]>
  export type EquipmentListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentEntry?: boolean | EquipmentEntryListDefaultArgs<ExtArgs>
    requests?: boolean | EquipmentList$requestsArgs<ExtArgs>
    _count?: boolean | EquipmentListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentEntry?: boolean | EquipmentEntryListDefaultArgs<ExtArgs>
  }
  export type EquipmentListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentEntry?: boolean | EquipmentEntryListDefaultArgs<ExtArgs>
  }

  export type $EquipmentListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentList"
    objects: {
      equipmentEntry: Prisma.$EquipmentEntryListPayload<ExtArgs>
      requests: Prisma.$EquipmentRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eq_code: string | null
      equipment_entry_id: string
      payout_amount: number | null
      remaining: number
      status: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipmentList"]>
    composites: {}
  }

  type EquipmentListGetPayload<S extends boolean | null | undefined | EquipmentListDefaultArgs> = $Result.GetResult<Prisma.$EquipmentListPayload, S>

  type EquipmentListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentListCountAggregateInputType | true
    }

  export interface EquipmentListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentList'], meta: { name: 'EquipmentList' } }
    /**
     * Find zero or one EquipmentList that matches the filter.
     * @param {EquipmentListFindUniqueArgs} args - Arguments to find a EquipmentList
     * @example
     * // Get one EquipmentList
     * const equipmentList = await prisma.equipmentList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentListFindUniqueArgs>(args: SelectSubset<T, EquipmentListFindUniqueArgs<ExtArgs>>): Prisma__EquipmentListClient<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentListFindUniqueOrThrowArgs} args - Arguments to find a EquipmentList
     * @example
     * // Get one EquipmentList
     * const equipmentList = await prisma.equipmentList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentListFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentListClient<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentListFindFirstArgs} args - Arguments to find a EquipmentList
     * @example
     * // Get one EquipmentList
     * const equipmentList = await prisma.equipmentList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentListFindFirstArgs>(args?: SelectSubset<T, EquipmentListFindFirstArgs<ExtArgs>>): Prisma__EquipmentListClient<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentListFindFirstOrThrowArgs} args - Arguments to find a EquipmentList
     * @example
     * // Get one EquipmentList
     * const equipmentList = await prisma.equipmentList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentListFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentListFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentListClient<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentLists
     * const equipmentLists = await prisma.equipmentList.findMany()
     * 
     * // Get first 10 EquipmentLists
     * const equipmentLists = await prisma.equipmentList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentListWithIdOnly = await prisma.equipmentList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentListFindManyArgs>(args?: SelectSubset<T, EquipmentListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentList.
     * @param {EquipmentListCreateArgs} args - Arguments to create a EquipmentList.
     * @example
     * // Create one EquipmentList
     * const EquipmentList = await prisma.equipmentList.create({
     *   data: {
     *     // ... data to create a EquipmentList
     *   }
     * })
     * 
     */
    create<T extends EquipmentListCreateArgs>(args: SelectSubset<T, EquipmentListCreateArgs<ExtArgs>>): Prisma__EquipmentListClient<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentLists.
     * @param {EquipmentListCreateManyArgs} args - Arguments to create many EquipmentLists.
     * @example
     * // Create many EquipmentLists
     * const equipmentList = await prisma.equipmentList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentListCreateManyArgs>(args?: SelectSubset<T, EquipmentListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentLists and returns the data saved in the database.
     * @param {EquipmentListCreateManyAndReturnArgs} args - Arguments to create many EquipmentLists.
     * @example
     * // Create many EquipmentLists
     * const equipmentList = await prisma.equipmentList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentLists and only return the `id`
     * const equipmentListWithIdOnly = await prisma.equipmentList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentListCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentList.
     * @param {EquipmentListDeleteArgs} args - Arguments to delete one EquipmentList.
     * @example
     * // Delete one EquipmentList
     * const EquipmentList = await prisma.equipmentList.delete({
     *   where: {
     *     // ... filter to delete one EquipmentList
     *   }
     * })
     * 
     */
    delete<T extends EquipmentListDeleteArgs>(args: SelectSubset<T, EquipmentListDeleteArgs<ExtArgs>>): Prisma__EquipmentListClient<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentList.
     * @param {EquipmentListUpdateArgs} args - Arguments to update one EquipmentList.
     * @example
     * // Update one EquipmentList
     * const equipmentList = await prisma.equipmentList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentListUpdateArgs>(args: SelectSubset<T, EquipmentListUpdateArgs<ExtArgs>>): Prisma__EquipmentListClient<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentLists.
     * @param {EquipmentListDeleteManyArgs} args - Arguments to filter EquipmentLists to delete.
     * @example
     * // Delete a few EquipmentLists
     * const { count } = await prisma.equipmentList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentListDeleteManyArgs>(args?: SelectSubset<T, EquipmentListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentLists
     * const equipmentList = await prisma.equipmentList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentListUpdateManyArgs>(args: SelectSubset<T, EquipmentListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentLists and returns the data updated in the database.
     * @param {EquipmentListUpdateManyAndReturnArgs} args - Arguments to update many EquipmentLists.
     * @example
     * // Update many EquipmentLists
     * const equipmentList = await prisma.equipmentList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentLists and only return the `id`
     * const equipmentListWithIdOnly = await prisma.equipmentList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentListUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentList.
     * @param {EquipmentListUpsertArgs} args - Arguments to update or create a EquipmentList.
     * @example
     * // Update or create a EquipmentList
     * const equipmentList = await prisma.equipmentList.upsert({
     *   create: {
     *     // ... data to create a EquipmentList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentList we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentListUpsertArgs>(args: SelectSubset<T, EquipmentListUpsertArgs<ExtArgs>>): Prisma__EquipmentListClient<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentListCountArgs} args - Arguments to filter EquipmentLists to count.
     * @example
     * // Count the number of EquipmentLists
     * const count = await prisma.equipmentList.count({
     *   where: {
     *     // ... the filter for the EquipmentLists we want to count
     *   }
     * })
    **/
    count<T extends EquipmentListCountArgs>(
      args?: Subset<T, EquipmentListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentListAggregateArgs>(args: Subset<T, EquipmentListAggregateArgs>): Prisma.PrismaPromise<GetEquipmentListAggregateType<T>>

    /**
     * Group by EquipmentList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentListGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentList model
   */
  readonly fields: EquipmentListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipmentEntry<T extends EquipmentEntryListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentEntryListDefaultArgs<ExtArgs>>): Prisma__EquipmentEntryListClient<$Result.GetResult<Prisma.$EquipmentEntryListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requests<T extends EquipmentList$requestsArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentList$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EquipmentList model
   */
  interface EquipmentListFieldRefs {
    readonly id: FieldRef<"EquipmentList", 'String'>
    readonly eq_code: FieldRef<"EquipmentList", 'String'>
    readonly equipment_entry_id: FieldRef<"EquipmentList", 'String'>
    readonly payout_amount: FieldRef<"EquipmentList", 'Float'>
    readonly remaining: FieldRef<"EquipmentList", 'Int'>
    readonly status: FieldRef<"EquipmentList", 'String'>
    readonly createdAt: FieldRef<"EquipmentList", 'DateTime'>
    readonly updatedAt: FieldRef<"EquipmentList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentList findUnique
   */
  export type EquipmentListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentList to fetch.
     */
    where: EquipmentListWhereUniqueInput
  }

  /**
   * EquipmentList findUniqueOrThrow
   */
  export type EquipmentListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentList to fetch.
     */
    where: EquipmentListWhereUniqueInput
  }

  /**
   * EquipmentList findFirst
   */
  export type EquipmentListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentList to fetch.
     */
    where?: EquipmentListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentLists to fetch.
     */
    orderBy?: EquipmentListOrderByWithRelationInput | EquipmentListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentLists.
     */
    cursor?: EquipmentListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentLists.
     */
    distinct?: EquipmentListScalarFieldEnum | EquipmentListScalarFieldEnum[]
  }

  /**
   * EquipmentList findFirstOrThrow
   */
  export type EquipmentListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentList to fetch.
     */
    where?: EquipmentListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentLists to fetch.
     */
    orderBy?: EquipmentListOrderByWithRelationInput | EquipmentListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentLists.
     */
    cursor?: EquipmentListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentLists.
     */
    distinct?: EquipmentListScalarFieldEnum | EquipmentListScalarFieldEnum[]
  }

  /**
   * EquipmentList findMany
   */
  export type EquipmentListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentLists to fetch.
     */
    where?: EquipmentListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentLists to fetch.
     */
    orderBy?: EquipmentListOrderByWithRelationInput | EquipmentListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentLists.
     */
    cursor?: EquipmentListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentLists.
     */
    distinct?: EquipmentListScalarFieldEnum | EquipmentListScalarFieldEnum[]
  }

  /**
   * EquipmentList create
   */
  export type EquipmentListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipmentList.
     */
    data: XOR<EquipmentListCreateInput, EquipmentListUncheckedCreateInput>
  }

  /**
   * EquipmentList createMany
   */
  export type EquipmentListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentLists.
     */
    data: EquipmentListCreateManyInput | EquipmentListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentList createManyAndReturn
   */
  export type EquipmentListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentLists.
     */
    data: EquipmentListCreateManyInput | EquipmentListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentList update
   */
  export type EquipmentListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipmentList.
     */
    data: XOR<EquipmentListUpdateInput, EquipmentListUncheckedUpdateInput>
    /**
     * Choose, which EquipmentList to update.
     */
    where: EquipmentListWhereUniqueInput
  }

  /**
   * EquipmentList updateMany
   */
  export type EquipmentListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentLists.
     */
    data: XOR<EquipmentListUpdateManyMutationInput, EquipmentListUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentLists to update
     */
    where?: EquipmentListWhereInput
    /**
     * Limit how many EquipmentLists to update.
     */
    limit?: number
  }

  /**
   * EquipmentList updateManyAndReturn
   */
  export type EquipmentListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentLists.
     */
    data: XOR<EquipmentListUpdateManyMutationInput, EquipmentListUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentLists to update
     */
    where?: EquipmentListWhereInput
    /**
     * Limit how many EquipmentLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentList upsert
   */
  export type EquipmentListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipmentList to update in case it exists.
     */
    where: EquipmentListWhereUniqueInput
    /**
     * In case the EquipmentList found by the `where` argument doesn't exist, create a new EquipmentList with this data.
     */
    create: XOR<EquipmentListCreateInput, EquipmentListUncheckedCreateInput>
    /**
     * In case the EquipmentList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentListUpdateInput, EquipmentListUncheckedUpdateInput>
  }

  /**
   * EquipmentList delete
   */
  export type EquipmentListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListInclude<ExtArgs> | null
    /**
     * Filter which EquipmentList to delete.
     */
    where: EquipmentListWhereUniqueInput
  }

  /**
   * EquipmentList deleteMany
   */
  export type EquipmentListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentLists to delete
     */
    where?: EquipmentListWhereInput
    /**
     * Limit how many EquipmentLists to delete.
     */
    limit?: number
  }

  /**
   * EquipmentList.requests
   */
  export type EquipmentList$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
    where?: EquipmentRequestWhereInput
    orderBy?: EquipmentRequestOrderByWithRelationInput | EquipmentRequestOrderByWithRelationInput[]
    cursor?: EquipmentRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentRequestScalarFieldEnum | EquipmentRequestScalarFieldEnum[]
  }

  /**
   * EquipmentList without action
   */
  export type EquipmentListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentRequest
   */

  export type AggregateEquipmentRequest = {
    _count: EquipmentRequestCountAggregateOutputType | null
    _avg: EquipmentRequestAvgAggregateOutputType | null
    _sum: EquipmentRequestSumAggregateOutputType | null
    _min: EquipmentRequestMinAggregateOutputType | null
    _max: EquipmentRequestMaxAggregateOutputType | null
  }

  export type EquipmentRequestAvgAggregateOutputType = {
    quantity: number | null
  }

  export type EquipmentRequestSumAggregateOutputType = {
    quantity: number | null
  }

  export type EquipmentRequestMinAggregateOutputType = {
    id: string | null
    equipment_code: string | null
    equipment_list_id: string | null
    manual_item_name: string | null
    manual_item_type: string | null
    quantity: number | null
    reason: string | null
    remarks: string | null
    groupId: string | null
    borrow_type: string | null
    approval: string | null
    approval_status: string | null
    approval_comment: string | null
    approval_date: Date | null
    it_approval: string | null
    it_approval_status: string | null
    it_approval_comment: string | null
    it_approval_date: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentRequestMaxAggregateOutputType = {
    id: string | null
    equipment_code: string | null
    equipment_list_id: string | null
    manual_item_name: string | null
    manual_item_type: string | null
    quantity: number | null
    reason: string | null
    remarks: string | null
    groupId: string | null
    borrow_type: string | null
    approval: string | null
    approval_status: string | null
    approval_comment: string | null
    approval_date: Date | null
    it_approval: string | null
    it_approval_status: string | null
    it_approval_comment: string | null
    it_approval_date: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentRequestCountAggregateOutputType = {
    id: number
    equipment_code: number
    equipment_list_id: number
    manual_item_name: number
    manual_item_type: number
    quantity: number
    reason: number
    remarks: number
    groupId: number
    borrow_type: number
    approval: number
    approval_status: number
    approval_comment: number
    approval_date: number
    it_approval: number
    it_approval_status: number
    it_approval_comment: number
    it_approval_date: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentRequestAvgAggregateInputType = {
    quantity?: true
  }

  export type EquipmentRequestSumAggregateInputType = {
    quantity?: true
  }

  export type EquipmentRequestMinAggregateInputType = {
    id?: true
    equipment_code?: true
    equipment_list_id?: true
    manual_item_name?: true
    manual_item_type?: true
    quantity?: true
    reason?: true
    remarks?: true
    groupId?: true
    borrow_type?: true
    approval?: true
    approval_status?: true
    approval_comment?: true
    approval_date?: true
    it_approval?: true
    it_approval_status?: true
    it_approval_comment?: true
    it_approval_date?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentRequestMaxAggregateInputType = {
    id?: true
    equipment_code?: true
    equipment_list_id?: true
    manual_item_name?: true
    manual_item_type?: true
    quantity?: true
    reason?: true
    remarks?: true
    groupId?: true
    borrow_type?: true
    approval?: true
    approval_status?: true
    approval_comment?: true
    approval_date?: true
    it_approval?: true
    it_approval_status?: true
    it_approval_comment?: true
    it_approval_date?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentRequestCountAggregateInputType = {
    id?: true
    equipment_code?: true
    equipment_list_id?: true
    manual_item_name?: true
    manual_item_type?: true
    quantity?: true
    reason?: true
    remarks?: true
    groupId?: true
    borrow_type?: true
    approval?: true
    approval_status?: true
    approval_comment?: true
    approval_date?: true
    it_approval?: true
    it_approval_status?: true
    it_approval_comment?: true
    it_approval_date?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentRequest to aggregate.
     */
    where?: EquipmentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentRequests to fetch.
     */
    orderBy?: EquipmentRequestOrderByWithRelationInput | EquipmentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentRequests
    **/
    _count?: true | EquipmentRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentRequestMaxAggregateInputType
  }

  export type GetEquipmentRequestAggregateType<T extends EquipmentRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentRequest[P]>
      : GetScalarType<T[P], AggregateEquipmentRequest[P]>
  }




  export type EquipmentRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentRequestWhereInput
    orderBy?: EquipmentRequestOrderByWithAggregationInput | EquipmentRequestOrderByWithAggregationInput[]
    by: EquipmentRequestScalarFieldEnum[] | EquipmentRequestScalarFieldEnum
    having?: EquipmentRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentRequestCountAggregateInputType | true
    _avg?: EquipmentRequestAvgAggregateInputType
    _sum?: EquipmentRequestSumAggregateInputType
    _min?: EquipmentRequestMinAggregateInputType
    _max?: EquipmentRequestMaxAggregateInputType
  }

  export type EquipmentRequestGroupByOutputType = {
    id: string
    equipment_code: string
    equipment_list_id: string | null
    manual_item_name: string | null
    manual_item_type: string | null
    quantity: number
    reason: string | null
    remarks: string | null
    groupId: string | null
    borrow_type: string | null
    approval: string | null
    approval_status: string | null
    approval_comment: string | null
    approval_date: Date | null
    it_approval: string | null
    it_approval_status: string | null
    it_approval_comment: string | null
    it_approval_date: Date | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: EquipmentRequestCountAggregateOutputType | null
    _avg: EquipmentRequestAvgAggregateOutputType | null
    _sum: EquipmentRequestSumAggregateOutputType | null
    _min: EquipmentRequestMinAggregateOutputType | null
    _max: EquipmentRequestMaxAggregateOutputType | null
  }

  type GetEquipmentRequestGroupByPayload<T extends EquipmentRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentRequestGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentRequestGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipment_code?: boolean
    equipment_list_id?: boolean
    manual_item_name?: boolean
    manual_item_type?: boolean
    quantity?: boolean
    reason?: boolean
    remarks?: boolean
    groupId?: boolean
    borrow_type?: boolean
    approval?: boolean
    approval_status?: boolean
    approval_comment?: boolean
    approval_date?: boolean
    it_approval?: boolean
    it_approval_status?: boolean
    it_approval_comment?: boolean
    it_approval_date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipmentList?: boolean | EquipmentRequest$equipmentListArgs<ExtArgs>
    group?: boolean | EquipmentRequest$groupArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentRequest"]>

  export type EquipmentRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipment_code?: boolean
    equipment_list_id?: boolean
    manual_item_name?: boolean
    manual_item_type?: boolean
    quantity?: boolean
    reason?: boolean
    remarks?: boolean
    groupId?: boolean
    borrow_type?: boolean
    approval?: boolean
    approval_status?: boolean
    approval_comment?: boolean
    approval_date?: boolean
    it_approval?: boolean
    it_approval_status?: boolean
    it_approval_comment?: boolean
    it_approval_date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipmentList?: boolean | EquipmentRequest$equipmentListArgs<ExtArgs>
    group?: boolean | EquipmentRequest$groupArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentRequest"]>

  export type EquipmentRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipment_code?: boolean
    equipment_list_id?: boolean
    manual_item_name?: boolean
    manual_item_type?: boolean
    quantity?: boolean
    reason?: boolean
    remarks?: boolean
    groupId?: boolean
    borrow_type?: boolean
    approval?: boolean
    approval_status?: boolean
    approval_comment?: boolean
    approval_date?: boolean
    it_approval?: boolean
    it_approval_status?: boolean
    it_approval_comment?: boolean
    it_approval_date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipmentList?: boolean | EquipmentRequest$equipmentListArgs<ExtArgs>
    group?: boolean | EquipmentRequest$groupArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentRequest"]>

  export type EquipmentRequestSelectScalar = {
    id?: boolean
    equipment_code?: boolean
    equipment_list_id?: boolean
    manual_item_name?: boolean
    manual_item_type?: boolean
    quantity?: boolean
    reason?: boolean
    remarks?: boolean
    groupId?: boolean
    borrow_type?: boolean
    approval?: boolean
    approval_status?: boolean
    approval_comment?: boolean
    approval_date?: boolean
    it_approval?: boolean
    it_approval_status?: boolean
    it_approval_comment?: boolean
    it_approval_date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "equipment_code" | "equipment_list_id" | "manual_item_name" | "manual_item_type" | "quantity" | "reason" | "remarks" | "groupId" | "borrow_type" | "approval" | "approval_status" | "approval_comment" | "approval_date" | "it_approval" | "it_approval_status" | "it_approval_comment" | "it_approval_date" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["equipmentRequest"]>
  export type EquipmentRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentList?: boolean | EquipmentRequest$equipmentListArgs<ExtArgs>
    group?: boolean | EquipmentRequest$groupArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EquipmentRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentList?: boolean | EquipmentRequest$equipmentListArgs<ExtArgs>
    group?: boolean | EquipmentRequest$groupArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EquipmentRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentList?: boolean | EquipmentRequest$equipmentListArgs<ExtArgs>
    group?: boolean | EquipmentRequest$groupArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EquipmentRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentRequest"
    objects: {
      equipmentList: Prisma.$EquipmentListPayload<ExtArgs> | null
      group: Prisma.$EquipmentBorrowGroupPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      equipment_code: string
      equipment_list_id: string | null
      manual_item_name: string | null
      manual_item_type: string | null
      quantity: number
      reason: string | null
      remarks: string | null
      groupId: string | null
      borrow_type: string | null
      approval: string | null
      approval_status: string | null
      approval_comment: string | null
      approval_date: Date | null
      it_approval: string | null
      it_approval_status: string | null
      it_approval_comment: string | null
      it_approval_date: Date | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipmentRequest"]>
    composites: {}
  }

  type EquipmentRequestGetPayload<S extends boolean | null | undefined | EquipmentRequestDefaultArgs> = $Result.GetResult<Prisma.$EquipmentRequestPayload, S>

  type EquipmentRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentRequestCountAggregateInputType | true
    }

  export interface EquipmentRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentRequest'], meta: { name: 'EquipmentRequest' } }
    /**
     * Find zero or one EquipmentRequest that matches the filter.
     * @param {EquipmentRequestFindUniqueArgs} args - Arguments to find a EquipmentRequest
     * @example
     * // Get one EquipmentRequest
     * const equipmentRequest = await prisma.equipmentRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentRequestFindUniqueArgs>(args: SelectSubset<T, EquipmentRequestFindUniqueArgs<ExtArgs>>): Prisma__EquipmentRequestClient<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentRequestFindUniqueOrThrowArgs} args - Arguments to find a EquipmentRequest
     * @example
     * // Get one EquipmentRequest
     * const equipmentRequest = await prisma.equipmentRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentRequestClient<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentRequestFindFirstArgs} args - Arguments to find a EquipmentRequest
     * @example
     * // Get one EquipmentRequest
     * const equipmentRequest = await prisma.equipmentRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentRequestFindFirstArgs>(args?: SelectSubset<T, EquipmentRequestFindFirstArgs<ExtArgs>>): Prisma__EquipmentRequestClient<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentRequestFindFirstOrThrowArgs} args - Arguments to find a EquipmentRequest
     * @example
     * // Get one EquipmentRequest
     * const equipmentRequest = await prisma.equipmentRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentRequestClient<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentRequests
     * const equipmentRequests = await prisma.equipmentRequest.findMany()
     * 
     * // Get first 10 EquipmentRequests
     * const equipmentRequests = await prisma.equipmentRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentRequestWithIdOnly = await prisma.equipmentRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentRequestFindManyArgs>(args?: SelectSubset<T, EquipmentRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentRequest.
     * @param {EquipmentRequestCreateArgs} args - Arguments to create a EquipmentRequest.
     * @example
     * // Create one EquipmentRequest
     * const EquipmentRequest = await prisma.equipmentRequest.create({
     *   data: {
     *     // ... data to create a EquipmentRequest
     *   }
     * })
     * 
     */
    create<T extends EquipmentRequestCreateArgs>(args: SelectSubset<T, EquipmentRequestCreateArgs<ExtArgs>>): Prisma__EquipmentRequestClient<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentRequests.
     * @param {EquipmentRequestCreateManyArgs} args - Arguments to create many EquipmentRequests.
     * @example
     * // Create many EquipmentRequests
     * const equipmentRequest = await prisma.equipmentRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentRequestCreateManyArgs>(args?: SelectSubset<T, EquipmentRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentRequests and returns the data saved in the database.
     * @param {EquipmentRequestCreateManyAndReturnArgs} args - Arguments to create many EquipmentRequests.
     * @example
     * // Create many EquipmentRequests
     * const equipmentRequest = await prisma.equipmentRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentRequests and only return the `id`
     * const equipmentRequestWithIdOnly = await prisma.equipmentRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentRequest.
     * @param {EquipmentRequestDeleteArgs} args - Arguments to delete one EquipmentRequest.
     * @example
     * // Delete one EquipmentRequest
     * const EquipmentRequest = await prisma.equipmentRequest.delete({
     *   where: {
     *     // ... filter to delete one EquipmentRequest
     *   }
     * })
     * 
     */
    delete<T extends EquipmentRequestDeleteArgs>(args: SelectSubset<T, EquipmentRequestDeleteArgs<ExtArgs>>): Prisma__EquipmentRequestClient<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentRequest.
     * @param {EquipmentRequestUpdateArgs} args - Arguments to update one EquipmentRequest.
     * @example
     * // Update one EquipmentRequest
     * const equipmentRequest = await prisma.equipmentRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentRequestUpdateArgs>(args: SelectSubset<T, EquipmentRequestUpdateArgs<ExtArgs>>): Prisma__EquipmentRequestClient<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentRequests.
     * @param {EquipmentRequestDeleteManyArgs} args - Arguments to filter EquipmentRequests to delete.
     * @example
     * // Delete a few EquipmentRequests
     * const { count } = await prisma.equipmentRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentRequestDeleteManyArgs>(args?: SelectSubset<T, EquipmentRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentRequests
     * const equipmentRequest = await prisma.equipmentRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentRequestUpdateManyArgs>(args: SelectSubset<T, EquipmentRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentRequests and returns the data updated in the database.
     * @param {EquipmentRequestUpdateManyAndReturnArgs} args - Arguments to update many EquipmentRequests.
     * @example
     * // Update many EquipmentRequests
     * const equipmentRequest = await prisma.equipmentRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentRequests and only return the `id`
     * const equipmentRequestWithIdOnly = await prisma.equipmentRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentRequest.
     * @param {EquipmentRequestUpsertArgs} args - Arguments to update or create a EquipmentRequest.
     * @example
     * // Update or create a EquipmentRequest
     * const equipmentRequest = await prisma.equipmentRequest.upsert({
     *   create: {
     *     // ... data to create a EquipmentRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentRequest we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentRequestUpsertArgs>(args: SelectSubset<T, EquipmentRequestUpsertArgs<ExtArgs>>): Prisma__EquipmentRequestClient<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentRequestCountArgs} args - Arguments to filter EquipmentRequests to count.
     * @example
     * // Count the number of EquipmentRequests
     * const count = await prisma.equipmentRequest.count({
     *   where: {
     *     // ... the filter for the EquipmentRequests we want to count
     *   }
     * })
    **/
    count<T extends EquipmentRequestCountArgs>(
      args?: Subset<T, EquipmentRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentRequestAggregateArgs>(args: Subset<T, EquipmentRequestAggregateArgs>): Prisma.PrismaPromise<GetEquipmentRequestAggregateType<T>>

    /**
     * Group by EquipmentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentRequestGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentRequest model
   */
  readonly fields: EquipmentRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipmentList<T extends EquipmentRequest$equipmentListArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentRequest$equipmentListArgs<ExtArgs>>): Prisma__EquipmentListClient<$Result.GetResult<Prisma.$EquipmentListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    group<T extends EquipmentRequest$groupArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentRequest$groupArgs<ExtArgs>>): Prisma__EquipmentBorrowGroupClient<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EquipmentRequest model
   */
  interface EquipmentRequestFieldRefs {
    readonly id: FieldRef<"EquipmentRequest", 'String'>
    readonly equipment_code: FieldRef<"EquipmentRequest", 'String'>
    readonly equipment_list_id: FieldRef<"EquipmentRequest", 'String'>
    readonly manual_item_name: FieldRef<"EquipmentRequest", 'String'>
    readonly manual_item_type: FieldRef<"EquipmentRequest", 'String'>
    readonly quantity: FieldRef<"EquipmentRequest", 'Int'>
    readonly reason: FieldRef<"EquipmentRequest", 'String'>
    readonly remarks: FieldRef<"EquipmentRequest", 'String'>
    readonly groupId: FieldRef<"EquipmentRequest", 'String'>
    readonly borrow_type: FieldRef<"EquipmentRequest", 'String'>
    readonly approval: FieldRef<"EquipmentRequest", 'String'>
    readonly approval_status: FieldRef<"EquipmentRequest", 'String'>
    readonly approval_comment: FieldRef<"EquipmentRequest", 'String'>
    readonly approval_date: FieldRef<"EquipmentRequest", 'DateTime'>
    readonly it_approval: FieldRef<"EquipmentRequest", 'String'>
    readonly it_approval_status: FieldRef<"EquipmentRequest", 'String'>
    readonly it_approval_comment: FieldRef<"EquipmentRequest", 'String'>
    readonly it_approval_date: FieldRef<"EquipmentRequest", 'DateTime'>
    readonly userId: FieldRef<"EquipmentRequest", 'String'>
    readonly createdAt: FieldRef<"EquipmentRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"EquipmentRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentRequest findUnique
   */
  export type EquipmentRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentRequest to fetch.
     */
    where: EquipmentRequestWhereUniqueInput
  }

  /**
   * EquipmentRequest findUniqueOrThrow
   */
  export type EquipmentRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentRequest to fetch.
     */
    where: EquipmentRequestWhereUniqueInput
  }

  /**
   * EquipmentRequest findFirst
   */
  export type EquipmentRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentRequest to fetch.
     */
    where?: EquipmentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentRequests to fetch.
     */
    orderBy?: EquipmentRequestOrderByWithRelationInput | EquipmentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentRequests.
     */
    cursor?: EquipmentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentRequests.
     */
    distinct?: EquipmentRequestScalarFieldEnum | EquipmentRequestScalarFieldEnum[]
  }

  /**
   * EquipmentRequest findFirstOrThrow
   */
  export type EquipmentRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentRequest to fetch.
     */
    where?: EquipmentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentRequests to fetch.
     */
    orderBy?: EquipmentRequestOrderByWithRelationInput | EquipmentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentRequests.
     */
    cursor?: EquipmentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentRequests.
     */
    distinct?: EquipmentRequestScalarFieldEnum | EquipmentRequestScalarFieldEnum[]
  }

  /**
   * EquipmentRequest findMany
   */
  export type EquipmentRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentRequests to fetch.
     */
    where?: EquipmentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentRequests to fetch.
     */
    orderBy?: EquipmentRequestOrderByWithRelationInput | EquipmentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentRequests.
     */
    cursor?: EquipmentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentRequests.
     */
    distinct?: EquipmentRequestScalarFieldEnum | EquipmentRequestScalarFieldEnum[]
  }

  /**
   * EquipmentRequest create
   */
  export type EquipmentRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipmentRequest.
     */
    data: XOR<EquipmentRequestCreateInput, EquipmentRequestUncheckedCreateInput>
  }

  /**
   * EquipmentRequest createMany
   */
  export type EquipmentRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentRequests.
     */
    data: EquipmentRequestCreateManyInput | EquipmentRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentRequest createManyAndReturn
   */
  export type EquipmentRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentRequests.
     */
    data: EquipmentRequestCreateManyInput | EquipmentRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentRequest update
   */
  export type EquipmentRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipmentRequest.
     */
    data: XOR<EquipmentRequestUpdateInput, EquipmentRequestUncheckedUpdateInput>
    /**
     * Choose, which EquipmentRequest to update.
     */
    where: EquipmentRequestWhereUniqueInput
  }

  /**
   * EquipmentRequest updateMany
   */
  export type EquipmentRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentRequests.
     */
    data: XOR<EquipmentRequestUpdateManyMutationInput, EquipmentRequestUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentRequests to update
     */
    where?: EquipmentRequestWhereInput
    /**
     * Limit how many EquipmentRequests to update.
     */
    limit?: number
  }

  /**
   * EquipmentRequest updateManyAndReturn
   */
  export type EquipmentRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentRequests.
     */
    data: XOR<EquipmentRequestUpdateManyMutationInput, EquipmentRequestUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentRequests to update
     */
    where?: EquipmentRequestWhereInput
    /**
     * Limit how many EquipmentRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentRequest upsert
   */
  export type EquipmentRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipmentRequest to update in case it exists.
     */
    where: EquipmentRequestWhereUniqueInput
    /**
     * In case the EquipmentRequest found by the `where` argument doesn't exist, create a new EquipmentRequest with this data.
     */
    create: XOR<EquipmentRequestCreateInput, EquipmentRequestUncheckedCreateInput>
    /**
     * In case the EquipmentRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentRequestUpdateInput, EquipmentRequestUncheckedUpdateInput>
  }

  /**
   * EquipmentRequest delete
   */
  export type EquipmentRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
    /**
     * Filter which EquipmentRequest to delete.
     */
    where: EquipmentRequestWhereUniqueInput
  }

  /**
   * EquipmentRequest deleteMany
   */
  export type EquipmentRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentRequests to delete
     */
    where?: EquipmentRequestWhereInput
    /**
     * Limit how many EquipmentRequests to delete.
     */
    limit?: number
  }

  /**
   * EquipmentRequest.equipmentList
   */
  export type EquipmentRequest$equipmentListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentList
     */
    select?: EquipmentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentList
     */
    omit?: EquipmentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentListInclude<ExtArgs> | null
    where?: EquipmentListWhereInput
  }

  /**
   * EquipmentRequest.group
   */
  export type EquipmentRequest$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupInclude<ExtArgs> | null
    where?: EquipmentBorrowGroupWhereInput
  }

  /**
   * EquipmentRequest without action
   */
  export type EquipmentRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentBorrowGroup
   */

  export type AggregateEquipmentBorrowGroup = {
    _count: EquipmentBorrowGroupCountAggregateOutputType | null
    _min: EquipmentBorrowGroupMinAggregateOutputType | null
    _max: EquipmentBorrowGroupMaxAggregateOutputType | null
  }

  export type EquipmentBorrowGroupMinAggregateOutputType = {
    id: string | null
    group_code: string | null
    userId: string | null
    reason: string | null
    approval: string | null
    approval_status: string | null
    approval_comment: string | null
    approval_date: Date | null
    it_approval: string | null
    it_approval_status: string | null
    it_approval_comment: string | null
    it_approval_date: Date | null
    date_needed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentBorrowGroupMaxAggregateOutputType = {
    id: string | null
    group_code: string | null
    userId: string | null
    reason: string | null
    approval: string | null
    approval_status: string | null
    approval_comment: string | null
    approval_date: Date | null
    it_approval: string | null
    it_approval_status: string | null
    it_approval_comment: string | null
    it_approval_date: Date | null
    date_needed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentBorrowGroupCountAggregateOutputType = {
    id: number
    group_code: number
    userId: number
    reason: number
    approval: number
    approval_status: number
    approval_comment: number
    approval_date: number
    it_approval: number
    it_approval_status: number
    it_approval_comment: number
    it_approval_date: number
    date_needed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentBorrowGroupMinAggregateInputType = {
    id?: true
    group_code?: true
    userId?: true
    reason?: true
    approval?: true
    approval_status?: true
    approval_comment?: true
    approval_date?: true
    it_approval?: true
    it_approval_status?: true
    it_approval_comment?: true
    it_approval_date?: true
    date_needed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentBorrowGroupMaxAggregateInputType = {
    id?: true
    group_code?: true
    userId?: true
    reason?: true
    approval?: true
    approval_status?: true
    approval_comment?: true
    approval_date?: true
    it_approval?: true
    it_approval_status?: true
    it_approval_comment?: true
    it_approval_date?: true
    date_needed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentBorrowGroupCountAggregateInputType = {
    id?: true
    group_code?: true
    userId?: true
    reason?: true
    approval?: true
    approval_status?: true
    approval_comment?: true
    approval_date?: true
    it_approval?: true
    it_approval_status?: true
    it_approval_comment?: true
    it_approval_date?: true
    date_needed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentBorrowGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentBorrowGroup to aggregate.
     */
    where?: EquipmentBorrowGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentBorrowGroups to fetch.
     */
    orderBy?: EquipmentBorrowGroupOrderByWithRelationInput | EquipmentBorrowGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentBorrowGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentBorrowGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentBorrowGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentBorrowGroups
    **/
    _count?: true | EquipmentBorrowGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentBorrowGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentBorrowGroupMaxAggregateInputType
  }

  export type GetEquipmentBorrowGroupAggregateType<T extends EquipmentBorrowGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentBorrowGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentBorrowGroup[P]>
      : GetScalarType<T[P], AggregateEquipmentBorrowGroup[P]>
  }




  export type EquipmentBorrowGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentBorrowGroupWhereInput
    orderBy?: EquipmentBorrowGroupOrderByWithAggregationInput | EquipmentBorrowGroupOrderByWithAggregationInput[]
    by: EquipmentBorrowGroupScalarFieldEnum[] | EquipmentBorrowGroupScalarFieldEnum
    having?: EquipmentBorrowGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentBorrowGroupCountAggregateInputType | true
    _min?: EquipmentBorrowGroupMinAggregateInputType
    _max?: EquipmentBorrowGroupMaxAggregateInputType
  }

  export type EquipmentBorrowGroupGroupByOutputType = {
    id: string
    group_code: string
    userId: string
    reason: string | null
    approval: string | null
    approval_status: string | null
    approval_comment: string | null
    approval_date: Date | null
    it_approval: string | null
    it_approval_status: string | null
    it_approval_comment: string | null
    it_approval_date: Date | null
    date_needed: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EquipmentBorrowGroupCountAggregateOutputType | null
    _min: EquipmentBorrowGroupMinAggregateOutputType | null
    _max: EquipmentBorrowGroupMaxAggregateOutputType | null
  }

  type GetEquipmentBorrowGroupGroupByPayload<T extends EquipmentBorrowGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentBorrowGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentBorrowGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentBorrowGroupGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentBorrowGroupGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentBorrowGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_code?: boolean
    userId?: boolean
    reason?: boolean
    approval?: boolean
    approval_status?: boolean
    approval_comment?: boolean
    approval_date?: boolean
    it_approval?: boolean
    it_approval_status?: boolean
    it_approval_comment?: boolean
    it_approval_date?: boolean
    date_needed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    requests?: boolean | EquipmentBorrowGroup$requestsArgs<ExtArgs>
    _count?: boolean | EquipmentBorrowGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentBorrowGroup"]>

  export type EquipmentBorrowGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_code?: boolean
    userId?: boolean
    reason?: boolean
    approval?: boolean
    approval_status?: boolean
    approval_comment?: boolean
    approval_date?: boolean
    it_approval?: boolean
    it_approval_status?: boolean
    it_approval_comment?: boolean
    it_approval_date?: boolean
    date_needed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentBorrowGroup"]>

  export type EquipmentBorrowGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_code?: boolean
    userId?: boolean
    reason?: boolean
    approval?: boolean
    approval_status?: boolean
    approval_comment?: boolean
    approval_date?: boolean
    it_approval?: boolean
    it_approval_status?: boolean
    it_approval_comment?: boolean
    it_approval_date?: boolean
    date_needed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentBorrowGroup"]>

  export type EquipmentBorrowGroupSelectScalar = {
    id?: boolean
    group_code?: boolean
    userId?: boolean
    reason?: boolean
    approval?: boolean
    approval_status?: boolean
    approval_comment?: boolean
    approval_date?: boolean
    it_approval?: boolean
    it_approval_status?: boolean
    it_approval_comment?: boolean
    it_approval_date?: boolean
    date_needed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentBorrowGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "group_code" | "userId" | "reason" | "approval" | "approval_status" | "approval_comment" | "approval_date" | "it_approval" | "it_approval_status" | "it_approval_comment" | "it_approval_date" | "date_needed" | "createdAt" | "updatedAt", ExtArgs["result"]["equipmentBorrowGroup"]>
  export type EquipmentBorrowGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    requests?: boolean | EquipmentBorrowGroup$requestsArgs<ExtArgs>
    _count?: boolean | EquipmentBorrowGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentBorrowGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EquipmentBorrowGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EquipmentBorrowGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentBorrowGroup"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      requests: Prisma.$EquipmentRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      group_code: string
      userId: string
      reason: string | null
      approval: string | null
      approval_status: string | null
      approval_comment: string | null
      approval_date: Date | null
      it_approval: string | null
      it_approval_status: string | null
      it_approval_comment: string | null
      it_approval_date: Date | null
      date_needed: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipmentBorrowGroup"]>
    composites: {}
  }

  type EquipmentBorrowGroupGetPayload<S extends boolean | null | undefined | EquipmentBorrowGroupDefaultArgs> = $Result.GetResult<Prisma.$EquipmentBorrowGroupPayload, S>

  type EquipmentBorrowGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentBorrowGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentBorrowGroupCountAggregateInputType | true
    }

  export interface EquipmentBorrowGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentBorrowGroup'], meta: { name: 'EquipmentBorrowGroup' } }
    /**
     * Find zero or one EquipmentBorrowGroup that matches the filter.
     * @param {EquipmentBorrowGroupFindUniqueArgs} args - Arguments to find a EquipmentBorrowGroup
     * @example
     * // Get one EquipmentBorrowGroup
     * const equipmentBorrowGroup = await prisma.equipmentBorrowGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentBorrowGroupFindUniqueArgs>(args: SelectSubset<T, EquipmentBorrowGroupFindUniqueArgs<ExtArgs>>): Prisma__EquipmentBorrowGroupClient<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentBorrowGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentBorrowGroupFindUniqueOrThrowArgs} args - Arguments to find a EquipmentBorrowGroup
     * @example
     * // Get one EquipmentBorrowGroup
     * const equipmentBorrowGroup = await prisma.equipmentBorrowGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentBorrowGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentBorrowGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentBorrowGroupClient<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentBorrowGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentBorrowGroupFindFirstArgs} args - Arguments to find a EquipmentBorrowGroup
     * @example
     * // Get one EquipmentBorrowGroup
     * const equipmentBorrowGroup = await prisma.equipmentBorrowGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentBorrowGroupFindFirstArgs>(args?: SelectSubset<T, EquipmentBorrowGroupFindFirstArgs<ExtArgs>>): Prisma__EquipmentBorrowGroupClient<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentBorrowGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentBorrowGroupFindFirstOrThrowArgs} args - Arguments to find a EquipmentBorrowGroup
     * @example
     * // Get one EquipmentBorrowGroup
     * const equipmentBorrowGroup = await prisma.equipmentBorrowGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentBorrowGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentBorrowGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentBorrowGroupClient<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentBorrowGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentBorrowGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentBorrowGroups
     * const equipmentBorrowGroups = await prisma.equipmentBorrowGroup.findMany()
     * 
     * // Get first 10 EquipmentBorrowGroups
     * const equipmentBorrowGroups = await prisma.equipmentBorrowGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentBorrowGroupWithIdOnly = await prisma.equipmentBorrowGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentBorrowGroupFindManyArgs>(args?: SelectSubset<T, EquipmentBorrowGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentBorrowGroup.
     * @param {EquipmentBorrowGroupCreateArgs} args - Arguments to create a EquipmentBorrowGroup.
     * @example
     * // Create one EquipmentBorrowGroup
     * const EquipmentBorrowGroup = await prisma.equipmentBorrowGroup.create({
     *   data: {
     *     // ... data to create a EquipmentBorrowGroup
     *   }
     * })
     * 
     */
    create<T extends EquipmentBorrowGroupCreateArgs>(args: SelectSubset<T, EquipmentBorrowGroupCreateArgs<ExtArgs>>): Prisma__EquipmentBorrowGroupClient<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentBorrowGroups.
     * @param {EquipmentBorrowGroupCreateManyArgs} args - Arguments to create many EquipmentBorrowGroups.
     * @example
     * // Create many EquipmentBorrowGroups
     * const equipmentBorrowGroup = await prisma.equipmentBorrowGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentBorrowGroupCreateManyArgs>(args?: SelectSubset<T, EquipmentBorrowGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentBorrowGroups and returns the data saved in the database.
     * @param {EquipmentBorrowGroupCreateManyAndReturnArgs} args - Arguments to create many EquipmentBorrowGroups.
     * @example
     * // Create many EquipmentBorrowGroups
     * const equipmentBorrowGroup = await prisma.equipmentBorrowGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentBorrowGroups and only return the `id`
     * const equipmentBorrowGroupWithIdOnly = await prisma.equipmentBorrowGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentBorrowGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentBorrowGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentBorrowGroup.
     * @param {EquipmentBorrowGroupDeleteArgs} args - Arguments to delete one EquipmentBorrowGroup.
     * @example
     * // Delete one EquipmentBorrowGroup
     * const EquipmentBorrowGroup = await prisma.equipmentBorrowGroup.delete({
     *   where: {
     *     // ... filter to delete one EquipmentBorrowGroup
     *   }
     * })
     * 
     */
    delete<T extends EquipmentBorrowGroupDeleteArgs>(args: SelectSubset<T, EquipmentBorrowGroupDeleteArgs<ExtArgs>>): Prisma__EquipmentBorrowGroupClient<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentBorrowGroup.
     * @param {EquipmentBorrowGroupUpdateArgs} args - Arguments to update one EquipmentBorrowGroup.
     * @example
     * // Update one EquipmentBorrowGroup
     * const equipmentBorrowGroup = await prisma.equipmentBorrowGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentBorrowGroupUpdateArgs>(args: SelectSubset<T, EquipmentBorrowGroupUpdateArgs<ExtArgs>>): Prisma__EquipmentBorrowGroupClient<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentBorrowGroups.
     * @param {EquipmentBorrowGroupDeleteManyArgs} args - Arguments to filter EquipmentBorrowGroups to delete.
     * @example
     * // Delete a few EquipmentBorrowGroups
     * const { count } = await prisma.equipmentBorrowGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentBorrowGroupDeleteManyArgs>(args?: SelectSubset<T, EquipmentBorrowGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentBorrowGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentBorrowGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentBorrowGroups
     * const equipmentBorrowGroup = await prisma.equipmentBorrowGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentBorrowGroupUpdateManyArgs>(args: SelectSubset<T, EquipmentBorrowGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentBorrowGroups and returns the data updated in the database.
     * @param {EquipmentBorrowGroupUpdateManyAndReturnArgs} args - Arguments to update many EquipmentBorrowGroups.
     * @example
     * // Update many EquipmentBorrowGroups
     * const equipmentBorrowGroup = await prisma.equipmentBorrowGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentBorrowGroups and only return the `id`
     * const equipmentBorrowGroupWithIdOnly = await prisma.equipmentBorrowGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentBorrowGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentBorrowGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentBorrowGroup.
     * @param {EquipmentBorrowGroupUpsertArgs} args - Arguments to update or create a EquipmentBorrowGroup.
     * @example
     * // Update or create a EquipmentBorrowGroup
     * const equipmentBorrowGroup = await prisma.equipmentBorrowGroup.upsert({
     *   create: {
     *     // ... data to create a EquipmentBorrowGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentBorrowGroup we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentBorrowGroupUpsertArgs>(args: SelectSubset<T, EquipmentBorrowGroupUpsertArgs<ExtArgs>>): Prisma__EquipmentBorrowGroupClient<$Result.GetResult<Prisma.$EquipmentBorrowGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentBorrowGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentBorrowGroupCountArgs} args - Arguments to filter EquipmentBorrowGroups to count.
     * @example
     * // Count the number of EquipmentBorrowGroups
     * const count = await prisma.equipmentBorrowGroup.count({
     *   where: {
     *     // ... the filter for the EquipmentBorrowGroups we want to count
     *   }
     * })
    **/
    count<T extends EquipmentBorrowGroupCountArgs>(
      args?: Subset<T, EquipmentBorrowGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentBorrowGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentBorrowGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentBorrowGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentBorrowGroupAggregateArgs>(args: Subset<T, EquipmentBorrowGroupAggregateArgs>): Prisma.PrismaPromise<GetEquipmentBorrowGroupAggregateType<T>>

    /**
     * Group by EquipmentBorrowGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentBorrowGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentBorrowGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentBorrowGroupGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentBorrowGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentBorrowGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentBorrowGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentBorrowGroup model
   */
  readonly fields: EquipmentBorrowGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentBorrowGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentBorrowGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requests<T extends EquipmentBorrowGroup$requestsArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentBorrowGroup$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EquipmentBorrowGroup model
   */
  interface EquipmentBorrowGroupFieldRefs {
    readonly id: FieldRef<"EquipmentBorrowGroup", 'String'>
    readonly group_code: FieldRef<"EquipmentBorrowGroup", 'String'>
    readonly userId: FieldRef<"EquipmentBorrowGroup", 'String'>
    readonly reason: FieldRef<"EquipmentBorrowGroup", 'String'>
    readonly approval: FieldRef<"EquipmentBorrowGroup", 'String'>
    readonly approval_status: FieldRef<"EquipmentBorrowGroup", 'String'>
    readonly approval_comment: FieldRef<"EquipmentBorrowGroup", 'String'>
    readonly approval_date: FieldRef<"EquipmentBorrowGroup", 'DateTime'>
    readonly it_approval: FieldRef<"EquipmentBorrowGroup", 'String'>
    readonly it_approval_status: FieldRef<"EquipmentBorrowGroup", 'String'>
    readonly it_approval_comment: FieldRef<"EquipmentBorrowGroup", 'String'>
    readonly it_approval_date: FieldRef<"EquipmentBorrowGroup", 'DateTime'>
    readonly date_needed: FieldRef<"EquipmentBorrowGroup", 'DateTime'>
    readonly createdAt: FieldRef<"EquipmentBorrowGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"EquipmentBorrowGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentBorrowGroup findUnique
   */
  export type EquipmentBorrowGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentBorrowGroup to fetch.
     */
    where: EquipmentBorrowGroupWhereUniqueInput
  }

  /**
   * EquipmentBorrowGroup findUniqueOrThrow
   */
  export type EquipmentBorrowGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentBorrowGroup to fetch.
     */
    where: EquipmentBorrowGroupWhereUniqueInput
  }

  /**
   * EquipmentBorrowGroup findFirst
   */
  export type EquipmentBorrowGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentBorrowGroup to fetch.
     */
    where?: EquipmentBorrowGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentBorrowGroups to fetch.
     */
    orderBy?: EquipmentBorrowGroupOrderByWithRelationInput | EquipmentBorrowGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentBorrowGroups.
     */
    cursor?: EquipmentBorrowGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentBorrowGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentBorrowGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentBorrowGroups.
     */
    distinct?: EquipmentBorrowGroupScalarFieldEnum | EquipmentBorrowGroupScalarFieldEnum[]
  }

  /**
   * EquipmentBorrowGroup findFirstOrThrow
   */
  export type EquipmentBorrowGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentBorrowGroup to fetch.
     */
    where?: EquipmentBorrowGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentBorrowGroups to fetch.
     */
    orderBy?: EquipmentBorrowGroupOrderByWithRelationInput | EquipmentBorrowGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentBorrowGroups.
     */
    cursor?: EquipmentBorrowGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentBorrowGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentBorrowGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentBorrowGroups.
     */
    distinct?: EquipmentBorrowGroupScalarFieldEnum | EquipmentBorrowGroupScalarFieldEnum[]
  }

  /**
   * EquipmentBorrowGroup findMany
   */
  export type EquipmentBorrowGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentBorrowGroups to fetch.
     */
    where?: EquipmentBorrowGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentBorrowGroups to fetch.
     */
    orderBy?: EquipmentBorrowGroupOrderByWithRelationInput | EquipmentBorrowGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentBorrowGroups.
     */
    cursor?: EquipmentBorrowGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentBorrowGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentBorrowGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentBorrowGroups.
     */
    distinct?: EquipmentBorrowGroupScalarFieldEnum | EquipmentBorrowGroupScalarFieldEnum[]
  }

  /**
   * EquipmentBorrowGroup create
   */
  export type EquipmentBorrowGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipmentBorrowGroup.
     */
    data: XOR<EquipmentBorrowGroupCreateInput, EquipmentBorrowGroupUncheckedCreateInput>
  }

  /**
   * EquipmentBorrowGroup createMany
   */
  export type EquipmentBorrowGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentBorrowGroups.
     */
    data: EquipmentBorrowGroupCreateManyInput | EquipmentBorrowGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentBorrowGroup createManyAndReturn
   */
  export type EquipmentBorrowGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentBorrowGroups.
     */
    data: EquipmentBorrowGroupCreateManyInput | EquipmentBorrowGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentBorrowGroup update
   */
  export type EquipmentBorrowGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipmentBorrowGroup.
     */
    data: XOR<EquipmentBorrowGroupUpdateInput, EquipmentBorrowGroupUncheckedUpdateInput>
    /**
     * Choose, which EquipmentBorrowGroup to update.
     */
    where: EquipmentBorrowGroupWhereUniqueInput
  }

  /**
   * EquipmentBorrowGroup updateMany
   */
  export type EquipmentBorrowGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentBorrowGroups.
     */
    data: XOR<EquipmentBorrowGroupUpdateManyMutationInput, EquipmentBorrowGroupUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentBorrowGroups to update
     */
    where?: EquipmentBorrowGroupWhereInput
    /**
     * Limit how many EquipmentBorrowGroups to update.
     */
    limit?: number
  }

  /**
   * EquipmentBorrowGroup updateManyAndReturn
   */
  export type EquipmentBorrowGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentBorrowGroups.
     */
    data: XOR<EquipmentBorrowGroupUpdateManyMutationInput, EquipmentBorrowGroupUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentBorrowGroups to update
     */
    where?: EquipmentBorrowGroupWhereInput
    /**
     * Limit how many EquipmentBorrowGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentBorrowGroup upsert
   */
  export type EquipmentBorrowGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipmentBorrowGroup to update in case it exists.
     */
    where: EquipmentBorrowGroupWhereUniqueInput
    /**
     * In case the EquipmentBorrowGroup found by the `where` argument doesn't exist, create a new EquipmentBorrowGroup with this data.
     */
    create: XOR<EquipmentBorrowGroupCreateInput, EquipmentBorrowGroupUncheckedCreateInput>
    /**
     * In case the EquipmentBorrowGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentBorrowGroupUpdateInput, EquipmentBorrowGroupUncheckedUpdateInput>
  }

  /**
   * EquipmentBorrowGroup delete
   */
  export type EquipmentBorrowGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupInclude<ExtArgs> | null
    /**
     * Filter which EquipmentBorrowGroup to delete.
     */
    where: EquipmentBorrowGroupWhereUniqueInput
  }

  /**
   * EquipmentBorrowGroup deleteMany
   */
  export type EquipmentBorrowGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentBorrowGroups to delete
     */
    where?: EquipmentBorrowGroupWhereInput
    /**
     * Limit how many EquipmentBorrowGroups to delete.
     */
    limit?: number
  }

  /**
   * EquipmentBorrowGroup.requests
   */
  export type EquipmentBorrowGroup$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentRequest
     */
    select?: EquipmentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentRequest
     */
    omit?: EquipmentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentRequestInclude<ExtArgs> | null
    where?: EquipmentRequestWhereInput
    orderBy?: EquipmentRequestOrderByWithRelationInput | EquipmentRequestOrderByWithRelationInput[]
    cursor?: EquipmentRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentRequestScalarFieldEnum | EquipmentRequestScalarFieldEnum[]
  }

  /**
   * EquipmentBorrowGroup without action
   */
  export type EquipmentBorrowGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentBorrowGroup
     */
    select?: EquipmentBorrowGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentBorrowGroup
     */
    omit?: EquipmentBorrowGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentBorrowGroupInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    action: string | null
    module: string | null
    details: string | null
    ipAddress: string | null
    userAgent: string | null
    device: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    action: string | null
    module: string | null
    details: string | null
    ipAddress: string | null
    userAgent: string | null
    device: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    userName: number
    action: number
    module: number
    details: number
    ipAddress: number
    userAgent: number
    device: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    action?: true
    module?: true
    details?: true
    ipAddress?: true
    userAgent?: true
    device?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    action?: true
    module?: true
    details?: true
    ipAddress?: true
    userAgent?: true
    device?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    action?: true
    module?: true
    details?: true
    ipAddress?: true
    userAgent?: true
    device?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string | null
    userName: string | null
    action: string
    module: string
    details: string | null
    ipAddress: string | null
    userAgent: string | null
    device: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    module?: boolean
    details?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    device?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    module?: boolean
    details?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    device?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    module?: boolean
    details?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    device?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    module?: boolean
    details?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    device?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userName" | "action" | "module" | "details" | "ipAddress" | "userAgent" | "device" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      userName: string | null
      action: string
      module: string
      details: string | null
      ipAddress: string | null
      userAgent: string | null
      device: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly userName: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly module: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly device: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    employeeId: 'employeeId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    employee_code: 'employee_code',
    employee_name_th: 'employee_name_th',
    employee_name_en: 'employee_name_en',
    gender: 'gender',
    position: 'position',
    department: 'department',
    work_location: 'work_location',
    supervisor_name: 'supervisor_name',
    start_date: 'start_date',
    end_date: 'end_date',
    status: 'status'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    request_code: 'request_code',
    type_request: 'type_request',
    description: 'description',
    reason: 'reason',
    category: 'category',
    priority: 'priority',
    status: 'status',
    approval: 'approval',
    approval_status: 'approval_status',
    approval_comment: 'approval_comment',
    approval_date: 'approval_date',
    it_approval: 'it_approval',
    it_approval_status: 'it_approval_status',
    it_approval_comment: 'it_approval_comment',
    it_approval_date: 'it_approval_date',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    parentId: 'parentId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    requestId: 'requestId',
    userId: 'userId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const EquipmentPurchaseOrderScalarFieldEnum: {
    id: 'id',
    po_code: 'po_code',
    list: 'list',
    detail: 'detail',
    quantity: 'quantity',
    reason_order: 'reason_order',
    picture: 'picture',
    buyer: 'buyer',
    reviewer: 'reviewer',
    approver: 'approver',
    date_order: 'date_order',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentPurchaseOrderScalarFieldEnum = (typeof EquipmentPurchaseOrderScalarFieldEnum)[keyof typeof EquipmentPurchaseOrderScalarFieldEnum]


  export const EquipmentEntryListScalarFieldEnum: {
    id: 'id',
    purchase_id: 'purchase_id',
    list: 'list',
    brand_name: 'brand_name',
    quantity: 'quantity',
    unit: 'unit',
    recipient: 'recipient',
    date_received: 'date_received',
    item_type: 'item_type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentEntryListScalarFieldEnum = (typeof EquipmentEntryListScalarFieldEnum)[keyof typeof EquipmentEntryListScalarFieldEnum]


  export const EquipmentListScalarFieldEnum: {
    id: 'id',
    eq_code: 'eq_code',
    equipment_entry_id: 'equipment_entry_id',
    payout_amount: 'payout_amount',
    remaining: 'remaining',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentListScalarFieldEnum = (typeof EquipmentListScalarFieldEnum)[keyof typeof EquipmentListScalarFieldEnum]


  export const EquipmentRequestScalarFieldEnum: {
    id: 'id',
    equipment_code: 'equipment_code',
    equipment_list_id: 'equipment_list_id',
    manual_item_name: 'manual_item_name',
    manual_item_type: 'manual_item_type',
    quantity: 'quantity',
    reason: 'reason',
    remarks: 'remarks',
    groupId: 'groupId',
    borrow_type: 'borrow_type',
    approval: 'approval',
    approval_status: 'approval_status',
    approval_comment: 'approval_comment',
    approval_date: 'approval_date',
    it_approval: 'it_approval',
    it_approval_status: 'it_approval_status',
    it_approval_comment: 'it_approval_comment',
    it_approval_date: 'it_approval_date',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentRequestScalarFieldEnum = (typeof EquipmentRequestScalarFieldEnum)[keyof typeof EquipmentRequestScalarFieldEnum]


  export const EquipmentBorrowGroupScalarFieldEnum: {
    id: 'id',
    group_code: 'group_code',
    userId: 'userId',
    reason: 'reason',
    approval: 'approval',
    approval_status: 'approval_status',
    approval_comment: 'approval_comment',
    approval_date: 'approval_date',
    it_approval: 'it_approval',
    it_approval_status: 'it_approval_status',
    it_approval_comment: 'it_approval_comment',
    it_approval_date: 'it_approval_date',
    date_needed: 'date_needed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentBorrowGroupScalarFieldEnum = (typeof EquipmentBorrowGroupScalarFieldEnum)[keyof typeof EquipmentBorrowGroupScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userName: 'userName',
    action: 'action',
    module: 'module',
    details: 'details',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    device: 'device',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    employeeId?: StringNullableFilter<"User"> | string | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    requests?: RequestListRelationFilter
    comments?: CommentListRelationFilter
    equipmentRequests?: EquipmentRequestListRelationFilter
    equipmentGroups?: EquipmentBorrowGroupListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    requests?: RequestOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    equipmentRequests?: EquipmentRequestOrderByRelationAggregateInput
    equipmentGroups?: EquipmentBorrowGroupOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    employeeId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    requests?: RequestListRelationFilter
    comments?: CommentListRelationFilter
    equipmentRequests?: EquipmentRequestListRelationFilter
    equipmentGroups?: EquipmentBorrowGroupListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "username" | "employeeId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    employeeId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    employee_code?: StringFilter<"Employee"> | string
    employee_name_th?: StringFilter<"Employee"> | string
    employee_name_en?: StringNullableFilter<"Employee"> | string | null
    gender?: StringNullableFilter<"Employee"> | string | null
    position?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    work_location?: StringNullableFilter<"Employee"> | string | null
    supervisor_name?: StringNullableFilter<"Employee"> | string | null
    start_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: StringNullableFilter<"Employee"> | string | null
    requests?: RequestListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    employee_code?: SortOrder
    employee_name_th?: SortOrder
    employee_name_en?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    work_location?: SortOrderInput | SortOrder
    supervisor_name?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    requests?: RequestOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employee_code?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    employee_name_th?: StringFilter<"Employee"> | string
    employee_name_en?: StringNullableFilter<"Employee"> | string | null
    gender?: StringNullableFilter<"Employee"> | string | null
    position?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    work_location?: StringNullableFilter<"Employee"> | string | null
    supervisor_name?: StringNullableFilter<"Employee"> | string | null
    start_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: StringNullableFilter<"Employee"> | string | null
    requests?: RequestListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "employee_code">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    employee_code?: SortOrder
    employee_name_th?: SortOrder
    employee_name_en?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    work_location?: SortOrderInput | SortOrder
    supervisor_name?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    employee_code?: StringWithAggregatesFilter<"Employee"> | string
    employee_name_th?: StringWithAggregatesFilter<"Employee"> | string
    employee_name_en?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    position?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    department?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    work_location?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    supervisor_name?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    start_date?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"Employee"> | string | null
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    employeeId?: StringFilter<"Request"> | string
    request_code?: StringFilter<"Request"> | string
    type_request?: StringFilter<"Request"> | string
    description?: StringFilter<"Request"> | string
    reason?: StringNullableFilter<"Request"> | string | null
    category?: EnumCategoryFilter<"Request"> | $Enums.Category
    priority?: EnumPriorityFilter<"Request"> | $Enums.Priority
    status?: EnumStatusFilter<"Request"> | $Enums.Status
    approval?: StringNullableFilter<"Request"> | string | null
    approval_status?: StringNullableFilter<"Request"> | string | null
    approval_comment?: StringNullableFilter<"Request"> | string | null
    approval_date?: DateTimeNullableFilter<"Request"> | Date | string | null
    it_approval?: StringNullableFilter<"Request"> | string | null
    it_approval_status?: StringNullableFilter<"Request"> | string | null
    it_approval_comment?: StringNullableFilter<"Request"> | string | null
    it_approval_date?: DateTimeNullableFilter<"Request"> | Date | string | null
    userId?: StringFilter<"Request"> | string
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    request_code?: SortOrder
    type_request?: SortOrder
    description?: SortOrder
    reason?: SortOrderInput | SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    approval?: SortOrderInput | SortOrder
    approval_status?: SortOrderInput | SortOrder
    approval_comment?: SortOrderInput | SortOrder
    approval_date?: SortOrderInput | SortOrder
    it_approval?: SortOrderInput | SortOrder
    it_approval_status?: SortOrderInput | SortOrder
    it_approval_comment?: SortOrderInput | SortOrder
    it_approval_date?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    request_code?: string
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    employeeId?: StringFilter<"Request"> | string
    type_request?: StringFilter<"Request"> | string
    description?: StringFilter<"Request"> | string
    reason?: StringNullableFilter<"Request"> | string | null
    category?: EnumCategoryFilter<"Request"> | $Enums.Category
    priority?: EnumPriorityFilter<"Request"> | $Enums.Priority
    status?: EnumStatusFilter<"Request"> | $Enums.Status
    approval?: StringNullableFilter<"Request"> | string | null
    approval_status?: StringNullableFilter<"Request"> | string | null
    approval_comment?: StringNullableFilter<"Request"> | string | null
    approval_date?: DateTimeNullableFilter<"Request"> | Date | string | null
    it_approval?: StringNullableFilter<"Request"> | string | null
    it_approval_status?: StringNullableFilter<"Request"> | string | null
    it_approval_comment?: StringNullableFilter<"Request"> | string | null
    it_approval_date?: DateTimeNullableFilter<"Request"> | Date | string | null
    userId?: StringFilter<"Request"> | string
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }, "id" | "request_code">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    request_code?: SortOrder
    type_request?: SortOrder
    description?: SortOrder
    reason?: SortOrderInput | SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    approval?: SortOrderInput | SortOrder
    approval_status?: SortOrderInput | SortOrder
    approval_comment?: SortOrderInput | SortOrder
    approval_date?: SortOrderInput | SortOrder
    it_approval?: SortOrderInput | SortOrder
    it_approval_status?: SortOrderInput | SortOrder
    it_approval_comment?: SortOrderInput | SortOrder
    it_approval_date?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    employeeId?: StringWithAggregatesFilter<"Request"> | string
    request_code?: StringWithAggregatesFilter<"Request"> | string
    type_request?: StringWithAggregatesFilter<"Request"> | string
    description?: StringWithAggregatesFilter<"Request"> | string
    reason?: StringNullableWithAggregatesFilter<"Request"> | string | null
    category?: EnumCategoryWithAggregatesFilter<"Request"> | $Enums.Category
    priority?: EnumPriorityWithAggregatesFilter<"Request"> | $Enums.Priority
    status?: EnumStatusWithAggregatesFilter<"Request"> | $Enums.Status
    approval?: StringNullableWithAggregatesFilter<"Request"> | string | null
    approval_status?: StringNullableWithAggregatesFilter<"Request"> | string | null
    approval_comment?: StringNullableWithAggregatesFilter<"Request"> | string | null
    approval_date?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    it_approval?: StringNullableWithAggregatesFilter<"Request"> | string | null
    it_approval_status?: StringNullableWithAggregatesFilter<"Request"> | string | null
    it_approval_comment?: StringNullableWithAggregatesFilter<"Request"> | string | null
    it_approval_date?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Request"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    requestId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    request?: XOR<RequestScalarRelationFilter, RequestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    parentId?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
    userId?: SortOrder
    request?: RequestOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    parentId?: StringNullableFilter<"Comment"> | string | null
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    requestId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    request?: XOR<RequestScalarRelationFilter, RequestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    parentId?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
    userId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    requestId?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type EquipmentPurchaseOrderWhereInput = {
    AND?: EquipmentPurchaseOrderWhereInput | EquipmentPurchaseOrderWhereInput[]
    OR?: EquipmentPurchaseOrderWhereInput[]
    NOT?: EquipmentPurchaseOrderWhereInput | EquipmentPurchaseOrderWhereInput[]
    id?: StringFilter<"EquipmentPurchaseOrder"> | string
    po_code?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    list?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    detail?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    quantity?: IntFilter<"EquipmentPurchaseOrder"> | number
    reason_order?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    picture?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    buyer?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    reviewer?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    approver?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    date_order?: DateTimeFilter<"EquipmentPurchaseOrder"> | Date | string
    status?: StringFilter<"EquipmentPurchaseOrder"> | string
    createdAt?: DateTimeFilter<"EquipmentPurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentPurchaseOrder"> | Date | string
    entries?: EquipmentEntryListListRelationFilter
  }

  export type EquipmentPurchaseOrderOrderByWithRelationInput = {
    id?: SortOrder
    po_code?: SortOrderInput | SortOrder
    list?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    quantity?: SortOrder
    reason_order?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    buyer?: SortOrderInput | SortOrder
    reviewer?: SortOrderInput | SortOrder
    approver?: SortOrderInput | SortOrder
    date_order?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entries?: EquipmentEntryListOrderByRelationAggregateInput
  }

  export type EquipmentPurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    po_code?: string
    AND?: EquipmentPurchaseOrderWhereInput | EquipmentPurchaseOrderWhereInput[]
    OR?: EquipmentPurchaseOrderWhereInput[]
    NOT?: EquipmentPurchaseOrderWhereInput | EquipmentPurchaseOrderWhereInput[]
    list?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    detail?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    quantity?: IntFilter<"EquipmentPurchaseOrder"> | number
    reason_order?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    picture?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    buyer?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    reviewer?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    approver?: StringNullableFilter<"EquipmentPurchaseOrder"> | string | null
    date_order?: DateTimeFilter<"EquipmentPurchaseOrder"> | Date | string
    status?: StringFilter<"EquipmentPurchaseOrder"> | string
    createdAt?: DateTimeFilter<"EquipmentPurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentPurchaseOrder"> | Date | string
    entries?: EquipmentEntryListListRelationFilter
  }, "id" | "po_code">

  export type EquipmentPurchaseOrderOrderByWithAggregationInput = {
    id?: SortOrder
    po_code?: SortOrderInput | SortOrder
    list?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    quantity?: SortOrder
    reason_order?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    buyer?: SortOrderInput | SortOrder
    reviewer?: SortOrderInput | SortOrder
    approver?: SortOrderInput | SortOrder
    date_order?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentPurchaseOrderCountOrderByAggregateInput
    _avg?: EquipmentPurchaseOrderAvgOrderByAggregateInput
    _max?: EquipmentPurchaseOrderMaxOrderByAggregateInput
    _min?: EquipmentPurchaseOrderMinOrderByAggregateInput
    _sum?: EquipmentPurchaseOrderSumOrderByAggregateInput
  }

  export type EquipmentPurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: EquipmentPurchaseOrderScalarWhereWithAggregatesInput | EquipmentPurchaseOrderScalarWhereWithAggregatesInput[]
    OR?: EquipmentPurchaseOrderScalarWhereWithAggregatesInput[]
    NOT?: EquipmentPurchaseOrderScalarWhereWithAggregatesInput | EquipmentPurchaseOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EquipmentPurchaseOrder"> | string
    po_code?: StringNullableWithAggregatesFilter<"EquipmentPurchaseOrder"> | string | null
    list?: StringNullableWithAggregatesFilter<"EquipmentPurchaseOrder"> | string | null
    detail?: StringNullableWithAggregatesFilter<"EquipmentPurchaseOrder"> | string | null
    quantity?: IntWithAggregatesFilter<"EquipmentPurchaseOrder"> | number
    reason_order?: StringNullableWithAggregatesFilter<"EquipmentPurchaseOrder"> | string | null
    picture?: StringNullableWithAggregatesFilter<"EquipmentPurchaseOrder"> | string | null
    buyer?: StringNullableWithAggregatesFilter<"EquipmentPurchaseOrder"> | string | null
    reviewer?: StringNullableWithAggregatesFilter<"EquipmentPurchaseOrder"> | string | null
    approver?: StringNullableWithAggregatesFilter<"EquipmentPurchaseOrder"> | string | null
    date_order?: DateTimeWithAggregatesFilter<"EquipmentPurchaseOrder"> | Date | string
    status?: StringWithAggregatesFilter<"EquipmentPurchaseOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EquipmentPurchaseOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EquipmentPurchaseOrder"> | Date | string
  }

  export type EquipmentEntryListWhereInput = {
    AND?: EquipmentEntryListWhereInput | EquipmentEntryListWhereInput[]
    OR?: EquipmentEntryListWhereInput[]
    NOT?: EquipmentEntryListWhereInput | EquipmentEntryListWhereInput[]
    id?: StringFilter<"EquipmentEntryList"> | string
    purchase_id?: StringFilter<"EquipmentEntryList"> | string
    list?: StringNullableFilter<"EquipmentEntryList"> | string | null
    brand_name?: StringNullableFilter<"EquipmentEntryList"> | string | null
    quantity?: IntFilter<"EquipmentEntryList"> | number
    unit?: StringNullableFilter<"EquipmentEntryList"> | string | null
    recipient?: StringNullableFilter<"EquipmentEntryList"> | string | null
    date_received?: DateTimeNullableFilter<"EquipmentEntryList"> | Date | string | null
    item_type?: StringFilter<"EquipmentEntryList"> | string
    createdAt?: DateTimeFilter<"EquipmentEntryList"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentEntryList"> | Date | string
    purchaseOrder?: XOR<EquipmentPurchaseOrderScalarRelationFilter, EquipmentPurchaseOrderWhereInput>
    equipmentLists?: EquipmentListListRelationFilter
  }

  export type EquipmentEntryListOrderByWithRelationInput = {
    id?: SortOrder
    purchase_id?: SortOrder
    list?: SortOrderInput | SortOrder
    brand_name?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit?: SortOrderInput | SortOrder
    recipient?: SortOrderInput | SortOrder
    date_received?: SortOrderInput | SortOrder
    item_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchaseOrder?: EquipmentPurchaseOrderOrderByWithRelationInput
    equipmentLists?: EquipmentListOrderByRelationAggregateInput
  }

  export type EquipmentEntryListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EquipmentEntryListWhereInput | EquipmentEntryListWhereInput[]
    OR?: EquipmentEntryListWhereInput[]
    NOT?: EquipmentEntryListWhereInput | EquipmentEntryListWhereInput[]
    purchase_id?: StringFilter<"EquipmentEntryList"> | string
    list?: StringNullableFilter<"EquipmentEntryList"> | string | null
    brand_name?: StringNullableFilter<"EquipmentEntryList"> | string | null
    quantity?: IntFilter<"EquipmentEntryList"> | number
    unit?: StringNullableFilter<"EquipmentEntryList"> | string | null
    recipient?: StringNullableFilter<"EquipmentEntryList"> | string | null
    date_received?: DateTimeNullableFilter<"EquipmentEntryList"> | Date | string | null
    item_type?: StringFilter<"EquipmentEntryList"> | string
    createdAt?: DateTimeFilter<"EquipmentEntryList"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentEntryList"> | Date | string
    purchaseOrder?: XOR<EquipmentPurchaseOrderScalarRelationFilter, EquipmentPurchaseOrderWhereInput>
    equipmentLists?: EquipmentListListRelationFilter
  }, "id">

  export type EquipmentEntryListOrderByWithAggregationInput = {
    id?: SortOrder
    purchase_id?: SortOrder
    list?: SortOrderInput | SortOrder
    brand_name?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit?: SortOrderInput | SortOrder
    recipient?: SortOrderInput | SortOrder
    date_received?: SortOrderInput | SortOrder
    item_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentEntryListCountOrderByAggregateInput
    _avg?: EquipmentEntryListAvgOrderByAggregateInput
    _max?: EquipmentEntryListMaxOrderByAggregateInput
    _min?: EquipmentEntryListMinOrderByAggregateInput
    _sum?: EquipmentEntryListSumOrderByAggregateInput
  }

  export type EquipmentEntryListScalarWhereWithAggregatesInput = {
    AND?: EquipmentEntryListScalarWhereWithAggregatesInput | EquipmentEntryListScalarWhereWithAggregatesInput[]
    OR?: EquipmentEntryListScalarWhereWithAggregatesInput[]
    NOT?: EquipmentEntryListScalarWhereWithAggregatesInput | EquipmentEntryListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EquipmentEntryList"> | string
    purchase_id?: StringWithAggregatesFilter<"EquipmentEntryList"> | string
    list?: StringNullableWithAggregatesFilter<"EquipmentEntryList"> | string | null
    brand_name?: StringNullableWithAggregatesFilter<"EquipmentEntryList"> | string | null
    quantity?: IntWithAggregatesFilter<"EquipmentEntryList"> | number
    unit?: StringNullableWithAggregatesFilter<"EquipmentEntryList"> | string | null
    recipient?: StringNullableWithAggregatesFilter<"EquipmentEntryList"> | string | null
    date_received?: DateTimeNullableWithAggregatesFilter<"EquipmentEntryList"> | Date | string | null
    item_type?: StringWithAggregatesFilter<"EquipmentEntryList"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EquipmentEntryList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EquipmentEntryList"> | Date | string
  }

  export type EquipmentListWhereInput = {
    AND?: EquipmentListWhereInput | EquipmentListWhereInput[]
    OR?: EquipmentListWhereInput[]
    NOT?: EquipmentListWhereInput | EquipmentListWhereInput[]
    id?: StringFilter<"EquipmentList"> | string
    eq_code?: StringNullableFilter<"EquipmentList"> | string | null
    equipment_entry_id?: StringFilter<"EquipmentList"> | string
    payout_amount?: FloatNullableFilter<"EquipmentList"> | number | null
    remaining?: IntFilter<"EquipmentList"> | number
    status?: StringNullableFilter<"EquipmentList"> | string | null
    createdAt?: DateTimeFilter<"EquipmentList"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentList"> | Date | string
    equipmentEntry?: XOR<EquipmentEntryListScalarRelationFilter, EquipmentEntryListWhereInput>
    requests?: EquipmentRequestListRelationFilter
  }

  export type EquipmentListOrderByWithRelationInput = {
    id?: SortOrder
    eq_code?: SortOrderInput | SortOrder
    equipment_entry_id?: SortOrder
    payout_amount?: SortOrderInput | SortOrder
    remaining?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    equipmentEntry?: EquipmentEntryListOrderByWithRelationInput
    requests?: EquipmentRequestOrderByRelationAggregateInput
  }

  export type EquipmentListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eq_code?: string
    AND?: EquipmentListWhereInput | EquipmentListWhereInput[]
    OR?: EquipmentListWhereInput[]
    NOT?: EquipmentListWhereInput | EquipmentListWhereInput[]
    equipment_entry_id?: StringFilter<"EquipmentList"> | string
    payout_amount?: FloatNullableFilter<"EquipmentList"> | number | null
    remaining?: IntFilter<"EquipmentList"> | number
    status?: StringNullableFilter<"EquipmentList"> | string | null
    createdAt?: DateTimeFilter<"EquipmentList"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentList"> | Date | string
    equipmentEntry?: XOR<EquipmentEntryListScalarRelationFilter, EquipmentEntryListWhereInput>
    requests?: EquipmentRequestListRelationFilter
  }, "id" | "eq_code">

  export type EquipmentListOrderByWithAggregationInput = {
    id?: SortOrder
    eq_code?: SortOrderInput | SortOrder
    equipment_entry_id?: SortOrder
    payout_amount?: SortOrderInput | SortOrder
    remaining?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentListCountOrderByAggregateInput
    _avg?: EquipmentListAvgOrderByAggregateInput
    _max?: EquipmentListMaxOrderByAggregateInput
    _min?: EquipmentListMinOrderByAggregateInput
    _sum?: EquipmentListSumOrderByAggregateInput
  }

  export type EquipmentListScalarWhereWithAggregatesInput = {
    AND?: EquipmentListScalarWhereWithAggregatesInput | EquipmentListScalarWhereWithAggregatesInput[]
    OR?: EquipmentListScalarWhereWithAggregatesInput[]
    NOT?: EquipmentListScalarWhereWithAggregatesInput | EquipmentListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EquipmentList"> | string
    eq_code?: StringNullableWithAggregatesFilter<"EquipmentList"> | string | null
    equipment_entry_id?: StringWithAggregatesFilter<"EquipmentList"> | string
    payout_amount?: FloatNullableWithAggregatesFilter<"EquipmentList"> | number | null
    remaining?: IntWithAggregatesFilter<"EquipmentList"> | number
    status?: StringNullableWithAggregatesFilter<"EquipmentList"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EquipmentList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EquipmentList"> | Date | string
  }

  export type EquipmentRequestWhereInput = {
    AND?: EquipmentRequestWhereInput | EquipmentRequestWhereInput[]
    OR?: EquipmentRequestWhereInput[]
    NOT?: EquipmentRequestWhereInput | EquipmentRequestWhereInput[]
    id?: StringFilter<"EquipmentRequest"> | string
    equipment_code?: StringFilter<"EquipmentRequest"> | string
    equipment_list_id?: StringNullableFilter<"EquipmentRequest"> | string | null
    manual_item_name?: StringNullableFilter<"EquipmentRequest"> | string | null
    manual_item_type?: StringNullableFilter<"EquipmentRequest"> | string | null
    quantity?: IntFilter<"EquipmentRequest"> | number
    reason?: StringNullableFilter<"EquipmentRequest"> | string | null
    remarks?: StringNullableFilter<"EquipmentRequest"> | string | null
    groupId?: StringNullableFilter<"EquipmentRequest"> | string | null
    borrow_type?: StringNullableFilter<"EquipmentRequest"> | string | null
    approval?: StringNullableFilter<"EquipmentRequest"> | string | null
    approval_status?: StringNullableFilter<"EquipmentRequest"> | string | null
    approval_comment?: StringNullableFilter<"EquipmentRequest"> | string | null
    approval_date?: DateTimeNullableFilter<"EquipmentRequest"> | Date | string | null
    it_approval?: StringNullableFilter<"EquipmentRequest"> | string | null
    it_approval_status?: StringNullableFilter<"EquipmentRequest"> | string | null
    it_approval_comment?: StringNullableFilter<"EquipmentRequest"> | string | null
    it_approval_date?: DateTimeNullableFilter<"EquipmentRequest"> | Date | string | null
    userId?: StringFilter<"EquipmentRequest"> | string
    createdAt?: DateTimeFilter<"EquipmentRequest"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentRequest"> | Date | string
    equipmentList?: XOR<EquipmentListNullableScalarRelationFilter, EquipmentListWhereInput> | null
    group?: XOR<EquipmentBorrowGroupNullableScalarRelationFilter, EquipmentBorrowGroupWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EquipmentRequestOrderByWithRelationInput = {
    id?: SortOrder
    equipment_code?: SortOrder
    equipment_list_id?: SortOrderInput | SortOrder
    manual_item_name?: SortOrderInput | SortOrder
    manual_item_type?: SortOrderInput | SortOrder
    quantity?: SortOrder
    reason?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    borrow_type?: SortOrderInput | SortOrder
    approval?: SortOrderInput | SortOrder
    approval_status?: SortOrderInput | SortOrder
    approval_comment?: SortOrderInput | SortOrder
    approval_date?: SortOrderInput | SortOrder
    it_approval?: SortOrderInput | SortOrder
    it_approval_status?: SortOrderInput | SortOrder
    it_approval_comment?: SortOrderInput | SortOrder
    it_approval_date?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    equipmentList?: EquipmentListOrderByWithRelationInput
    group?: EquipmentBorrowGroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EquipmentRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    equipment_code?: string
    AND?: EquipmentRequestWhereInput | EquipmentRequestWhereInput[]
    OR?: EquipmentRequestWhereInput[]
    NOT?: EquipmentRequestWhereInput | EquipmentRequestWhereInput[]
    equipment_list_id?: StringNullableFilter<"EquipmentRequest"> | string | null
    manual_item_name?: StringNullableFilter<"EquipmentRequest"> | string | null
    manual_item_type?: StringNullableFilter<"EquipmentRequest"> | string | null
    quantity?: IntFilter<"EquipmentRequest"> | number
    reason?: StringNullableFilter<"EquipmentRequest"> | string | null
    remarks?: StringNullableFilter<"EquipmentRequest"> | string | null
    groupId?: StringNullableFilter<"EquipmentRequest"> | string | null
    borrow_type?: StringNullableFilter<"EquipmentRequest"> | string | null
    approval?: StringNullableFilter<"EquipmentRequest"> | string | null
    approval_status?: StringNullableFilter<"EquipmentRequest"> | string | null
    approval_comment?: StringNullableFilter<"EquipmentRequest"> | string | null
    approval_date?: DateTimeNullableFilter<"EquipmentRequest"> | Date | string | null
    it_approval?: StringNullableFilter<"EquipmentRequest"> | string | null
    it_approval_status?: StringNullableFilter<"EquipmentRequest"> | string | null
    it_approval_comment?: StringNullableFilter<"EquipmentRequest"> | string | null
    it_approval_date?: DateTimeNullableFilter<"EquipmentRequest"> | Date | string | null
    userId?: StringFilter<"EquipmentRequest"> | string
    createdAt?: DateTimeFilter<"EquipmentRequest"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentRequest"> | Date | string
    equipmentList?: XOR<EquipmentListNullableScalarRelationFilter, EquipmentListWhereInput> | null
    group?: XOR<EquipmentBorrowGroupNullableScalarRelationFilter, EquipmentBorrowGroupWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "equipment_code">

  export type EquipmentRequestOrderByWithAggregationInput = {
    id?: SortOrder
    equipment_code?: SortOrder
    equipment_list_id?: SortOrderInput | SortOrder
    manual_item_name?: SortOrderInput | SortOrder
    manual_item_type?: SortOrderInput | SortOrder
    quantity?: SortOrder
    reason?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    borrow_type?: SortOrderInput | SortOrder
    approval?: SortOrderInput | SortOrder
    approval_status?: SortOrderInput | SortOrder
    approval_comment?: SortOrderInput | SortOrder
    approval_date?: SortOrderInput | SortOrder
    it_approval?: SortOrderInput | SortOrder
    it_approval_status?: SortOrderInput | SortOrder
    it_approval_comment?: SortOrderInput | SortOrder
    it_approval_date?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentRequestCountOrderByAggregateInput
    _avg?: EquipmentRequestAvgOrderByAggregateInput
    _max?: EquipmentRequestMaxOrderByAggregateInput
    _min?: EquipmentRequestMinOrderByAggregateInput
    _sum?: EquipmentRequestSumOrderByAggregateInput
  }

  export type EquipmentRequestScalarWhereWithAggregatesInput = {
    AND?: EquipmentRequestScalarWhereWithAggregatesInput | EquipmentRequestScalarWhereWithAggregatesInput[]
    OR?: EquipmentRequestScalarWhereWithAggregatesInput[]
    NOT?: EquipmentRequestScalarWhereWithAggregatesInput | EquipmentRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EquipmentRequest"> | string
    equipment_code?: StringWithAggregatesFilter<"EquipmentRequest"> | string
    equipment_list_id?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    manual_item_name?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    manual_item_type?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    quantity?: IntWithAggregatesFilter<"EquipmentRequest"> | number
    reason?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    groupId?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    borrow_type?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    approval?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    approval_status?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    approval_comment?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    approval_date?: DateTimeNullableWithAggregatesFilter<"EquipmentRequest"> | Date | string | null
    it_approval?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    it_approval_status?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    it_approval_comment?: StringNullableWithAggregatesFilter<"EquipmentRequest"> | string | null
    it_approval_date?: DateTimeNullableWithAggregatesFilter<"EquipmentRequest"> | Date | string | null
    userId?: StringWithAggregatesFilter<"EquipmentRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EquipmentRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EquipmentRequest"> | Date | string
  }

  export type EquipmentBorrowGroupWhereInput = {
    AND?: EquipmentBorrowGroupWhereInput | EquipmentBorrowGroupWhereInput[]
    OR?: EquipmentBorrowGroupWhereInput[]
    NOT?: EquipmentBorrowGroupWhereInput | EquipmentBorrowGroupWhereInput[]
    id?: StringFilter<"EquipmentBorrowGroup"> | string
    group_code?: StringFilter<"EquipmentBorrowGroup"> | string
    userId?: StringFilter<"EquipmentBorrowGroup"> | string
    reason?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    approval?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    approval_status?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    approval_comment?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    approval_date?: DateTimeNullableFilter<"EquipmentBorrowGroup"> | Date | string | null
    it_approval?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    it_approval_status?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    it_approval_comment?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    it_approval_date?: DateTimeNullableFilter<"EquipmentBorrowGroup"> | Date | string | null
    date_needed?: DateTimeNullableFilter<"EquipmentBorrowGroup"> | Date | string | null
    createdAt?: DateTimeFilter<"EquipmentBorrowGroup"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentBorrowGroup"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    requests?: EquipmentRequestListRelationFilter
  }

  export type EquipmentBorrowGroupOrderByWithRelationInput = {
    id?: SortOrder
    group_code?: SortOrder
    userId?: SortOrder
    reason?: SortOrderInput | SortOrder
    approval?: SortOrderInput | SortOrder
    approval_status?: SortOrderInput | SortOrder
    approval_comment?: SortOrderInput | SortOrder
    approval_date?: SortOrderInput | SortOrder
    it_approval?: SortOrderInput | SortOrder
    it_approval_status?: SortOrderInput | SortOrder
    it_approval_comment?: SortOrderInput | SortOrder
    it_approval_date?: SortOrderInput | SortOrder
    date_needed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    requests?: EquipmentRequestOrderByRelationAggregateInput
  }

  export type EquipmentBorrowGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    group_code?: string
    AND?: EquipmentBorrowGroupWhereInput | EquipmentBorrowGroupWhereInput[]
    OR?: EquipmentBorrowGroupWhereInput[]
    NOT?: EquipmentBorrowGroupWhereInput | EquipmentBorrowGroupWhereInput[]
    userId?: StringFilter<"EquipmentBorrowGroup"> | string
    reason?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    approval?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    approval_status?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    approval_comment?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    approval_date?: DateTimeNullableFilter<"EquipmentBorrowGroup"> | Date | string | null
    it_approval?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    it_approval_status?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    it_approval_comment?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    it_approval_date?: DateTimeNullableFilter<"EquipmentBorrowGroup"> | Date | string | null
    date_needed?: DateTimeNullableFilter<"EquipmentBorrowGroup"> | Date | string | null
    createdAt?: DateTimeFilter<"EquipmentBorrowGroup"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentBorrowGroup"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    requests?: EquipmentRequestListRelationFilter
  }, "id" | "group_code">

  export type EquipmentBorrowGroupOrderByWithAggregationInput = {
    id?: SortOrder
    group_code?: SortOrder
    userId?: SortOrder
    reason?: SortOrderInput | SortOrder
    approval?: SortOrderInput | SortOrder
    approval_status?: SortOrderInput | SortOrder
    approval_comment?: SortOrderInput | SortOrder
    approval_date?: SortOrderInput | SortOrder
    it_approval?: SortOrderInput | SortOrder
    it_approval_status?: SortOrderInput | SortOrder
    it_approval_comment?: SortOrderInput | SortOrder
    it_approval_date?: SortOrderInput | SortOrder
    date_needed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentBorrowGroupCountOrderByAggregateInput
    _max?: EquipmentBorrowGroupMaxOrderByAggregateInput
    _min?: EquipmentBorrowGroupMinOrderByAggregateInput
  }

  export type EquipmentBorrowGroupScalarWhereWithAggregatesInput = {
    AND?: EquipmentBorrowGroupScalarWhereWithAggregatesInput | EquipmentBorrowGroupScalarWhereWithAggregatesInput[]
    OR?: EquipmentBorrowGroupScalarWhereWithAggregatesInput[]
    NOT?: EquipmentBorrowGroupScalarWhereWithAggregatesInput | EquipmentBorrowGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EquipmentBorrowGroup"> | string
    group_code?: StringWithAggregatesFilter<"EquipmentBorrowGroup"> | string
    userId?: StringWithAggregatesFilter<"EquipmentBorrowGroup"> | string
    reason?: StringNullableWithAggregatesFilter<"EquipmentBorrowGroup"> | string | null
    approval?: StringNullableWithAggregatesFilter<"EquipmentBorrowGroup"> | string | null
    approval_status?: StringNullableWithAggregatesFilter<"EquipmentBorrowGroup"> | string | null
    approval_comment?: StringNullableWithAggregatesFilter<"EquipmentBorrowGroup"> | string | null
    approval_date?: DateTimeNullableWithAggregatesFilter<"EquipmentBorrowGroup"> | Date | string | null
    it_approval?: StringNullableWithAggregatesFilter<"EquipmentBorrowGroup"> | string | null
    it_approval_status?: StringNullableWithAggregatesFilter<"EquipmentBorrowGroup"> | string | null
    it_approval_comment?: StringNullableWithAggregatesFilter<"EquipmentBorrowGroup"> | string | null
    it_approval_date?: DateTimeNullableWithAggregatesFilter<"EquipmentBorrowGroup"> | Date | string | null
    date_needed?: DateTimeNullableWithAggregatesFilter<"EquipmentBorrowGroup"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EquipmentBorrowGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EquipmentBorrowGroup"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    userName?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    module?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    device?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    action?: SortOrder
    module?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringNullableFilter<"AuditLog"> | string | null
    userName?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    module?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    device?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    action?: SortOrder
    module?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userName?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    module?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    device?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    equipmentRequests?: EquipmentRequestCreateNestedManyWithoutUserInput
    equipmentGroups?: EquipmentBorrowGroupCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeId?: string | null
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    equipmentRequests?: EquipmentRequestUncheckedCreateNestedManyWithoutUserInput
    equipmentGroups?: EquipmentBorrowGroupUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    equipmentRequests?: EquipmentRequestUpdateManyWithoutUserNestedInput
    equipmentGroups?: EquipmentBorrowGroupUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    equipmentRequests?: EquipmentRequestUncheckedUpdateManyWithoutUserNestedInput
    equipmentGroups?: EquipmentBorrowGroupUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeCreateInput = {
    id?: string
    employee_code: string
    employee_name_th: string
    employee_name_en?: string | null
    gender?: string | null
    position?: string | null
    department?: string | null
    work_location?: string | null
    supervisor_name?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string | null
    requests?: RequestCreateNestedManyWithoutEmployeeInput
    user?: UserCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    employee_code: string
    employee_name_th: string
    employee_name_en?: string | null
    gender?: string | null
    position?: string | null
    department?: string | null
    work_location?: string | null
    supervisor_name?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string | null
    requests?: RequestUncheckedCreateNestedManyWithoutEmployeeInput
    user?: UserUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: RequestUpdateManyWithoutEmployeeNestedInput
    user?: UserUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: RequestUncheckedUpdateManyWithoutEmployeeNestedInput
    user?: UserUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    employee_code: string
    employee_name_th: string
    employee_name_en?: string | null
    gender?: string | null
    position?: string | null
    department?: string | null
    work_location?: string | null
    supervisor_name?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string | null
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestCreateInput = {
    id?: string
    request_code: string
    type_request: string
    description: string
    reason?: string | null
    category: $Enums.Category
    priority: $Enums.Priority
    status?: $Enums.Status
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutRequestsInput
    comments?: CommentCreateNestedManyWithoutRequestInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    employeeId: string
    request_code: string
    type_request: string
    description: string
    reason?: string | null
    category: $Enums.Category
    priority: $Enums.Priority
    status?: $Enums.Status
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_code?: StringFieldUpdateOperationsInput | string
    type_request?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    comments?: CommentUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    request_code?: StringFieldUpdateOperationsInput | string
    type_request?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RequestCreateManyInput = {
    id?: string
    employeeId: string
    request_code: string
    type_request: string
    description: string
    reason?: string | null
    category: $Enums.Category
    priority: $Enums.Priority
    status?: $Enums.Status
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_code?: StringFieldUpdateOperationsInput | string
    type_request?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    request_code?: StringFieldUpdateOperationsInput | string
    type_request?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    request: RequestCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestId: string
    userId: string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RequestUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestId: string
    userId: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentPurchaseOrderCreateInput = {
    id?: string
    po_code?: string | null
    list?: string | null
    detail?: string | null
    quantity?: number
    reason_order?: string | null
    picture?: string | null
    buyer?: string | null
    reviewer?: string | null
    approver?: string | null
    date_order?: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EquipmentEntryListCreateNestedManyWithoutPurchaseOrderInput
  }

  export type EquipmentPurchaseOrderUncheckedCreateInput = {
    id?: string
    po_code?: string | null
    list?: string | null
    detail?: string | null
    quantity?: number
    reason_order?: string | null
    picture?: string | null
    buyer?: string | null
    reviewer?: string | null
    approver?: string | null
    date_order?: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EquipmentEntryListUncheckedCreateNestedManyWithoutPurchaseOrderInput
  }

  export type EquipmentPurchaseOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    po_code?: NullableStringFieldUpdateOperationsInput | string | null
    list?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason_order?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    approver?: NullableStringFieldUpdateOperationsInput | string | null
    date_order?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EquipmentEntryListUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type EquipmentPurchaseOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    po_code?: NullableStringFieldUpdateOperationsInput | string | null
    list?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason_order?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    approver?: NullableStringFieldUpdateOperationsInput | string | null
    date_order?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EquipmentEntryListUncheckedUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type EquipmentPurchaseOrderCreateManyInput = {
    id?: string
    po_code?: string | null
    list?: string | null
    detail?: string | null
    quantity?: number
    reason_order?: string | null
    picture?: string | null
    buyer?: string | null
    reviewer?: string | null
    approver?: string | null
    date_order?: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentPurchaseOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    po_code?: NullableStringFieldUpdateOperationsInput | string | null
    list?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason_order?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    approver?: NullableStringFieldUpdateOperationsInput | string | null
    date_order?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentPurchaseOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    po_code?: NullableStringFieldUpdateOperationsInput | string | null
    list?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason_order?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    approver?: NullableStringFieldUpdateOperationsInput | string | null
    date_order?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentEntryListCreateInput = {
    id?: string
    list?: string | null
    brand_name?: string | null
    quantity?: number
    unit?: string | null
    recipient?: string | null
    date_received?: Date | string | null
    item_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchaseOrder: EquipmentPurchaseOrderCreateNestedOneWithoutEntriesInput
    equipmentLists?: EquipmentListCreateNestedManyWithoutEquipmentEntryInput
  }

  export type EquipmentEntryListUncheckedCreateInput = {
    id?: string
    purchase_id: string
    list?: string | null
    brand_name?: string | null
    quantity?: number
    unit?: string | null
    recipient?: string | null
    date_received?: Date | string | null
    item_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    equipmentLists?: EquipmentListUncheckedCreateNestedManyWithoutEquipmentEntryInput
  }

  export type EquipmentEntryListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    date_received?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseOrder?: EquipmentPurchaseOrderUpdateOneRequiredWithoutEntriesNestedInput
    equipmentLists?: EquipmentListUpdateManyWithoutEquipmentEntryNestedInput
  }

  export type EquipmentEntryListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchase_id?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    date_received?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentLists?: EquipmentListUncheckedUpdateManyWithoutEquipmentEntryNestedInput
  }

  export type EquipmentEntryListCreateManyInput = {
    id?: string
    purchase_id: string
    list?: string | null
    brand_name?: string | null
    quantity?: number
    unit?: string | null
    recipient?: string | null
    date_received?: Date | string | null
    item_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentEntryListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    date_received?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentEntryListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchase_id?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    date_received?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentListCreateInput = {
    id?: string
    eq_code?: string | null
    payout_amount?: number | null
    remaining?: number
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipmentEntry: EquipmentEntryListCreateNestedOneWithoutEquipmentListsInput
    requests?: EquipmentRequestCreateNestedManyWithoutEquipmentListInput
  }

  export type EquipmentListUncheckedCreateInput = {
    id?: string
    eq_code?: string | null
    equipment_entry_id: string
    payout_amount?: number | null
    remaining?: number
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: EquipmentRequestUncheckedCreateNestedManyWithoutEquipmentListInput
  }

  export type EquipmentListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eq_code?: NullableStringFieldUpdateOperationsInput | string | null
    payout_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    remaining?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentEntry?: EquipmentEntryListUpdateOneRequiredWithoutEquipmentListsNestedInput
    requests?: EquipmentRequestUpdateManyWithoutEquipmentListNestedInput
  }

  export type EquipmentListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eq_code?: NullableStringFieldUpdateOperationsInput | string | null
    equipment_entry_id?: StringFieldUpdateOperationsInput | string
    payout_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    remaining?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: EquipmentRequestUncheckedUpdateManyWithoutEquipmentListNestedInput
  }

  export type EquipmentListCreateManyInput = {
    id?: string
    eq_code?: string | null
    equipment_entry_id: string
    payout_amount?: number | null
    remaining?: number
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eq_code?: NullableStringFieldUpdateOperationsInput | string | null
    payout_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    remaining?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eq_code?: NullableStringFieldUpdateOperationsInput | string | null
    equipment_entry_id?: StringFieldUpdateOperationsInput | string
    payout_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    remaining?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentRequestCreateInput = {
    id?: string
    equipment_code: string
    manual_item_name?: string | null
    manual_item_type?: string | null
    quantity?: number
    reason?: string | null
    remarks?: string | null
    borrow_type?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipmentList?: EquipmentListCreateNestedOneWithoutRequestsInput
    group?: EquipmentBorrowGroupCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutEquipmentRequestsInput
  }

  export type EquipmentRequestUncheckedCreateInput = {
    id?: string
    equipment_code: string
    equipment_list_id?: string | null
    manual_item_name?: string | null
    manual_item_type?: string | null
    quantity?: number
    reason?: string | null
    remarks?: string | null
    groupId?: string | null
    borrow_type?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentList?: EquipmentListUpdateOneWithoutRequestsNestedInput
    group?: EquipmentBorrowGroupUpdateOneWithoutRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutEquipmentRequestsNestedInput
  }

  export type EquipmentRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    equipment_list_id?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentRequestCreateManyInput = {
    id?: string
    equipment_code: string
    equipment_list_id?: string | null
    manual_item_name?: string | null
    manual_item_type?: string | null
    quantity?: number
    reason?: string | null
    remarks?: string | null
    groupId?: string | null
    borrow_type?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    equipment_list_id?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentBorrowGroupCreateInput = {
    id?: string
    group_code: string
    reason?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    date_needed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEquipmentGroupsInput
    requests?: EquipmentRequestCreateNestedManyWithoutGroupInput
  }

  export type EquipmentBorrowGroupUncheckedCreateInput = {
    id?: string
    group_code: string
    userId: string
    reason?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    date_needed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: EquipmentRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type EquipmentBorrowGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_needed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEquipmentGroupsNestedInput
    requests?: EquipmentRequestUpdateManyWithoutGroupNestedInput
  }

  export type EquipmentBorrowGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_needed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: EquipmentRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type EquipmentBorrowGroupCreateManyInput = {
    id?: string
    group_code: string
    userId: string
    reason?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    date_needed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentBorrowGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_needed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentBorrowGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_needed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    userName?: string | null
    action: string
    module: string
    details?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    device?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    userName?: string | null
    action: string
    module: string
    details?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    device?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId?: string | null
    userName?: string | null
    action: string
    module: string
    details?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    device?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type EquipmentRequestListRelationFilter = {
    every?: EquipmentRequestWhereInput
    some?: EquipmentRequestWhereInput
    none?: EquipmentRequestWhereInput
  }

  export type EquipmentBorrowGroupListRelationFilter = {
    every?: EquipmentBorrowGroupWhereInput
    some?: EquipmentBorrowGroupWhereInput
    none?: EquipmentBorrowGroupWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentBorrowGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employeeId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employeeId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employeeId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    employee_name_th?: SortOrder
    employee_name_en?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    department?: SortOrder
    work_location?: SortOrder
    supervisor_name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    employee_name_th?: SortOrder
    employee_name_en?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    department?: SortOrder
    work_location?: SortOrder
    supervisor_name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    employee_name_th?: SortOrder
    employee_name_en?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    department?: SortOrder
    work_location?: SortOrder
    supervisor_name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    request_code?: SortOrder
    type_request?: SortOrder
    description?: SortOrder
    reason?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    approval?: SortOrder
    approval_status?: SortOrder
    approval_comment?: SortOrder
    approval_date?: SortOrder
    it_approval?: SortOrder
    it_approval_status?: SortOrder
    it_approval_comment?: SortOrder
    it_approval_date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    request_code?: SortOrder
    type_request?: SortOrder
    description?: SortOrder
    reason?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    approval?: SortOrder
    approval_status?: SortOrder
    approval_comment?: SortOrder
    approval_date?: SortOrder
    it_approval?: SortOrder
    it_approval_status?: SortOrder
    it_approval_comment?: SortOrder
    it_approval_date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    request_code?: SortOrder
    type_request?: SortOrder
    description?: SortOrder
    reason?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    approval?: SortOrder
    approval_status?: SortOrder
    approval_comment?: SortOrder
    approval_date?: SortOrder
    it_approval?: SortOrder
    it_approval_status?: SortOrder
    it_approval_comment?: SortOrder
    it_approval_date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type RequestScalarRelationFilter = {
    is?: RequestWhereInput
    isNot?: RequestWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EquipmentEntryListListRelationFilter = {
    every?: EquipmentEntryListWhereInput
    some?: EquipmentEntryListWhereInput
    none?: EquipmentEntryListWhereInput
  }

  export type EquipmentEntryListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentPurchaseOrderCountOrderByAggregateInput = {
    id?: SortOrder
    po_code?: SortOrder
    list?: SortOrder
    detail?: SortOrder
    quantity?: SortOrder
    reason_order?: SortOrder
    picture?: SortOrder
    buyer?: SortOrder
    reviewer?: SortOrder
    approver?: SortOrder
    date_order?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentPurchaseOrderAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EquipmentPurchaseOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    po_code?: SortOrder
    list?: SortOrder
    detail?: SortOrder
    quantity?: SortOrder
    reason_order?: SortOrder
    picture?: SortOrder
    buyer?: SortOrder
    reviewer?: SortOrder
    approver?: SortOrder
    date_order?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentPurchaseOrderMinOrderByAggregateInput = {
    id?: SortOrder
    po_code?: SortOrder
    list?: SortOrder
    detail?: SortOrder
    quantity?: SortOrder
    reason_order?: SortOrder
    picture?: SortOrder
    buyer?: SortOrder
    reviewer?: SortOrder
    approver?: SortOrder
    date_order?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentPurchaseOrderSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EquipmentPurchaseOrderScalarRelationFilter = {
    is?: EquipmentPurchaseOrderWhereInput
    isNot?: EquipmentPurchaseOrderWhereInput
  }

  export type EquipmentListListRelationFilter = {
    every?: EquipmentListWhereInput
    some?: EquipmentListWhereInput
    none?: EquipmentListWhereInput
  }

  export type EquipmentListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentEntryListCountOrderByAggregateInput = {
    id?: SortOrder
    purchase_id?: SortOrder
    list?: SortOrder
    brand_name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    recipient?: SortOrder
    date_received?: SortOrder
    item_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentEntryListAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EquipmentEntryListMaxOrderByAggregateInput = {
    id?: SortOrder
    purchase_id?: SortOrder
    list?: SortOrder
    brand_name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    recipient?: SortOrder
    date_received?: SortOrder
    item_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentEntryListMinOrderByAggregateInput = {
    id?: SortOrder
    purchase_id?: SortOrder
    list?: SortOrder
    brand_name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    recipient?: SortOrder
    date_received?: SortOrder
    item_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentEntryListSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EquipmentEntryListScalarRelationFilter = {
    is?: EquipmentEntryListWhereInput
    isNot?: EquipmentEntryListWhereInput
  }

  export type EquipmentListCountOrderByAggregateInput = {
    id?: SortOrder
    eq_code?: SortOrder
    equipment_entry_id?: SortOrder
    payout_amount?: SortOrder
    remaining?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentListAvgOrderByAggregateInput = {
    payout_amount?: SortOrder
    remaining?: SortOrder
  }

  export type EquipmentListMaxOrderByAggregateInput = {
    id?: SortOrder
    eq_code?: SortOrder
    equipment_entry_id?: SortOrder
    payout_amount?: SortOrder
    remaining?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentListMinOrderByAggregateInput = {
    id?: SortOrder
    eq_code?: SortOrder
    equipment_entry_id?: SortOrder
    payout_amount?: SortOrder
    remaining?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentListSumOrderByAggregateInput = {
    payout_amount?: SortOrder
    remaining?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EquipmentListNullableScalarRelationFilter = {
    is?: EquipmentListWhereInput | null
    isNot?: EquipmentListWhereInput | null
  }

  export type EquipmentBorrowGroupNullableScalarRelationFilter = {
    is?: EquipmentBorrowGroupWhereInput | null
    isNot?: EquipmentBorrowGroupWhereInput | null
  }

  export type EquipmentRequestCountOrderByAggregateInput = {
    id?: SortOrder
    equipment_code?: SortOrder
    equipment_list_id?: SortOrder
    manual_item_name?: SortOrder
    manual_item_type?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    remarks?: SortOrder
    groupId?: SortOrder
    borrow_type?: SortOrder
    approval?: SortOrder
    approval_status?: SortOrder
    approval_comment?: SortOrder
    approval_date?: SortOrder
    it_approval?: SortOrder
    it_approval_status?: SortOrder
    it_approval_comment?: SortOrder
    it_approval_date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentRequestAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EquipmentRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    equipment_code?: SortOrder
    equipment_list_id?: SortOrder
    manual_item_name?: SortOrder
    manual_item_type?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    remarks?: SortOrder
    groupId?: SortOrder
    borrow_type?: SortOrder
    approval?: SortOrder
    approval_status?: SortOrder
    approval_comment?: SortOrder
    approval_date?: SortOrder
    it_approval?: SortOrder
    it_approval_status?: SortOrder
    it_approval_comment?: SortOrder
    it_approval_date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentRequestMinOrderByAggregateInput = {
    id?: SortOrder
    equipment_code?: SortOrder
    equipment_list_id?: SortOrder
    manual_item_name?: SortOrder
    manual_item_type?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    remarks?: SortOrder
    groupId?: SortOrder
    borrow_type?: SortOrder
    approval?: SortOrder
    approval_status?: SortOrder
    approval_comment?: SortOrder
    approval_date?: SortOrder
    it_approval?: SortOrder
    it_approval_status?: SortOrder
    it_approval_comment?: SortOrder
    it_approval_date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentRequestSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EquipmentBorrowGroupCountOrderByAggregateInput = {
    id?: SortOrder
    group_code?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    approval?: SortOrder
    approval_status?: SortOrder
    approval_comment?: SortOrder
    approval_date?: SortOrder
    it_approval?: SortOrder
    it_approval_status?: SortOrder
    it_approval_comment?: SortOrder
    it_approval_date?: SortOrder
    date_needed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentBorrowGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    group_code?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    approval?: SortOrder
    approval_status?: SortOrder
    approval_comment?: SortOrder
    approval_date?: SortOrder
    it_approval?: SortOrder
    it_approval_status?: SortOrder
    it_approval_comment?: SortOrder
    it_approval_date?: SortOrder
    date_needed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentBorrowGroupMinOrderByAggregateInput = {
    id?: SortOrder
    group_code?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    approval?: SortOrder
    approval_status?: SortOrder
    approval_comment?: SortOrder
    approval_date?: SortOrder
    it_approval?: SortOrder
    it_approval_status?: SortOrder
    it_approval_comment?: SortOrder
    it_approval_date?: SortOrder
    date_needed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    module?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    module?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    module?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type RequestCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type EquipmentRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<EquipmentRequestCreateWithoutUserInput, EquipmentRequestUncheckedCreateWithoutUserInput> | EquipmentRequestCreateWithoutUserInput[] | EquipmentRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EquipmentRequestCreateOrConnectWithoutUserInput | EquipmentRequestCreateOrConnectWithoutUserInput[]
    createMany?: EquipmentRequestCreateManyUserInputEnvelope
    connect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
  }

  export type EquipmentBorrowGroupCreateNestedManyWithoutUserInput = {
    create?: XOR<EquipmentBorrowGroupCreateWithoutUserInput, EquipmentBorrowGroupUncheckedCreateWithoutUserInput> | EquipmentBorrowGroupCreateWithoutUserInput[] | EquipmentBorrowGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EquipmentBorrowGroupCreateOrConnectWithoutUserInput | EquipmentBorrowGroupCreateOrConnectWithoutUserInput[]
    createMany?: EquipmentBorrowGroupCreateManyUserInputEnvelope
    connect?: EquipmentBorrowGroupWhereUniqueInput | EquipmentBorrowGroupWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type EquipmentRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EquipmentRequestCreateWithoutUserInput, EquipmentRequestUncheckedCreateWithoutUserInput> | EquipmentRequestCreateWithoutUserInput[] | EquipmentRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EquipmentRequestCreateOrConnectWithoutUserInput | EquipmentRequestCreateOrConnectWithoutUserInput[]
    createMany?: EquipmentRequestCreateManyUserInputEnvelope
    connect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
  }

  export type EquipmentBorrowGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EquipmentBorrowGroupCreateWithoutUserInput, EquipmentBorrowGroupUncheckedCreateWithoutUserInput> | EquipmentBorrowGroupCreateWithoutUserInput[] | EquipmentBorrowGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EquipmentBorrowGroupCreateOrConnectWithoutUserInput | EquipmentBorrowGroupCreateOrConnectWithoutUserInput[]
    createMany?: EquipmentBorrowGroupCreateManyUserInputEnvelope
    connect?: EquipmentBorrowGroupWhereUniqueInput | EquipmentBorrowGroupWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmployeeUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type RequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type EquipmentRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<EquipmentRequestCreateWithoutUserInput, EquipmentRequestUncheckedCreateWithoutUserInput> | EquipmentRequestCreateWithoutUserInput[] | EquipmentRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EquipmentRequestCreateOrConnectWithoutUserInput | EquipmentRequestCreateOrConnectWithoutUserInput[]
    upsert?: EquipmentRequestUpsertWithWhereUniqueWithoutUserInput | EquipmentRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EquipmentRequestCreateManyUserInputEnvelope
    set?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    disconnect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    delete?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    connect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    update?: EquipmentRequestUpdateWithWhereUniqueWithoutUserInput | EquipmentRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EquipmentRequestUpdateManyWithWhereWithoutUserInput | EquipmentRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EquipmentRequestScalarWhereInput | EquipmentRequestScalarWhereInput[]
  }

  export type EquipmentBorrowGroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<EquipmentBorrowGroupCreateWithoutUserInput, EquipmentBorrowGroupUncheckedCreateWithoutUserInput> | EquipmentBorrowGroupCreateWithoutUserInput[] | EquipmentBorrowGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EquipmentBorrowGroupCreateOrConnectWithoutUserInput | EquipmentBorrowGroupCreateOrConnectWithoutUserInput[]
    upsert?: EquipmentBorrowGroupUpsertWithWhereUniqueWithoutUserInput | EquipmentBorrowGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EquipmentBorrowGroupCreateManyUserInputEnvelope
    set?: EquipmentBorrowGroupWhereUniqueInput | EquipmentBorrowGroupWhereUniqueInput[]
    disconnect?: EquipmentBorrowGroupWhereUniqueInput | EquipmentBorrowGroupWhereUniqueInput[]
    delete?: EquipmentBorrowGroupWhereUniqueInput | EquipmentBorrowGroupWhereUniqueInput[]
    connect?: EquipmentBorrowGroupWhereUniqueInput | EquipmentBorrowGroupWhereUniqueInput[]
    update?: EquipmentBorrowGroupUpdateWithWhereUniqueWithoutUserInput | EquipmentBorrowGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EquipmentBorrowGroupUpdateManyWithWhereWithoutUserInput | EquipmentBorrowGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EquipmentBorrowGroupScalarWhereInput | EquipmentBorrowGroupScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type EquipmentRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EquipmentRequestCreateWithoutUserInput, EquipmentRequestUncheckedCreateWithoutUserInput> | EquipmentRequestCreateWithoutUserInput[] | EquipmentRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EquipmentRequestCreateOrConnectWithoutUserInput | EquipmentRequestCreateOrConnectWithoutUserInput[]
    upsert?: EquipmentRequestUpsertWithWhereUniqueWithoutUserInput | EquipmentRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EquipmentRequestCreateManyUserInputEnvelope
    set?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    disconnect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    delete?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    connect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    update?: EquipmentRequestUpdateWithWhereUniqueWithoutUserInput | EquipmentRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EquipmentRequestUpdateManyWithWhereWithoutUserInput | EquipmentRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EquipmentRequestScalarWhereInput | EquipmentRequestScalarWhereInput[]
  }

  export type EquipmentBorrowGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EquipmentBorrowGroupCreateWithoutUserInput, EquipmentBorrowGroupUncheckedCreateWithoutUserInput> | EquipmentBorrowGroupCreateWithoutUserInput[] | EquipmentBorrowGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EquipmentBorrowGroupCreateOrConnectWithoutUserInput | EquipmentBorrowGroupCreateOrConnectWithoutUserInput[]
    upsert?: EquipmentBorrowGroupUpsertWithWhereUniqueWithoutUserInput | EquipmentBorrowGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EquipmentBorrowGroupCreateManyUserInputEnvelope
    set?: EquipmentBorrowGroupWhereUniqueInput | EquipmentBorrowGroupWhereUniqueInput[]
    disconnect?: EquipmentBorrowGroupWhereUniqueInput | EquipmentBorrowGroupWhereUniqueInput[]
    delete?: EquipmentBorrowGroupWhereUniqueInput | EquipmentBorrowGroupWhereUniqueInput[]
    connect?: EquipmentBorrowGroupWhereUniqueInput | EquipmentBorrowGroupWhereUniqueInput[]
    update?: EquipmentBorrowGroupUpdateWithWhereUniqueWithoutUserInput | EquipmentBorrowGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EquipmentBorrowGroupUpdateManyWithWhereWithoutUserInput | EquipmentBorrowGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EquipmentBorrowGroupScalarWhereInput | EquipmentBorrowGroupScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type RequestCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<RequestCreateWithoutEmployeeInput, RequestUncheckedCreateWithoutEmployeeInput> | RequestCreateWithoutEmployeeInput[] | RequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutEmployeeInput | RequestCreateOrConnectWithoutEmployeeInput[]
    createMany?: RequestCreateManyEmployeeInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type RequestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<RequestCreateWithoutEmployeeInput, RequestUncheckedCreateWithoutEmployeeInput> | RequestCreateWithoutEmployeeInput[] | RequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutEmployeeInput | RequestCreateOrConnectWithoutEmployeeInput[]
    createMany?: RequestCreateManyEmployeeInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RequestUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<RequestCreateWithoutEmployeeInput, RequestUncheckedCreateWithoutEmployeeInput> | RequestCreateWithoutEmployeeInput[] | RequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutEmployeeInput | RequestCreateOrConnectWithoutEmployeeInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutEmployeeInput | RequestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: RequestCreateManyEmployeeInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutEmployeeInput | RequestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutEmployeeInput | RequestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type UserUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type RequestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<RequestCreateWithoutEmployeeInput, RequestUncheckedCreateWithoutEmployeeInput> | RequestCreateWithoutEmployeeInput[] | RequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutEmployeeInput | RequestCreateOrConnectWithoutEmployeeInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutEmployeeInput | RequestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: RequestCreateManyEmployeeInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutEmployeeInput | RequestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutEmployeeInput | RequestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeCreateNestedOneWithoutRequestsInput = {
    create?: XOR<EmployeeCreateWithoutRequestsInput, EmployeeUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutRequestsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutRequestInput = {
    create?: XOR<CommentCreateWithoutRequestInput, CommentUncheckedCreateWithoutRequestInput> | CommentCreateWithoutRequestInput[] | CommentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRequestInput | CommentCreateOrConnectWithoutRequestInput[]
    createMany?: CommentCreateManyRequestInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<CommentCreateWithoutRequestInput, CommentUncheckedCreateWithoutRequestInput> | CommentCreateWithoutRequestInput[] | CommentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRequestInput | CommentCreateOrConnectWithoutRequestInput[]
    createMany?: CommentCreateManyRequestInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EmployeeUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<EmployeeCreateWithoutRequestsInput, EmployeeUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutRequestsInput
    upsert?: EmployeeUpsertWithoutRequestsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutRequestsInput, EmployeeUpdateWithoutRequestsInput>, EmployeeUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type CommentUpdateManyWithoutRequestNestedInput = {
    create?: XOR<CommentCreateWithoutRequestInput, CommentUncheckedCreateWithoutRequestInput> | CommentCreateWithoutRequestInput[] | CommentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRequestInput | CommentCreateOrConnectWithoutRequestInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutRequestInput | CommentUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: CommentCreateManyRequestInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutRequestInput | CommentUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutRequestInput | CommentUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<CommentCreateWithoutRequestInput, CommentUncheckedCreateWithoutRequestInput> | CommentCreateWithoutRequestInput[] | CommentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRequestInput | CommentCreateOrConnectWithoutRequestInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutRequestInput | CommentUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: CommentCreateManyRequestInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutRequestInput | CommentUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutRequestInput | CommentUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RequestCreateNestedOneWithoutCommentsInput = {
    create?: XOR<RequestCreateWithoutCommentsInput, RequestUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: RequestCreateOrConnectWithoutCommentsInput
    connect?: RequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type RequestUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<RequestCreateWithoutCommentsInput, RequestUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: RequestCreateOrConnectWithoutCommentsInput
    upsert?: RequestUpsertWithoutCommentsInput
    connect?: RequestWhereUniqueInput
    update?: XOR<XOR<RequestUpdateToOneWithWhereWithoutCommentsInput, RequestUpdateWithoutCommentsInput>, RequestUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type EquipmentEntryListCreateNestedManyWithoutPurchaseOrderInput = {
    create?: XOR<EquipmentEntryListCreateWithoutPurchaseOrderInput, EquipmentEntryListUncheckedCreateWithoutPurchaseOrderInput> | EquipmentEntryListCreateWithoutPurchaseOrderInput[] | EquipmentEntryListUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: EquipmentEntryListCreateOrConnectWithoutPurchaseOrderInput | EquipmentEntryListCreateOrConnectWithoutPurchaseOrderInput[]
    createMany?: EquipmentEntryListCreateManyPurchaseOrderInputEnvelope
    connect?: EquipmentEntryListWhereUniqueInput | EquipmentEntryListWhereUniqueInput[]
  }

  export type EquipmentEntryListUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: XOR<EquipmentEntryListCreateWithoutPurchaseOrderInput, EquipmentEntryListUncheckedCreateWithoutPurchaseOrderInput> | EquipmentEntryListCreateWithoutPurchaseOrderInput[] | EquipmentEntryListUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: EquipmentEntryListCreateOrConnectWithoutPurchaseOrderInput | EquipmentEntryListCreateOrConnectWithoutPurchaseOrderInput[]
    createMany?: EquipmentEntryListCreateManyPurchaseOrderInputEnvelope
    connect?: EquipmentEntryListWhereUniqueInput | EquipmentEntryListWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EquipmentEntryListUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: XOR<EquipmentEntryListCreateWithoutPurchaseOrderInput, EquipmentEntryListUncheckedCreateWithoutPurchaseOrderInput> | EquipmentEntryListCreateWithoutPurchaseOrderInput[] | EquipmentEntryListUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: EquipmentEntryListCreateOrConnectWithoutPurchaseOrderInput | EquipmentEntryListCreateOrConnectWithoutPurchaseOrderInput[]
    upsert?: EquipmentEntryListUpsertWithWhereUniqueWithoutPurchaseOrderInput | EquipmentEntryListUpsertWithWhereUniqueWithoutPurchaseOrderInput[]
    createMany?: EquipmentEntryListCreateManyPurchaseOrderInputEnvelope
    set?: EquipmentEntryListWhereUniqueInput | EquipmentEntryListWhereUniqueInput[]
    disconnect?: EquipmentEntryListWhereUniqueInput | EquipmentEntryListWhereUniqueInput[]
    delete?: EquipmentEntryListWhereUniqueInput | EquipmentEntryListWhereUniqueInput[]
    connect?: EquipmentEntryListWhereUniqueInput | EquipmentEntryListWhereUniqueInput[]
    update?: EquipmentEntryListUpdateWithWhereUniqueWithoutPurchaseOrderInput | EquipmentEntryListUpdateWithWhereUniqueWithoutPurchaseOrderInput[]
    updateMany?: EquipmentEntryListUpdateManyWithWhereWithoutPurchaseOrderInput | EquipmentEntryListUpdateManyWithWhereWithoutPurchaseOrderInput[]
    deleteMany?: EquipmentEntryListScalarWhereInput | EquipmentEntryListScalarWhereInput[]
  }

  export type EquipmentEntryListUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: XOR<EquipmentEntryListCreateWithoutPurchaseOrderInput, EquipmentEntryListUncheckedCreateWithoutPurchaseOrderInput> | EquipmentEntryListCreateWithoutPurchaseOrderInput[] | EquipmentEntryListUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: EquipmentEntryListCreateOrConnectWithoutPurchaseOrderInput | EquipmentEntryListCreateOrConnectWithoutPurchaseOrderInput[]
    upsert?: EquipmentEntryListUpsertWithWhereUniqueWithoutPurchaseOrderInput | EquipmentEntryListUpsertWithWhereUniqueWithoutPurchaseOrderInput[]
    createMany?: EquipmentEntryListCreateManyPurchaseOrderInputEnvelope
    set?: EquipmentEntryListWhereUniqueInput | EquipmentEntryListWhereUniqueInput[]
    disconnect?: EquipmentEntryListWhereUniqueInput | EquipmentEntryListWhereUniqueInput[]
    delete?: EquipmentEntryListWhereUniqueInput | EquipmentEntryListWhereUniqueInput[]
    connect?: EquipmentEntryListWhereUniqueInput | EquipmentEntryListWhereUniqueInput[]
    update?: EquipmentEntryListUpdateWithWhereUniqueWithoutPurchaseOrderInput | EquipmentEntryListUpdateWithWhereUniqueWithoutPurchaseOrderInput[]
    updateMany?: EquipmentEntryListUpdateManyWithWhereWithoutPurchaseOrderInput | EquipmentEntryListUpdateManyWithWhereWithoutPurchaseOrderInput[]
    deleteMany?: EquipmentEntryListScalarWhereInput | EquipmentEntryListScalarWhereInput[]
  }

  export type EquipmentPurchaseOrderCreateNestedOneWithoutEntriesInput = {
    create?: XOR<EquipmentPurchaseOrderCreateWithoutEntriesInput, EquipmentPurchaseOrderUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: EquipmentPurchaseOrderCreateOrConnectWithoutEntriesInput
    connect?: EquipmentPurchaseOrderWhereUniqueInput
  }

  export type EquipmentListCreateNestedManyWithoutEquipmentEntryInput = {
    create?: XOR<EquipmentListCreateWithoutEquipmentEntryInput, EquipmentListUncheckedCreateWithoutEquipmentEntryInput> | EquipmentListCreateWithoutEquipmentEntryInput[] | EquipmentListUncheckedCreateWithoutEquipmentEntryInput[]
    connectOrCreate?: EquipmentListCreateOrConnectWithoutEquipmentEntryInput | EquipmentListCreateOrConnectWithoutEquipmentEntryInput[]
    createMany?: EquipmentListCreateManyEquipmentEntryInputEnvelope
    connect?: EquipmentListWhereUniqueInput | EquipmentListWhereUniqueInput[]
  }

  export type EquipmentListUncheckedCreateNestedManyWithoutEquipmentEntryInput = {
    create?: XOR<EquipmentListCreateWithoutEquipmentEntryInput, EquipmentListUncheckedCreateWithoutEquipmentEntryInput> | EquipmentListCreateWithoutEquipmentEntryInput[] | EquipmentListUncheckedCreateWithoutEquipmentEntryInput[]
    connectOrCreate?: EquipmentListCreateOrConnectWithoutEquipmentEntryInput | EquipmentListCreateOrConnectWithoutEquipmentEntryInput[]
    createMany?: EquipmentListCreateManyEquipmentEntryInputEnvelope
    connect?: EquipmentListWhereUniqueInput | EquipmentListWhereUniqueInput[]
  }

  export type EquipmentPurchaseOrderUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<EquipmentPurchaseOrderCreateWithoutEntriesInput, EquipmentPurchaseOrderUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: EquipmentPurchaseOrderCreateOrConnectWithoutEntriesInput
    upsert?: EquipmentPurchaseOrderUpsertWithoutEntriesInput
    connect?: EquipmentPurchaseOrderWhereUniqueInput
    update?: XOR<XOR<EquipmentPurchaseOrderUpdateToOneWithWhereWithoutEntriesInput, EquipmentPurchaseOrderUpdateWithoutEntriesInput>, EquipmentPurchaseOrderUncheckedUpdateWithoutEntriesInput>
  }

  export type EquipmentListUpdateManyWithoutEquipmentEntryNestedInput = {
    create?: XOR<EquipmentListCreateWithoutEquipmentEntryInput, EquipmentListUncheckedCreateWithoutEquipmentEntryInput> | EquipmentListCreateWithoutEquipmentEntryInput[] | EquipmentListUncheckedCreateWithoutEquipmentEntryInput[]
    connectOrCreate?: EquipmentListCreateOrConnectWithoutEquipmentEntryInput | EquipmentListCreateOrConnectWithoutEquipmentEntryInput[]
    upsert?: EquipmentListUpsertWithWhereUniqueWithoutEquipmentEntryInput | EquipmentListUpsertWithWhereUniqueWithoutEquipmentEntryInput[]
    createMany?: EquipmentListCreateManyEquipmentEntryInputEnvelope
    set?: EquipmentListWhereUniqueInput | EquipmentListWhereUniqueInput[]
    disconnect?: EquipmentListWhereUniqueInput | EquipmentListWhereUniqueInput[]
    delete?: EquipmentListWhereUniqueInput | EquipmentListWhereUniqueInput[]
    connect?: EquipmentListWhereUniqueInput | EquipmentListWhereUniqueInput[]
    update?: EquipmentListUpdateWithWhereUniqueWithoutEquipmentEntryInput | EquipmentListUpdateWithWhereUniqueWithoutEquipmentEntryInput[]
    updateMany?: EquipmentListUpdateManyWithWhereWithoutEquipmentEntryInput | EquipmentListUpdateManyWithWhereWithoutEquipmentEntryInput[]
    deleteMany?: EquipmentListScalarWhereInput | EquipmentListScalarWhereInput[]
  }

  export type EquipmentListUncheckedUpdateManyWithoutEquipmentEntryNestedInput = {
    create?: XOR<EquipmentListCreateWithoutEquipmentEntryInput, EquipmentListUncheckedCreateWithoutEquipmentEntryInput> | EquipmentListCreateWithoutEquipmentEntryInput[] | EquipmentListUncheckedCreateWithoutEquipmentEntryInput[]
    connectOrCreate?: EquipmentListCreateOrConnectWithoutEquipmentEntryInput | EquipmentListCreateOrConnectWithoutEquipmentEntryInput[]
    upsert?: EquipmentListUpsertWithWhereUniqueWithoutEquipmentEntryInput | EquipmentListUpsertWithWhereUniqueWithoutEquipmentEntryInput[]
    createMany?: EquipmentListCreateManyEquipmentEntryInputEnvelope
    set?: EquipmentListWhereUniqueInput | EquipmentListWhereUniqueInput[]
    disconnect?: EquipmentListWhereUniqueInput | EquipmentListWhereUniqueInput[]
    delete?: EquipmentListWhereUniqueInput | EquipmentListWhereUniqueInput[]
    connect?: EquipmentListWhereUniqueInput | EquipmentListWhereUniqueInput[]
    update?: EquipmentListUpdateWithWhereUniqueWithoutEquipmentEntryInput | EquipmentListUpdateWithWhereUniqueWithoutEquipmentEntryInput[]
    updateMany?: EquipmentListUpdateManyWithWhereWithoutEquipmentEntryInput | EquipmentListUpdateManyWithWhereWithoutEquipmentEntryInput[]
    deleteMany?: EquipmentListScalarWhereInput | EquipmentListScalarWhereInput[]
  }

  export type EquipmentEntryListCreateNestedOneWithoutEquipmentListsInput = {
    create?: XOR<EquipmentEntryListCreateWithoutEquipmentListsInput, EquipmentEntryListUncheckedCreateWithoutEquipmentListsInput>
    connectOrCreate?: EquipmentEntryListCreateOrConnectWithoutEquipmentListsInput
    connect?: EquipmentEntryListWhereUniqueInput
  }

  export type EquipmentRequestCreateNestedManyWithoutEquipmentListInput = {
    create?: XOR<EquipmentRequestCreateWithoutEquipmentListInput, EquipmentRequestUncheckedCreateWithoutEquipmentListInput> | EquipmentRequestCreateWithoutEquipmentListInput[] | EquipmentRequestUncheckedCreateWithoutEquipmentListInput[]
    connectOrCreate?: EquipmentRequestCreateOrConnectWithoutEquipmentListInput | EquipmentRequestCreateOrConnectWithoutEquipmentListInput[]
    createMany?: EquipmentRequestCreateManyEquipmentListInputEnvelope
    connect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
  }

  export type EquipmentRequestUncheckedCreateNestedManyWithoutEquipmentListInput = {
    create?: XOR<EquipmentRequestCreateWithoutEquipmentListInput, EquipmentRequestUncheckedCreateWithoutEquipmentListInput> | EquipmentRequestCreateWithoutEquipmentListInput[] | EquipmentRequestUncheckedCreateWithoutEquipmentListInput[]
    connectOrCreate?: EquipmentRequestCreateOrConnectWithoutEquipmentListInput | EquipmentRequestCreateOrConnectWithoutEquipmentListInput[]
    createMany?: EquipmentRequestCreateManyEquipmentListInputEnvelope
    connect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EquipmentEntryListUpdateOneRequiredWithoutEquipmentListsNestedInput = {
    create?: XOR<EquipmentEntryListCreateWithoutEquipmentListsInput, EquipmentEntryListUncheckedCreateWithoutEquipmentListsInput>
    connectOrCreate?: EquipmentEntryListCreateOrConnectWithoutEquipmentListsInput
    upsert?: EquipmentEntryListUpsertWithoutEquipmentListsInput
    connect?: EquipmentEntryListWhereUniqueInput
    update?: XOR<XOR<EquipmentEntryListUpdateToOneWithWhereWithoutEquipmentListsInput, EquipmentEntryListUpdateWithoutEquipmentListsInput>, EquipmentEntryListUncheckedUpdateWithoutEquipmentListsInput>
  }

  export type EquipmentRequestUpdateManyWithoutEquipmentListNestedInput = {
    create?: XOR<EquipmentRequestCreateWithoutEquipmentListInput, EquipmentRequestUncheckedCreateWithoutEquipmentListInput> | EquipmentRequestCreateWithoutEquipmentListInput[] | EquipmentRequestUncheckedCreateWithoutEquipmentListInput[]
    connectOrCreate?: EquipmentRequestCreateOrConnectWithoutEquipmentListInput | EquipmentRequestCreateOrConnectWithoutEquipmentListInput[]
    upsert?: EquipmentRequestUpsertWithWhereUniqueWithoutEquipmentListInput | EquipmentRequestUpsertWithWhereUniqueWithoutEquipmentListInput[]
    createMany?: EquipmentRequestCreateManyEquipmentListInputEnvelope
    set?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    disconnect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    delete?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    connect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    update?: EquipmentRequestUpdateWithWhereUniqueWithoutEquipmentListInput | EquipmentRequestUpdateWithWhereUniqueWithoutEquipmentListInput[]
    updateMany?: EquipmentRequestUpdateManyWithWhereWithoutEquipmentListInput | EquipmentRequestUpdateManyWithWhereWithoutEquipmentListInput[]
    deleteMany?: EquipmentRequestScalarWhereInput | EquipmentRequestScalarWhereInput[]
  }

  export type EquipmentRequestUncheckedUpdateManyWithoutEquipmentListNestedInput = {
    create?: XOR<EquipmentRequestCreateWithoutEquipmentListInput, EquipmentRequestUncheckedCreateWithoutEquipmentListInput> | EquipmentRequestCreateWithoutEquipmentListInput[] | EquipmentRequestUncheckedCreateWithoutEquipmentListInput[]
    connectOrCreate?: EquipmentRequestCreateOrConnectWithoutEquipmentListInput | EquipmentRequestCreateOrConnectWithoutEquipmentListInput[]
    upsert?: EquipmentRequestUpsertWithWhereUniqueWithoutEquipmentListInput | EquipmentRequestUpsertWithWhereUniqueWithoutEquipmentListInput[]
    createMany?: EquipmentRequestCreateManyEquipmentListInputEnvelope
    set?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    disconnect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    delete?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    connect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    update?: EquipmentRequestUpdateWithWhereUniqueWithoutEquipmentListInput | EquipmentRequestUpdateWithWhereUniqueWithoutEquipmentListInput[]
    updateMany?: EquipmentRequestUpdateManyWithWhereWithoutEquipmentListInput | EquipmentRequestUpdateManyWithWhereWithoutEquipmentListInput[]
    deleteMany?: EquipmentRequestScalarWhereInput | EquipmentRequestScalarWhereInput[]
  }

  export type EquipmentListCreateNestedOneWithoutRequestsInput = {
    create?: XOR<EquipmentListCreateWithoutRequestsInput, EquipmentListUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: EquipmentListCreateOrConnectWithoutRequestsInput
    connect?: EquipmentListWhereUniqueInput
  }

  export type EquipmentBorrowGroupCreateNestedOneWithoutRequestsInput = {
    create?: XOR<EquipmentBorrowGroupCreateWithoutRequestsInput, EquipmentBorrowGroupUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: EquipmentBorrowGroupCreateOrConnectWithoutRequestsInput
    connect?: EquipmentBorrowGroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEquipmentRequestsInput = {
    create?: XOR<UserCreateWithoutEquipmentRequestsInput, UserUncheckedCreateWithoutEquipmentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEquipmentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EquipmentListUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<EquipmentListCreateWithoutRequestsInput, EquipmentListUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: EquipmentListCreateOrConnectWithoutRequestsInput
    upsert?: EquipmentListUpsertWithoutRequestsInput
    disconnect?: EquipmentListWhereInput | boolean
    delete?: EquipmentListWhereInput | boolean
    connect?: EquipmentListWhereUniqueInput
    update?: XOR<XOR<EquipmentListUpdateToOneWithWhereWithoutRequestsInput, EquipmentListUpdateWithoutRequestsInput>, EquipmentListUncheckedUpdateWithoutRequestsInput>
  }

  export type EquipmentBorrowGroupUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<EquipmentBorrowGroupCreateWithoutRequestsInput, EquipmentBorrowGroupUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: EquipmentBorrowGroupCreateOrConnectWithoutRequestsInput
    upsert?: EquipmentBorrowGroupUpsertWithoutRequestsInput
    disconnect?: EquipmentBorrowGroupWhereInput | boolean
    delete?: EquipmentBorrowGroupWhereInput | boolean
    connect?: EquipmentBorrowGroupWhereUniqueInput
    update?: XOR<XOR<EquipmentBorrowGroupUpdateToOneWithWhereWithoutRequestsInput, EquipmentBorrowGroupUpdateWithoutRequestsInput>, EquipmentBorrowGroupUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutEquipmentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutEquipmentRequestsInput, UserUncheckedCreateWithoutEquipmentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEquipmentRequestsInput
    upsert?: UserUpsertWithoutEquipmentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEquipmentRequestsInput, UserUpdateWithoutEquipmentRequestsInput>, UserUncheckedUpdateWithoutEquipmentRequestsInput>
  }

  export type UserCreateNestedOneWithoutEquipmentGroupsInput = {
    create?: XOR<UserCreateWithoutEquipmentGroupsInput, UserUncheckedCreateWithoutEquipmentGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEquipmentGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type EquipmentRequestCreateNestedManyWithoutGroupInput = {
    create?: XOR<EquipmentRequestCreateWithoutGroupInput, EquipmentRequestUncheckedCreateWithoutGroupInput> | EquipmentRequestCreateWithoutGroupInput[] | EquipmentRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EquipmentRequestCreateOrConnectWithoutGroupInput | EquipmentRequestCreateOrConnectWithoutGroupInput[]
    createMany?: EquipmentRequestCreateManyGroupInputEnvelope
    connect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
  }

  export type EquipmentRequestUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<EquipmentRequestCreateWithoutGroupInput, EquipmentRequestUncheckedCreateWithoutGroupInput> | EquipmentRequestCreateWithoutGroupInput[] | EquipmentRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EquipmentRequestCreateOrConnectWithoutGroupInput | EquipmentRequestCreateOrConnectWithoutGroupInput[]
    createMany?: EquipmentRequestCreateManyGroupInputEnvelope
    connect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEquipmentGroupsNestedInput = {
    create?: XOR<UserCreateWithoutEquipmentGroupsInput, UserUncheckedCreateWithoutEquipmentGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEquipmentGroupsInput
    upsert?: UserUpsertWithoutEquipmentGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEquipmentGroupsInput, UserUpdateWithoutEquipmentGroupsInput>, UserUncheckedUpdateWithoutEquipmentGroupsInput>
  }

  export type EquipmentRequestUpdateManyWithoutGroupNestedInput = {
    create?: XOR<EquipmentRequestCreateWithoutGroupInput, EquipmentRequestUncheckedCreateWithoutGroupInput> | EquipmentRequestCreateWithoutGroupInput[] | EquipmentRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EquipmentRequestCreateOrConnectWithoutGroupInput | EquipmentRequestCreateOrConnectWithoutGroupInput[]
    upsert?: EquipmentRequestUpsertWithWhereUniqueWithoutGroupInput | EquipmentRequestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: EquipmentRequestCreateManyGroupInputEnvelope
    set?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    disconnect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    delete?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    connect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    update?: EquipmentRequestUpdateWithWhereUniqueWithoutGroupInput | EquipmentRequestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: EquipmentRequestUpdateManyWithWhereWithoutGroupInput | EquipmentRequestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: EquipmentRequestScalarWhereInput | EquipmentRequestScalarWhereInput[]
  }

  export type EquipmentRequestUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<EquipmentRequestCreateWithoutGroupInput, EquipmentRequestUncheckedCreateWithoutGroupInput> | EquipmentRequestCreateWithoutGroupInput[] | EquipmentRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EquipmentRequestCreateOrConnectWithoutGroupInput | EquipmentRequestCreateOrConnectWithoutGroupInput[]
    upsert?: EquipmentRequestUpsertWithWhereUniqueWithoutGroupInput | EquipmentRequestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: EquipmentRequestCreateManyGroupInputEnvelope
    set?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    disconnect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    delete?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    connect?: EquipmentRequestWhereUniqueInput | EquipmentRequestWhereUniqueInput[]
    update?: EquipmentRequestUpdateWithWhereUniqueWithoutGroupInput | EquipmentRequestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: EquipmentRequestUpdateManyWithWhereWithoutGroupInput | EquipmentRequestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: EquipmentRequestScalarWhereInput | EquipmentRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EmployeeCreateWithoutUserInput = {
    id?: string
    employee_code: string
    employee_name_th: string
    employee_name_en?: string | null
    gender?: string | null
    position?: string | null
    department?: string | null
    work_location?: string | null
    supervisor_name?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string | null
    requests?: RequestCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: string
    employee_code: string
    employee_name_th: string
    employee_name_en?: string | null
    gender?: string | null
    position?: string | null
    department?: string | null
    work_location?: string | null
    supervisor_name?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string | null
    requests?: RequestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type RequestCreateWithoutUserInput = {
    id?: string
    request_code: string
    type_request: string
    description: string
    reason?: string | null
    category: $Enums.Category
    priority: $Enums.Priority
    status?: $Enums.Status
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutRequestsInput
    comments?: CommentCreateNestedManyWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutUserInput = {
    id?: string
    employeeId: string
    request_code: string
    type_request: string
    description: string
    reason?: string | null
    category: $Enums.Category
    priority: $Enums.Priority
    status?: $Enums.Status
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutUserInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestCreateManyUserInputEnvelope = {
    data: RequestCreateManyUserInput | RequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    request: RequestCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestId: string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentRequestCreateWithoutUserInput = {
    id?: string
    equipment_code: string
    manual_item_name?: string | null
    manual_item_type?: string | null
    quantity?: number
    reason?: string | null
    remarks?: string | null
    borrow_type?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipmentList?: EquipmentListCreateNestedOneWithoutRequestsInput
    group?: EquipmentBorrowGroupCreateNestedOneWithoutRequestsInput
  }

  export type EquipmentRequestUncheckedCreateWithoutUserInput = {
    id?: string
    equipment_code: string
    equipment_list_id?: string | null
    manual_item_name?: string | null
    manual_item_type?: string | null
    quantity?: number
    reason?: string | null
    remarks?: string | null
    groupId?: string | null
    borrow_type?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentRequestCreateOrConnectWithoutUserInput = {
    where: EquipmentRequestWhereUniqueInput
    create: XOR<EquipmentRequestCreateWithoutUserInput, EquipmentRequestUncheckedCreateWithoutUserInput>
  }

  export type EquipmentRequestCreateManyUserInputEnvelope = {
    data: EquipmentRequestCreateManyUserInput | EquipmentRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentBorrowGroupCreateWithoutUserInput = {
    id?: string
    group_code: string
    reason?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    date_needed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: EquipmentRequestCreateNestedManyWithoutGroupInput
  }

  export type EquipmentBorrowGroupUncheckedCreateWithoutUserInput = {
    id?: string
    group_code: string
    reason?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    date_needed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: EquipmentRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type EquipmentBorrowGroupCreateOrConnectWithoutUserInput = {
    where: EquipmentBorrowGroupWhereUniqueInput
    create: XOR<EquipmentBorrowGroupCreateWithoutUserInput, EquipmentBorrowGroupUncheckedCreateWithoutUserInput>
  }

  export type EquipmentBorrowGroupCreateManyUserInputEnvelope = {
    data: EquipmentBorrowGroupCreateManyUserInput | EquipmentBorrowGroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    userName?: string | null
    action: string
    module: string
    details?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    device?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    userName?: string | null
    action: string
    module: string
    details?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    device?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutUserInput = {
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: RequestUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: RequestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type RequestUpsertWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
  }

  export type RequestUpdateManyWithWhereWithoutUserInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutUserInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: StringFilter<"Request"> | string
    employeeId?: StringFilter<"Request"> | string
    request_code?: StringFilter<"Request"> | string
    type_request?: StringFilter<"Request"> | string
    description?: StringFilter<"Request"> | string
    reason?: StringNullableFilter<"Request"> | string | null
    category?: EnumCategoryFilter<"Request"> | $Enums.Category
    priority?: EnumPriorityFilter<"Request"> | $Enums.Priority
    status?: EnumStatusFilter<"Request"> | $Enums.Status
    approval?: StringNullableFilter<"Request"> | string | null
    approval_status?: StringNullableFilter<"Request"> | string | null
    approval_comment?: StringNullableFilter<"Request"> | string | null
    approval_date?: DateTimeNullableFilter<"Request"> | Date | string | null
    it_approval?: StringNullableFilter<"Request"> | string | null
    it_approval_status?: StringNullableFilter<"Request"> | string | null
    it_approval_comment?: StringNullableFilter<"Request"> | string | null
    it_approval_date?: DateTimeNullableFilter<"Request"> | Date | string | null
    userId?: StringFilter<"Request"> | string
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    requestId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
  }

  export type EquipmentRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: EquipmentRequestWhereUniqueInput
    update: XOR<EquipmentRequestUpdateWithoutUserInput, EquipmentRequestUncheckedUpdateWithoutUserInput>
    create: XOR<EquipmentRequestCreateWithoutUserInput, EquipmentRequestUncheckedCreateWithoutUserInput>
  }

  export type EquipmentRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: EquipmentRequestWhereUniqueInput
    data: XOR<EquipmentRequestUpdateWithoutUserInput, EquipmentRequestUncheckedUpdateWithoutUserInput>
  }

  export type EquipmentRequestUpdateManyWithWhereWithoutUserInput = {
    where: EquipmentRequestScalarWhereInput
    data: XOR<EquipmentRequestUpdateManyMutationInput, EquipmentRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type EquipmentRequestScalarWhereInput = {
    AND?: EquipmentRequestScalarWhereInput | EquipmentRequestScalarWhereInput[]
    OR?: EquipmentRequestScalarWhereInput[]
    NOT?: EquipmentRequestScalarWhereInput | EquipmentRequestScalarWhereInput[]
    id?: StringFilter<"EquipmentRequest"> | string
    equipment_code?: StringFilter<"EquipmentRequest"> | string
    equipment_list_id?: StringNullableFilter<"EquipmentRequest"> | string | null
    manual_item_name?: StringNullableFilter<"EquipmentRequest"> | string | null
    manual_item_type?: StringNullableFilter<"EquipmentRequest"> | string | null
    quantity?: IntFilter<"EquipmentRequest"> | number
    reason?: StringNullableFilter<"EquipmentRequest"> | string | null
    remarks?: StringNullableFilter<"EquipmentRequest"> | string | null
    groupId?: StringNullableFilter<"EquipmentRequest"> | string | null
    borrow_type?: StringNullableFilter<"EquipmentRequest"> | string | null
    approval?: StringNullableFilter<"EquipmentRequest"> | string | null
    approval_status?: StringNullableFilter<"EquipmentRequest"> | string | null
    approval_comment?: StringNullableFilter<"EquipmentRequest"> | string | null
    approval_date?: DateTimeNullableFilter<"EquipmentRequest"> | Date | string | null
    it_approval?: StringNullableFilter<"EquipmentRequest"> | string | null
    it_approval_status?: StringNullableFilter<"EquipmentRequest"> | string | null
    it_approval_comment?: StringNullableFilter<"EquipmentRequest"> | string | null
    it_approval_date?: DateTimeNullableFilter<"EquipmentRequest"> | Date | string | null
    userId?: StringFilter<"EquipmentRequest"> | string
    createdAt?: DateTimeFilter<"EquipmentRequest"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentRequest"> | Date | string
  }

  export type EquipmentBorrowGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: EquipmentBorrowGroupWhereUniqueInput
    update: XOR<EquipmentBorrowGroupUpdateWithoutUserInput, EquipmentBorrowGroupUncheckedUpdateWithoutUserInput>
    create: XOR<EquipmentBorrowGroupCreateWithoutUserInput, EquipmentBorrowGroupUncheckedCreateWithoutUserInput>
  }

  export type EquipmentBorrowGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: EquipmentBorrowGroupWhereUniqueInput
    data: XOR<EquipmentBorrowGroupUpdateWithoutUserInput, EquipmentBorrowGroupUncheckedUpdateWithoutUserInput>
  }

  export type EquipmentBorrowGroupUpdateManyWithWhereWithoutUserInput = {
    where: EquipmentBorrowGroupScalarWhereInput
    data: XOR<EquipmentBorrowGroupUpdateManyMutationInput, EquipmentBorrowGroupUncheckedUpdateManyWithoutUserInput>
  }

  export type EquipmentBorrowGroupScalarWhereInput = {
    AND?: EquipmentBorrowGroupScalarWhereInput | EquipmentBorrowGroupScalarWhereInput[]
    OR?: EquipmentBorrowGroupScalarWhereInput[]
    NOT?: EquipmentBorrowGroupScalarWhereInput | EquipmentBorrowGroupScalarWhereInput[]
    id?: StringFilter<"EquipmentBorrowGroup"> | string
    group_code?: StringFilter<"EquipmentBorrowGroup"> | string
    userId?: StringFilter<"EquipmentBorrowGroup"> | string
    reason?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    approval?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    approval_status?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    approval_comment?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    approval_date?: DateTimeNullableFilter<"EquipmentBorrowGroup"> | Date | string | null
    it_approval?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    it_approval_status?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    it_approval_comment?: StringNullableFilter<"EquipmentBorrowGroup"> | string | null
    it_approval_date?: DateTimeNullableFilter<"EquipmentBorrowGroup"> | Date | string | null
    date_needed?: DateTimeNullableFilter<"EquipmentBorrowGroup"> | Date | string | null
    createdAt?: DateTimeFilter<"EquipmentBorrowGroup"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentBorrowGroup"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    userName?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    module?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    device?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type RequestCreateWithoutEmployeeInput = {
    id?: string
    request_code: string
    type_request: string
    description: string
    reason?: string | null
    category: $Enums.Category
    priority: $Enums.Priority
    status?: $Enums.Status
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
    comments?: CommentCreateNestedManyWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutEmployeeInput = {
    id?: string
    request_code: string
    type_request: string
    description: string
    reason?: string | null
    category: $Enums.Category
    priority: $Enums.Priority
    status?: $Enums.Status
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutEmployeeInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutEmployeeInput, RequestUncheckedCreateWithoutEmployeeInput>
  }

  export type RequestCreateManyEmployeeInputEnvelope = {
    data: RequestCreateManyEmployeeInput | RequestCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutEmployeeInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    equipmentRequests?: EquipmentRequestCreateNestedManyWithoutUserInput
    equipmentGroups?: EquipmentBorrowGroupCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeeInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    equipmentRequests?: EquipmentRequestUncheckedCreateNestedManyWithoutUserInput
    equipmentGroups?: EquipmentBorrowGroupUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
  }

  export type RequestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutEmployeeInput, RequestUncheckedUpdateWithoutEmployeeInput>
    create: XOR<RequestCreateWithoutEmployeeInput, RequestUncheckedCreateWithoutEmployeeInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutEmployeeInput, RequestUncheckedUpdateWithoutEmployeeInput>
  }

  export type RequestUpdateManyWithWhereWithoutEmployeeInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type UserUpsertWithoutEmployeeInput = {
    update: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type UserUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    equipmentRequests?: EquipmentRequestUpdateManyWithoutUserNestedInput
    equipmentGroups?: EquipmentBorrowGroupUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    equipmentRequests?: EquipmentRequestUncheckedUpdateManyWithoutUserNestedInput
    equipmentGroups?: EquipmentBorrowGroupUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmployeeCreateWithoutRequestsInput = {
    id?: string
    employee_code: string
    employee_name_th: string
    employee_name_en?: string | null
    gender?: string | null
    position?: string | null
    department?: string | null
    work_location?: string | null
    supervisor_name?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string | null
    user?: UserCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutRequestsInput = {
    id?: string
    employee_code: string
    employee_name_th: string
    employee_name_en?: string | null
    gender?: string | null
    position?: string | null
    department?: string | null
    work_location?: string | null
    supervisor_name?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string | null
    user?: UserUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutRequestsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutRequestsInput, EmployeeUncheckedCreateWithoutRequestsInput>
  }

  export type UserCreateWithoutRequestsInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    equipmentRequests?: EquipmentRequestCreateNestedManyWithoutUserInput
    equipmentGroups?: EquipmentBorrowGroupCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeId?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    equipmentRequests?: EquipmentRequestUncheckedCreateNestedManyWithoutUserInput
    equipmentGroups?: EquipmentBorrowGroupUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type CommentCreateWithoutRequestInput = {
    id?: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutRequestInput = {
    id?: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CommentCreateOrConnectWithoutRequestInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRequestInput, CommentUncheckedCreateWithoutRequestInput>
  }

  export type CommentCreateManyRequestInputEnvelope = {
    data: CommentCreateManyRequestInput | CommentCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutRequestsInput = {
    update: XOR<EmployeeUpdateWithoutRequestsInput, EmployeeUncheckedUpdateWithoutRequestsInput>
    create: XOR<EmployeeCreateWithoutRequestsInput, EmployeeUncheckedCreateWithoutRequestsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutRequestsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutRequestsInput, EmployeeUncheckedUpdateWithoutRequestsInput>
  }

  export type EmployeeUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    equipmentRequests?: EquipmentRequestUpdateManyWithoutUserNestedInput
    equipmentGroups?: EquipmentBorrowGroupUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    equipmentRequests?: EquipmentRequestUncheckedUpdateManyWithoutUserNestedInput
    equipmentGroups?: EquipmentBorrowGroupUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutRequestInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutRequestInput, CommentUncheckedUpdateWithoutRequestInput>
    create: XOR<CommentCreateWithoutRequestInput, CommentUncheckedCreateWithoutRequestInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutRequestInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutRequestInput, CommentUncheckedUpdateWithoutRequestInput>
  }

  export type CommentUpdateManyWithWhereWithoutRequestInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutRequestInput>
  }

  export type RequestCreateWithoutCommentsInput = {
    id?: string
    request_code: string
    type_request: string
    description: string
    reason?: string | null
    category: $Enums.Category
    priority: $Enums.Priority
    status?: $Enums.Status
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateWithoutCommentsInput = {
    id?: string
    employeeId: string
    request_code: string
    type_request: string
    description: string
    reason?: string | null
    category: $Enums.Category
    priority: $Enums.Priority
    status?: $Enums.Status
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestCreateOrConnectWithoutCommentsInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutCommentsInput, RequestUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    equipmentRequests?: EquipmentRequestCreateNestedManyWithoutUserInput
    equipmentGroups?: EquipmentBorrowGroupCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeId?: string | null
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    equipmentRequests?: EquipmentRequestUncheckedCreateNestedManyWithoutUserInput
    equipmentGroups?: EquipmentBorrowGroupUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type RequestUpsertWithoutCommentsInput = {
    update: XOR<RequestUpdateWithoutCommentsInput, RequestUncheckedUpdateWithoutCommentsInput>
    create: XOR<RequestCreateWithoutCommentsInput, RequestUncheckedCreateWithoutCommentsInput>
    where?: RequestWhereInput
  }

  export type RequestUpdateToOneWithWhereWithoutCommentsInput = {
    where?: RequestWhereInput
    data: XOR<RequestUpdateWithoutCommentsInput, RequestUncheckedUpdateWithoutCommentsInput>
  }

  export type RequestUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_code?: StringFieldUpdateOperationsInput | string
    type_request?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    request_code?: StringFieldUpdateOperationsInput | string
    type_request?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    equipmentRequests?: EquipmentRequestUpdateManyWithoutUserNestedInput
    equipmentGroups?: EquipmentBorrowGroupUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    equipmentRequests?: EquipmentRequestUncheckedUpdateManyWithoutUserNestedInput
    equipmentGroups?: EquipmentBorrowGroupUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EquipmentEntryListCreateWithoutPurchaseOrderInput = {
    id?: string
    list?: string | null
    brand_name?: string | null
    quantity?: number
    unit?: string | null
    recipient?: string | null
    date_received?: Date | string | null
    item_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    equipmentLists?: EquipmentListCreateNestedManyWithoutEquipmentEntryInput
  }

  export type EquipmentEntryListUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string
    list?: string | null
    brand_name?: string | null
    quantity?: number
    unit?: string | null
    recipient?: string | null
    date_received?: Date | string | null
    item_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    equipmentLists?: EquipmentListUncheckedCreateNestedManyWithoutEquipmentEntryInput
  }

  export type EquipmentEntryListCreateOrConnectWithoutPurchaseOrderInput = {
    where: EquipmentEntryListWhereUniqueInput
    create: XOR<EquipmentEntryListCreateWithoutPurchaseOrderInput, EquipmentEntryListUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type EquipmentEntryListCreateManyPurchaseOrderInputEnvelope = {
    data: EquipmentEntryListCreateManyPurchaseOrderInput | EquipmentEntryListCreateManyPurchaseOrderInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentEntryListUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: EquipmentEntryListWhereUniqueInput
    update: XOR<EquipmentEntryListUpdateWithoutPurchaseOrderInput, EquipmentEntryListUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<EquipmentEntryListCreateWithoutPurchaseOrderInput, EquipmentEntryListUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type EquipmentEntryListUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: EquipmentEntryListWhereUniqueInput
    data: XOR<EquipmentEntryListUpdateWithoutPurchaseOrderInput, EquipmentEntryListUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type EquipmentEntryListUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: EquipmentEntryListScalarWhereInput
    data: XOR<EquipmentEntryListUpdateManyMutationInput, EquipmentEntryListUncheckedUpdateManyWithoutPurchaseOrderInput>
  }

  export type EquipmentEntryListScalarWhereInput = {
    AND?: EquipmentEntryListScalarWhereInput | EquipmentEntryListScalarWhereInput[]
    OR?: EquipmentEntryListScalarWhereInput[]
    NOT?: EquipmentEntryListScalarWhereInput | EquipmentEntryListScalarWhereInput[]
    id?: StringFilter<"EquipmentEntryList"> | string
    purchase_id?: StringFilter<"EquipmentEntryList"> | string
    list?: StringNullableFilter<"EquipmentEntryList"> | string | null
    brand_name?: StringNullableFilter<"EquipmentEntryList"> | string | null
    quantity?: IntFilter<"EquipmentEntryList"> | number
    unit?: StringNullableFilter<"EquipmentEntryList"> | string | null
    recipient?: StringNullableFilter<"EquipmentEntryList"> | string | null
    date_received?: DateTimeNullableFilter<"EquipmentEntryList"> | Date | string | null
    item_type?: StringFilter<"EquipmentEntryList"> | string
    createdAt?: DateTimeFilter<"EquipmentEntryList"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentEntryList"> | Date | string
  }

  export type EquipmentPurchaseOrderCreateWithoutEntriesInput = {
    id?: string
    po_code?: string | null
    list?: string | null
    detail?: string | null
    quantity?: number
    reason_order?: string | null
    picture?: string | null
    buyer?: string | null
    reviewer?: string | null
    approver?: string | null
    date_order?: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentPurchaseOrderUncheckedCreateWithoutEntriesInput = {
    id?: string
    po_code?: string | null
    list?: string | null
    detail?: string | null
    quantity?: number
    reason_order?: string | null
    picture?: string | null
    buyer?: string | null
    reviewer?: string | null
    approver?: string | null
    date_order?: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentPurchaseOrderCreateOrConnectWithoutEntriesInput = {
    where: EquipmentPurchaseOrderWhereUniqueInput
    create: XOR<EquipmentPurchaseOrderCreateWithoutEntriesInput, EquipmentPurchaseOrderUncheckedCreateWithoutEntriesInput>
  }

  export type EquipmentListCreateWithoutEquipmentEntryInput = {
    id?: string
    eq_code?: string | null
    payout_amount?: number | null
    remaining?: number
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: EquipmentRequestCreateNestedManyWithoutEquipmentListInput
  }

  export type EquipmentListUncheckedCreateWithoutEquipmentEntryInput = {
    id?: string
    eq_code?: string | null
    payout_amount?: number | null
    remaining?: number
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: EquipmentRequestUncheckedCreateNestedManyWithoutEquipmentListInput
  }

  export type EquipmentListCreateOrConnectWithoutEquipmentEntryInput = {
    where: EquipmentListWhereUniqueInput
    create: XOR<EquipmentListCreateWithoutEquipmentEntryInput, EquipmentListUncheckedCreateWithoutEquipmentEntryInput>
  }

  export type EquipmentListCreateManyEquipmentEntryInputEnvelope = {
    data: EquipmentListCreateManyEquipmentEntryInput | EquipmentListCreateManyEquipmentEntryInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentPurchaseOrderUpsertWithoutEntriesInput = {
    update: XOR<EquipmentPurchaseOrderUpdateWithoutEntriesInput, EquipmentPurchaseOrderUncheckedUpdateWithoutEntriesInput>
    create: XOR<EquipmentPurchaseOrderCreateWithoutEntriesInput, EquipmentPurchaseOrderUncheckedCreateWithoutEntriesInput>
    where?: EquipmentPurchaseOrderWhereInput
  }

  export type EquipmentPurchaseOrderUpdateToOneWithWhereWithoutEntriesInput = {
    where?: EquipmentPurchaseOrderWhereInput
    data: XOR<EquipmentPurchaseOrderUpdateWithoutEntriesInput, EquipmentPurchaseOrderUncheckedUpdateWithoutEntriesInput>
  }

  export type EquipmentPurchaseOrderUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    po_code?: NullableStringFieldUpdateOperationsInput | string | null
    list?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason_order?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    approver?: NullableStringFieldUpdateOperationsInput | string | null
    date_order?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentPurchaseOrderUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    po_code?: NullableStringFieldUpdateOperationsInput | string | null
    list?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason_order?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    approver?: NullableStringFieldUpdateOperationsInput | string | null
    date_order?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentListUpsertWithWhereUniqueWithoutEquipmentEntryInput = {
    where: EquipmentListWhereUniqueInput
    update: XOR<EquipmentListUpdateWithoutEquipmentEntryInput, EquipmentListUncheckedUpdateWithoutEquipmentEntryInput>
    create: XOR<EquipmentListCreateWithoutEquipmentEntryInput, EquipmentListUncheckedCreateWithoutEquipmentEntryInput>
  }

  export type EquipmentListUpdateWithWhereUniqueWithoutEquipmentEntryInput = {
    where: EquipmentListWhereUniqueInput
    data: XOR<EquipmentListUpdateWithoutEquipmentEntryInput, EquipmentListUncheckedUpdateWithoutEquipmentEntryInput>
  }

  export type EquipmentListUpdateManyWithWhereWithoutEquipmentEntryInput = {
    where: EquipmentListScalarWhereInput
    data: XOR<EquipmentListUpdateManyMutationInput, EquipmentListUncheckedUpdateManyWithoutEquipmentEntryInput>
  }

  export type EquipmentListScalarWhereInput = {
    AND?: EquipmentListScalarWhereInput | EquipmentListScalarWhereInput[]
    OR?: EquipmentListScalarWhereInput[]
    NOT?: EquipmentListScalarWhereInput | EquipmentListScalarWhereInput[]
    id?: StringFilter<"EquipmentList"> | string
    eq_code?: StringNullableFilter<"EquipmentList"> | string | null
    equipment_entry_id?: StringFilter<"EquipmentList"> | string
    payout_amount?: FloatNullableFilter<"EquipmentList"> | number | null
    remaining?: IntFilter<"EquipmentList"> | number
    status?: StringNullableFilter<"EquipmentList"> | string | null
    createdAt?: DateTimeFilter<"EquipmentList"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentList"> | Date | string
  }

  export type EquipmentEntryListCreateWithoutEquipmentListsInput = {
    id?: string
    list?: string | null
    brand_name?: string | null
    quantity?: number
    unit?: string | null
    recipient?: string | null
    date_received?: Date | string | null
    item_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchaseOrder: EquipmentPurchaseOrderCreateNestedOneWithoutEntriesInput
  }

  export type EquipmentEntryListUncheckedCreateWithoutEquipmentListsInput = {
    id?: string
    purchase_id: string
    list?: string | null
    brand_name?: string | null
    quantity?: number
    unit?: string | null
    recipient?: string | null
    date_received?: Date | string | null
    item_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentEntryListCreateOrConnectWithoutEquipmentListsInput = {
    where: EquipmentEntryListWhereUniqueInput
    create: XOR<EquipmentEntryListCreateWithoutEquipmentListsInput, EquipmentEntryListUncheckedCreateWithoutEquipmentListsInput>
  }

  export type EquipmentRequestCreateWithoutEquipmentListInput = {
    id?: string
    equipment_code: string
    manual_item_name?: string | null
    manual_item_type?: string | null
    quantity?: number
    reason?: string | null
    remarks?: string | null
    borrow_type?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: EquipmentBorrowGroupCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutEquipmentRequestsInput
  }

  export type EquipmentRequestUncheckedCreateWithoutEquipmentListInput = {
    id?: string
    equipment_code: string
    manual_item_name?: string | null
    manual_item_type?: string | null
    quantity?: number
    reason?: string | null
    remarks?: string | null
    groupId?: string | null
    borrow_type?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentRequestCreateOrConnectWithoutEquipmentListInput = {
    where: EquipmentRequestWhereUniqueInput
    create: XOR<EquipmentRequestCreateWithoutEquipmentListInput, EquipmentRequestUncheckedCreateWithoutEquipmentListInput>
  }

  export type EquipmentRequestCreateManyEquipmentListInputEnvelope = {
    data: EquipmentRequestCreateManyEquipmentListInput | EquipmentRequestCreateManyEquipmentListInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentEntryListUpsertWithoutEquipmentListsInput = {
    update: XOR<EquipmentEntryListUpdateWithoutEquipmentListsInput, EquipmentEntryListUncheckedUpdateWithoutEquipmentListsInput>
    create: XOR<EquipmentEntryListCreateWithoutEquipmentListsInput, EquipmentEntryListUncheckedCreateWithoutEquipmentListsInput>
    where?: EquipmentEntryListWhereInput
  }

  export type EquipmentEntryListUpdateToOneWithWhereWithoutEquipmentListsInput = {
    where?: EquipmentEntryListWhereInput
    data: XOR<EquipmentEntryListUpdateWithoutEquipmentListsInput, EquipmentEntryListUncheckedUpdateWithoutEquipmentListsInput>
  }

  export type EquipmentEntryListUpdateWithoutEquipmentListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    date_received?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseOrder?: EquipmentPurchaseOrderUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type EquipmentEntryListUncheckedUpdateWithoutEquipmentListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchase_id?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    date_received?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentRequestUpsertWithWhereUniqueWithoutEquipmentListInput = {
    where: EquipmentRequestWhereUniqueInput
    update: XOR<EquipmentRequestUpdateWithoutEquipmentListInput, EquipmentRequestUncheckedUpdateWithoutEquipmentListInput>
    create: XOR<EquipmentRequestCreateWithoutEquipmentListInput, EquipmentRequestUncheckedCreateWithoutEquipmentListInput>
  }

  export type EquipmentRequestUpdateWithWhereUniqueWithoutEquipmentListInput = {
    where: EquipmentRequestWhereUniqueInput
    data: XOR<EquipmentRequestUpdateWithoutEquipmentListInput, EquipmentRequestUncheckedUpdateWithoutEquipmentListInput>
  }

  export type EquipmentRequestUpdateManyWithWhereWithoutEquipmentListInput = {
    where: EquipmentRequestScalarWhereInput
    data: XOR<EquipmentRequestUpdateManyMutationInput, EquipmentRequestUncheckedUpdateManyWithoutEquipmentListInput>
  }

  export type EquipmentListCreateWithoutRequestsInput = {
    id?: string
    eq_code?: string | null
    payout_amount?: number | null
    remaining?: number
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipmentEntry: EquipmentEntryListCreateNestedOneWithoutEquipmentListsInput
  }

  export type EquipmentListUncheckedCreateWithoutRequestsInput = {
    id?: string
    eq_code?: string | null
    equipment_entry_id: string
    payout_amount?: number | null
    remaining?: number
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentListCreateOrConnectWithoutRequestsInput = {
    where: EquipmentListWhereUniqueInput
    create: XOR<EquipmentListCreateWithoutRequestsInput, EquipmentListUncheckedCreateWithoutRequestsInput>
  }

  export type EquipmentBorrowGroupCreateWithoutRequestsInput = {
    id?: string
    group_code: string
    reason?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    date_needed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEquipmentGroupsInput
  }

  export type EquipmentBorrowGroupUncheckedCreateWithoutRequestsInput = {
    id?: string
    group_code: string
    userId: string
    reason?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    date_needed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentBorrowGroupCreateOrConnectWithoutRequestsInput = {
    where: EquipmentBorrowGroupWhereUniqueInput
    create: XOR<EquipmentBorrowGroupCreateWithoutRequestsInput, EquipmentBorrowGroupUncheckedCreateWithoutRequestsInput>
  }

  export type UserCreateWithoutEquipmentRequestsInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    equipmentGroups?: EquipmentBorrowGroupCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEquipmentRequestsInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeId?: string | null
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    equipmentGroups?: EquipmentBorrowGroupUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEquipmentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEquipmentRequestsInput, UserUncheckedCreateWithoutEquipmentRequestsInput>
  }

  export type EquipmentListUpsertWithoutRequestsInput = {
    update: XOR<EquipmentListUpdateWithoutRequestsInput, EquipmentListUncheckedUpdateWithoutRequestsInput>
    create: XOR<EquipmentListCreateWithoutRequestsInput, EquipmentListUncheckedCreateWithoutRequestsInput>
    where?: EquipmentListWhereInput
  }

  export type EquipmentListUpdateToOneWithWhereWithoutRequestsInput = {
    where?: EquipmentListWhereInput
    data: XOR<EquipmentListUpdateWithoutRequestsInput, EquipmentListUncheckedUpdateWithoutRequestsInput>
  }

  export type EquipmentListUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eq_code?: NullableStringFieldUpdateOperationsInput | string | null
    payout_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    remaining?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentEntry?: EquipmentEntryListUpdateOneRequiredWithoutEquipmentListsNestedInput
  }

  export type EquipmentListUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eq_code?: NullableStringFieldUpdateOperationsInput | string | null
    equipment_entry_id?: StringFieldUpdateOperationsInput | string
    payout_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    remaining?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentBorrowGroupUpsertWithoutRequestsInput = {
    update: XOR<EquipmentBorrowGroupUpdateWithoutRequestsInput, EquipmentBorrowGroupUncheckedUpdateWithoutRequestsInput>
    create: XOR<EquipmentBorrowGroupCreateWithoutRequestsInput, EquipmentBorrowGroupUncheckedCreateWithoutRequestsInput>
    where?: EquipmentBorrowGroupWhereInput
  }

  export type EquipmentBorrowGroupUpdateToOneWithWhereWithoutRequestsInput = {
    where?: EquipmentBorrowGroupWhereInput
    data: XOR<EquipmentBorrowGroupUpdateWithoutRequestsInput, EquipmentBorrowGroupUncheckedUpdateWithoutRequestsInput>
  }

  export type EquipmentBorrowGroupUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_needed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEquipmentGroupsNestedInput
  }

  export type EquipmentBorrowGroupUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_needed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutEquipmentRequestsInput = {
    update: XOR<UserUpdateWithoutEquipmentRequestsInput, UserUncheckedUpdateWithoutEquipmentRequestsInput>
    create: XOR<UserCreateWithoutEquipmentRequestsInput, UserUncheckedCreateWithoutEquipmentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEquipmentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEquipmentRequestsInput, UserUncheckedUpdateWithoutEquipmentRequestsInput>
  }

  export type UserUpdateWithoutEquipmentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    equipmentGroups?: EquipmentBorrowGroupUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEquipmentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    equipmentGroups?: EquipmentBorrowGroupUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEquipmentGroupsInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    equipmentRequests?: EquipmentRequestCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEquipmentGroupsInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeId?: string | null
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    equipmentRequests?: EquipmentRequestUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEquipmentGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEquipmentGroupsInput, UserUncheckedCreateWithoutEquipmentGroupsInput>
  }

  export type EquipmentRequestCreateWithoutGroupInput = {
    id?: string
    equipment_code: string
    manual_item_name?: string | null
    manual_item_type?: string | null
    quantity?: number
    reason?: string | null
    remarks?: string | null
    borrow_type?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipmentList?: EquipmentListCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutEquipmentRequestsInput
  }

  export type EquipmentRequestUncheckedCreateWithoutGroupInput = {
    id?: string
    equipment_code: string
    equipment_list_id?: string | null
    manual_item_name?: string | null
    manual_item_type?: string | null
    quantity?: number
    reason?: string | null
    remarks?: string | null
    borrow_type?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentRequestCreateOrConnectWithoutGroupInput = {
    where: EquipmentRequestWhereUniqueInput
    create: XOR<EquipmentRequestCreateWithoutGroupInput, EquipmentRequestUncheckedCreateWithoutGroupInput>
  }

  export type EquipmentRequestCreateManyGroupInputEnvelope = {
    data: EquipmentRequestCreateManyGroupInput | EquipmentRequestCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEquipmentGroupsInput = {
    update: XOR<UserUpdateWithoutEquipmentGroupsInput, UserUncheckedUpdateWithoutEquipmentGroupsInput>
    create: XOR<UserCreateWithoutEquipmentGroupsInput, UserUncheckedCreateWithoutEquipmentGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEquipmentGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEquipmentGroupsInput, UserUncheckedUpdateWithoutEquipmentGroupsInput>
  }

  export type UserUpdateWithoutEquipmentGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    equipmentRequests?: EquipmentRequestUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEquipmentGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    equipmentRequests?: EquipmentRequestUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EquipmentRequestUpsertWithWhereUniqueWithoutGroupInput = {
    where: EquipmentRequestWhereUniqueInput
    update: XOR<EquipmentRequestUpdateWithoutGroupInput, EquipmentRequestUncheckedUpdateWithoutGroupInput>
    create: XOR<EquipmentRequestCreateWithoutGroupInput, EquipmentRequestUncheckedCreateWithoutGroupInput>
  }

  export type EquipmentRequestUpdateWithWhereUniqueWithoutGroupInput = {
    where: EquipmentRequestWhereUniqueInput
    data: XOR<EquipmentRequestUpdateWithoutGroupInput, EquipmentRequestUncheckedUpdateWithoutGroupInput>
  }

  export type EquipmentRequestUpdateManyWithWhereWithoutGroupInput = {
    where: EquipmentRequestScalarWhereInput
    data: XOR<EquipmentRequestUpdateManyMutationInput, EquipmentRequestUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    equipmentRequests?: EquipmentRequestCreateNestedManyWithoutUserInput
    equipmentGroups?: EquipmentBorrowGroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeId?: string | null
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    equipmentRequests?: EquipmentRequestUncheckedCreateNestedManyWithoutUserInput
    equipmentGroups?: EquipmentBorrowGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    equipmentRequests?: EquipmentRequestUpdateManyWithoutUserNestedInput
    equipmentGroups?: EquipmentBorrowGroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    equipmentRequests?: EquipmentRequestUncheckedUpdateManyWithoutUserNestedInput
    equipmentGroups?: EquipmentBorrowGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RequestCreateManyUserInput = {
    id?: string
    employeeId: string
    request_code: string
    type_request: string
    description: string
    reason?: string | null
    category: $Enums.Category
    priority: $Enums.Priority
    status?: $Enums.Status
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestId: string
  }

  export type EquipmentRequestCreateManyUserInput = {
    id?: string
    equipment_code: string
    equipment_list_id?: string | null
    manual_item_name?: string | null
    manual_item_type?: string | null
    quantity?: number
    reason?: string | null
    remarks?: string | null
    groupId?: string | null
    borrow_type?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentBorrowGroupCreateManyUserInput = {
    id?: string
    group_code: string
    reason?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    date_needed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    userName?: string | null
    action: string
    module: string
    details?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    device?: string | null
    createdAt?: Date | string
  }

  export type RequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_code?: StringFieldUpdateOperationsInput | string
    type_request?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutRequestsNestedInput
    comments?: CommentUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    request_code?: StringFieldUpdateOperationsInput | string
    type_request?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    request_code?: StringFieldUpdateOperationsInput | string
    type_request?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RequestUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentList?: EquipmentListUpdateOneWithoutRequestsNestedInput
    group?: EquipmentBorrowGroupUpdateOneWithoutRequestsNestedInput
  }

  export type EquipmentRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    equipment_list_id?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    equipment_list_id?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentBorrowGroupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_needed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: EquipmentRequestUpdateManyWithoutGroupNestedInput
  }

  export type EquipmentBorrowGroupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_needed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: EquipmentRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type EquipmentBorrowGroupUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_needed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateManyEmployeeInput = {
    id?: string
    request_code: string
    type_request: string
    description: string
    reason?: string | null
    category: $Enums.Category
    priority: $Enums.Priority
    status?: $Enums.Status
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_code?: StringFieldUpdateOperationsInput | string
    type_request?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    comments?: CommentUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_code?: StringFieldUpdateOperationsInput | string
    type_request?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_code?: StringFieldUpdateOperationsInput | string
    type_request?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyRequestInput = {
    id?: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CommentUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentEntryListCreateManyPurchaseOrderInput = {
    id?: string
    list?: string | null
    brand_name?: string | null
    quantity?: number
    unit?: string | null
    recipient?: string | null
    date_received?: Date | string | null
    item_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentEntryListUpdateWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    date_received?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentLists?: EquipmentListUpdateManyWithoutEquipmentEntryNestedInput
  }

  export type EquipmentEntryListUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    date_received?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentLists?: EquipmentListUncheckedUpdateManyWithoutEquipmentEntryNestedInput
  }

  export type EquipmentEntryListUncheckedUpdateManyWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    date_received?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentListCreateManyEquipmentEntryInput = {
    id?: string
    eq_code?: string | null
    payout_amount?: number | null
    remaining?: number
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentListUpdateWithoutEquipmentEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    eq_code?: NullableStringFieldUpdateOperationsInput | string | null
    payout_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    remaining?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: EquipmentRequestUpdateManyWithoutEquipmentListNestedInput
  }

  export type EquipmentListUncheckedUpdateWithoutEquipmentEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    eq_code?: NullableStringFieldUpdateOperationsInput | string | null
    payout_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    remaining?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: EquipmentRequestUncheckedUpdateManyWithoutEquipmentListNestedInput
  }

  export type EquipmentListUncheckedUpdateManyWithoutEquipmentEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    eq_code?: NullableStringFieldUpdateOperationsInput | string | null
    payout_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    remaining?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentRequestCreateManyEquipmentListInput = {
    id?: string
    equipment_code: string
    manual_item_name?: string | null
    manual_item_type?: string | null
    quantity?: number
    reason?: string | null
    remarks?: string | null
    groupId?: string | null
    borrow_type?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentRequestUpdateWithoutEquipmentListInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: EquipmentBorrowGroupUpdateOneWithoutRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutEquipmentRequestsNestedInput
  }

  export type EquipmentRequestUncheckedUpdateWithoutEquipmentListInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentRequestUncheckedUpdateManyWithoutEquipmentListInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentRequestCreateManyGroupInput = {
    id?: string
    equipment_code: string
    equipment_list_id?: string | null
    manual_item_name?: string | null
    manual_item_type?: string | null
    quantity?: number
    reason?: string | null
    remarks?: string | null
    borrow_type?: string | null
    approval?: string | null
    approval_status?: string | null
    approval_comment?: string | null
    approval_date?: Date | string | null
    it_approval?: string | null
    it_approval_status?: string | null
    it_approval_comment?: string | null
    it_approval_date?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentRequestUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentList?: EquipmentListUpdateOneWithoutRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutEquipmentRequestsNestedInput
  }

  export type EquipmentRequestUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    equipment_list_id?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentRequestUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipment_code?: StringFieldUpdateOperationsInput | string
    equipment_list_id?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_item_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    borrow_type?: NullableStringFieldUpdateOperationsInput | string | null
    approval?: NullableStringFieldUpdateOperationsInput | string | null
    approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    it_approval?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_status?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_comment?: NullableStringFieldUpdateOperationsInput | string | null
    it_approval_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}