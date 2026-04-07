
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TarotCard
 * 
 */
export type TarotCard = $Result.DefaultSelection<Prisma.$TarotCardPayload>
/**
 * Model Spread
 * 
 */
export type Spread = $Result.DefaultSelection<Prisma.$SpreadPayload>
/**
 * Model ReadingRecord
 * 
 */
export type ReadingRecord = $Result.DefaultSelection<Prisma.$ReadingRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TarotCards
 * const tarotCards = await prisma.tarotCard.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more TarotCards
   * const tarotCards = await prisma.tarotCard.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tarotCard`: Exposes CRUD operations for the **TarotCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TarotCards
    * const tarotCards = await prisma.tarotCard.findMany()
    * ```
    */
  get tarotCard(): Prisma.TarotCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spread`: Exposes CRUD operations for the **Spread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spreads
    * const spreads = await prisma.spread.findMany()
    * ```
    */
  get spread(): Prisma.SpreadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.readingRecord`: Exposes CRUD operations for the **ReadingRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReadingRecords
    * const readingRecords = await prisma.readingRecord.findMany()
    * ```
    */
  get readingRecord(): Prisma.ReadingRecordDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    TarotCard: 'TarotCard',
    Spread: 'Spread',
    ReadingRecord: 'ReadingRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tarotCard" | "spread" | "readingRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TarotCard: {
        payload: Prisma.$TarotCardPayload<ExtArgs>
        fields: Prisma.TarotCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TarotCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarotCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TarotCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarotCardPayload>
          }
          findFirst: {
            args: Prisma.TarotCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarotCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TarotCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarotCardPayload>
          }
          findMany: {
            args: Prisma.TarotCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarotCardPayload>[]
          }
          create: {
            args: Prisma.TarotCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarotCardPayload>
          }
          createMany: {
            args: Prisma.TarotCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TarotCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarotCardPayload>[]
          }
          delete: {
            args: Prisma.TarotCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarotCardPayload>
          }
          update: {
            args: Prisma.TarotCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarotCardPayload>
          }
          deleteMany: {
            args: Prisma.TarotCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TarotCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TarotCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarotCardPayload>[]
          }
          upsert: {
            args: Prisma.TarotCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarotCardPayload>
          }
          aggregate: {
            args: Prisma.TarotCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarotCard>
          }
          groupBy: {
            args: Prisma.TarotCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<TarotCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.TarotCardCountArgs<ExtArgs>
            result: $Utils.Optional<TarotCardCountAggregateOutputType> | number
          }
        }
      }
      Spread: {
        payload: Prisma.$SpreadPayload<ExtArgs>
        fields: Prisma.SpreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpreadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpreadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpreadPayload>
          }
          findFirst: {
            args: Prisma.SpreadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpreadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpreadPayload>
          }
          findMany: {
            args: Prisma.SpreadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpreadPayload>[]
          }
          create: {
            args: Prisma.SpreadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpreadPayload>
          }
          createMany: {
            args: Prisma.SpreadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpreadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpreadPayload>[]
          }
          delete: {
            args: Prisma.SpreadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpreadPayload>
          }
          update: {
            args: Prisma.SpreadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpreadPayload>
          }
          deleteMany: {
            args: Prisma.SpreadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpreadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpreadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpreadPayload>[]
          }
          upsert: {
            args: Prisma.SpreadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpreadPayload>
          }
          aggregate: {
            args: Prisma.SpreadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpread>
          }
          groupBy: {
            args: Prisma.SpreadGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpreadGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpreadCountArgs<ExtArgs>
            result: $Utils.Optional<SpreadCountAggregateOutputType> | number
          }
        }
      }
      ReadingRecord: {
        payload: Prisma.$ReadingRecordPayload<ExtArgs>
        fields: Prisma.ReadingRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReadingRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReadingRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingRecordPayload>
          }
          findFirst: {
            args: Prisma.ReadingRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReadingRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingRecordPayload>
          }
          findMany: {
            args: Prisma.ReadingRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingRecordPayload>[]
          }
          create: {
            args: Prisma.ReadingRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingRecordPayload>
          }
          createMany: {
            args: Prisma.ReadingRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReadingRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingRecordPayload>[]
          }
          delete: {
            args: Prisma.ReadingRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingRecordPayload>
          }
          update: {
            args: Prisma.ReadingRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingRecordPayload>
          }
          deleteMany: {
            args: Prisma.ReadingRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReadingRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReadingRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingRecordPayload>[]
          }
          upsert: {
            args: Prisma.ReadingRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingRecordPayload>
          }
          aggregate: {
            args: Prisma.ReadingRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReadingRecord>
          }
          groupBy: {
            args: Prisma.ReadingRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReadingRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReadingRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ReadingRecordCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    tarotCard?: TarotCardOmit
    spread?: SpreadOmit
    readingRecord?: ReadingRecordOmit
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
   * Count Type SpreadCountOutputType
   */

  export type SpreadCountOutputType = {
    readings: number
  }

  export type SpreadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | SpreadCountOutputTypeCountReadingsArgs
  }

  // Custom InputTypes
  /**
   * SpreadCountOutputType without action
   */
  export type SpreadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpreadCountOutputType
     */
    select?: SpreadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpreadCountOutputType without action
   */
  export type SpreadCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TarotCard
   */

  export type AggregateTarotCard = {
    _count: TarotCardCountAggregateOutputType | null
    _avg: TarotCardAvgAggregateOutputType | null
    _sum: TarotCardSumAggregateOutputType | null
    _min: TarotCardMinAggregateOutputType | null
    _max: TarotCardMaxAggregateOutputType | null
  }

  export type TarotCardAvgAggregateOutputType = {
    id: number | null
  }

  export type TarotCardSumAggregateOutputType = {
    id: number | null
  }

  export type TarotCardMinAggregateOutputType = {
    id: number | null
    name: string | null
    arcana: string | null
    suit: string | null
    rankKey: string | null
    uprightMeaning: string | null
    reversedMeaning: string | null
    element: string | null
    emoji: string | null
  }

  export type TarotCardMaxAggregateOutputType = {
    id: number | null
    name: string | null
    arcana: string | null
    suit: string | null
    rankKey: string | null
    uprightMeaning: string | null
    reversedMeaning: string | null
    element: string | null
    emoji: string | null
  }

  export type TarotCardCountAggregateOutputType = {
    id: number
    name: number
    arcana: number
    suit: number
    rankKey: number
    uprightMeaning: number
    reversedMeaning: number
    element: number
    emoji: number
    _all: number
  }


  export type TarotCardAvgAggregateInputType = {
    id?: true
  }

  export type TarotCardSumAggregateInputType = {
    id?: true
  }

  export type TarotCardMinAggregateInputType = {
    id?: true
    name?: true
    arcana?: true
    suit?: true
    rankKey?: true
    uprightMeaning?: true
    reversedMeaning?: true
    element?: true
    emoji?: true
  }

  export type TarotCardMaxAggregateInputType = {
    id?: true
    name?: true
    arcana?: true
    suit?: true
    rankKey?: true
    uprightMeaning?: true
    reversedMeaning?: true
    element?: true
    emoji?: true
  }

  export type TarotCardCountAggregateInputType = {
    id?: true
    name?: true
    arcana?: true
    suit?: true
    rankKey?: true
    uprightMeaning?: true
    reversedMeaning?: true
    element?: true
    emoji?: true
    _all?: true
  }

  export type TarotCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TarotCard to aggregate.
     */
    where?: TarotCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TarotCards to fetch.
     */
    orderBy?: TarotCardOrderByWithRelationInput | TarotCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TarotCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TarotCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TarotCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TarotCards
    **/
    _count?: true | TarotCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TarotCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TarotCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TarotCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TarotCardMaxAggregateInputType
  }

  export type GetTarotCardAggregateType<T extends TarotCardAggregateArgs> = {
        [P in keyof T & keyof AggregateTarotCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarotCard[P]>
      : GetScalarType<T[P], AggregateTarotCard[P]>
  }




  export type TarotCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarotCardWhereInput
    orderBy?: TarotCardOrderByWithAggregationInput | TarotCardOrderByWithAggregationInput[]
    by: TarotCardScalarFieldEnum[] | TarotCardScalarFieldEnum
    having?: TarotCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TarotCardCountAggregateInputType | true
    _avg?: TarotCardAvgAggregateInputType
    _sum?: TarotCardSumAggregateInputType
    _min?: TarotCardMinAggregateInputType
    _max?: TarotCardMaxAggregateInputType
  }

  export type TarotCardGroupByOutputType = {
    id: number
    name: string
    arcana: string
    suit: string | null
    rankKey: string | null
    uprightMeaning: string
    reversedMeaning: string
    element: string | null
    emoji: string
    _count: TarotCardCountAggregateOutputType | null
    _avg: TarotCardAvgAggregateOutputType | null
    _sum: TarotCardSumAggregateOutputType | null
    _min: TarotCardMinAggregateOutputType | null
    _max: TarotCardMaxAggregateOutputType | null
  }

  type GetTarotCardGroupByPayload<T extends TarotCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TarotCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TarotCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TarotCardGroupByOutputType[P]>
            : GetScalarType<T[P], TarotCardGroupByOutputType[P]>
        }
      >
    >


  export type TarotCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    arcana?: boolean
    suit?: boolean
    rankKey?: boolean
    uprightMeaning?: boolean
    reversedMeaning?: boolean
    element?: boolean
    emoji?: boolean
  }, ExtArgs["result"]["tarotCard"]>

  export type TarotCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    arcana?: boolean
    suit?: boolean
    rankKey?: boolean
    uprightMeaning?: boolean
    reversedMeaning?: boolean
    element?: boolean
    emoji?: boolean
  }, ExtArgs["result"]["tarotCard"]>

  export type TarotCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    arcana?: boolean
    suit?: boolean
    rankKey?: boolean
    uprightMeaning?: boolean
    reversedMeaning?: boolean
    element?: boolean
    emoji?: boolean
  }, ExtArgs["result"]["tarotCard"]>

  export type TarotCardSelectScalar = {
    id?: boolean
    name?: boolean
    arcana?: boolean
    suit?: boolean
    rankKey?: boolean
    uprightMeaning?: boolean
    reversedMeaning?: boolean
    element?: boolean
    emoji?: boolean
  }

  export type TarotCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "arcana" | "suit" | "rankKey" | "uprightMeaning" | "reversedMeaning" | "element" | "emoji", ExtArgs["result"]["tarotCard"]>

  export type $TarotCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TarotCard"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      arcana: string
      suit: string | null
      rankKey: string | null
      uprightMeaning: string
      reversedMeaning: string
      element: string | null
      emoji: string
    }, ExtArgs["result"]["tarotCard"]>
    composites: {}
  }

  type TarotCardGetPayload<S extends boolean | null | undefined | TarotCardDefaultArgs> = $Result.GetResult<Prisma.$TarotCardPayload, S>

  type TarotCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TarotCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TarotCardCountAggregateInputType | true
    }

  export interface TarotCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TarotCard'], meta: { name: 'TarotCard' } }
    /**
     * Find zero or one TarotCard that matches the filter.
     * @param {TarotCardFindUniqueArgs} args - Arguments to find a TarotCard
     * @example
     * // Get one TarotCard
     * const tarotCard = await prisma.tarotCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TarotCardFindUniqueArgs>(args: SelectSubset<T, TarotCardFindUniqueArgs<ExtArgs>>): Prisma__TarotCardClient<$Result.GetResult<Prisma.$TarotCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TarotCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TarotCardFindUniqueOrThrowArgs} args - Arguments to find a TarotCard
     * @example
     * // Get one TarotCard
     * const tarotCard = await prisma.tarotCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TarotCardFindUniqueOrThrowArgs>(args: SelectSubset<T, TarotCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TarotCardClient<$Result.GetResult<Prisma.$TarotCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TarotCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarotCardFindFirstArgs} args - Arguments to find a TarotCard
     * @example
     * // Get one TarotCard
     * const tarotCard = await prisma.tarotCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TarotCardFindFirstArgs>(args?: SelectSubset<T, TarotCardFindFirstArgs<ExtArgs>>): Prisma__TarotCardClient<$Result.GetResult<Prisma.$TarotCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TarotCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarotCardFindFirstOrThrowArgs} args - Arguments to find a TarotCard
     * @example
     * // Get one TarotCard
     * const tarotCard = await prisma.tarotCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TarotCardFindFirstOrThrowArgs>(args?: SelectSubset<T, TarotCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__TarotCardClient<$Result.GetResult<Prisma.$TarotCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TarotCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarotCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TarotCards
     * const tarotCards = await prisma.tarotCard.findMany()
     * 
     * // Get first 10 TarotCards
     * const tarotCards = await prisma.tarotCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tarotCardWithIdOnly = await prisma.tarotCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TarotCardFindManyArgs>(args?: SelectSubset<T, TarotCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarotCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TarotCard.
     * @param {TarotCardCreateArgs} args - Arguments to create a TarotCard.
     * @example
     * // Create one TarotCard
     * const TarotCard = await prisma.tarotCard.create({
     *   data: {
     *     // ... data to create a TarotCard
     *   }
     * })
     * 
     */
    create<T extends TarotCardCreateArgs>(args: SelectSubset<T, TarotCardCreateArgs<ExtArgs>>): Prisma__TarotCardClient<$Result.GetResult<Prisma.$TarotCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TarotCards.
     * @param {TarotCardCreateManyArgs} args - Arguments to create many TarotCards.
     * @example
     * // Create many TarotCards
     * const tarotCard = await prisma.tarotCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TarotCardCreateManyArgs>(args?: SelectSubset<T, TarotCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TarotCards and returns the data saved in the database.
     * @param {TarotCardCreateManyAndReturnArgs} args - Arguments to create many TarotCards.
     * @example
     * // Create many TarotCards
     * const tarotCard = await prisma.tarotCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TarotCards and only return the `id`
     * const tarotCardWithIdOnly = await prisma.tarotCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TarotCardCreateManyAndReturnArgs>(args?: SelectSubset<T, TarotCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarotCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TarotCard.
     * @param {TarotCardDeleteArgs} args - Arguments to delete one TarotCard.
     * @example
     * // Delete one TarotCard
     * const TarotCard = await prisma.tarotCard.delete({
     *   where: {
     *     // ... filter to delete one TarotCard
     *   }
     * })
     * 
     */
    delete<T extends TarotCardDeleteArgs>(args: SelectSubset<T, TarotCardDeleteArgs<ExtArgs>>): Prisma__TarotCardClient<$Result.GetResult<Prisma.$TarotCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TarotCard.
     * @param {TarotCardUpdateArgs} args - Arguments to update one TarotCard.
     * @example
     * // Update one TarotCard
     * const tarotCard = await prisma.tarotCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TarotCardUpdateArgs>(args: SelectSubset<T, TarotCardUpdateArgs<ExtArgs>>): Prisma__TarotCardClient<$Result.GetResult<Prisma.$TarotCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TarotCards.
     * @param {TarotCardDeleteManyArgs} args - Arguments to filter TarotCards to delete.
     * @example
     * // Delete a few TarotCards
     * const { count } = await prisma.tarotCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TarotCardDeleteManyArgs>(args?: SelectSubset<T, TarotCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TarotCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarotCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TarotCards
     * const tarotCard = await prisma.tarotCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TarotCardUpdateManyArgs>(args: SelectSubset<T, TarotCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TarotCards and returns the data updated in the database.
     * @param {TarotCardUpdateManyAndReturnArgs} args - Arguments to update many TarotCards.
     * @example
     * // Update many TarotCards
     * const tarotCard = await prisma.tarotCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TarotCards and only return the `id`
     * const tarotCardWithIdOnly = await prisma.tarotCard.updateManyAndReturn({
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
    updateManyAndReturn<T extends TarotCardUpdateManyAndReturnArgs>(args: SelectSubset<T, TarotCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarotCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TarotCard.
     * @param {TarotCardUpsertArgs} args - Arguments to update or create a TarotCard.
     * @example
     * // Update or create a TarotCard
     * const tarotCard = await prisma.tarotCard.upsert({
     *   create: {
     *     // ... data to create a TarotCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TarotCard we want to update
     *   }
     * })
     */
    upsert<T extends TarotCardUpsertArgs>(args: SelectSubset<T, TarotCardUpsertArgs<ExtArgs>>): Prisma__TarotCardClient<$Result.GetResult<Prisma.$TarotCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TarotCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarotCardCountArgs} args - Arguments to filter TarotCards to count.
     * @example
     * // Count the number of TarotCards
     * const count = await prisma.tarotCard.count({
     *   where: {
     *     // ... the filter for the TarotCards we want to count
     *   }
     * })
    **/
    count<T extends TarotCardCountArgs>(
      args?: Subset<T, TarotCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TarotCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TarotCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarotCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TarotCardAggregateArgs>(args: Subset<T, TarotCardAggregateArgs>): Prisma.PrismaPromise<GetTarotCardAggregateType<T>>

    /**
     * Group by TarotCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarotCardGroupByArgs} args - Group by arguments.
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
      T extends TarotCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TarotCardGroupByArgs['orderBy'] }
        : { orderBy?: TarotCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TarotCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarotCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TarotCard model
   */
  readonly fields: TarotCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TarotCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TarotCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TarotCard model
   */
  interface TarotCardFieldRefs {
    readonly id: FieldRef<"TarotCard", 'Int'>
    readonly name: FieldRef<"TarotCard", 'String'>
    readonly arcana: FieldRef<"TarotCard", 'String'>
    readonly suit: FieldRef<"TarotCard", 'String'>
    readonly rankKey: FieldRef<"TarotCard", 'String'>
    readonly uprightMeaning: FieldRef<"TarotCard", 'String'>
    readonly reversedMeaning: FieldRef<"TarotCard", 'String'>
    readonly element: FieldRef<"TarotCard", 'String'>
    readonly emoji: FieldRef<"TarotCard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TarotCard findUnique
   */
  export type TarotCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarotCard
     */
    select?: TarotCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarotCard
     */
    omit?: TarotCardOmit<ExtArgs> | null
    /**
     * Filter, which TarotCard to fetch.
     */
    where: TarotCardWhereUniqueInput
  }

  /**
   * TarotCard findUniqueOrThrow
   */
  export type TarotCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarotCard
     */
    select?: TarotCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarotCard
     */
    omit?: TarotCardOmit<ExtArgs> | null
    /**
     * Filter, which TarotCard to fetch.
     */
    where: TarotCardWhereUniqueInput
  }

  /**
   * TarotCard findFirst
   */
  export type TarotCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarotCard
     */
    select?: TarotCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarotCard
     */
    omit?: TarotCardOmit<ExtArgs> | null
    /**
     * Filter, which TarotCard to fetch.
     */
    where?: TarotCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TarotCards to fetch.
     */
    orderBy?: TarotCardOrderByWithRelationInput | TarotCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TarotCards.
     */
    cursor?: TarotCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TarotCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TarotCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TarotCards.
     */
    distinct?: TarotCardScalarFieldEnum | TarotCardScalarFieldEnum[]
  }

  /**
   * TarotCard findFirstOrThrow
   */
  export type TarotCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarotCard
     */
    select?: TarotCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarotCard
     */
    omit?: TarotCardOmit<ExtArgs> | null
    /**
     * Filter, which TarotCard to fetch.
     */
    where?: TarotCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TarotCards to fetch.
     */
    orderBy?: TarotCardOrderByWithRelationInput | TarotCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TarotCards.
     */
    cursor?: TarotCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TarotCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TarotCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TarotCards.
     */
    distinct?: TarotCardScalarFieldEnum | TarotCardScalarFieldEnum[]
  }

  /**
   * TarotCard findMany
   */
  export type TarotCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarotCard
     */
    select?: TarotCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarotCard
     */
    omit?: TarotCardOmit<ExtArgs> | null
    /**
     * Filter, which TarotCards to fetch.
     */
    where?: TarotCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TarotCards to fetch.
     */
    orderBy?: TarotCardOrderByWithRelationInput | TarotCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TarotCards.
     */
    cursor?: TarotCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TarotCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TarotCards.
     */
    skip?: number
    distinct?: TarotCardScalarFieldEnum | TarotCardScalarFieldEnum[]
  }

  /**
   * TarotCard create
   */
  export type TarotCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarotCard
     */
    select?: TarotCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarotCard
     */
    omit?: TarotCardOmit<ExtArgs> | null
    /**
     * The data needed to create a TarotCard.
     */
    data: XOR<TarotCardCreateInput, TarotCardUncheckedCreateInput>
  }

  /**
   * TarotCard createMany
   */
  export type TarotCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TarotCards.
     */
    data: TarotCardCreateManyInput | TarotCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TarotCard createManyAndReturn
   */
  export type TarotCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarotCard
     */
    select?: TarotCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TarotCard
     */
    omit?: TarotCardOmit<ExtArgs> | null
    /**
     * The data used to create many TarotCards.
     */
    data: TarotCardCreateManyInput | TarotCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TarotCard update
   */
  export type TarotCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarotCard
     */
    select?: TarotCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarotCard
     */
    omit?: TarotCardOmit<ExtArgs> | null
    /**
     * The data needed to update a TarotCard.
     */
    data: XOR<TarotCardUpdateInput, TarotCardUncheckedUpdateInput>
    /**
     * Choose, which TarotCard to update.
     */
    where: TarotCardWhereUniqueInput
  }

  /**
   * TarotCard updateMany
   */
  export type TarotCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TarotCards.
     */
    data: XOR<TarotCardUpdateManyMutationInput, TarotCardUncheckedUpdateManyInput>
    /**
     * Filter which TarotCards to update
     */
    where?: TarotCardWhereInput
    /**
     * Limit how many TarotCards to update.
     */
    limit?: number
  }

  /**
   * TarotCard updateManyAndReturn
   */
  export type TarotCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarotCard
     */
    select?: TarotCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TarotCard
     */
    omit?: TarotCardOmit<ExtArgs> | null
    /**
     * The data used to update TarotCards.
     */
    data: XOR<TarotCardUpdateManyMutationInput, TarotCardUncheckedUpdateManyInput>
    /**
     * Filter which TarotCards to update
     */
    where?: TarotCardWhereInput
    /**
     * Limit how many TarotCards to update.
     */
    limit?: number
  }

  /**
   * TarotCard upsert
   */
  export type TarotCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarotCard
     */
    select?: TarotCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarotCard
     */
    omit?: TarotCardOmit<ExtArgs> | null
    /**
     * The filter to search for the TarotCard to update in case it exists.
     */
    where: TarotCardWhereUniqueInput
    /**
     * In case the TarotCard found by the `where` argument doesn't exist, create a new TarotCard with this data.
     */
    create: XOR<TarotCardCreateInput, TarotCardUncheckedCreateInput>
    /**
     * In case the TarotCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TarotCardUpdateInput, TarotCardUncheckedUpdateInput>
  }

  /**
   * TarotCard delete
   */
  export type TarotCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarotCard
     */
    select?: TarotCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarotCard
     */
    omit?: TarotCardOmit<ExtArgs> | null
    /**
     * Filter which TarotCard to delete.
     */
    where: TarotCardWhereUniqueInput
  }

  /**
   * TarotCard deleteMany
   */
  export type TarotCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TarotCards to delete
     */
    where?: TarotCardWhereInput
    /**
     * Limit how many TarotCards to delete.
     */
    limit?: number
  }

  /**
   * TarotCard without action
   */
  export type TarotCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarotCard
     */
    select?: TarotCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarotCard
     */
    omit?: TarotCardOmit<ExtArgs> | null
  }


  /**
   * Model Spread
   */

  export type AggregateSpread = {
    _count: SpreadCountAggregateOutputType | null
    _avg: SpreadAvgAggregateOutputType | null
    _sum: SpreadSumAggregateOutputType | null
    _min: SpreadMinAggregateOutputType | null
    _max: SpreadMaxAggregateOutputType | null
  }

  export type SpreadAvgAggregateOutputType = {
    cardCount: number | null
  }

  export type SpreadSumAggregateOutputType = {
    cardCount: number | null
  }

  export type SpreadMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    cardCount: number | null
    hot: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpreadMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    cardCount: number | null
    hot: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpreadCountAggregateOutputType = {
    id: number
    name: number
    description: number
    cardCount: number
    positions: number
    hot: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpreadAvgAggregateInputType = {
    cardCount?: true
  }

  export type SpreadSumAggregateInputType = {
    cardCount?: true
  }

  export type SpreadMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cardCount?: true
    hot?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpreadMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cardCount?: true
    hot?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpreadCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cardCount?: true
    positions?: true
    hot?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spread to aggregate.
     */
    where?: SpreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spreads to fetch.
     */
    orderBy?: SpreadOrderByWithRelationInput | SpreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spreads
    **/
    _count?: true | SpreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpreadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpreadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpreadMaxAggregateInputType
  }

  export type GetSpreadAggregateType<T extends SpreadAggregateArgs> = {
        [P in keyof T & keyof AggregateSpread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpread[P]>
      : GetScalarType<T[P], AggregateSpread[P]>
  }




  export type SpreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpreadWhereInput
    orderBy?: SpreadOrderByWithAggregationInput | SpreadOrderByWithAggregationInput[]
    by: SpreadScalarFieldEnum[] | SpreadScalarFieldEnum
    having?: SpreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpreadCountAggregateInputType | true
    _avg?: SpreadAvgAggregateInputType
    _sum?: SpreadSumAggregateInputType
    _min?: SpreadMinAggregateInputType
    _max?: SpreadMaxAggregateInputType
  }

  export type SpreadGroupByOutputType = {
    id: string
    name: string
    description: string
    cardCount: number
    positions: JsonValue
    hot: boolean
    createdAt: Date
    updatedAt: Date
    _count: SpreadCountAggregateOutputType | null
    _avg: SpreadAvgAggregateOutputType | null
    _sum: SpreadSumAggregateOutputType | null
    _min: SpreadMinAggregateOutputType | null
    _max: SpreadMaxAggregateOutputType | null
  }

  type GetSpreadGroupByPayload<T extends SpreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpreadGroupByOutputType[P]>
            : GetScalarType<T[P], SpreadGroupByOutputType[P]>
        }
      >
    >


  export type SpreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cardCount?: boolean
    positions?: boolean
    hot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    readings?: boolean | Spread$readingsArgs<ExtArgs>
    _count?: boolean | SpreadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spread"]>

  export type SpreadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cardCount?: boolean
    positions?: boolean
    hot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["spread"]>

  export type SpreadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cardCount?: boolean
    positions?: boolean
    hot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["spread"]>

  export type SpreadSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    cardCount?: boolean
    positions?: boolean
    hot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpreadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "cardCount" | "positions" | "hot" | "createdAt" | "updatedAt", ExtArgs["result"]["spread"]>
  export type SpreadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | Spread$readingsArgs<ExtArgs>
    _count?: boolean | SpreadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpreadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpreadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Spread"
    objects: {
      readings: Prisma.$ReadingRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      cardCount: number
      positions: Prisma.JsonValue
      hot: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["spread"]>
    composites: {}
  }

  type SpreadGetPayload<S extends boolean | null | undefined | SpreadDefaultArgs> = $Result.GetResult<Prisma.$SpreadPayload, S>

  type SpreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpreadCountAggregateInputType | true
    }

  export interface SpreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Spread'], meta: { name: 'Spread' } }
    /**
     * Find zero or one Spread that matches the filter.
     * @param {SpreadFindUniqueArgs} args - Arguments to find a Spread
     * @example
     * // Get one Spread
     * const spread = await prisma.spread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpreadFindUniqueArgs>(args: SelectSubset<T, SpreadFindUniqueArgs<ExtArgs>>): Prisma__SpreadClient<$Result.GetResult<Prisma.$SpreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spread that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpreadFindUniqueOrThrowArgs} args - Arguments to find a Spread
     * @example
     * // Get one Spread
     * const spread = await prisma.spread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpreadFindUniqueOrThrowArgs>(args: SelectSubset<T, SpreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpreadClient<$Result.GetResult<Prisma.$SpreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpreadFindFirstArgs} args - Arguments to find a Spread
     * @example
     * // Get one Spread
     * const spread = await prisma.spread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpreadFindFirstArgs>(args?: SelectSubset<T, SpreadFindFirstArgs<ExtArgs>>): Prisma__SpreadClient<$Result.GetResult<Prisma.$SpreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpreadFindFirstOrThrowArgs} args - Arguments to find a Spread
     * @example
     * // Get one Spread
     * const spread = await prisma.spread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpreadFindFirstOrThrowArgs>(args?: SelectSubset<T, SpreadFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpreadClient<$Result.GetResult<Prisma.$SpreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spreads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpreadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spreads
     * const spreads = await prisma.spread.findMany()
     * 
     * // Get first 10 Spreads
     * const spreads = await prisma.spread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spreadWithIdOnly = await prisma.spread.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpreadFindManyArgs>(args?: SelectSubset<T, SpreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spread.
     * @param {SpreadCreateArgs} args - Arguments to create a Spread.
     * @example
     * // Create one Spread
     * const Spread = await prisma.spread.create({
     *   data: {
     *     // ... data to create a Spread
     *   }
     * })
     * 
     */
    create<T extends SpreadCreateArgs>(args: SelectSubset<T, SpreadCreateArgs<ExtArgs>>): Prisma__SpreadClient<$Result.GetResult<Prisma.$SpreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spreads.
     * @param {SpreadCreateManyArgs} args - Arguments to create many Spreads.
     * @example
     * // Create many Spreads
     * const spread = await prisma.spread.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpreadCreateManyArgs>(args?: SelectSubset<T, SpreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spreads and returns the data saved in the database.
     * @param {SpreadCreateManyAndReturnArgs} args - Arguments to create many Spreads.
     * @example
     * // Create many Spreads
     * const spread = await prisma.spread.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spreads and only return the `id`
     * const spreadWithIdOnly = await prisma.spread.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpreadCreateManyAndReturnArgs>(args?: SelectSubset<T, SpreadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpreadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spread.
     * @param {SpreadDeleteArgs} args - Arguments to delete one Spread.
     * @example
     * // Delete one Spread
     * const Spread = await prisma.spread.delete({
     *   where: {
     *     // ... filter to delete one Spread
     *   }
     * })
     * 
     */
    delete<T extends SpreadDeleteArgs>(args: SelectSubset<T, SpreadDeleteArgs<ExtArgs>>): Prisma__SpreadClient<$Result.GetResult<Prisma.$SpreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spread.
     * @param {SpreadUpdateArgs} args - Arguments to update one Spread.
     * @example
     * // Update one Spread
     * const spread = await prisma.spread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpreadUpdateArgs>(args: SelectSubset<T, SpreadUpdateArgs<ExtArgs>>): Prisma__SpreadClient<$Result.GetResult<Prisma.$SpreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spreads.
     * @param {SpreadDeleteManyArgs} args - Arguments to filter Spreads to delete.
     * @example
     * // Delete a few Spreads
     * const { count } = await prisma.spread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpreadDeleteManyArgs>(args?: SelectSubset<T, SpreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spreads
     * const spread = await prisma.spread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpreadUpdateManyArgs>(args: SelectSubset<T, SpreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spreads and returns the data updated in the database.
     * @param {SpreadUpdateManyAndReturnArgs} args - Arguments to update many Spreads.
     * @example
     * // Update many Spreads
     * const spread = await prisma.spread.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spreads and only return the `id`
     * const spreadWithIdOnly = await prisma.spread.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpreadUpdateManyAndReturnArgs>(args: SelectSubset<T, SpreadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpreadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spread.
     * @param {SpreadUpsertArgs} args - Arguments to update or create a Spread.
     * @example
     * // Update or create a Spread
     * const spread = await prisma.spread.upsert({
     *   create: {
     *     // ... data to create a Spread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spread we want to update
     *   }
     * })
     */
    upsert<T extends SpreadUpsertArgs>(args: SelectSubset<T, SpreadUpsertArgs<ExtArgs>>): Prisma__SpreadClient<$Result.GetResult<Prisma.$SpreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpreadCountArgs} args - Arguments to filter Spreads to count.
     * @example
     * // Count the number of Spreads
     * const count = await prisma.spread.count({
     *   where: {
     *     // ... the filter for the Spreads we want to count
     *   }
     * })
    **/
    count<T extends SpreadCountArgs>(
      args?: Subset<T, SpreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpreadAggregateArgs>(args: Subset<T, SpreadAggregateArgs>): Prisma.PrismaPromise<GetSpreadAggregateType<T>>

    /**
     * Group by Spread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpreadGroupByArgs} args - Group by arguments.
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
      T extends SpreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpreadGroupByArgs['orderBy'] }
        : { orderBy?: SpreadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Spread model
   */
  readonly fields: SpreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Spread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    readings<T extends Spread$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Spread$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Spread model
   */
  interface SpreadFieldRefs {
    readonly id: FieldRef<"Spread", 'String'>
    readonly name: FieldRef<"Spread", 'String'>
    readonly description: FieldRef<"Spread", 'String'>
    readonly cardCount: FieldRef<"Spread", 'Int'>
    readonly positions: FieldRef<"Spread", 'Json'>
    readonly hot: FieldRef<"Spread", 'Boolean'>
    readonly createdAt: FieldRef<"Spread", 'DateTime'>
    readonly updatedAt: FieldRef<"Spread", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Spread findUnique
   */
  export type SpreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spread
     */
    select?: SpreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spread
     */
    omit?: SpreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpreadInclude<ExtArgs> | null
    /**
     * Filter, which Spread to fetch.
     */
    where: SpreadWhereUniqueInput
  }

  /**
   * Spread findUniqueOrThrow
   */
  export type SpreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spread
     */
    select?: SpreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spread
     */
    omit?: SpreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpreadInclude<ExtArgs> | null
    /**
     * Filter, which Spread to fetch.
     */
    where: SpreadWhereUniqueInput
  }

  /**
   * Spread findFirst
   */
  export type SpreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spread
     */
    select?: SpreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spread
     */
    omit?: SpreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpreadInclude<ExtArgs> | null
    /**
     * Filter, which Spread to fetch.
     */
    where?: SpreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spreads to fetch.
     */
    orderBy?: SpreadOrderByWithRelationInput | SpreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spreads.
     */
    cursor?: SpreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spreads.
     */
    distinct?: SpreadScalarFieldEnum | SpreadScalarFieldEnum[]
  }

  /**
   * Spread findFirstOrThrow
   */
  export type SpreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spread
     */
    select?: SpreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spread
     */
    omit?: SpreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpreadInclude<ExtArgs> | null
    /**
     * Filter, which Spread to fetch.
     */
    where?: SpreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spreads to fetch.
     */
    orderBy?: SpreadOrderByWithRelationInput | SpreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spreads.
     */
    cursor?: SpreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spreads.
     */
    distinct?: SpreadScalarFieldEnum | SpreadScalarFieldEnum[]
  }

  /**
   * Spread findMany
   */
  export type SpreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spread
     */
    select?: SpreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spread
     */
    omit?: SpreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpreadInclude<ExtArgs> | null
    /**
     * Filter, which Spreads to fetch.
     */
    where?: SpreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spreads to fetch.
     */
    orderBy?: SpreadOrderByWithRelationInput | SpreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spreads.
     */
    cursor?: SpreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spreads.
     */
    skip?: number
    distinct?: SpreadScalarFieldEnum | SpreadScalarFieldEnum[]
  }

  /**
   * Spread create
   */
  export type SpreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spread
     */
    select?: SpreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spread
     */
    omit?: SpreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpreadInclude<ExtArgs> | null
    /**
     * The data needed to create a Spread.
     */
    data: XOR<SpreadCreateInput, SpreadUncheckedCreateInput>
  }

  /**
   * Spread createMany
   */
  export type SpreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Spreads.
     */
    data: SpreadCreateManyInput | SpreadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Spread createManyAndReturn
   */
  export type SpreadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spread
     */
    select?: SpreadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spread
     */
    omit?: SpreadOmit<ExtArgs> | null
    /**
     * The data used to create many Spreads.
     */
    data: SpreadCreateManyInput | SpreadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Spread update
   */
  export type SpreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spread
     */
    select?: SpreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spread
     */
    omit?: SpreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpreadInclude<ExtArgs> | null
    /**
     * The data needed to update a Spread.
     */
    data: XOR<SpreadUpdateInput, SpreadUncheckedUpdateInput>
    /**
     * Choose, which Spread to update.
     */
    where: SpreadWhereUniqueInput
  }

  /**
   * Spread updateMany
   */
  export type SpreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spreads.
     */
    data: XOR<SpreadUpdateManyMutationInput, SpreadUncheckedUpdateManyInput>
    /**
     * Filter which Spreads to update
     */
    where?: SpreadWhereInput
    /**
     * Limit how many Spreads to update.
     */
    limit?: number
  }

  /**
   * Spread updateManyAndReturn
   */
  export type SpreadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spread
     */
    select?: SpreadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spread
     */
    omit?: SpreadOmit<ExtArgs> | null
    /**
     * The data used to update Spreads.
     */
    data: XOR<SpreadUpdateManyMutationInput, SpreadUncheckedUpdateManyInput>
    /**
     * Filter which Spreads to update
     */
    where?: SpreadWhereInput
    /**
     * Limit how many Spreads to update.
     */
    limit?: number
  }

  /**
   * Spread upsert
   */
  export type SpreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spread
     */
    select?: SpreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spread
     */
    omit?: SpreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpreadInclude<ExtArgs> | null
    /**
     * The filter to search for the Spread to update in case it exists.
     */
    where: SpreadWhereUniqueInput
    /**
     * In case the Spread found by the `where` argument doesn't exist, create a new Spread with this data.
     */
    create: XOR<SpreadCreateInput, SpreadUncheckedCreateInput>
    /**
     * In case the Spread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpreadUpdateInput, SpreadUncheckedUpdateInput>
  }

  /**
   * Spread delete
   */
  export type SpreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spread
     */
    select?: SpreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spread
     */
    omit?: SpreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpreadInclude<ExtArgs> | null
    /**
     * Filter which Spread to delete.
     */
    where: SpreadWhereUniqueInput
  }

  /**
   * Spread deleteMany
   */
  export type SpreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spreads to delete
     */
    where?: SpreadWhereInput
    /**
     * Limit how many Spreads to delete.
     */
    limit?: number
  }

  /**
   * Spread.readings
   */
  export type Spread$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordInclude<ExtArgs> | null
    where?: ReadingRecordWhereInput
    orderBy?: ReadingRecordOrderByWithRelationInput | ReadingRecordOrderByWithRelationInput[]
    cursor?: ReadingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadingRecordScalarFieldEnum | ReadingRecordScalarFieldEnum[]
  }

  /**
   * Spread without action
   */
  export type SpreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spread
     */
    select?: SpreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spread
     */
    omit?: SpreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpreadInclude<ExtArgs> | null
  }


  /**
   * Model ReadingRecord
   */

  export type AggregateReadingRecord = {
    _count: ReadingRecordCountAggregateOutputType | null
    _min: ReadingRecordMinAggregateOutputType | null
    _max: ReadingRecordMaxAggregateOutputType | null
  }

  export type ReadingRecordMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    spreadId: string | null
    question: string | null
    interpretation: string | null
    createdAt: Date | null
  }

  export type ReadingRecordMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    spreadId: string | null
    question: string | null
    interpretation: string | null
    createdAt: Date | null
  }

  export type ReadingRecordCountAggregateOutputType = {
    id: number
    clerkUserId: number
    spreadId: number
    question: number
    drawResult: number
    interpretation: number
    createdAt: number
    _all: number
  }


  export type ReadingRecordMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    spreadId?: true
    question?: true
    interpretation?: true
    createdAt?: true
  }

  export type ReadingRecordMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    spreadId?: true
    question?: true
    interpretation?: true
    createdAt?: true
  }

  export type ReadingRecordCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    spreadId?: true
    question?: true
    drawResult?: true
    interpretation?: true
    createdAt?: true
    _all?: true
  }

  export type ReadingRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReadingRecord to aggregate.
     */
    where?: ReadingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingRecords to fetch.
     */
    orderBy?: ReadingRecordOrderByWithRelationInput | ReadingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReadingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReadingRecords
    **/
    _count?: true | ReadingRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReadingRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReadingRecordMaxAggregateInputType
  }

  export type GetReadingRecordAggregateType<T extends ReadingRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateReadingRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReadingRecord[P]>
      : GetScalarType<T[P], AggregateReadingRecord[P]>
  }




  export type ReadingRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingRecordWhereInput
    orderBy?: ReadingRecordOrderByWithAggregationInput | ReadingRecordOrderByWithAggregationInput[]
    by: ReadingRecordScalarFieldEnum[] | ReadingRecordScalarFieldEnum
    having?: ReadingRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReadingRecordCountAggregateInputType | true
    _min?: ReadingRecordMinAggregateInputType
    _max?: ReadingRecordMaxAggregateInputType
  }

  export type ReadingRecordGroupByOutputType = {
    id: string
    clerkUserId: string
    spreadId: string
    question: string | null
    drawResult: JsonValue
    interpretation: string
    createdAt: Date
    _count: ReadingRecordCountAggregateOutputType | null
    _min: ReadingRecordMinAggregateOutputType | null
    _max: ReadingRecordMaxAggregateOutputType | null
  }

  type GetReadingRecordGroupByPayload<T extends ReadingRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReadingRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReadingRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadingRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ReadingRecordGroupByOutputType[P]>
        }
      >
    >


  export type ReadingRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    spreadId?: boolean
    question?: boolean
    drawResult?: boolean
    interpretation?: boolean
    createdAt?: boolean
    spread?: boolean | SpreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readingRecord"]>

  export type ReadingRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    spreadId?: boolean
    question?: boolean
    drawResult?: boolean
    interpretation?: boolean
    createdAt?: boolean
    spread?: boolean | SpreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readingRecord"]>

  export type ReadingRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    spreadId?: boolean
    question?: boolean
    drawResult?: boolean
    interpretation?: boolean
    createdAt?: boolean
    spread?: boolean | SpreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readingRecord"]>

  export type ReadingRecordSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    spreadId?: boolean
    question?: boolean
    drawResult?: boolean
    interpretation?: boolean
    createdAt?: boolean
  }

  export type ReadingRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "spreadId" | "question" | "drawResult" | "interpretation" | "createdAt", ExtArgs["result"]["readingRecord"]>
  export type ReadingRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spread?: boolean | SpreadDefaultArgs<ExtArgs>
  }
  export type ReadingRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spread?: boolean | SpreadDefaultArgs<ExtArgs>
  }
  export type ReadingRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spread?: boolean | SpreadDefaultArgs<ExtArgs>
  }

  export type $ReadingRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReadingRecord"
    objects: {
      spread: Prisma.$SpreadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      spreadId: string
      question: string | null
      drawResult: Prisma.JsonValue
      interpretation: string
      createdAt: Date
    }, ExtArgs["result"]["readingRecord"]>
    composites: {}
  }

  type ReadingRecordGetPayload<S extends boolean | null | undefined | ReadingRecordDefaultArgs> = $Result.GetResult<Prisma.$ReadingRecordPayload, S>

  type ReadingRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReadingRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReadingRecordCountAggregateInputType | true
    }

  export interface ReadingRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReadingRecord'], meta: { name: 'ReadingRecord' } }
    /**
     * Find zero or one ReadingRecord that matches the filter.
     * @param {ReadingRecordFindUniqueArgs} args - Arguments to find a ReadingRecord
     * @example
     * // Get one ReadingRecord
     * const readingRecord = await prisma.readingRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReadingRecordFindUniqueArgs>(args: SelectSubset<T, ReadingRecordFindUniqueArgs<ExtArgs>>): Prisma__ReadingRecordClient<$Result.GetResult<Prisma.$ReadingRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReadingRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReadingRecordFindUniqueOrThrowArgs} args - Arguments to find a ReadingRecord
     * @example
     * // Get one ReadingRecord
     * const readingRecord = await prisma.readingRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReadingRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ReadingRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReadingRecordClient<$Result.GetResult<Prisma.$ReadingRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReadingRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingRecordFindFirstArgs} args - Arguments to find a ReadingRecord
     * @example
     * // Get one ReadingRecord
     * const readingRecord = await prisma.readingRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReadingRecordFindFirstArgs>(args?: SelectSubset<T, ReadingRecordFindFirstArgs<ExtArgs>>): Prisma__ReadingRecordClient<$Result.GetResult<Prisma.$ReadingRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReadingRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingRecordFindFirstOrThrowArgs} args - Arguments to find a ReadingRecord
     * @example
     * // Get one ReadingRecord
     * const readingRecord = await prisma.readingRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReadingRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ReadingRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReadingRecordClient<$Result.GetResult<Prisma.$ReadingRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReadingRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReadingRecords
     * const readingRecords = await prisma.readingRecord.findMany()
     * 
     * // Get first 10 ReadingRecords
     * const readingRecords = await prisma.readingRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const readingRecordWithIdOnly = await prisma.readingRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReadingRecordFindManyArgs>(args?: SelectSubset<T, ReadingRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReadingRecord.
     * @param {ReadingRecordCreateArgs} args - Arguments to create a ReadingRecord.
     * @example
     * // Create one ReadingRecord
     * const ReadingRecord = await prisma.readingRecord.create({
     *   data: {
     *     // ... data to create a ReadingRecord
     *   }
     * })
     * 
     */
    create<T extends ReadingRecordCreateArgs>(args: SelectSubset<T, ReadingRecordCreateArgs<ExtArgs>>): Prisma__ReadingRecordClient<$Result.GetResult<Prisma.$ReadingRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReadingRecords.
     * @param {ReadingRecordCreateManyArgs} args - Arguments to create many ReadingRecords.
     * @example
     * // Create many ReadingRecords
     * const readingRecord = await prisma.readingRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReadingRecordCreateManyArgs>(args?: SelectSubset<T, ReadingRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReadingRecords and returns the data saved in the database.
     * @param {ReadingRecordCreateManyAndReturnArgs} args - Arguments to create many ReadingRecords.
     * @example
     * // Create many ReadingRecords
     * const readingRecord = await prisma.readingRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReadingRecords and only return the `id`
     * const readingRecordWithIdOnly = await prisma.readingRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReadingRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ReadingRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReadingRecord.
     * @param {ReadingRecordDeleteArgs} args - Arguments to delete one ReadingRecord.
     * @example
     * // Delete one ReadingRecord
     * const ReadingRecord = await prisma.readingRecord.delete({
     *   where: {
     *     // ... filter to delete one ReadingRecord
     *   }
     * })
     * 
     */
    delete<T extends ReadingRecordDeleteArgs>(args: SelectSubset<T, ReadingRecordDeleteArgs<ExtArgs>>): Prisma__ReadingRecordClient<$Result.GetResult<Prisma.$ReadingRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReadingRecord.
     * @param {ReadingRecordUpdateArgs} args - Arguments to update one ReadingRecord.
     * @example
     * // Update one ReadingRecord
     * const readingRecord = await prisma.readingRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReadingRecordUpdateArgs>(args: SelectSubset<T, ReadingRecordUpdateArgs<ExtArgs>>): Prisma__ReadingRecordClient<$Result.GetResult<Prisma.$ReadingRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReadingRecords.
     * @param {ReadingRecordDeleteManyArgs} args - Arguments to filter ReadingRecords to delete.
     * @example
     * // Delete a few ReadingRecords
     * const { count } = await prisma.readingRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReadingRecordDeleteManyArgs>(args?: SelectSubset<T, ReadingRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReadingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReadingRecords
     * const readingRecord = await prisma.readingRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReadingRecordUpdateManyArgs>(args: SelectSubset<T, ReadingRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReadingRecords and returns the data updated in the database.
     * @param {ReadingRecordUpdateManyAndReturnArgs} args - Arguments to update many ReadingRecords.
     * @example
     * // Update many ReadingRecords
     * const readingRecord = await prisma.readingRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReadingRecords and only return the `id`
     * const readingRecordWithIdOnly = await prisma.readingRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReadingRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ReadingRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReadingRecord.
     * @param {ReadingRecordUpsertArgs} args - Arguments to update or create a ReadingRecord.
     * @example
     * // Update or create a ReadingRecord
     * const readingRecord = await prisma.readingRecord.upsert({
     *   create: {
     *     // ... data to create a ReadingRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReadingRecord we want to update
     *   }
     * })
     */
    upsert<T extends ReadingRecordUpsertArgs>(args: SelectSubset<T, ReadingRecordUpsertArgs<ExtArgs>>): Prisma__ReadingRecordClient<$Result.GetResult<Prisma.$ReadingRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReadingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingRecordCountArgs} args - Arguments to filter ReadingRecords to count.
     * @example
     * // Count the number of ReadingRecords
     * const count = await prisma.readingRecord.count({
     *   where: {
     *     // ... the filter for the ReadingRecords we want to count
     *   }
     * })
    **/
    count<T extends ReadingRecordCountArgs>(
      args?: Subset<T, ReadingRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadingRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReadingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReadingRecordAggregateArgs>(args: Subset<T, ReadingRecordAggregateArgs>): Prisma.PrismaPromise<GetReadingRecordAggregateType<T>>

    /**
     * Group by ReadingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingRecordGroupByArgs} args - Group by arguments.
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
      T extends ReadingRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReadingRecordGroupByArgs['orderBy'] }
        : { orderBy?: ReadingRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReadingRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReadingRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReadingRecord model
   */
  readonly fields: ReadingRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReadingRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReadingRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spread<T extends SpreadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpreadDefaultArgs<ExtArgs>>): Prisma__SpreadClient<$Result.GetResult<Prisma.$SpreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReadingRecord model
   */
  interface ReadingRecordFieldRefs {
    readonly id: FieldRef<"ReadingRecord", 'String'>
    readonly clerkUserId: FieldRef<"ReadingRecord", 'String'>
    readonly spreadId: FieldRef<"ReadingRecord", 'String'>
    readonly question: FieldRef<"ReadingRecord", 'String'>
    readonly drawResult: FieldRef<"ReadingRecord", 'Json'>
    readonly interpretation: FieldRef<"ReadingRecord", 'String'>
    readonly createdAt: FieldRef<"ReadingRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReadingRecord findUnique
   */
  export type ReadingRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReadingRecord to fetch.
     */
    where: ReadingRecordWhereUniqueInput
  }

  /**
   * ReadingRecord findUniqueOrThrow
   */
  export type ReadingRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReadingRecord to fetch.
     */
    where: ReadingRecordWhereUniqueInput
  }

  /**
   * ReadingRecord findFirst
   */
  export type ReadingRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReadingRecord to fetch.
     */
    where?: ReadingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingRecords to fetch.
     */
    orderBy?: ReadingRecordOrderByWithRelationInput | ReadingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReadingRecords.
     */
    cursor?: ReadingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReadingRecords.
     */
    distinct?: ReadingRecordScalarFieldEnum | ReadingRecordScalarFieldEnum[]
  }

  /**
   * ReadingRecord findFirstOrThrow
   */
  export type ReadingRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReadingRecord to fetch.
     */
    where?: ReadingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingRecords to fetch.
     */
    orderBy?: ReadingRecordOrderByWithRelationInput | ReadingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReadingRecords.
     */
    cursor?: ReadingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReadingRecords.
     */
    distinct?: ReadingRecordScalarFieldEnum | ReadingRecordScalarFieldEnum[]
  }

  /**
   * ReadingRecord findMany
   */
  export type ReadingRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReadingRecords to fetch.
     */
    where?: ReadingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingRecords to fetch.
     */
    orderBy?: ReadingRecordOrderByWithRelationInput | ReadingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReadingRecords.
     */
    cursor?: ReadingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingRecords.
     */
    skip?: number
    distinct?: ReadingRecordScalarFieldEnum | ReadingRecordScalarFieldEnum[]
  }

  /**
   * ReadingRecord create
   */
  export type ReadingRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ReadingRecord.
     */
    data: XOR<ReadingRecordCreateInput, ReadingRecordUncheckedCreateInput>
  }

  /**
   * ReadingRecord createMany
   */
  export type ReadingRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReadingRecords.
     */
    data: ReadingRecordCreateManyInput | ReadingRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReadingRecord createManyAndReturn
   */
  export type ReadingRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ReadingRecords.
     */
    data: ReadingRecordCreateManyInput | ReadingRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReadingRecord update
   */
  export type ReadingRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ReadingRecord.
     */
    data: XOR<ReadingRecordUpdateInput, ReadingRecordUncheckedUpdateInput>
    /**
     * Choose, which ReadingRecord to update.
     */
    where: ReadingRecordWhereUniqueInput
  }

  /**
   * ReadingRecord updateMany
   */
  export type ReadingRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReadingRecords.
     */
    data: XOR<ReadingRecordUpdateManyMutationInput, ReadingRecordUncheckedUpdateManyInput>
    /**
     * Filter which ReadingRecords to update
     */
    where?: ReadingRecordWhereInput
    /**
     * Limit how many ReadingRecords to update.
     */
    limit?: number
  }

  /**
   * ReadingRecord updateManyAndReturn
   */
  export type ReadingRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * The data used to update ReadingRecords.
     */
    data: XOR<ReadingRecordUpdateManyMutationInput, ReadingRecordUncheckedUpdateManyInput>
    /**
     * Filter which ReadingRecords to update
     */
    where?: ReadingRecordWhereInput
    /**
     * Limit how many ReadingRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReadingRecord upsert
   */
  export type ReadingRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ReadingRecord to update in case it exists.
     */
    where: ReadingRecordWhereUniqueInput
    /**
     * In case the ReadingRecord found by the `where` argument doesn't exist, create a new ReadingRecord with this data.
     */
    create: XOR<ReadingRecordCreateInput, ReadingRecordUncheckedCreateInput>
    /**
     * In case the ReadingRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReadingRecordUpdateInput, ReadingRecordUncheckedUpdateInput>
  }

  /**
   * ReadingRecord delete
   */
  export type ReadingRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordInclude<ExtArgs> | null
    /**
     * Filter which ReadingRecord to delete.
     */
    where: ReadingRecordWhereUniqueInput
  }

  /**
   * ReadingRecord deleteMany
   */
  export type ReadingRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReadingRecords to delete
     */
    where?: ReadingRecordWhereInput
    /**
     * Limit how many ReadingRecords to delete.
     */
    limit?: number
  }

  /**
   * ReadingRecord without action
   */
  export type ReadingRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingRecord
     */
    select?: ReadingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingRecord
     */
    omit?: ReadingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingRecordInclude<ExtArgs> | null
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


  export const TarotCardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    arcana: 'arcana',
    suit: 'suit',
    rankKey: 'rankKey',
    uprightMeaning: 'uprightMeaning',
    reversedMeaning: 'reversedMeaning',
    element: 'element',
    emoji: 'emoji'
  };

  export type TarotCardScalarFieldEnum = (typeof TarotCardScalarFieldEnum)[keyof typeof TarotCardScalarFieldEnum]


  export const SpreadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    cardCount: 'cardCount',
    positions: 'positions',
    hot: 'hot',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpreadScalarFieldEnum = (typeof SpreadScalarFieldEnum)[keyof typeof SpreadScalarFieldEnum]


  export const ReadingRecordScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    spreadId: 'spreadId',
    question: 'question',
    drawResult: 'drawResult',
    interpretation: 'interpretation',
    createdAt: 'createdAt'
  };

  export type ReadingRecordScalarFieldEnum = (typeof ReadingRecordScalarFieldEnum)[keyof typeof ReadingRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type TarotCardWhereInput = {
    AND?: TarotCardWhereInput | TarotCardWhereInput[]
    OR?: TarotCardWhereInput[]
    NOT?: TarotCardWhereInput | TarotCardWhereInput[]
    id?: IntFilter<"TarotCard"> | number
    name?: StringFilter<"TarotCard"> | string
    arcana?: StringFilter<"TarotCard"> | string
    suit?: StringNullableFilter<"TarotCard"> | string | null
    rankKey?: StringNullableFilter<"TarotCard"> | string | null
    uprightMeaning?: StringFilter<"TarotCard"> | string
    reversedMeaning?: StringFilter<"TarotCard"> | string
    element?: StringNullableFilter<"TarotCard"> | string | null
    emoji?: StringFilter<"TarotCard"> | string
  }

  export type TarotCardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    arcana?: SortOrder
    suit?: SortOrderInput | SortOrder
    rankKey?: SortOrderInput | SortOrder
    uprightMeaning?: SortOrder
    reversedMeaning?: SortOrder
    element?: SortOrderInput | SortOrder
    emoji?: SortOrder
  }

  export type TarotCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TarotCardWhereInput | TarotCardWhereInput[]
    OR?: TarotCardWhereInput[]
    NOT?: TarotCardWhereInput | TarotCardWhereInput[]
    name?: StringFilter<"TarotCard"> | string
    arcana?: StringFilter<"TarotCard"> | string
    suit?: StringNullableFilter<"TarotCard"> | string | null
    rankKey?: StringNullableFilter<"TarotCard"> | string | null
    uprightMeaning?: StringFilter<"TarotCard"> | string
    reversedMeaning?: StringFilter<"TarotCard"> | string
    element?: StringNullableFilter<"TarotCard"> | string | null
    emoji?: StringFilter<"TarotCard"> | string
  }, "id">

  export type TarotCardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    arcana?: SortOrder
    suit?: SortOrderInput | SortOrder
    rankKey?: SortOrderInput | SortOrder
    uprightMeaning?: SortOrder
    reversedMeaning?: SortOrder
    element?: SortOrderInput | SortOrder
    emoji?: SortOrder
    _count?: TarotCardCountOrderByAggregateInput
    _avg?: TarotCardAvgOrderByAggregateInput
    _max?: TarotCardMaxOrderByAggregateInput
    _min?: TarotCardMinOrderByAggregateInput
    _sum?: TarotCardSumOrderByAggregateInput
  }

  export type TarotCardScalarWhereWithAggregatesInput = {
    AND?: TarotCardScalarWhereWithAggregatesInput | TarotCardScalarWhereWithAggregatesInput[]
    OR?: TarotCardScalarWhereWithAggregatesInput[]
    NOT?: TarotCardScalarWhereWithAggregatesInput | TarotCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TarotCard"> | number
    name?: StringWithAggregatesFilter<"TarotCard"> | string
    arcana?: StringWithAggregatesFilter<"TarotCard"> | string
    suit?: StringNullableWithAggregatesFilter<"TarotCard"> | string | null
    rankKey?: StringNullableWithAggregatesFilter<"TarotCard"> | string | null
    uprightMeaning?: StringWithAggregatesFilter<"TarotCard"> | string
    reversedMeaning?: StringWithAggregatesFilter<"TarotCard"> | string
    element?: StringNullableWithAggregatesFilter<"TarotCard"> | string | null
    emoji?: StringWithAggregatesFilter<"TarotCard"> | string
  }

  export type SpreadWhereInput = {
    AND?: SpreadWhereInput | SpreadWhereInput[]
    OR?: SpreadWhereInput[]
    NOT?: SpreadWhereInput | SpreadWhereInput[]
    id?: StringFilter<"Spread"> | string
    name?: StringFilter<"Spread"> | string
    description?: StringFilter<"Spread"> | string
    cardCount?: IntFilter<"Spread"> | number
    positions?: JsonFilter<"Spread">
    hot?: BoolFilter<"Spread"> | boolean
    createdAt?: DateTimeFilter<"Spread"> | Date | string
    updatedAt?: DateTimeFilter<"Spread"> | Date | string
    readings?: ReadingRecordListRelationFilter
  }

  export type SpreadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cardCount?: SortOrder
    positions?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    readings?: ReadingRecordOrderByRelationAggregateInput
  }

  export type SpreadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpreadWhereInput | SpreadWhereInput[]
    OR?: SpreadWhereInput[]
    NOT?: SpreadWhereInput | SpreadWhereInput[]
    name?: StringFilter<"Spread"> | string
    description?: StringFilter<"Spread"> | string
    cardCount?: IntFilter<"Spread"> | number
    positions?: JsonFilter<"Spread">
    hot?: BoolFilter<"Spread"> | boolean
    createdAt?: DateTimeFilter<"Spread"> | Date | string
    updatedAt?: DateTimeFilter<"Spread"> | Date | string
    readings?: ReadingRecordListRelationFilter
  }, "id">

  export type SpreadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cardCount?: SortOrder
    positions?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpreadCountOrderByAggregateInput
    _avg?: SpreadAvgOrderByAggregateInput
    _max?: SpreadMaxOrderByAggregateInput
    _min?: SpreadMinOrderByAggregateInput
    _sum?: SpreadSumOrderByAggregateInput
  }

  export type SpreadScalarWhereWithAggregatesInput = {
    AND?: SpreadScalarWhereWithAggregatesInput | SpreadScalarWhereWithAggregatesInput[]
    OR?: SpreadScalarWhereWithAggregatesInput[]
    NOT?: SpreadScalarWhereWithAggregatesInput | SpreadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Spread"> | string
    name?: StringWithAggregatesFilter<"Spread"> | string
    description?: StringWithAggregatesFilter<"Spread"> | string
    cardCount?: IntWithAggregatesFilter<"Spread"> | number
    positions?: JsonWithAggregatesFilter<"Spread">
    hot?: BoolWithAggregatesFilter<"Spread"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Spread"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Spread"> | Date | string
  }

  export type ReadingRecordWhereInput = {
    AND?: ReadingRecordWhereInput | ReadingRecordWhereInput[]
    OR?: ReadingRecordWhereInput[]
    NOT?: ReadingRecordWhereInput | ReadingRecordWhereInput[]
    id?: StringFilter<"ReadingRecord"> | string
    clerkUserId?: StringFilter<"ReadingRecord"> | string
    spreadId?: StringFilter<"ReadingRecord"> | string
    question?: StringNullableFilter<"ReadingRecord"> | string | null
    drawResult?: JsonFilter<"ReadingRecord">
    interpretation?: StringFilter<"ReadingRecord"> | string
    createdAt?: DateTimeFilter<"ReadingRecord"> | Date | string
    spread?: XOR<SpreadScalarRelationFilter, SpreadWhereInput>
  }

  export type ReadingRecordOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    spreadId?: SortOrder
    question?: SortOrderInput | SortOrder
    drawResult?: SortOrder
    interpretation?: SortOrder
    createdAt?: SortOrder
    spread?: SpreadOrderByWithRelationInput
  }

  export type ReadingRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReadingRecordWhereInput | ReadingRecordWhereInput[]
    OR?: ReadingRecordWhereInput[]
    NOT?: ReadingRecordWhereInput | ReadingRecordWhereInput[]
    clerkUserId?: StringFilter<"ReadingRecord"> | string
    spreadId?: StringFilter<"ReadingRecord"> | string
    question?: StringNullableFilter<"ReadingRecord"> | string | null
    drawResult?: JsonFilter<"ReadingRecord">
    interpretation?: StringFilter<"ReadingRecord"> | string
    createdAt?: DateTimeFilter<"ReadingRecord"> | Date | string
    spread?: XOR<SpreadScalarRelationFilter, SpreadWhereInput>
  }, "id">

  export type ReadingRecordOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    spreadId?: SortOrder
    question?: SortOrderInput | SortOrder
    drawResult?: SortOrder
    interpretation?: SortOrder
    createdAt?: SortOrder
    _count?: ReadingRecordCountOrderByAggregateInput
    _max?: ReadingRecordMaxOrderByAggregateInput
    _min?: ReadingRecordMinOrderByAggregateInput
  }

  export type ReadingRecordScalarWhereWithAggregatesInput = {
    AND?: ReadingRecordScalarWhereWithAggregatesInput | ReadingRecordScalarWhereWithAggregatesInput[]
    OR?: ReadingRecordScalarWhereWithAggregatesInput[]
    NOT?: ReadingRecordScalarWhereWithAggregatesInput | ReadingRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReadingRecord"> | string
    clerkUserId?: StringWithAggregatesFilter<"ReadingRecord"> | string
    spreadId?: StringWithAggregatesFilter<"ReadingRecord"> | string
    question?: StringNullableWithAggregatesFilter<"ReadingRecord"> | string | null
    drawResult?: JsonWithAggregatesFilter<"ReadingRecord">
    interpretation?: StringWithAggregatesFilter<"ReadingRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReadingRecord"> | Date | string
  }

  export type TarotCardCreateInput = {
    id: number
    name: string
    arcana: string
    suit?: string | null
    rankKey?: string | null
    uprightMeaning: string
    reversedMeaning: string
    element?: string | null
    emoji: string
  }

  export type TarotCardUncheckedCreateInput = {
    id: number
    name: string
    arcana: string
    suit?: string | null
    rankKey?: string | null
    uprightMeaning: string
    reversedMeaning: string
    element?: string | null
    emoji: string
  }

  export type TarotCardUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arcana?: StringFieldUpdateOperationsInput | string
    suit?: NullableStringFieldUpdateOperationsInput | string | null
    rankKey?: NullableStringFieldUpdateOperationsInput | string | null
    uprightMeaning?: StringFieldUpdateOperationsInput | string
    reversedMeaning?: StringFieldUpdateOperationsInput | string
    element?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: StringFieldUpdateOperationsInput | string
  }

  export type TarotCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arcana?: StringFieldUpdateOperationsInput | string
    suit?: NullableStringFieldUpdateOperationsInput | string | null
    rankKey?: NullableStringFieldUpdateOperationsInput | string | null
    uprightMeaning?: StringFieldUpdateOperationsInput | string
    reversedMeaning?: StringFieldUpdateOperationsInput | string
    element?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: StringFieldUpdateOperationsInput | string
  }

  export type TarotCardCreateManyInput = {
    id: number
    name: string
    arcana: string
    suit?: string | null
    rankKey?: string | null
    uprightMeaning: string
    reversedMeaning: string
    element?: string | null
    emoji: string
  }

  export type TarotCardUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arcana?: StringFieldUpdateOperationsInput | string
    suit?: NullableStringFieldUpdateOperationsInput | string | null
    rankKey?: NullableStringFieldUpdateOperationsInput | string | null
    uprightMeaning?: StringFieldUpdateOperationsInput | string
    reversedMeaning?: StringFieldUpdateOperationsInput | string
    element?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: StringFieldUpdateOperationsInput | string
  }

  export type TarotCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arcana?: StringFieldUpdateOperationsInput | string
    suit?: NullableStringFieldUpdateOperationsInput | string | null
    rankKey?: NullableStringFieldUpdateOperationsInput | string | null
    uprightMeaning?: StringFieldUpdateOperationsInput | string
    reversedMeaning?: StringFieldUpdateOperationsInput | string
    element?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: StringFieldUpdateOperationsInput | string
  }

  export type SpreadCreateInput = {
    id: string
    name: string
    description: string
    cardCount: number
    positions: JsonNullValueInput | InputJsonValue
    hot?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: ReadingRecordCreateNestedManyWithoutSpreadInput
  }

  export type SpreadUncheckedCreateInput = {
    id: string
    name: string
    description: string
    cardCount: number
    positions: JsonNullValueInput | InputJsonValue
    hot?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: ReadingRecordUncheckedCreateNestedManyWithoutSpreadInput
  }

  export type SpreadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cardCount?: IntFieldUpdateOperationsInput | number
    positions?: JsonNullValueInput | InputJsonValue
    hot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingRecordUpdateManyWithoutSpreadNestedInput
  }

  export type SpreadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cardCount?: IntFieldUpdateOperationsInput | number
    positions?: JsonNullValueInput | InputJsonValue
    hot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingRecordUncheckedUpdateManyWithoutSpreadNestedInput
  }

  export type SpreadCreateManyInput = {
    id: string
    name: string
    description: string
    cardCount: number
    positions: JsonNullValueInput | InputJsonValue
    hot?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpreadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cardCount?: IntFieldUpdateOperationsInput | number
    positions?: JsonNullValueInput | InputJsonValue
    hot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpreadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cardCount?: IntFieldUpdateOperationsInput | number
    positions?: JsonNullValueInput | InputJsonValue
    hot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingRecordCreateInput = {
    id?: string
    clerkUserId: string
    question?: string | null
    drawResult: JsonNullValueInput | InputJsonValue
    interpretation: string
    createdAt?: Date | string
    spread: SpreadCreateNestedOneWithoutReadingsInput
  }

  export type ReadingRecordUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    spreadId: string
    question?: string | null
    drawResult: JsonNullValueInput | InputJsonValue
    interpretation: string
    createdAt?: Date | string
  }

  export type ReadingRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    question?: NullableStringFieldUpdateOperationsInput | string | null
    drawResult?: JsonNullValueInput | InputJsonValue
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spread?: SpreadUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type ReadingRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    spreadId?: StringFieldUpdateOperationsInput | string
    question?: NullableStringFieldUpdateOperationsInput | string | null
    drawResult?: JsonNullValueInput | InputJsonValue
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingRecordCreateManyInput = {
    id?: string
    clerkUserId: string
    spreadId: string
    question?: string | null
    drawResult: JsonNullValueInput | InputJsonValue
    interpretation: string
    createdAt?: Date | string
  }

  export type ReadingRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    question?: NullableStringFieldUpdateOperationsInput | string | null
    drawResult?: JsonNullValueInput | InputJsonValue
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    spreadId?: StringFieldUpdateOperationsInput | string
    question?: NullableStringFieldUpdateOperationsInput | string | null
    drawResult?: JsonNullValueInput | InputJsonValue
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TarotCardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arcana?: SortOrder
    suit?: SortOrder
    rankKey?: SortOrder
    uprightMeaning?: SortOrder
    reversedMeaning?: SortOrder
    element?: SortOrder
    emoji?: SortOrder
  }

  export type TarotCardAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TarotCardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arcana?: SortOrder
    suit?: SortOrder
    rankKey?: SortOrder
    uprightMeaning?: SortOrder
    reversedMeaning?: SortOrder
    element?: SortOrder
    emoji?: SortOrder
  }

  export type TarotCardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arcana?: SortOrder
    suit?: SortOrder
    rankKey?: SortOrder
    uprightMeaning?: SortOrder
    reversedMeaning?: SortOrder
    element?: SortOrder
    emoji?: SortOrder
  }

  export type TarotCardSumOrderByAggregateInput = {
    id?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ReadingRecordListRelationFilter = {
    every?: ReadingRecordWhereInput
    some?: ReadingRecordWhereInput
    none?: ReadingRecordWhereInput
  }

  export type ReadingRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpreadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cardCount?: SortOrder
    positions?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpreadAvgOrderByAggregateInput = {
    cardCount?: SortOrder
  }

  export type SpreadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cardCount?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpreadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cardCount?: SortOrder
    hot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpreadSumOrderByAggregateInput = {
    cardCount?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SpreadScalarRelationFilter = {
    is?: SpreadWhereInput
    isNot?: SpreadWhereInput
  }

  export type ReadingRecordCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    spreadId?: SortOrder
    question?: SortOrder
    drawResult?: SortOrder
    interpretation?: SortOrder
    createdAt?: SortOrder
  }

  export type ReadingRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    spreadId?: SortOrder
    question?: SortOrder
    interpretation?: SortOrder
    createdAt?: SortOrder
  }

  export type ReadingRecordMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    spreadId?: SortOrder
    question?: SortOrder
    interpretation?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ReadingRecordCreateNestedManyWithoutSpreadInput = {
    create?: XOR<ReadingRecordCreateWithoutSpreadInput, ReadingRecordUncheckedCreateWithoutSpreadInput> | ReadingRecordCreateWithoutSpreadInput[] | ReadingRecordUncheckedCreateWithoutSpreadInput[]
    connectOrCreate?: ReadingRecordCreateOrConnectWithoutSpreadInput | ReadingRecordCreateOrConnectWithoutSpreadInput[]
    createMany?: ReadingRecordCreateManySpreadInputEnvelope
    connect?: ReadingRecordWhereUniqueInput | ReadingRecordWhereUniqueInput[]
  }

  export type ReadingRecordUncheckedCreateNestedManyWithoutSpreadInput = {
    create?: XOR<ReadingRecordCreateWithoutSpreadInput, ReadingRecordUncheckedCreateWithoutSpreadInput> | ReadingRecordCreateWithoutSpreadInput[] | ReadingRecordUncheckedCreateWithoutSpreadInput[]
    connectOrCreate?: ReadingRecordCreateOrConnectWithoutSpreadInput | ReadingRecordCreateOrConnectWithoutSpreadInput[]
    createMany?: ReadingRecordCreateManySpreadInputEnvelope
    connect?: ReadingRecordWhereUniqueInput | ReadingRecordWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReadingRecordUpdateManyWithoutSpreadNestedInput = {
    create?: XOR<ReadingRecordCreateWithoutSpreadInput, ReadingRecordUncheckedCreateWithoutSpreadInput> | ReadingRecordCreateWithoutSpreadInput[] | ReadingRecordUncheckedCreateWithoutSpreadInput[]
    connectOrCreate?: ReadingRecordCreateOrConnectWithoutSpreadInput | ReadingRecordCreateOrConnectWithoutSpreadInput[]
    upsert?: ReadingRecordUpsertWithWhereUniqueWithoutSpreadInput | ReadingRecordUpsertWithWhereUniqueWithoutSpreadInput[]
    createMany?: ReadingRecordCreateManySpreadInputEnvelope
    set?: ReadingRecordWhereUniqueInput | ReadingRecordWhereUniqueInput[]
    disconnect?: ReadingRecordWhereUniqueInput | ReadingRecordWhereUniqueInput[]
    delete?: ReadingRecordWhereUniqueInput | ReadingRecordWhereUniqueInput[]
    connect?: ReadingRecordWhereUniqueInput | ReadingRecordWhereUniqueInput[]
    update?: ReadingRecordUpdateWithWhereUniqueWithoutSpreadInput | ReadingRecordUpdateWithWhereUniqueWithoutSpreadInput[]
    updateMany?: ReadingRecordUpdateManyWithWhereWithoutSpreadInput | ReadingRecordUpdateManyWithWhereWithoutSpreadInput[]
    deleteMany?: ReadingRecordScalarWhereInput | ReadingRecordScalarWhereInput[]
  }

  export type ReadingRecordUncheckedUpdateManyWithoutSpreadNestedInput = {
    create?: XOR<ReadingRecordCreateWithoutSpreadInput, ReadingRecordUncheckedCreateWithoutSpreadInput> | ReadingRecordCreateWithoutSpreadInput[] | ReadingRecordUncheckedCreateWithoutSpreadInput[]
    connectOrCreate?: ReadingRecordCreateOrConnectWithoutSpreadInput | ReadingRecordCreateOrConnectWithoutSpreadInput[]
    upsert?: ReadingRecordUpsertWithWhereUniqueWithoutSpreadInput | ReadingRecordUpsertWithWhereUniqueWithoutSpreadInput[]
    createMany?: ReadingRecordCreateManySpreadInputEnvelope
    set?: ReadingRecordWhereUniqueInput | ReadingRecordWhereUniqueInput[]
    disconnect?: ReadingRecordWhereUniqueInput | ReadingRecordWhereUniqueInput[]
    delete?: ReadingRecordWhereUniqueInput | ReadingRecordWhereUniqueInput[]
    connect?: ReadingRecordWhereUniqueInput | ReadingRecordWhereUniqueInput[]
    update?: ReadingRecordUpdateWithWhereUniqueWithoutSpreadInput | ReadingRecordUpdateWithWhereUniqueWithoutSpreadInput[]
    updateMany?: ReadingRecordUpdateManyWithWhereWithoutSpreadInput | ReadingRecordUpdateManyWithWhereWithoutSpreadInput[]
    deleteMany?: ReadingRecordScalarWhereInput | ReadingRecordScalarWhereInput[]
  }

  export type SpreadCreateNestedOneWithoutReadingsInput = {
    create?: XOR<SpreadCreateWithoutReadingsInput, SpreadUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: SpreadCreateOrConnectWithoutReadingsInput
    connect?: SpreadWhereUniqueInput
  }

  export type SpreadUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<SpreadCreateWithoutReadingsInput, SpreadUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: SpreadCreateOrConnectWithoutReadingsInput
    upsert?: SpreadUpsertWithoutReadingsInput
    connect?: SpreadWhereUniqueInput
    update?: XOR<XOR<SpreadUpdateToOneWithWhereWithoutReadingsInput, SpreadUpdateWithoutReadingsInput>, SpreadUncheckedUpdateWithoutReadingsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ReadingRecordCreateWithoutSpreadInput = {
    id?: string
    clerkUserId: string
    question?: string | null
    drawResult: JsonNullValueInput | InputJsonValue
    interpretation: string
    createdAt?: Date | string
  }

  export type ReadingRecordUncheckedCreateWithoutSpreadInput = {
    id?: string
    clerkUserId: string
    question?: string | null
    drawResult: JsonNullValueInput | InputJsonValue
    interpretation: string
    createdAt?: Date | string
  }

  export type ReadingRecordCreateOrConnectWithoutSpreadInput = {
    where: ReadingRecordWhereUniqueInput
    create: XOR<ReadingRecordCreateWithoutSpreadInput, ReadingRecordUncheckedCreateWithoutSpreadInput>
  }

  export type ReadingRecordCreateManySpreadInputEnvelope = {
    data: ReadingRecordCreateManySpreadInput | ReadingRecordCreateManySpreadInput[]
    skipDuplicates?: boolean
  }

  export type ReadingRecordUpsertWithWhereUniqueWithoutSpreadInput = {
    where: ReadingRecordWhereUniqueInput
    update: XOR<ReadingRecordUpdateWithoutSpreadInput, ReadingRecordUncheckedUpdateWithoutSpreadInput>
    create: XOR<ReadingRecordCreateWithoutSpreadInput, ReadingRecordUncheckedCreateWithoutSpreadInput>
  }

  export type ReadingRecordUpdateWithWhereUniqueWithoutSpreadInput = {
    where: ReadingRecordWhereUniqueInput
    data: XOR<ReadingRecordUpdateWithoutSpreadInput, ReadingRecordUncheckedUpdateWithoutSpreadInput>
  }

  export type ReadingRecordUpdateManyWithWhereWithoutSpreadInput = {
    where: ReadingRecordScalarWhereInput
    data: XOR<ReadingRecordUpdateManyMutationInput, ReadingRecordUncheckedUpdateManyWithoutSpreadInput>
  }

  export type ReadingRecordScalarWhereInput = {
    AND?: ReadingRecordScalarWhereInput | ReadingRecordScalarWhereInput[]
    OR?: ReadingRecordScalarWhereInput[]
    NOT?: ReadingRecordScalarWhereInput | ReadingRecordScalarWhereInput[]
    id?: StringFilter<"ReadingRecord"> | string
    clerkUserId?: StringFilter<"ReadingRecord"> | string
    spreadId?: StringFilter<"ReadingRecord"> | string
    question?: StringNullableFilter<"ReadingRecord"> | string | null
    drawResult?: JsonFilter<"ReadingRecord">
    interpretation?: StringFilter<"ReadingRecord"> | string
    createdAt?: DateTimeFilter<"ReadingRecord"> | Date | string
  }

  export type SpreadCreateWithoutReadingsInput = {
    id: string
    name: string
    description: string
    cardCount: number
    positions: JsonNullValueInput | InputJsonValue
    hot?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpreadUncheckedCreateWithoutReadingsInput = {
    id: string
    name: string
    description: string
    cardCount: number
    positions: JsonNullValueInput | InputJsonValue
    hot?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpreadCreateOrConnectWithoutReadingsInput = {
    where: SpreadWhereUniqueInput
    create: XOR<SpreadCreateWithoutReadingsInput, SpreadUncheckedCreateWithoutReadingsInput>
  }

  export type SpreadUpsertWithoutReadingsInput = {
    update: XOR<SpreadUpdateWithoutReadingsInput, SpreadUncheckedUpdateWithoutReadingsInput>
    create: XOR<SpreadCreateWithoutReadingsInput, SpreadUncheckedCreateWithoutReadingsInput>
    where?: SpreadWhereInput
  }

  export type SpreadUpdateToOneWithWhereWithoutReadingsInput = {
    where?: SpreadWhereInput
    data: XOR<SpreadUpdateWithoutReadingsInput, SpreadUncheckedUpdateWithoutReadingsInput>
  }

  export type SpreadUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cardCount?: IntFieldUpdateOperationsInput | number
    positions?: JsonNullValueInput | InputJsonValue
    hot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpreadUncheckedUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cardCount?: IntFieldUpdateOperationsInput | number
    positions?: JsonNullValueInput | InputJsonValue
    hot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingRecordCreateManySpreadInput = {
    id?: string
    clerkUserId: string
    question?: string | null
    drawResult: JsonNullValueInput | InputJsonValue
    interpretation: string
    createdAt?: Date | string
  }

  export type ReadingRecordUpdateWithoutSpreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    question?: NullableStringFieldUpdateOperationsInput | string | null
    drawResult?: JsonNullValueInput | InputJsonValue
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingRecordUncheckedUpdateWithoutSpreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    question?: NullableStringFieldUpdateOperationsInput | string | null
    drawResult?: JsonNullValueInput | InputJsonValue
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingRecordUncheckedUpdateManyWithoutSpreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    question?: NullableStringFieldUpdateOperationsInput | string | null
    drawResult?: JsonNullValueInput | InputJsonValue
    interpretation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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