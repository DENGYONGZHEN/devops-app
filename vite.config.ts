import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 允许外部访问
    port: 5173,
    watch: {
      usePolling: true, // 必须！解决 Docker 文件监听失效问题
      interval: 1000, // 轮询间隔（毫秒）
    },
    hmr: {
      clientPort: 5173, // 关键！让 HMR 使用映射后的端口
    },
  },
});
