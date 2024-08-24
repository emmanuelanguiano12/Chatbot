import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/App.tsx'), // Punto de entrada para tu Web Component
      name: 'MyWebComponent',
      fileName: (format) => `my-web-component.${format}.js`, // Nombre del archivo de salida
      formats: ['umd'], // Especifica UMD como el formato de salida para asegurarte de una amplia compatibilidad
    },
    rollupOptions: {
      // Excluye React y ReactDOM de la compilación
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
