# Page Patterns

本文档定义项目中的标准页面模式。
所有新页面优先复用以下模式，不要随意创造新的页面结构。

---

## 1. List Page

### 用途
用于展示数据列表，支持搜索、筛选、查看详情、批量操作。

### 标准结构
- PageHeader
- SearchForm
- TableToolbar
- DataTable
- Pagination

### 必选模块
- PageHeader
- DataTable

### 可选模块
- SearchForm
- BatchActions
- ExportButton
- FilterTabs

### 布局规则
- PageHeader 在最上方
- SearchForm 位于表格上方
- TableToolbar 位于表格上方，和搜索区分开
- 主操作按钮放在 TableToolbar 右侧
- 各区块之间使用统一间距，不允许页面自行定义特殊间距

### 交互规则
- 搜索条件变化后可手动点击查询
- 支持重置筛选条件
- 批量操作必须先选择数据
- 删除操作必须二次确认

### 状态规则
- loading：表格显示加载状态
- empty：显示空状态，不显示空白表格
- error：显示错误提示和重试入口
- no permission：显示无权限提示

### 推荐组件
- PageHeader
- AppForm / SearchForm
- TableToolbar
- Arco Table
- Arco Pagination
- PrimaryButton

### 禁止事项
- 不要把搜索区放到页面右侧
- 不要在同一列表页中出现多个主按钮
- 不要为每个列表页单独定义新的表格风格

---

## 2. Form Page

### 用途
用于创建、编辑、配置某一条数据。

### 标准结构
- PageHeader
- FormCard
- FormActions

### 必选模块
- PageHeader
- FormCard
- FormActions

### 可选模块
- SectionTitle
- HelpText
- AdvancedSettings
- SidePreview

### 布局规则
- 表单内容使用卡片包裹
- 提交按钮区域固定在表单底部
- 主按钮在右侧，次按钮在左侧或主按钮左边
- 长表单按信息分组展示

### 交互规则
- 必填项需明确标记
- 校验错误需就近展示
- 提交中按钮进入 loading 状态
- 离开未保存页面时需提示

### 状态规则
- loading：表单骨架或加载态
- disabled：不可编辑时整体禁用
- error：校验错误高亮显示
- success：保存成功后给出明确反馈

### 推荐组件
- PageHeader
- AppForm
- AppCard
- Arco Form
- Arco Input
- Arco Select
- PrimaryButton

### 禁止事项
- 不要把提交按钮放到页面头部
- 不要省略必填提示
- 不要把高级配置默认全部展开

---

## 3. Detail Page

### 用途
用于查看单条数据的完整信息、状态和相关记录。

### 标准结构
- PageHeader
- SummaryCard
- DetailSections / Tabs

### 必选模块
- PageHeader
- SummaryCard

### 可选模块
- Tabs
- ActivityTimeline
- RelatedTable
- ActionPanel

### 布局规则
- 页面顶部展示核心摘要信息
- 详情内容按模块分区
- 信息多时优先使用 Tabs
- 操作区和展示区分开

### 交互规则
- 重要状态需要突出展示
- 可编辑信息要有明确入口
- 危险操作单独放置并二次确认

### 状态规则
- loading：详情骨架屏
- empty：无详情数据提示
- error：加载失败和重试
- archived：归档状态需明显标识

### 推荐组件
- PageHeader
- AppCard
- Arco Descriptions
- Arco Tabs
- Arco Table
- PrimaryButton

### 禁止事项
- 不要把所有信息堆成一个长页面
- 不要把危险操作和普通操作混放
- 不要缺少状态说明
