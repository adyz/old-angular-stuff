import * as angular from 'angular'
import { getQueriesForElement, fireEvent } from '@testing-library/dom'


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



test('renders a counter', () => {
    const { getByTitle } = render(`<kcd-hello></kcd-hello>`, { modules: ['app'] })
    const linkElement = getByTitle('test')

    expect(linkElement.innerHTML).toBe('Hello Webpack')
})


describe('Describe', () => {
    test('Single', () => {
        expect(true).toBe(true);
    })
})