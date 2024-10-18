<template>
    <div>
        <div class="panel panel-default">
            <div class="layui-inline tool-btn">
            </div>
            <div class="panel-heading">

                <h3 class="panel-title">联系人列表</h3>
                <hr>
                <div class="panel-btns">
                </div>
                <button v-on:click="add()" class="btn  btn-primary  btn-round">
                    <span class="glyphicon glyphicon-plus"></span>
                    新增
                </button>
                &nbsp;
                <button v-on:click="list(1)" class="btn btn-success btn-round">
                    <i class="ace-icon fa fa-refresh"></i>
                    分页刷新
                </button>
            </div>

            <div class="panel-body">
                <div class="form-group">
                    <div class="col-sm-4">
                        <input type="text" placeholder="请输入姓名" v-model="contacts0.name" class="form-control"/>
                    </div>
                    <button v-on:click="search(1)" class="btn  btn-primary  btn-round">
                        <span class="glyphicon glyphicon-search"></span>
                        搜索
                    </button>
                </div>
                <hr>
                <!--分页-->
                <pagination ref="pagination" v-bind:list="list" v-bind:itemCount="5"></pagination>
                <div class="table-responsive"><!--table-primary table-info table-warning table-dark table-success-->
                    <table class="table table-success" id="table1">
                        <thead>
                        <tr>
                            <th>序号</th>
                            <th>姓名</th>
                            <th>添加人</th>
                            <th>年龄</th>
                            <th>类型</th>
                            <th>性别</th>
                            <th>图片</th>
                            <th>联系方式</th>
                            <th>地址</th>
                            <th>添加时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(contacts1,index) in contactss" :key="index" class="odd gradeX">
                            <td>{{index+1}}</td>
                            <td>{{contacts1.name}}</td>
                            <td><span v-for="v in ualist.filter(t=>{return t.id==contacts1.uid})">{{v.name}}</span></td>
                            <td>{{contacts1.age}}</td>
                            <td>{{contacts1.ctype}}</td>
                            <td>{{contacts1.sex}}</td>
                            <td>
                                <img v-show="!contacts1.img" class="media-object" :src="imgUrl+'zanwu.jpg'"
                                     width="50px;" height="50px;"/>
                                <img v-show="contacts1.img" class="media-object" v-bind:src="imgUrl+contacts1.img"
                                     width="50px;" height="50px;"/>
                            </td>
                            <td>{{contacts1.tel}}</td>
                            <td>{{contacts1.address}}</td>
                            <td>{{contacts1.pubtime}}</td>
                            <td>
                                <div class="btn-group"><!--hidden-sm hidden-xs-->
                                    <button class="btn btn-sm btn-info" @click="look(contacts1);">
                                        <i class="ace-icon fa fa-pencil bigger-120"></i>查看
                                    </button>
                                    <button class="btn btn-sm btn-warning" @click="edit(contacts1);"
                                            v-show="loginUser.utype=='管理员'||contacts1.uid==loginUser.id">
                                        <i class="ace-icon fa fa-pencil bigger-120"></i>编辑
                                    </button>

                                    <button class="btn btn-sm btn-danger" @click="del(contacts1.id)"
                                            v-show="loginUser.utype=='管理员'||contacts1.uid==loginUser.id">
                                        <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div><!-- table-responsive -->
            </div><!-- panel-body -->
        </div>

        <div id="form-modal-look" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document" style="width: 85%;">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">查看</h4>
                    </div>
                    <div class="modal-body">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-2 control-label">姓名</label>
                                <div class="col-sm-10" style="margin-top: 10px" v-html="contacts.name">
                                    <input v-model="contacts.name" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">年龄</label>
                                <div class="col-sm-10" style="margin-top: 10px" v-html="contacts.age">
                                    <input v-model="contacts.age" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">类型</label>
                                <div class="col-sm-10"  style="margin-top: 10px" v-html="contacts.ctype">
                                    <input v-model="contacts.ctype" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">性别</label>
                                <div class="col-sm-10" style="margin-top: 10px" v-html="contacts.sex">
                                    <input v-model="contacts.sex" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label "> 图片上传 </label>
                                <div class="col-sm-10" style="margin-top: 10px">
                                    <div v-show="contacts.img" class="row">
                                        <div class="col-md-4">
                                            <img v-bind:src="imgUrl+contacts.img" class="img-responsive">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">联系方式</label>
                                <div class="col-sm-10" style="margin-top: 10px" v-html="contacts.tel">
                                    <input v-model="contacts.tel" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">地址</label>
                                <div class="col-sm-10" style="margin-top: 10px" v-html="contacts.address">
                                    <input v-model="contacts.address" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label "> 说明： </label>
                                <div class="col-sm-10" style="margin-top: 10px" v-html="contacts.note">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

    </div>
