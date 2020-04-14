import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import PageContent from './../components/PageContent';
import FormField from './../components/FormField';
import * as Yup from "yup";

class NewEntry extends React.Component {
    render() {
        const options = ["Java", "React", "Python"];

        const schemaValidation = Yup.object().shape({
            title: Yup.string()
                .min(2, 'Too Short!')
                .max(70, 'Too Long!')
                .required('Required'),
            tech: Yup.string().oneOf(options),
            content: Yup.string()
                .min(2, 'Too Short!')
                .required('Required'),
        });

        return (
            <PageContent>
                <Formik
                    initialValues={{ title: '', tech: '', status: '', content: '', tags: [] }}
                    validationSchema={schemaValidation}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log("onSubmit");
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting, errors }) => {
                        return (
                            <Form className="form">
                                <FormField name="title" title="Title" type="text" placeholder="Article title" />
                                <FormField name="tech" title="Tech" type="select" placeholder="Article tech" options={options} />
                                <FormField name="status" title="Status" type="text" placeholder="Article status" />
                                <FormField name="content" title="Content" type="textarea" placeholder="Article content" />
                                <FormField name="tags" title="Tags" type="text" placeholder="Article tags" />
                                <button className="button" type="submit" disabled={isSubmitting || !(Object.keys(errors).length === 0 && errors.constructor === Object)}>Submit</button>
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