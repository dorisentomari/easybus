import path from 'path';
import serve from 'rollup-plugin-serve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
import rollupTypescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json';

const plugins = [
    rollupTypescript({
        tsconfig: path.resolve(__dirname, './tsconfig.json'),
        tsconfigDefaults: { compilerOptions: { declaration: true } },
        tsconfigOverride: { compilerOptions: { declaration: false, module: 'ES2015' } },
        declarationDir: 'dist'
    }),
    commonjs(),
    resolve({
        // 将自定义选项传递给解析插件
        customResolveOptions: {
            moduleDirectory: 'node_modules',
        },
    }),
    babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**'
    }),
];

if (process.env.NODE_ENV === 'development') {
    plugins.push(serve({
        open: false,
        historyApiFallback: true,
        host: 'localhost',
        port: 9700,
        openPage: '/index.html',
        contentBase: ['dist', 'public'],
    }));
}

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'es'
        },
        {
            file: pkg.umd,
            format: 'umd',
            name: pkg.name
        }
    ],
    plugins: plugins,
    treeshake: false
}
