import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react-swc';
// rollup打包分析插件
import visualizer from 'rollup-plugin-visualizer'

export default (env, isBuild) => {
  const plugins = [react(), eslintPlugin()]

  if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    )
  }

  return plugins
}
