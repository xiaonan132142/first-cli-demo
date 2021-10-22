#!/usr/bin/env node

// demo 1输出版本信息

// const pkg = require('./package.json')
// const command = process.argv[2]
// switch (command) {
//     case '-v':
//         console.log(pkg.version)
//         break
//     default:     
//         break
// }

// demo2 终端问答实现
// const program = require('commander')
// const inquire = require('inquirer')

// const initAction=()=>{
//     inquire.prompt([{
//         type:'input',
//         message:'请输入项目名称',
//         name: 'name'
//     }]).then(answer=>{
//         console.log('项目名称',answer.name)
//         var questions = [
//             {
//                 type: 'list',
//                 name: 'action',
//                 message: "check detail",
//                 choices:["yes","no"]
//             }
//         ]
//         inquire.prompt(questions).then(answers => {
//             console.log(answers.action)
//         })
//     })
// }
// program
// .command('init')
// .description('创建项目')
// .action(initAction)
// program.parse(process.argv)

// 执行shell 命令

const program = require('commander')
const inquire = require('inquirer')
const shell = require('shelljs')

const initAction=()=>{
    inquire.prompt([{
        type:'input',
        message:'请输入项目名称',
        name: 'name'
    }]).then(answer=>{
       console.log('正在拷贝')
       const remote = ''
       const curName = 'first-cli'
       const tarName = answer.name
       shell.exec(`git clone ${remote} --depth=1 
       mv ${curName} ${tarName}
       rm -rf ./${tarName}/.git
       cd ${tarName}
       npm i`,(error,stdout,stderr)=>{
           if(error){
               console.error(`EXEC ERROR${error}`)
           }
       })
    })
}
program
.command('init')
.description('创建项目')
.action(initAction)
program.parse(process.argv)


