import type { Options } from 'tsup'

export default <Options>{
  entryPoints: ['src/index.ts'],
  clean: true,
  platform: 'node',
  target: 'node16',
  format: ['cjs'],
  dts: true,
}
