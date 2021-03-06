<?php
/**
 * 管理员验证器
 * by:小航 11467102@qq.com
 */
declare (strict_types=1);

namespace app\admin\validate;

use think\Validate;

class Admin extends Validate
{
    /**
     * 定义验证规则
     * 格式：'字段名' =>  ['规则1','规则2'...]
     *
     * @var array
     */
    protected $rule = [
        'user' => 'require|length:5,15|alphaNum|unique:admin,user',
        'name' => 'chs',
        'mpassword' => 'require|length:6,15',
        'password' => 'require|length:6,15',
        'passwords' => 'require|confirm:password',
        'card' => 'idCard',
        'mobile' => 'mobile|unique:admin,mobile',
        'email' => 'email|unique:admin,email',
        'age' => 'number|between:1,120',
        'status' => 'require',
        'role_id' => 'require'
    ];

    /**
     * 定义错误信息
     * 格式：'字段名.规则名' =>  '错误信息'
     *
     * @var array
     */
    protected $message = [
        'user.require' => '账号不能为空！',
        'user.length' => '账号只能在5到15位之间！',
        'user.alphaNum' => '账号只能是字母和数字组成！',
        'user.unique' => '账号已存在！',
        'name.chs' => '真实姓名只能是汉字！',
        'mpassword.require' => '旧密码不能为空！',
        'mpassword.length' => '旧密码只能在6到15位之间！',
        'password.require' => '密码不能为空！',
        'password.length' => '密码只能在6到15位之间！',
        'passwords.require' => '确认密码不能为空！',
        'passwords.confirm' => '两次密码不一致！',
        'card.idCard' => '身份证号码格式错误！',
        'mobile.mobile' => '手机号码格式不正确！',
        'mobile.unique' => '手机号码已存在！',
        'email.email' => '邮箱格式不正确！',
        'email.unique' => '邮箱已存在！',
        'age.number' => '年龄必须是数字！',
        'age.between' => '年龄只能在1-120岁之间！',
        'status.require' => '请选择状态',
        'role_id.require' => '权限组不能为空！'
    ];


    /**
     * 修改密码
     * @return Admin
     */
    public function scenepassEdit()
    {
        return $this->only(['mpassword', 'password', 'passwords']);
    }

    /**
     * 管理员添加
     * @return Admin
     */
    public function sceneAdd()
    {
        return $this->only(['user', 'name', 'password', 'passwords', 'card', 'mobile', 'email', 'age', 'status', 'role_id']);
    }

    /**
     * 管理员编辑
     * @return Admin
     */
    public function sceneEdit()
    {
        return $this->only(['user', 'name', 'password', 'card', 'mobile', 'email', 'age'])->remove('password', 'require');
    }
}
