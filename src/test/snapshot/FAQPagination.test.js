import FAQContainer from '../../components/FAQContainer'
import FAQs from '../../components/FAQs'
import TestRenderer from 'react-test-renderer';
import FAQService from '../../services/FAQService'
import faqMockAll from '../MockData/FAQAll.mock.json';
import faqMockPage1 from '../MockData/FAQPage1.mock.json';
import faqMockPage2 from '../MockData/FAQPage2.mock.json';
const faqService = FAQService.getInstance();

// test('[test render faq service correctly]', () => {
//     return faqService
//         .findAllFAQs()
//         .then(faqs => {
//             console.log("ddwwd")
//             expect(faqs).toBeDefined()
//             expect(faqs).toHaveLength(4)
//             expect(faqs[0].id).toBe(92)
//         })
// })

test("render all faqs from services", () => {
    faqService
    .findAllFAQs()
    .then(faqs => {
        const testRenderer = TestRenderer.create(
            <FAQs
                title={faqs[0].title}
                question={faqs[0].question}
                faqs={faqs}
            />
        )
        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()

        const testInstance = testRenderer.root

        const faqTitle  = testInstance.findByProps({className: 'faqTitle'})
        const faqQuestion  = testInstance.findByProps({className: 'faqQuestion'})
        const createFAQBtn = testInstance.findAllByProps({className: 'buttons create-btn btn btn-primary'})
        const updateFAQBtn = testInstance.findAllByProps({className: 'buttons edit-btn btn btn-info'})
        const faqRows = testInstance.findAllByProps({className: 'faq-row'})
        const faqTitles = testInstance.findAllByProps({className: 'faq-title'})
        const faqQuestions = testInstance.findAllByProps({className: 'faq-question'})
        const deleteFAQBtns = testInstance.findAllByProps({className: 'buttons delete-btn btn btn-danger'})
        const selectFAQBtns = testInstance.findAllByProps({className: 'buttons select-btn btn btn-primary'})
        
        expect(faqTitle.props.value).toBe('background check')
        expect(faqQuestion.props.value).toBe('How many projects do you experienced?')
        expect(createFAQBtn.length).toBe(1)
        expect(updateFAQBtn.length).toBe(1)
        // we added a new element in the faq array in the test "faq list renders correctly"
        expect(faqRows.length).toBe(9)
        expect(faqTitles.length).toBe(9)
        expect(faqQuestions.length).toBe(9)
        expect(deleteFAQBtns.length).toBe(9)
        expect(selectFAQBtns.length).toBe(9)

    }).catch(function (error) {
        // print out which test fail
        console.log(error)
        alert("Failed to test service");
    });
})