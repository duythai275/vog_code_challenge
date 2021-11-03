import { useEffect, useState } from 'react';
import { Table, Space, Input, Button, Spin } from 'antd';
import PostEditor from "../../components/postEditor/postEditor.component";
import { getAllPosts, deletePost, changeOpenEditor } from '../../redux/actions/post';
import { connect } from "react-redux";
import './home.styles.css';

const Home = ({ getAllPosts, deletePost, posts, changeOpenEditor }) => {

    const { Column } = Table;
    const { Search } = Input;

    // const [ search, setSearch ] = useState("");
    const [ showClear, setShowClear ] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?%20_start=0&_limit=20")
        .then( res => res.json())
        .then( data => {
            getAllPosts(data);
        } )
    }, []);

    const searchPost = id => {
        if ( id !== "" ) 
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then( res => res.json())
            .then( data => {
                getAllPosts([data]);
                setShowClear(true);
            } )
        else 
            clearSearch();
    }

    const clearSearch = () => {
        fetch("https://jsonplaceholder.typicode.com/posts?%20_start=0&_limit=20")
        .then( res => res.json())
        .then( data => {
            getAllPosts(data);
            setShowClear(false);
        } )
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
                                        fetch(`https://jsonplaceholder.typicode.com/posts/${obj.id}`, {
                                            method: 'DELETE'
                                        })
                                        .then( res => {
                                            deletePost(obj);
                                        })
                                        .then( err => console.log(err) ) 
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
    console.log(state)
    return {
        posts: state.postsStore.posts
    }
}

const mapDispatchToProps = {
    getAllPosts, deletePost,
    changeOpenEditor
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);