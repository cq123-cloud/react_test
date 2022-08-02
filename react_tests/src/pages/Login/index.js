import { Card , Button ,Form ,Input ,Checkbox } from 'antd'
import './index.scss'

const Login = () => {
  const onFinish = (values)=>{
        console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        };
  const submit =(val)=>{
        console.log(val,'看看val有打印不？')
  };
  return (
    <div className="login">
      <Card className='login-card' title="登录" bordered={false}>
        {/* 登录表单 */}
        <Form
        className='login-form'
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 1, span: 8 }}>
        <Checkbox>鸡猪我</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
        <Button type="primary" htmlType="submit">
          点击也登录不了
        </Button>
      </Form.Item>
    </Form>
      </Card>
    </div>
  )
}

export default Login