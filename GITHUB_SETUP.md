# 🚀 GitHub 仓库设置指南

## 📋 准备工作

1. **确保您有GitHub账号**
   - 访问 https://github.com
   - 注册或登录您的账号

2. **创建新仓库**
   - 点击右上角 "+" → "New repository"
   - 仓库名称: `smart-star`
   - 描述: `🌟 Smart Star - 结构化数据之星，将非结构化数据转换为结构化数据的智能处理平台`
   - 设置为 Public (推荐) 或 Private
   - **不要**勾选 "Initialize this repository with a README"
   - **不要**添加 .gitignore 或 license (我们已经准备好了)

## 🔗 连接本地仓库到GitHub

执行以下命令 (将 `YOUR_USERNAME` 替换为您的GitHub用户名):

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/smart-star.git

# 推送代码到GitHub
git branch -M main
git push -u origin main
```

## 🛡️ 设置仓库保护 (可选但推荐)

在GitHub仓库页面:
1. Settings → Branches
2. Add rule → 分支名称: `main`
3. 勾选 "Require pull request reviews before merging"
4. 勾选 "Dismiss stale PR approvals when new commits are pushed"

## 📊 项目管理设置

### 1. Issues 模板
- Settings → Features → Issues → Set up templates
- 选择 "Bug report" 和 "Feature request"

### 2. Projects (项目看板)
- Projects → Create a project
- 选择 "Table" 视图
- 添加字段: Status, Priority, Labels

### 3. 标签管理
推荐创建以下标签:
- `✨ enhancement` - 新功能
- `🐛 bug` - Bug修复
- `📚 documentation` - 文档相关
- `🎨 design` - UI/UX设计
- `🔧 maintenance` - 维护任务
- `❓ question` - 问题咨询

## 🔄 日常开发流程

### 分支策略
```bash
# 创建功能分支
git checkout -b feature/new-feature-name

# 开发完成后
git add .
git commit -m "✨ feat: 添加新功能"
git push origin feature/new-feature-name

# 然后在GitHub创建Pull Request
```

### 提交信息规范
使用以下前缀:
- `✨ feat:` - 新功能
- `🐛 fix:` - Bug修复
- `📚 docs:` - 文档更新
- `🎨 style:` - 代码格式调整
- `♻️ refactor:` - 代码重构
- `⚡ perf:` - 性能优化
- `✅ test:` - 测试相关
- `🔧 chore:` - 构建过程或辅助工具变动

## 📈 GitHub Actions (CI/CD)

我们可以设置自动化流程:
1. 代码推送时自动运行测试
2. Pull Request时检查代码质量
3. 自动部署到 Vercel/Netlify

## 🌟 README徽章

添加到README.md的徽章:
```markdown
![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/smart-star)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/smart-star)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/smart-star)
![GitHub license](https://img.shields.io/github/license/YOUR_USERNAME/smart-star)
```

## 📞 需要帮助?

如果在设置过程中遇到问题:
1. 检查GitHub用户名是否正确
2. 确保仓库名称为 `smart-star`
3. 检查网络连接
4. 验证SSH密钥设置 (如果使用SSH)

---

**下一步**: 告诉我您的GitHub用户名，我将生成具体的命令供您执行！