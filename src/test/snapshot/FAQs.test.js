import React from 'react';
import FAQs from '../../components/FAQs.js';
import FAQContainer from '../../components/FAQContainer';
import renderer from 'react-test-renderer';
import FAQService from '../../services/FAQService';

test('test the initial dom or not a list of FAQs renders correctly', () => {
    const FAQ = renderer.create(<FAQs
        title=""
        question=""
        faqs={[]}
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

const faqService = FAQService.getInstance();
test('test find all FAQs', () => {
    return (faqService.findAllFAQs()).then(faqs => {
        const FAQ = renderer.create(<FAQs
            title=""
            question=""
            faqs={faqs}
            updateTitle={FAQContainer.updateTitle}
            updateQuestion={FAQContainer.updateQuestion}
            createFAQ={FAQContainer.createFAQ}
            editFAQ={FAQContainer.editFAQ}
            deleteFAQ={FAQContainer.deleteFAQ}
            moveToEdit={FAQContainer.moveToEdit}
            searchButton={FAQContainer.searchButton}/>);
        let tree = FAQ.toJSON();
        return expect(tree).toMatchSnapshot();
    });
});