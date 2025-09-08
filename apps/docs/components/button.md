# Button 按钮

基础用法：

<script setup>
import { Button } from '@prism/components'
</script>

### 基础

<div class="demo-row">
  <Button>Primary</Button>
  <Button intent="success">Success</Button>
  <Button intent="warning">Warning</Button>
  <Button intent="danger">Danger</Button>
  <Button intent="info">Info</Button>
  <Button intent="none">Neutral</Button>
</div>

### 尺寸

<div class="demo-row">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>

### 变体

<div class="demo-row">
  <Button variant="outlined">Outlined</Button>
  <Button variant="minimal">Minimal</Button>
  <Button variant="solid">Solid</Button>
</div>

### 其它状态

<div class="demo-row">
  <Button :loading="true">Loading…</Button>
  <Button :disabled="true">Disabled</Button>
  <Button block>Block Button</Button>
</div>

### 图标插槽

<div class="demo-row">
  <Button>
    <template #prefix>🔍</template>
    Search
  </Button>
  <Button variant="minimal">
    Next
    <template #suffix>→</template>
  </Button>
</div>

<style>
.demo-row {
  display:flex;
  gap:12px;
  align-items:center;
  flex-wrap: wrap;
  margin: 12px 0;
}
</style>
