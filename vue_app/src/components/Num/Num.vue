<template>
    <div class="emp_box">
        <!-- <Btn @add='add' name="+"></Btn>
        <label>{{num}}</label>
        <Btn @add='remove' name="-"></Btn> -->
        <div style="display:flex;align-items: center;">
            <el-button
              type="success"
               @click="addEmp" style='margin-right:10px'>增加</el-button>
          <div style="margin-top: 15px;margin-bottom:15px;display:flex;" class="search">
          <el-input placeholder="按条件查询 . . ." v-model="queryText" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="姓名" value="name"></el-option>
              <el-option label="年龄" value="year"></el-option>
              <el-option label="性别" value="sex"></el-option>
              <el-option label="籍贯" value="city"></el-option>
              <el-option label="婚否" value="marry"></el-option>
            </el-select>
            <el-button @click="searchEmp" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <el-button style="margin-left:10px;height:39px" type="primary" @click="all">刷新</el-button>
        </div>
          
        <el-table
          :data="emps"
          border
          style="width: 1049px"
          stripe>
          <el-table-column
            prop="name"
            label="姓名"
            width="150">
          </el-table-column>
          <el-table-column
            prop="year"
            label="年龄"
            width="150">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            width="150">
          </el-table-column>
          <el-table-column
            prop="marry"
            label="婚否"
            width="150">
          </el-table-column>
          <el-table-column
            prop="money"
            label="工资"
            width="150">
          </el-table-column>
          <el-table-column
            prop="city"
            label="籍贯"
            width="150">
          </el-table-column>
          <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="warning"
               @click="editEmp(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="open(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          background
          layout="prev, pager, next"
          :page-count="maxPage"
          @prev-click="up"
          @next-click="bottom"
          @current-change="clickPage">
        </el-pagination>
        <!-- 弹出框编辑 -->
        <el-dialog title="编辑员工" :visible.sync="dialogFormVisible"  width="400px">
        <el-form :model="form" >
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off" size="small"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="form.year" auto-complete="off"  size="small"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-input v-model="form.sex" auto-complete="off"  size="small"></el-input>
          </el-form-item>
          <el-form-item label="婚否" :label-width="formLabelWidth">
            <el-input v-model="form.marry" auto-complete="off"  size="small"></el-input>
          </el-form-item>
          <el-form-item label="工资" :label-width="formLabelWidth">
            <el-input v-model="form.money" auto-complete="off"  size="small"></el-input>
          </el-form-item>
          <el-form-item label="籍贯" :label-width="formLabelWidth">
            <el-input v-model="form.city" auto-complete="off"  size="small"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="reEditEmp">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 增加 -->
        <el-dialog title="增加员工" :visible.sync="addFormVisible"  width="400px">
        <el-form :model="form2" >
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form2.name" auto-complete="off" size="small"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="form2.year" auto-complete="off"  size="small"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-input v-model="form2.sex" auto-complete="off"  size="small"></el-input>
          </el-form-item>
          <el-form-item label="婚否" :label-width="formLabelWidth">
            <el-input v-model="form2.marry" auto-complete="off"  size="small"></el-input>
          </el-form-item>
          <el-form-item label="工资" :label-width="formLabelWidth">
            <el-input v-model="form2.money" auto-complete="off"  size="small"></el-input>
          </el-form-item>
          <el-form-item label="籍贯" :label-width="formLabelWidth">
            <el-input v-model="form2.city" auto-complete="off"  size="small"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="reAddEmp">确 定</el-button>
        </div>
      </el-dialog>
        <!-- <ul>
          <li><router-link to="/num/s1">京东618</router-link></li>
          <li><router-link to="/num/s2">天猫618</router-link></li>
          <li><router-link to="/num/s3">国美618</router-link></li>
          <li><router-link to="/num/s4">苏宁618</router-link></li>
        </ul> -->
        <!-- <router-view></router-view> -->

        <!-- 原生员工表格 -->
        <!-- <div>
          <button @click="up">上一页</button>
          <label for="">{{page}}/ {{maxPage}}</label>
          <button @click="bottom">下一页</button>
        </div> -->
        <!-- <table>
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>婚否</th>
            <th>工资</th>
            <th>籍贯</th>
          </tr>
          <tbody>
            <tr v-for='(item,i) in emps' :key=i>
              <td>{{(page-1)*rows+i+1}}</td>
              <td>{{item.name}}</td>
              <td>{{item.year}}</td>
              <td>{{item.sex}}</td>
              <td>{{item.marry}}</td>
              <td>{{item.money}}</td>
              <td>{{item.city}}</td>
            </tr>
          </tbody>
        </table> -->
    </div>
</template>

<script>
import Btn from "./Btn.vue";
import toDoList from "../todolist/Todolist.vue";

export default {
  data() {
    return {
      dialogFormVisible: false,
      addFormVisible: false,
      form: {
        _id: "",
        name: "",
        year: "",
        sex: "",
        city: "",
        money: "",
        marry: ""
      },
      form2: {
        name: "",
        year: "",
        sex: "",
        city: "",
        money: "",
        marry: ""
      },
      formLabelWidth: "100px",
      queryText: "",
      select: "name",
      searchFlag: false
    };
  },
  components: {
    Btn: Btn,
    toDoList
  },
  methods: {
    // 计数器
    add() {
      this.$store.commit({
        type: "changeNum",
        num: 1
      });
    },
    remove() {
      this.$store.commit({
        type: "changeNum",
        num: -1
      });
    },
    // 上一页
    up() {
      if (this.page - 1 > 0) {
        if (this.searchFlag) {
          this.render(
            --this.$store.state.emps.page,
            this.select,
            this.queryText
          );
        } else {
          this.render(--this.$store.state.emps.page);
        }
      }
    },
    // 下一页
    bottom() {
      if (this.page + 1 <= this.maxPage) {
        if (this.searchFlag) {
          this.render(
            ++this.$store.state.emps.page,
            this.select,
            this.queryText
          );
        } else {
          this.render(++this.$store.state.emps.page);
        }
      }
    },
    // 获取数据
    render(page, key, value) {
      this.$store.dispatch({
        type: "getEmps",
        page,
        key,
        value
      });
    },
    // 点击页码
    clickPage(page) {
      if (this.searchFlag) {
        this.render(page, this.select, this.queryText);
      } else {
        this.render(page);
      }
    },
    // 删除
    open(index, row) {
      console.log(index, row);
      this.$confirm(`你确定要删除 ${row.name} 的信息吗？ `, "删除员工", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.$store.dispatch({
            type: "deletEmps",
            id: row._id
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 编辑
    editEmp(index, row) {
      this.dialogFormVisible = true;
      for (let key in row) {
        this.form[key] = row[key];
      }
    },
    // 确认编辑
    reEditEmp() {
      this.$store.dispatch({
        type: "editEmp",
        msg: this.form
      });
      this.dialogFormVisible = false;
    },
    // 增加
    addEmp() {
      this.addFormVisible = true;
    },
    // 确认增加
    reAddEmp() {
      let flag = true;
      for (let key in this.form2) {
        if (this.form2[key] == "") {
          flag = false;
          return;
        }
      }
      if (flag) {
        this.$store.dispatch({
          type: "addNewEmp",
          msg: this.form2
        });
        this.addFormVisible = false;
      }
    },
    // 搜索
    searchEmp() {
      if (this.select && this.queryText) {
        this.searchFlag = true;
      } else {
        this.searchFlag = false;
      }
      this.render(this.$store.state.emps.page, this.select, this.queryText);
    },
    // 刷新
    all() {
      this.searchFlag = false;
      this.render(1);
    }
  },
  computed: {
    // 计数器
    num() {
      return this.$store.state.emps.num;
    },
    // 表格
    emps() {
      return this.$store.state.emps.emps;
    },
    maxPage() {
      return this.$store.state.emps.maxPage;
    },
    page() {
      return this.$store.state.emps.page;
    },
    rows() {
      return this.$store.state.emps.rows;
    },
    total() {
      return this.$store.state.emps.total;
    }
  },
  created() {
    // 计数器
    this.$store.commit({
      type: "changeNum",
      num: -1
    });
    // 表格
    this.render(1);
  }
};
</script>
<style>
/* table {
  border-collapse: collapse;
  margin-bottom: 5em;
}
td,
th {
  border: 0.1em solid black;
  padding: 0.4em;
  text-align: center;
} */
.el-pagination {
  margin-top: 20px;
  text-align: center;
}
.el-pager > li {
  margin: 0 10px !important;
}
.emp_box {
  margin: 10px;
  width: 1049px;
}
.el-table .el-input {
  width: 220px;
}
.search {
  width: 420px;
}
.el-form .el-input {
  width: 200px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>

