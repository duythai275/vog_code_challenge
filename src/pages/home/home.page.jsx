import { useEffect, useState } from 'react';
import { Table, Space, Input, Button, Spin } from 'antd';
import PostEditor from "../../components/postEditor/postEditor.component";
import { fetchAllPostsAsync, deleteAPostAsync, changeOpenEditor } from '../../redux/actions/post';
import { connect } from "react-redux";
import './home.styles.css';

const Home = ({ fetchAllPostsAsync, deleteAPostAsync, posts, changeOpenEditor }) => {

    const { Column } = Table;
    const { Search } = Input;

    const [ showClear, setShowClear ] = useState(false);

    useEffect(() => {
        fetchAllPostsAsync();
    }, []);

    const searchPost = id => {
        if ( id !== "" ) {
            fetchAllPostsAsync(id);
            setShowClear(true);
        } else 
            clearSearch();
    }

    const clearSearch = () => {
        fetchAllPostsAsync();
        setShowClear(false);
    }

    return (
        <section className="section">
            <div className="bd-grid">
                <div className="section-header">
                    <div>
                        <Space>
                            <Search
                                placeholder="Search Post ID"
                                allowClear
                                onSearch={ value => searchPost(value) }
                                style={{ width: 250 }}
                            />
                            { showClear && <Button onClick={() => clearSearch()}>Clear</Button> }
                        </Space>
                    </div>
                    <div className="add-button">
                        <Button 
                            type="primary" 
                            style={{ marginBottom: 16 }}
                            onClick={ () => changeOpenEditor({
                                userId: "",
                                id: "",
                                title: "",
                                body: ""
                            }) }
                        >
                            Add a post
                        </Button>
                    </div>
                </div>
                <div>
                    {
                        posts.length > 0 ? <Table
                            dataSource={posts} 
                            size={"small"}
                        >
                            <Column title="User" dataIndex="userId" key="userId"/>
                            <Column title="ID" dataIndex="id" key="id" />
                            <Column title="Title" dataIndex="title" key="title"/>
                            <Column title="Body" dataIndex="body" key="body"/>
                            <Column key="action" render={ obj => (
                                <Space size="middle">
                                    <a onClick={ () => changeOpenEditor({
                                        userId: obj.userId,
                                        id: obj.id,
                                        title: obj.title,
                                        body: obj.body
                                    }) }>Edit</a>
                                    <a onClick={ () => {
                                        deleteAPostAsync(obj.id)
                                    }}>Delete</a>
                                </Space>
                            )} />
                        </Table> : <Spin size="large" />

                    }
                </div>
            </div>
            <PostEditor />
        </section>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.postsStore.posts
    }
}

const mapDispatchToProps = {
    fetchAllPostsAsync, deleteAPostAsync,
    changeOpenEditor
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);