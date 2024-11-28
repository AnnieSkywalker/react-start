import {getPagesArray} from './pages'

test('проверка кол-ва страниц1', () => {
    expect(getPagesArray(3)).toEqual([1, 2, 3])
})

test('проверка кол-ва страниц2', () => {
    expect(getPagesArray()).toEqual([])
})