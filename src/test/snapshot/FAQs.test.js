import React from 'react';
import FAQs from '../../components/FAQs.js';
import FAQContainer from '../../components/FAQContainer';
import renderer from 'react-test-renderer';


test('test whether or not a list of FAQs renders correctly', () => {
    const FAQ = renderer.create(<FAQs
        title=""
        question=""
        faqs={[{"id":1,"title":"background check","question":"How many projects do you experienced?","answers":[]}]}
        updateTitle={FAQContainer.updateTitle}
        updateQuestion={FAQContainer.updateQuestion}
        createFAQ={FAQContainer.createFAQ}
        editFAQ={FAQContainer.editFAQ}
        deleteFAQ={FAQContainer.deleteFAQ}
        moveToEdit={FAQContainer.moveToEdit}
        searchButton={FAQContainer.searchButton}/>);

    let tree = FAQ.toJSON();
    expect(tree).toMatchSnapshot();
});