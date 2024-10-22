import { defineConfig } from "vite";
import * as glob from "glob";
import path, { resolve } from "node:path";

const getHtmlEntries = ()=>{
    return Object.fromEntries(
        [
            ...glob.sync('./**/*.html', { ignore:['./dist/**','./node_modules/**']}).map(file=>[
                file.slice(0, file.length - path.extname(file).length),
                resolve(__dirname, file)
            ])
        ]
    )
}
/*
{
    nombreArchiv: rutaDeArchivo,
    nombreArchiv2: rutaDeArchivo2,
}
*/

export default defineConfig(
    {
        appType: 'mpa',
        base: "/",
        build: {
            rollupOptions: {
                input: getHtmlEntries()
            }
        }
    }
);