</template>

<script>


    import File from "@/components/file";
    import Pagination from "@/components/pagination";

    export default {
        components: {Pagination, File},
        name: "list",
        data: function () {
            return {
                contacts: {},
                contacts0: {},
                contacts1: {},
                contactss: [],
                loginUser: {},
                imgUrl: '',
                ualist: [],


            }
        },
        mounted: function () {
            let _this = this;
            _this.imgUrl = _this.$imgurl;
            _this.$refs.pagination.size = 5;
            _this.loginUser = Tool.getLoginUser();
            if (_this.loginUser.id != null) {
            } else {
                _this.$router.push("/login");
            }
            _this.contacts0.name="";
            _this.commonAll();
            _this.list(1);

        },
        methods: {
            /**
             * 点击【新增】
             */
            add() {
                let _this = this;
                _this.$router.push("/contacts/add");
            },
            /**
             * 点击【编辑】
             */
            edit(contacts) {
                let _this = this;
                SessionStorage.set("CONTACTS", contacts);
                _this.$router.push("/contacts/update");
            },
            /**
             * 点击【查看】
             */
            look(contacts) {
                let _this = this;
                _this.contacts = $.extend({}, contacts);
                $("#form-modal-look").modal("show");
            },

            /**
             * 列表查询
             */
            list(page) {
                let _this = this;
                let uid = '';
                if (_this.loginUser.utype != '管理员') {
                    uid = _this.loginUser.id;
                }

                _this.$ajax.post(_this.$javaurl + "/admin/contacts/list"
                    + "?page=" + page
                    + "&size=" + _this.$refs.pagination.size
                    + "&uid=" + uid
                ).then((response) => {
                    let resp = response.data;
                    _this.contactss = resp.list;
                    _this.$refs.pagination.render(page, resp.total);
                    console.log("条数：", resp.total);

                })
            },
            /*信息列表*/
            search(page) {
                let _this = this;
                let uid = '';
                if (_this.loginUser.utype != '管理员') {
                    uid = _this.loginUser.id;
                }
                _this.$refs.pagination.size = 100;
                _this.$ajax.post(_this.$javaurl + "/admin/contacts/search"
                    + "?page=" + page
                    + "&size=" + _this.$refs.pagination.size
                    + "&name=" + _this.contacts0.name
                    + "&uid=" + uid
                ).then((response) => {
                    console.log("contacts0");
                    _this.contactss = response.data.list;
                    _this.$refs.pagination.render(page, response.data.total);
                })
            },

            /**
             * 点击【删除】
             */
            del(id) {
                let _this = this;
                Confirm.show("删除联系人后不可恢复，确认删除？", function () {
                    _this.$ajax.delete(_this.$javaurl + "/admin/contacts/delete/" + id).then((response) => {
                        let resp = response.data;
                        if (resp == "success") {
                            _this.list(1);
                            Toast.success("删除成功！");
                        }
                    })
                });
            },
            commonAll() {
                let _this = this;
                _this.$ajax.post(_this.$javaurl + '/admin/common/all').then((response) => {
                    let resp = response.data;
                    console.log(resp);
                    _this.ualist = resp.ualist;
                    //_this.communitys = resp.communityList;
                })
            },
        },
        computed: {}
    }
</script>
