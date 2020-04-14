import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import PageContent from './../components/PageContent';
import FormField from './../components/FormField'

class NewEntry extends React.Component {
    render() {
        return (
            <PageContent>
                <Formik
                    initialValues={{ title: '', tech: '', status: '', content: '', tags: [] }}
                    validate={values => {
                        const errors = {};
                        if (!values.title) {
                            errors.title = 'Required';
                        }
                        if (!values.tech) {
                            errors.tech = 'Select one of the available techs';
                        }
                        if (!values.content) {
                            errors.content = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting, errors }) => {
                        console.log(`errors: ${JSON.stringify(errors)}`);
                        return (
                            <Form className="form">
                                <FormField name="title" title="Title" type="text" placeholder="Article title" />
                                <FormField name="tech" title="Tech" type="select" placeholder="Article tech" options={["Java", "React", "Python"]} />
                                <FormField name="status" title="Status" type="text" placeholder="Article status" />
                                <FormField name="content" title="Content" type="textarea" placeholder="Article content" />
                                <FormField name="tags" title="Tags" type="text" placeholder="Article tags" />
                                <button className="button" type="submit" disabled={isSubmitting && !errors}>Submit</button>
                            </Form>
                        )
                    }}
                </Formik>
            </PageContent >
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
    }
}

export default connect(mapStateToProps)(NewEntry);