import { defineBuildConfig } from 'unbuild'

// See options more detail to https://github.com/unjs/unbuild/blob/main/src/types.ts
export default defineBuildConfig({
  entries: ['./core/index'],
  outDir: 'dist',
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
