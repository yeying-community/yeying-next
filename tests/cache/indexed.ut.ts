import { IndexedCache } from '../../src/cache/indexed';
import { Table } from '../../src/cache/model';
import 'fake-indexeddb/auto';
import {generateUuid} from "../../src/common/string";

describe('IndexedCache', () => {
    let cache: IndexedCache;
    const TEST_DB_NAME = 'test-db';
    const TEST_VERSION = 1;
    const TEST_TABLES: Table[] = [{
        name: 'table1',
        key: "id",
        autoIncrement: false,
        indexes: [{
            keyPath: "name", name: "name", unique: true
        }]
    }];

    beforeEach(async () => {
        cache = new IndexedCache(TEST_DB_NAME, TEST_VERSION);
        await cache.open(TEST_TABLES)
    });

    afterEach(async () => {
        cache.close()
        // 清理测试数据库
        await cache.deleteDatabase();
    });

    it('add and search', async () => {
        const count = 5
        for (let i = 0; i < count; i++) {
            await cache.insert(TEST_TABLES[0].name, {id: generateUuid(), description: "test", name: `alice${i}`})
        }

        for (let i = 0; i < count; i++) {
            await cache.insert(TEST_TABLES[0].name, {id: generateUuid(), description: "test", name: `bob${i}`})
        }

        await cache.cursor(TEST_TABLES[0].name, r => {
            console.log(`record=${JSON.stringify(r)}`)
        })
    });
})