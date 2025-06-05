import React from 'react';
import Hello from './hello';
import Goodbye from './Goodbye';
import { Card, Button, DatePicker, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import type { DatePickerProps } from 'antd';

let counter = 0;

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log('Selected date:', date, dateString);
};

const onClick = () => {
  console.log('Click count:', ++counter);
};

const Home: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <Hello name="Web API Development" />

      <Row justify="space-around">
        <Col span={8}>
          <Card
            title="Card title 1"
            bordered={false}
            cover={<img alt="dog" src="/img/dog.jpg" />}
            hoverable
          >
            <Meta title="First Post" description="This is about Dog 1" />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title="Card title 2"
            bordered={false}
            cover={<img alt="dog" src="/img/dog1.jpeg" />}
            hoverable
          >
            <Meta title="Second Post" description="This is about Dog 2" />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title="Card title 3"
            bordered={false}
            cover={<img alt="dog" src="/img/dog2.jpeg" />}
            hoverable
          >
            <Meta title="Third Post" description="This is about Dog 3" />
          </Card>
        </Col>
      </Row>

      <br />

      <Row justify="space-around">
        <Col span={8}>
          <Card
            title="Card title 4"
            bordered={false}
            cover={<img alt="dog" src="/img/dog3.jpg" />}
            hoverable
          >
            <Meta title="Fourth Post" description="This is about Dog 4" />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title="Card title 5"
            bordered={false}
            cover={<img alt="dog" src="/img/dog4.jpg" />}
            hoverable
          >
            <Meta title="Fifth Post" description="This is about Dog 5" />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title="Card title 6"
            bordered={false}
            cover={<img alt="dog" src="/img/dog5.jpg" />}
            hoverable
          >
            <Meta title="Sixth Post" description="This is about Dog 6" />
          </Card>
        </Col>
      </Row>

      <br />
      <Button type="primary" onClick={onClick}>Click Me</Button>
      <Button type="primary" danger style={{ marginLeft: 10 }}>Danger</Button>
      <br /><br />
      <DatePicker onChange={onChange} />
      <br /><br />
      <Goodbye name="everyone" />
    </div>
  );
};

export default Home;
