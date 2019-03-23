import React from 'react';
import FAQ from '/src/components/FAQs';
import FAQContainer from '/src/components/FAQContainer'
import renderer from 'react-test-renderer';


test('test whether or not a FAQ renders correctly', () => {
    const FAQContainer = renderer.create(<FAQContainer/>);
    const FAQ = renderer.create(<FAQ title={} question={} faqs={} updateTitle={FAQContainer.updateTitle}/>);
});