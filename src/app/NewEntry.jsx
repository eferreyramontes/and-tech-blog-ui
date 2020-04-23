import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import PageContent from './../components/PageContent';
import FormField from './../components/FormField';
import * as Yup from "yup";
import { createPost } from './../store/NewEntry';

class NewEntry extends React.Component {
    render() {
        const options = ["Java", "React", "Python"];

        const schemaValidation = Yup.object().shape({
            title: Yup.string()
                .min(2, 'Too Short!')
                .max(70, 'Too Long!')
                .required('Required'),
            tech: Yup.string().required("Please select a tech"),
            content: Yup.string()
                .min(2, 'Too Short!')
                .required('Required'),
        });

        return (
            <PageContent>
                <Formik
                    initialValues={{ title: '', tech: '', status: '', content: '', tags: [] }}
                    validationSchema={schemaValidation}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(`values: ${JSON.stringify(values)}`);
                        resetForm({});
                        setTimeout(() => {
                            setSubmitting(false);
                            this.props.createPost(values);
                        }, 400);
                    }}
                >
                    {({ isSubmitting, errors }) => {
                        let successMessage;
                        if (this.props.postSuccess) {
                            successMessage = (
                                <div disabled={this.props.postSuccess ? "" : "disabled"} className="notification is-primary">
                                    <button className="delete"></button>
                                    Post {this.props.post.title} save successfully
                                </div>
                            );
                        }

                        return (
                            <div className="box">
                                {successMessage}
                                <Form className="form">
                                    <FormField name="title" title="Title" type="text" placeholder="Article title" />
                                    <FormField name="tech" title="Tech" type="select" placeholder="Article tech" options={["Please select one tech"].concat(options)} />
                                    <FormField name="status" title="Status" type="text" placeholder="Article status" />
                                    <FormField name="content" title="Content" type="textarea" placeholder="Article content" />
                                    <FormField name="tags" title="Tags" type="text" placeholder="Article tags" />
                                    <button className="button" type="submit" disabled={isSubmitting || !(Object.keys(errors).length === 0 && errors.constructor === Object)}>Submit</button>
                                </Form>
                            </div>
                        )
                    }}
                </Formik>
            </PageContent >
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

function mapStateToProps(state, ownProps) {
    return {
        postSuccess: state.newEntry.postSuccess,
        post: state.newEntry.post
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry);