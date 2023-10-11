import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import {   loadEnv } from 'vite'
import dotenv from 'dot-env'
// import eslint from 'vite-plugin-eslint'
// import eslint from 'vite-plugin-eslint'
// dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // eslint()
  ],
//   ({   mode})=>{
// const env = loadEnv(mode , process.cwd(), '')
    
//     return{
//       define:{
//         'process.env.RAPIDAPIKEY':JSON.stringify(env.RapidAPIKey),
//         'process.env.RAPIDAPIHOST':JSON.stringify(env.RapidAPIHost),
//       } ,
//     }

//   } ,

// define:{
 

//   __RAPIDAPIKEY__:`"${process.env.RAPIDAPIKEY}"` ,
//   __RAPIDAPIHOST__:`"${process.env.RAPIDAPIHOST}"` ,
// },
  
  
})


