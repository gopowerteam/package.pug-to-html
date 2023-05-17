<template lang="pug">
  a-card(:title="title")
    template(#extra)
      a-button(:disabled="!model.users.length" type="primary" @click="onSubmit") 提交
    .flex.flex-col.space-x-5.max-h-full.overflow-auto
      .flex.flex-row
        .flex.flex-col(class="w-1/2")
          a-card.flex.flex-col.flex-auto(:body-style="bodyStyle" title="待选")
            template(#extra)
              a-button(:disabled='isSingle==="asdasd"?"a":"b"' type="primary" @click="onCheckChange") 批量添加
            .flex.flex-row.mb-1
              a-input(v-model="searchName" placeholder="请输入员工姓名")
              .ml-1
              a-input(v-model="searchJobNumber" placeholder="请输入员工工号" :show='test==="GO"')
            .flex.flex-row
              a-tree-select(
                v-model="model.department"
                :data="departments"
                :dropdown-style='{ maxHeight: "400px", minWidth: "200px", overflow: "auto" }'
                :field-names='{ key: "value", title: "label" }'
                :label-in-value="true"
                placeholder="请选择部门"
                :popup-container="getParent()"
                :replace-fields='{ title: "name", key: "deptId" }'
                style="width: 300px"
                :style='{ flex: "auto", display: "flex" }'
                @change="onDepartmentChange")
              .ml-1
              a-button(type="primary" @click="getSearchData") 搜索
            .mt-5
            data-table(
              ref="table1"
              v-model:checkbox="checkData"
              :columns="columns"
              :load-data="getEmployeeByNameJobNumber"
              :pagination="pageService"
              row-key="userId"
              :scroll-height="400"
              selection="checkbox")
        a-card.h-full.flex-1(title="已选")
          .flex(style="padding-bottom: 8px")
            .flex 选择人数: {{ model.users.length }}
          a-table(:columns="rightColumns" :data="model.users")
            template(#action="{ record }")
              a-button(type="text" @click="onRemoveAdmin(record)") 删除
  </template>

  <style scoped></style>

  <script lang="ts" setup>
  import { useModal } from '@gopowerteam/vue-modal'
  // import { ParamsService } from '@/http/extends/params.service'
  import type { CSSProperties } from 'vue'
  import { useRequest } from 'virtual:request'
  import type { LoadDataParams } from '@gopowerteam/vue-dynamic-table'
  import { useTable } from '@gopowerteam/vue-dynamic-table'
  import { PageService } from '@/http/extends/page.service'
  import { filterTree, makeTree } from '~/shared/utils/common.util'

  const props = defineProps({
    isSingle: {
      type: Boolean,
      default: false,
    },
    isFilter: {
      type: Boolean,
      default: true,
    },
    isGroup: {
      type: Boolean,
      default: false,
    },
    defaultSelected: {
      type: Array,
    },
    title: {
      type: String,
      default: '',
    },
    groupId: {
      type: String,
      default: '',
    },
    roleId: {
      type: String,
      default: '',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  })
  const pageService = new PageService()
  const modal = useModal()
  const bodyStyle: CSSProperties = {
    display: 'flex',
    height: '100%',
    flexFlow: 'column',
  }

  let allSelected = $ref(false)

  const model = reactive<{
    department: any
    users: any[]
  }>({
    department: undefined,
    users: [],
  })

  const checkData = $ref<[]>([])

  interface TreeNode {
    id: number
    value: number
    parentId: number
    label: string
    disabled: boolean
    children?: TreeNode[]
  }
  const table1 = useTable('table')
  const searchName = $ref<any>()
  const searchJobNumber = $ref<any>()

  const wechatEmployeeService = useRequest(({ WechatService }) => WechatService.EmployeeService)

  const wechatDepartmentService = useRequest(({ WechatService }) => WechatService.DepartmentService)

  const departmentList = ref<any[]>([])
  const departments = ref<TreeNode[]>()

  const rightColumns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      slotName: 'action',
      title: '操作',
    },
  ]

  const columns: any[] = [
    {
      key: 'name',
      index: 'name',
      title: '微信昵称',
    },
    {
      key: 'action',
      title: '操作',
      render: (r: any) =>
        r.button({
          buttons: [
            {
              text: '添加',
              type: 'link',
              callback: (record: any) => {
                onAddAdmin(record)
              },
              disabled: (record: any) =>
                model.users.map(x => x.userId).includes(record.userId) || getSingle(),
            },
          ],
        }),
    },
  ]

  function onDepartmentChange(id: unknown) {
    if (id)
      allSelected = false
  }

  function getSearchData() {
    // table.use(({ reload }) => reload(true))
    table1.value.reload()
  }

  let queryUser: any[] = []

  function getEmployeeByNameJobNumber({ update }: LoadDataParams) {
    if (searchName || searchJobNumber || model.department) {
      wechatEmployeeService
        .queryLocal({
          name: searchName,
          jobNumber: searchJobNumber,
          deptId: model.department?.value as any,
        })
        .then((data: any) => {
          if (data.content) {
            queryUser = data.content
            update(data.content)
          }
        })
    }
  }

  function onCheckChange() {
    const newArray: any = []
    queryUser.forEach(
      (item: { userId: string; name: string; qrCode: string; jobNumber: string; avatar: string }) => {
        checkData.forEach((item2: string) => {
          if (item.userId === item2) {
            newArray.push({
              userId: item.userId,
              name: item.name,
              qrCode: item.qrCode,
              avatar: item.avatar,
              jobNumber: item.jobNumber,
            })
          }
        })
      },
    )

    newArray.forEach((x: any) => {
      if (!model.users.find(a => a.userId === x))
        onAddAdmin(x)
    })
  }

  function onAddAdmin(record: any) {
    model.users.push(record)
  }

  function onRemoveAdmin(record: any) {
    if (props.isGroup && props.isAdmin) {
      const index = model.users.findIndex(x => x.userId === record.userId)
      model.users.splice(index, 1)
    }
    else if (props.isGroup) {
      //  TODO: checkded
    }
  }

  function getSingle() {
    return !!(props.isSingle && model.users.length > 0)
  }

  function getAllDept() {
    const tempData = makeTree(
      departmentList.value.map(x => ({
        id: x.id,
        value: x.id,
        parentId: x.parentId,
        label: x.name,
        disabled: true,
      })),
    )
    const setChild = (data: TreeNode[]) => {
      data.forEach((x) => {
        x.disabled = false
        if (x.children)
          setChild(x.children)
      })
    }
    const findChild = (data: TreeNode[]) => {
      data.forEach((x) => {
        x.disabled = false
        if (x.children)
          setChild(x.children)

        if (x.children)
          findChild(x.children)
      })
    }
    findChild(tempData)
    departments.value = filterTree(tempData)
  }

  function getAllDepartment() {
    // wechatDepartmentService.getAllWx().subscribe(data => {
    //   departmentList.value = data
    //   getAllDept()
    // })
    wechatDepartmentService.getAllWx().then((data: any) => {
      departmentList.value = data
      getAllDept()
    })
  }

  function onSubmit() {
    modal.close(model.users)
  }

  function getParent() {
    return document.querySelector('.modal-wrapper') as HTMLElement
  }

  onMounted(() => {
    if (props.defaultSelected)
      model.users = props.defaultSelected as any[]

    getAllDepartment()
  })
  </script>
