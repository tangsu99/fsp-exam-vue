<template>
  <div class="box">
    <h1>答卷审核</h1>
    <div class="tips">
      <h3>注意事项：</h3>
      <ul>
        <li>已过期的答卷自动设置为已完成和已拒绝</li>
      </ul>
    </div>
    <div class="table-box">
      <table>
        <thead>
          <tr>
            <th class="id">#</th>
            <th class="is-done">完成</th>
            <th class="status">审核状态</th>
            <th class="status">审核人</th>
            <th class="survey-name">试卷名称</th>
            <th class="survey-id">试卷ID</th>
            <th class="score">分数</th>
            <th class="user">用户名</th>
            <th class="player-name">玩家名</th>
            <th class="add-time">开考日期</th>
            <th class="done-time">交卷日期</th>
            <th class="action">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in responsesData.list" :key="item.id">
            <td>{{ item.id }}</td>
            <td :style="item.isCompleted ? { color: 'green' } : { color: 'red' }">
              {{ item.isCompleted ? '已完成' : '未完成' }}
            </td>
            <td :style="getCellStyle(item.isReviewed)">
              {{ reviewedComput(item.isReviewed) }}
            </td>
            <td>{{ item.isReviewed ? item.reviewer_name : '/' }}</td>
            <td>{{ item.survey }}</td>
            <td>{{ item.surveyId }}</td>
            <td>{{ item.score }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.playername }}</td>
            <td>{{ dateFormatYYYYMMDDHH(item.createTime) }}</td>
            <td>{{ item.responseTime ? dateFormatYYYYMMDDHH(item.responseTime) : '未交卷' }}</td>
            <td class="action">
              <MCButton v-if="!item.isReviewed" class="button" @click="reviewed(item.id, true)">通过</MCButton>
              <MCButton v-if="!item.isReviewed" class="button" @click="reviewed(item.id, false)">拒绝</MCButton>
              <MCButton class="button" @click="detail(item)">详情</MCButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 分页 -->
    <div class="pagination">
      <button
        type="button"
        @click="loadPagination(responsesData.page - 1, responsesData.size)"
        :disabled="responsesData.page === 1"
      >
        上一页
      </button>
      <span>第 {{ responsesData.page }} 页 / 共 {{ responsesData.totalPages }} 页</span>
      <button
        type="button"
        @click="loadPagination(responsesData.page + 1, responsesData.size)"
        :disabled="responsesData.page * responsesData.size >= responsesData.total"
      >
        下一页
      </button>
      <button
        type="button"
        @click="loadPagination(responsesData.totalPages, responsesData.size)"
        :disabled="responsesData.page === responsesData.totalPages"
      >
        最后一页
      </button>
    </div>

    <ResponseDetail v-if="visibility" v-model:visibility="visibility" :data="detailData"></ResponseDetail>
  </div>
</template>

<script setup lang="ts">
import { getResponses, reviewedResponse, responseDetail } from '@/apis/admin';
import type { IResponse } from '@/types';
import { ref, watch, onMounted, computed } from 'vue';
import MCButton from '@/components/MCButton.vue';
import ResponseDetail from '@/components/admin/ResponseDetail.vue';
import { dateFormatYYYYMMDDHH } from '@/utils/date';
import { openAlert } from '@/utils/TsAlert';

const getCellStyle = (isReviewed: number) => {
  if (isReviewed === 1) {
    return { color: 'green' };
  } else if (isReviewed === 2) {
    return { color: 'red' };
  } else {
    return { color: 'grey' };
  }
};

const visibility = ref<boolean>(false);

interface IData {
  list: IResponse[];
  page: number;
  size: number;
  total: number;
  totalPages: number;
}
// 答卷详情数据
const detailData = ref();
// 答卷分页数据
const responsesData = ref<IData>({
  list: [],
  page: 1,
  size: 10,
  total: 0,
  totalPages: 0,
});
// 分页加载答卷分页数据
const loadPagination = async (page = 1, size = 10) => {
  const res = await getResponses({ page, size });
  if (res.data.code === 0) {
    responsesData.value = res.data;
    responsesData.value.totalPages = Math.ceil(res.data.total / res.data.size);
  }
};

// 通过
const reviewed = (id: number, pass: boolean) => {
  const text: string = pass ? '确定通过吗？' : '确定拒绝吗？';
  const userConfirmed = confirm(text);
  if (userConfirmed) {
    reviewedResponse({ response: id, status: pass ? 1 : 2 }).then((res) => {
      openAlert(res.data.desc);
      if (res.data.code === 0) {
        loadPagination(responsesData.value.page, responsesData.value.size);
      }
    });
  }
};
// 获取答卷详情
const detail = (item: IResponse) => {
  responseDetail(item.id).then((res: { data: any }) => {
    detailData.value = res.data;
    detailData.value.archived = item.isReviewed ? true : false;
    visibility.value = true;
  });
};
// 退出答卷详情预览重新获取
watch(visibility, (newValue) => {
  if (newValue == false) {
    loadPagination(responsesData.value.page, responsesData.value.size);
  }
});
// 初始化加载数据
onMounted(() => {
  loadPagination();
});

const reviewedComput = computed(() => {
  return (key: number) => {
    switch (key) {
      case 0:
        return '待审核';
      case 1:
        return '已通过';
      case 2:
        return '已拒绝';
      default:
        return '未知';
    }
  };
});
</script>

<style scoped>
.box {
  height: 100%;
  overflow-y: auto;
}
.tips {
  ul {
    /* 必须 padding-left: ; */
    padding-left: 20px;
    padding-bottom: 10px;
  }
  li {
    list-style-type: disc;
    display: list-item;
    padding: 5px;
    font-size: 20px;
  }
}

.table-box {
  max-width: 1600px;
  overflow-x: auto;
}
table,
table td,
table th {
  border: 1px solid #000000;
}
table {
  width: 100%;
}
td,
th {
  padding: 5px;
  text-align: center;
}
.is-done,
.status,
.survey-name,
.survey-id,
.score,
.user,
.player-name {
  min-width: 75px;
}

.add-time,
.done-time {
  min-width: 150px;
}
.action {
  min-width: 200px;
  display: flex;
  justify-content: center;
  gap: 6px;
  .button {
    font-size: 20px;
    padding: 5px;
    width: 100%;
  }
}
@media (max-width: 1200px) {
  .table {
    max-width: 90vw;
  }
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  button {
    margin: 5px;
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 5px;
    background-color: #ccc;
    cursor: pointer;
  }
  button:hover {
    background-color: #888;
  }
  button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
}
</style>
