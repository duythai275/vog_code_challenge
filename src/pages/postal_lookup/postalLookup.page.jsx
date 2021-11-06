import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Table, Space, Input, Typography } from 'antd';
import { fetchPostalAreAsync } from "../../redux/actions/postalLookup";
import "./postalLookup.styles.css";

const PostalLookup = ({fetchPostalAreAsync, postalArea}) => {

    const { Column } = Table;
    const { Search } = Input;
    const { Title } = Typography;

    const [code, setCode] = useState("90210");
    const [temp, setTemp] = useState("90210");

    useEffect(() => {
        fetchPostalAreAsync(code);
    }, [code])

    return (
        <section className="section">
            <div className="bd-grid">
                <div className="section-header">
                    <div>
                        <Space>
                            <Search
                                placeholder="Enter Postal Code"
                                // allowClear
                                onSearch={ value => setCode(value) }
                                style={{ width: 250, marginBottom: 16 }}
                                value={temp}
                                onChange={e => setTemp(e.target.value)}
                            />
                        </Space>
                    </div>
                    <div>
                        <Title level={3}>{postalArea && postalArea.country}</Title>
                    </div>
                </div>
                <div>
                {
                    postalArea && <Table pagination={false} dataSource={postalArea.places}>
                        <Column title="State / Province" dataIndex="state" key="state" width="25%" />
                        <Column title="Place Name" dataIndex="place name" key="place name" width="45%" />
                        <Column title="Longitude" dataIndex="longitude" key="longitude" width="15%" />
                        <Column title="Latitude" dataIndex="latitude" key="latitude" width="15%" />
                    </Table>
                }
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        postalArea: state.postalAreaStore.area
    }
}

const mapDispatchToProps = {
    fetchPostalAreAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(PostalLookup);