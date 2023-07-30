import { Card, Col, Row } from "antd"
import Link from "next/link"

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
                            <Link href={`/news/${news?.id}`} style={{
                                width: '100%',
                                backgroundColor: 'gray',
                                fontSize: '19px',
                                marginTop: '10px',
                                color: 'white',
                                fontWeight: "700",
                                padding: '10px'
                            }}>explore more</Link>
                            {/* <img src={news?.image_url} alt="" /> */}
                        </Card>
                    </Col>
                </>)}
            </Row>

        </>
    )
}

export default AllNews