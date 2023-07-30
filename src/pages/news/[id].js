import RootLayout from '@/components/Layouts/RootLayout'
import { Col, Row } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const NewsDetails = ({ news }) => {
    const id = useRouter()
    console.log('id', id);
    return (
        <div>


            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" span={12}>
                    <div>
                        <Image
                            src={news?.image_url}
                            width={500}
                            height={300}
                            alt='news image'
                            responsive
                        />
                    </div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div style={{ margin: "20px" }} >

                        <h2>{news?.title}</h2>
                        <p style={{ marginTop: "20px" }}>{news?.description}</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default NewsDetails
NewsDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/news')
    const data = await res.json();
    console.log(data);
    const paths = data?.map((news) => ({
        params: { id: news?.id }
    }))
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:5000/news/${params?.id}`)
    const data = await res.json()
    return {
        props: {
            news: data,
        },

    }
}