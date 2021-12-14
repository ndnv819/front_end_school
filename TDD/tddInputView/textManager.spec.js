describe('텍스트 관리자입니다.', () => {

    // 재스민 함수 사용해서 리팩토링
    let textManager;
    // beforeEach : it 함수 호출 직전에 실행됩니다. 
    beforeEach(() => {
        textManager = new TextManager();
    })

    it('텍스트 값을 전달합니다.', () => {
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue);
    })

    it('텍스트 값을 수정합니다.', () => {
        const newText = { data: 'Hello Zebras' };
        textManager.setValue(newText);

        expect(textManager.getValue()).toBe(newText.data);
    })


    // 리팩토링 이전

    // it('텍스트 값을 전달합니다.', () => {
    //     const textManager = new TextManager();
    //     const initValue = textManager.getValue();
    //     expect(textManager.getValue()).toBe(initValue);
    // })

    // it('텍스트 값을 수정합니다.', () => {
    //     const textManager = new TextManager();
    //     const newText = { data: 'Hello Zebras' };
    //     textManager.setValue(newText);

    //     expect(textManager.getValue()).toBe(newText.data);
    // })
})