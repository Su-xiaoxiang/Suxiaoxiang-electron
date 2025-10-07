#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import inquirer from 'inquirer';
import ora from 'ora';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 检测启动方式
function detectRunMode() {
  const argv1 = process.argv[1] || '';
  const env_ = process.env._ || '';
  if (argv1.includes('npx')) return 'npx';
  if (env_.includes('npx')) return 'npx';
  if (argv1.includes('npm-cli.js') || env_.includes('npm')) return 'npm-create';
  if (argv1.endsWith('create-react-su')) return 'direct';
  return 'unknown';
}

// 获取CLI工具的版本号
function getCliVersion() {
  try {
    const cliPackagePath = path.join(__dirname, '../package.json');
    const cliPackage = fs.readJsonSync(cliPackagePath);
    return cliPackage.version;
  } catch (error) {
    console.warn(chalk.yellow('警告：无法读取CLI版本号，使用默认版本'));
    return '1.0.0';
  }
}

// 替换文件中的占位符
async function replacePlaceholders(filePath, replacements) {
  try {
    let content = await fs.readFile(filePath, 'utf-8');
    Object.keys(replacements).forEach(key => {
      const placeholder = `{{${key}}}`;
      const value = replacements[key];
      content = content.replace(new RegExp(placeholder, 'g'), value);
    });
    await fs.writeFile(filePath, content, 'utf-8');
  } catch (error) {
    console.warn(chalk.yellow(`警告：处理文件 ${filePath} 时出错`), error.message);
  }
}

// 递归处理目录中的所有文件
async function processDirectory(dirPath, replacements) {
  try {
    const files = await fs.readdir(dirPath);
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        await processDirectory(filePath, replacements);
      } else if (stat.isFile()) {
        const ext = path.extname(file).toLowerCase();
        const textExtensions = ['.json', '.md', '.txt', '.js', '.ts', '.jsx', '.tsx', '.html', '.css'];
        if (textExtensions.includes(ext)) {
          await replacePlaceholders(filePath, replacements);
        }
      }
    }
  } catch (error) {
    console.warn(chalk.yellow(`警告：处理目录 ${dirPath} 时出错`), error.message);
  }
}

// 检测启动方式并输出提示
const runMode = detectRunMode();
let runTip = '';
switch (runMode) {
  case 'npx':
    runTip = chalk.cyan('（通过 npx 方式启动）');
    break;
  case 'npm-create':
    runTip = chalk.cyan('（通过 npm create 方式启动）');
    break;
  case 'direct':
    runTip = chalk.cyan('（通过 node 直接执行）');
    break;
  default:
    runTip = '';
}

program
  .name('create-electron-su')
  .description('创建一个现代化的 React+Electron 项目，包含 TypeScript、Vite、Tailwind CSS AntiDesign')
  .argument('[project-name]', '项目名称')
  .option('-y, --yes', '跳过提示并使用默认值')
  .action(async (projectName, options) => {
    try {
      // 获取CLI版本号
      const cliVersion = getCliVersion();
      // 显示欢迎信息
      console.log(chalk.blue.bold('\n🚀 欢迎使用create-electron-su!'));
      console.log(chalk.gray(`版本：${cliVersion}`));
      console.log(chalk.gray('正在为您创建一个现代化的 React+Electron 项目...\n'));
      // 获取项目名称
      let name = projectName;
      if (!name) {
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: 'projectName',
            message: '📝 请输入项目名称：',
            default: 'my-react-electron',
            validate: (input) => {
              if (!input.trim()) {
                return '❌ 项目名称不能为空';
              }
              if (!/^[a-z0-9-]+$/.test(input)) {
                return '❌ 项目名称只能包含小写字母、数字和连字符';
              }
              return true;
            }
          }
        ]);
        name = answers.projectName;
      }
      // 检查目录是否存在
      const targetDir = path.resolve(process.cwd(), name);
      if (fs.existsSync(targetDir)) {
        const answers = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'overwrite',
            message: `⚠️  目录 ${chalk.cyan(name)} 已存在，是否覆盖？`,
            default: false
          }
        ]);
        if (!answers.overwrite) {
          console.log(chalk.yellow('❌ 操作已取消。'));
          process.exit(0);
        }
        fs.removeSync(targetDir);
      }
      // 开始创建项目
      const spinner = ora(chalk.blue('️  正在创建 React 项目...')).start();
      // 复制模板文件
      const templateDir = path.join(__dirname, '../template');
      await fs.copy(templateDir, targetDir);
      // 定义替换内容
      const replacements = {
        'project-name': name,
        'cli-version': cliVersion
      };
      // 处理所有文件中的占位符
      await processDirectory(targetDir, replacements);
      spinner.succeed(chalk.green('✅ 项目创建成功！'));
      // 显示成功信息
      console.log('\n' + chalk.green.bold('🎉 恭喜！项目创建完成'));
      console.log(chalk.gray('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
      console.log(chalk.cyan.bold('\n📁 项目位置：') + chalk.white(targetDir));
      console.log(chalk.cyan.bold('\n📦 项目版本：') + chalk.white(cliVersion));
      console.log(chalk.cyan.bold('\n🚀 可用命令：'));
      console.log(chalk.white('  npm run dev') + chalk.gray('      → 启动开发服务器'));
      console.log(chalk.white('  npm run build') + chalk.gray('    → 构建生产版本'));
      console.log(chalk.white('  npm run lint') + chalk.gray('     → 代码检查'));
      console.log(chalk.white('  npm run preview') + chalk.gray('  → 预览生产构建'));
      console.log(chalk.cyan.bold('\n💡 快速开始：'));
      console.log(chalk.white('  cd ') + chalk.cyan(name));
      console.log(chalk.white('  npm run dev'));
      console.log(chalk.cyan.bold('\n✨ 项目特性：'));
      console.log(chalk.gray('  • React 19 + TypeScript'));
      console.log(chalk.gray('  • Vite 7 极速构建'));
      console.log(chalk.gray('  • Tailwind CSS 样式'));
      console.log(chalk.gray('  • Redux Toolkit 状态管理'));
      console.log(chalk.gray('  • React Router 路由'));
      console.log(chalk.gray('  • ESLint 代码规范'));
      console.log(chalk.gray('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
      console.log(chalk.blue.bold('\n🎯 开始您的 React 开发之旅吧！'));
      console.log(chalk.gray('如有问题，请访问：https://github.com/Su-xiaoxiang/Suxiaoxiang-react'));
    } catch (error) {
      console.error(chalk.red.bold('\n❌ 创建项目时出错：'), error.message);
      console.log(chalk.gray('\n如果问题持续存在，请提交 Issue：'));
      console.log(chalk.blue('https://github.com/Su-xiaoxiang/Suxiaoxiang-react/issues'));
      process.exit(1);
    }
  });

program.parse();