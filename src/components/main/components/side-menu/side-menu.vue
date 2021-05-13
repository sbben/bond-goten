<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu
      ref="menu"
      v-show="!collapsed"
      :active-name="activeName"
      :open-names="openedNames"
      :accordion="false"
      theme="dark"
      width="auto"
      @on-select="handleSelect"
    >
      <Submenu name="components">
        <template slot="title">
          <Icon type="logo-buffer" />
          组件
        </template>
        <MenuItem
          name="tree_select_page"
          key="tree_select_page"
        >树状下拉选择器</MenuItem>
        <MenuItem
          name="count_to_page"
          key="count_to_page"
        >数字渐变</MenuItem>
        <MenuItem
          name="drag_list_page"
          key="drag_list_page"
        >拖拽列表</MenuItem>
        <MenuItem
          name="drag_drawer_page"
          key="drag_drawer_page"
        >可拖拽抽屉</MenuItem>
        <MenuItem
          name="org_tree_page"
          key="org_tree_page"
        >组织结构树</MenuItem>
        <MenuItem
          name="tree_table_page"
          key="tree_table_page"
        >树状表格</MenuItem>
        <MenuItem
          name="cropper_page"
          key="cropper_page"
        >图片裁剪</MenuItem>
        <MenuItem
          name="tables_page"
          key="tables_page"
        >多功能表格</MenuItem>
        <MenuItem
          name="split_pane_page"
          key="split_pane_page"
        >分割窗口</MenuItem>
        <MenuItem
          name="markdown_page"
          key="markdown_page"
        >Markdown编辑器</MenuItem>
        <MenuItem
          name="editor_page"
          key="editor_page"
        >富文本编辑器</MenuItem>
        <MenuItem
          name="icons_page"
          key="icons_page"
        >自定义图标</MenuItem>
      </Submenu>

      <Submenu name="update">
        <template slot="title">
          <Icon type="md-cloud-upload" />
          数据上传
        </template>
        <MenuItem
          name="update_table_page"
          key="update_table_page"
        >上传Csv</MenuItem>
        <MenuItem
          name="update_paste_page"
          key="update_paste_page"
        >粘贴表格数据</MenuItem>
      </Submenu>

      <Submenu name="excel">
        <template slot="title">
          <Icon type="ios-stats" />
          EXCEL导入导出
        </template>
        <MenuItem
          name="upload-excel"
          key="upload-excel"
        >导入EXCEL</MenuItem>
        <MenuItem
          name="export-excel"
          key="export-excel"
        >导出EXCEL</MenuItem>
      </Submenu>

      <Submenu name="directive">
        <template slot="title">
          <Icon type="ios-stats" />
          指令
        </template>
        <MenuItem
          name="directive_page"
          key="directive_page"
        >指令</MenuItem>
      </Submenu>

    </Menu>
    <div
      class="menu-collapsed"
      v-show="collapsed"
    >

      <Dropdown
        @on-click="handleSelect"
        :transfer="true"
        :placement="placement"
      >
        <a
          class="drop-menu-a"
          type="text"
          @mouseover="handleMousemove($event, 12)"
        >
          <Icon
            :size="20"
            color="#fff"
            type="logo-buffer"
          />
        </a>
        <DropdownMenu
          ref="dropdown"
          slot="list"
        >
          <template>
            <DropdownItem
              key="tree_select_page"
              name="tree_select_page"
            >
              <span class="menu-title">树状下拉选择器</span>
            </DropdownItem>

            <DropdownItem
              key="count_to_page"
              name="count_to_page"
            >
              <span class="menu-title">数字渐变</span>
            </DropdownItem>

            <DropdownItem
              key="drag_list_page"
              name="drag_list_page"
            >
              <span class="menu-title">拖拽列表</span>
            </DropdownItem>

            <DropdownItem
              key="drag_drawer_page"
              name="drag_drawer_page"
            >
              <span class="menu-title">可拖拽抽屉</span>
            </DropdownItem>

            <DropdownItem
              key="org_tree_page"
              name="org_tree_page"
            >
              <span class="menu-title">组织结构树</span>
            </DropdownItem>

            <DropdownItem
              key="tree_table_page"
              name="tree_table_page"
            >
              <span class="menu-title">树状表格</span>
            </DropdownItem>

            <DropdownItem
              key="cropper_page"
              name="cropper_page"
            >
              <span class="menu-title">图片裁剪</span>
            </DropdownItem>

            <DropdownItem
              key="tables_page"
              name="tables_page"
            >
              <span class="menu-title">多功能表格</span>
            </DropdownItem>

            <DropdownItem
              key="split_pane_page"
              name="split_pane_page"
            >
              <span class="menu-title">分割窗口</span>
            </DropdownItem>

            <DropdownItem
              key="markdown_page"
              name="markdown_page"
            >
              <span class="menu-title">Markdown编辑器</span>
            </DropdownItem>

            <DropdownItem
              key="editor_page"
              name="editor_page"
            >
              <span class="menu-title">富文本编辑器</span>
            </DropdownItem>

            <DropdownItem
              key="icons_page"
              name="icons_page"
            >
              <span class="menu-title">自定义图标</span>
            </DropdownItem>
          </template>
        </DropdownMenu>
      </Dropdown>

      <Dropdown
        @on-click="handleSelect"
        :transfer="true"
        :placement="placement"
      >
        <a
          class="drop-menu-a"
          type="text"
          @mouseover="handleMousemove($event, 2)"
        >
          <Icon
            :size="20"
            color="#fff"
            type="md-cloud-upload"
          />
        </a>
        <DropdownMenu
          ref="dropdown"
          slot="list"
        >
          <template>
            <DropdownItem
              key="update_table_page"
              name="update_table_page"
            >
              <span class="menu-title">上传Csv</span>
            </DropdownItem>

            <DropdownItem
              key="update_paste_page"
              name="update_paste_page"
            >
              <span class="menu-title">粘贴表格数据</span>
            </DropdownItem>

          </template>
        </DropdownMenu>
      </Dropdown>

      <Dropdown
        @on-click="handleSelect"
        :transfer="true"
        :placement="placement"
      >
        <a
          class="drop-menu-a"
          type="text"
          @mouseover="handleMousemove($event, 2)"
        >
          <Icon
            :size="20"
            color="#fff"
            type="ios-stats"
          />
        </a>
        <DropdownMenu
          ref="dropdown"
          slot="list"
        >
          <template>
            <DropdownItem
              key="upload-excel"
              name="upload-excel"
            >
              <span class="menu-title">导入EXCEL</span>
            </DropdownItem>

            <DropdownItem
              key="export-excel"
              name="export-excel"
            >
              <span class="menu-title">导出EXCEL</span>
            </DropdownItem>

          </template>
        </DropdownMenu>
      </Dropdown>

      <Dropdown
        @on-click="handleSelect"
        :transfer="true"
        :placement="placement"
      >
        <a
          class="drop-menu-a"
          type="text"
          @mouseover="handleMousemove($event, 1)"
        >
          <Icon
            :size="20"
            color="#fff"
            type="ios-stats"
          />
        </a>
        <DropdownMenu
          ref="dropdown"
          slot="list"
        >
          <template>
            <DropdownItem
              key="directive_page"
              name="directive_page"
            >
              <span class="menu-title">指令</span>
            </DropdownItem>

          </template>
        </DropdownMenu>
      </Dropdown>

    </div>
  </div>
