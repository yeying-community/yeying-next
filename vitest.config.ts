import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ["**/*.{it,ut}.?(c|m)[jt]s?(x)"],
    globals: true,
    environment: "jsdom",
  },
})