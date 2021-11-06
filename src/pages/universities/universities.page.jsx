import { useEffect, useState } from "react";
import { Select, Table, Typography, Space } from 'antd';
import { fetchUniversitiesAsync, fetchCountryNamesAsync } from "../../redux/actions/university";
import { connect } from "react-redux";
import './universities.styles.css';

const Universities = ({ universities, countryNames, fetchUniversitiesAsync, fetchCountryNamesAsync }) => {

    const { Column } = Table;
    const { Link, Text } = Typography;
    const { Option } = Select;

    const [countryName, setCountryName] = useState("Canada");

    useEffect(() => {
        fetchCountryNamesAsync();
    }, [])

    useEffect(() => {
        fetchUniversitiesAsync(countryName);
    }, [countryName])

    return (
        <section className="section">
            <div className="bd-grid">
                <div className="section-header">
                    <div>
                        <Space>
                            <Select
                                showSearch
                                style={{ width: 200, marginBottom: 16 }}
                                placeholder="Select a country"
                                onChange={ value => setCountryName(value) }
                                value={countryName}
                            >
                            {
                                countryNames.length > 0 && countryNames.map( countryName => 
                                    <Option value={countryName}>{countryName}</Option>    
                                )
                            }    
                            </Select>

                        </Space>
                    </div>
                </div>
                <div>
                    <Table
                        dataSource={universities}
                    >
                        <Column title="Websites" dataIndex="web_pages" key="web_pages" width="35%" render={ web_pages => 
                            web_pages.map( web_page => (
                                <Space direction="vertical">
                                    <Link href={web_page} target="_blank">{web_page}</Link>
                                </Space>
                            ))
                        } />
                        <Column title="Name" dataIndex="name" key="name" width="35%" />
                        <Column title="Domains" dataIndex="domains" key="domains" width="15%" render={ domains => 
                            domains.map( domain => (
                                <Space direction="vertical">
                                    <Text href={domain} target="_blank">{domain}</Text>
                                </Space>
                            ))
                        } />
                        <Column title="State / Province" dataIndex="province" key="province" width="15%" />
                    </Table>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        universities: state.universitiesStore.universities,
        countryNames: state.universitiesStore.countryNames
    }
}

const mapDispatchToProps = {
    fetchUniversitiesAsync,
    fetchCountryNamesAsync
}

export default connect(mapStateToProps,mapDispatchToProps)(Universities);