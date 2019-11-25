import * as angular from 'angular'
import { getQueriesForElement, fireEvent, waitForDomChange } from '@testing-library/dom'


import '../index'


function render(html: any, config: any) {
    const container = document.createElement('div')
    container.innerHTML = html
    angular.bootstrap(container, config.modules)
    return {
        container,
        ...getQueriesForElement(container),
    }
}



test('renders a counter', async () => {
    const { getByTitle, getByText } = render(`<kcd-hello></kcd-hello>`, { modules: ['app'] })
    const linkElement = getByTitle('test')
    expect(linkElement.innerHTML).toBe('Hello Webpack');

    const counter = getByText('0')
    expect(counter.innerHTML).toBe('0');
    fireEvent.click(counter)
    expect(counter.innerHTML).toBe('1');
    fireEvent.click(counter)
    expect(counter.innerHTML).toBe('2');
})


describe('Describe', () => {
    test('Single', () => {
        expect(true).toBe(true);
    })
})