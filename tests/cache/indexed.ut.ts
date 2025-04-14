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
            keyPath: "name", name: "name", unique: false
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
            await cache.insert(TEST_TABLES[0].name, {id: generateUuid(), description: "test", name: `alice`})
        }

        for (let i = 0; i < count; i++) {
            await cache.insert(TEST_TABLES[0].name, {id: generateUuid(), description: "test", name: `bob`})
        }
        let expectedCount = 0
        await cache.cursor(TEST_TABLES[0].name, r => {
            console.log(`total record=${JSON.stringify(r)}`)
            expectedCount++
        })
        expect(expectedCount).toEqual(count + count)

        let expectedBobCount = 0
        await cache.cursorIndex(TEST_TABLES[0].name, "name", "bob", (r) => {
            console.log(`bob record=${JSON.stringify(r)}`)
            expectedBobCount++
        })

        let expectedAliceCount = 0
        await cache.cursorIndex(TEST_TABLES[0].name, "name", "alice", (r) => {
            console.log(`bob record=${JSON.stringify(r)}`)
            expectedAliceCount++
        })

        expect(expectedBobCount).toEqual(count)
        expect(expectedAliceCount).toEqual(count)
    });
})