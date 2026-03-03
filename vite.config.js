import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                login: resolve(__dirname, 'login.html'),
                explora: resolve(__dirname, 'explora.html'),
                filtros: resolve(__dirname, 'filtros.html'),
                detalle: resolve(__dirname, 'detalle.html'),
                puntos: resolve(__dirname, 'puntos.html'),
                escaner: resolve(__dirname, 'escaner.html'),
                perfil: resolve(__dirname, 'perfil.html'),
            }
        }
    }
});
