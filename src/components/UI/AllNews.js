import { Card, Col, Row } from "antd"

const AllNews = ({ allNews }) => {
    return (
        <>
            <Row gutter={16}>
                {allNews?.map(news => <>
                    <Col span={8}>
                        <Card
                            cover={<img alt="example" src={news?.image_url} />}
                            title={news?.title} bordered={false}>
                            {news?.description}

                            {/* <img src={news?.image_url} alt="" /> */}
                        </Card>
                    </Col>
                </>)}
            </Row>

        </>
    )
}

export default AllNews