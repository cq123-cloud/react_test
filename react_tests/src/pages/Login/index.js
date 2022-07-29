import { Card , Button ,Form} from 'antd'
// import './index.scss'

const Login = () => {
  const onFinish = (values)=>{
        console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        };
  return (
    <div className="login">
      <Card className="login-container">
        <Button type="primary">点击也登录不了</Button>
        {/* 登录表单 */}
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '填用户名啊喂!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Card>
    </div>
  )
}

export default Login