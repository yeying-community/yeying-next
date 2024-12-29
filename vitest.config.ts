import { defineConfig } from 'vitest/config'
import dotenv from 'dotenv';
import * as path from "node:path";

export default defineConfig({
  test: {
    include: ["**/*.{it,ut}.?(c|m)[jt]s?(x)"],
    globals: true,
    environment: "jsdom",
    setupFiles: './vitest.setup.ts',
  },
})

// 加载环境变量
dotenv.config({ path: path.resolve(__dirname, '.env') });