</template>
<script>
import SideMenuItem from './side-menu-item.vue'
import { getUnion } from '@/libs/tools'
import mixin from './mixin'

export default {
  name: 'SideMenu',
  mixins: [mixin],
  components: {
    SideMenuItem
  },
  props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    },
    collapsed: {
      type: Boolean
    },

    iconSize: {
      type: Number,
      default: 16
    },
    activeName: {
      type: String,
      default: ''
    },
    openNames: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      openedNames: [],
      placement: 'right-end'
    }
  },
  methods: {
    handleMousemove (event, num) {
      const { pageY } = event
      const height = num * 38
      const isOverflow = pageY + height < window.innerHeight
      this.placement = isOverflow ? 'right-start' : 'right-end'
    },
    handleSelect (name) {
      this.$emit('on-select', name)
    },
    getOpenedNamesByActiveName (name) {
      return this.$route.matched
        .map(item => item.name)
        .filter(item => item !== name)
    },
    updateOpenName (name) {
      if (name === this.$config.homeName) this.openedNames = []
      else this.openedNames = this.getOpenedNamesByActiveName(name)
    }
  },
  computed: {},
  watch: {
    activeName (name) {
      this.openedNames = getUnion(
        this.openedNames,
        this.getOpenedNamesByActiveName(name)
      )
    },
    openNames (newNames) {
      this.openedNames = newNames
    },
    openedNames () {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  },
  mounted () {
    this.openedNames = getUnion(
      this.openedNames,
      this.getOpenedNamesByActiveName(name)
    )
  }
}
</script>
<style lang="less">
@import './side-menu.less';
</style>
