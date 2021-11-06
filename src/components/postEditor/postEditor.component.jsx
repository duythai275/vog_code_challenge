import { useState, useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import { pushAPostAsync, putAPostAsync, changeOpenEditor } from '../../redux/actions/post';
import { connect } from "react-redux";

const PostEditor = ({ pushAPostAsync, putAPostAsync, open, changeOpenEditor }) => {

    const { TextArea } = Input;

    const [title, setTitle] = useState(""); 
    const [body, setBody] = useState("");

    useEffect(() => {
        if (open) {
            setTitle(open.title);
            setBody(open.body);
        }
    }, [open]);

    const handleCancel = () => {
        changeOpenEditor(null);
    }

    const handleOk = () => {
        if ( open.id === "" ) {
            pushAPostAsync({
                "userId": 1,
                "title": title,
                "body": body
            });
            
        } else {
            putAPostAsync({
                "id": open.id,
                "userId": 1,
                "title": title,
                "body": body
            });
        }
        changeOpenEditor(null);
    }

    return (
        <>
        {
            open !== null && <Modal
                title={open.id === "" ? "New Post" : "Edit Post"}
                width={"50%"}
                centered
                visible={open !== null}
                onOK={() => handleOk()}
                onCancel={() => handleCancel()}
                closable={false}
                footer={[
                    <Button key="cancel" onClick={() => handleCancel()}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={() => handleOk()}>
                        {open.id === "" ? "Add" : "Update"}
                    </Button>
                ]}
            >
                <div>
                    <Form
                        layout={"vertical"}
                    >
                        <Form.Item label="Title">
                            <Input value={title} onChange={e => setTitle(e.target.value)} />
                        </Form.Item>
                        <Form.Item label="Body">
                            <TextArea rows={4} value={body} onChange={e => setBody(e.target.value)}  />
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        }
        </>
    )
} 

const mapStateToProps = state => {
    return {
        open: state.postsStore.openEditor
    }
}

const mapDispatchToProps = {
    pushAPostAsync, putAPostAsync,
    changeOpenEditor
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);