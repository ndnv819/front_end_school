// describe('클릭이벤처리 및 뷰를 담당하는 함수입니다.', () => {
//     // dependency injection (의존 주입)
//     // 혼자 사용할 수 없고 다른 객체를 자기한테 삽입해야 쓸 수 있다.
//     let textManager, btnEl, viewerEl, inpTxt, viewManager;
//     beforeEach(() => {
//         textManager = new TextManager();
//         btnEl = document.createElement('button');
//         viewerEl = document.createElement('strong');
//         inpTxt = document.createElement('input');
//         viewManager = new viewManager(textManager, {btnEl, viewerEl, inpTxt});
//     })

//     it('viewManager에 인자가 잘 전달됐는지 확인합니다.', () => {
//         const textManager = null;
//         const btnEl = null; 
//         const viewerEl = null;
//         const inpTxt = null; 
        
//         // 인자가 전달되는지 확인하는 함수 
//         // const viewManager = new ViewManager(textManager, {btnEl, viewerEl, inpTxt});

//         // 인자가 전달되는지 확인하는 함수 
//         const actual = () => viewManager(textManager, {btnEl, viewerEl, inpTxt});

//         // actual에는 값이 아닌 실행할 수 있는 함수가 전달되어야 합니다.
//         expect(actual).toThrowError();
//     })

//     // 클릭 이벤트 발생한 경우
//     it('click 이벤트가 발생했을 경우 changeValue 함수를 실행합니다', () => {
//         // 특정한 모듈의 함수를 감시 // toHaveBeenCalled 쓸려면 무조건 먼저 해줘야 함 
//         spyOn(viewManager, 'changeValue');
//         btnEl.click();
//         // toHaveBeenCalled : 함수가 호출된 적 있는지 판별
//         expect(viewManager.changeValue).toHaveBeenCalled();
//     })
// })

// 선생님
describe('클릭이벤처리 및 뷰를 담당하는 함수입니다.', () => {
    //dependency injection (의존 주입) 
    let textManager, viewerEl, btnEl, inpTxt, viewManager;

    beforeEach(() => {
        textManager = new TextManager();
        viewerEl = document.createElement('strong');
        btnEl = document.createElement('button');
        inpTxt = document.createElement('input');

        viewManager = new ViewManager(textManager, { viewerEl, btnEl, inpTxt });
    })


    it('viewManager 에 인자가 잘 전달됐는지 확인합니다.', () => {
        const textManager = null;
        const btnEl = null;
        const viewerEl = null;
        const inpTxt = null;

        // const viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

        // 인자가 전달되는지 확인하는 함수
        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

        expect(actual).toThrowError();
    })

    it('click 이벤트가 발생했을 경우 changeValue 함수를 실행합니다.', () => {
        // 특정한 모듈의 함수를 감시합니다.
        spyOn(viewManager, 'changeValue');
        btnEl.click();
        // toHaveBeenCalled : 함수가 호출이 된적이 있는지 판별합니다.
        expect(viewManager.changeValue).toHaveBeenCalled();
    })

    it('updateView 함수를 실행합니다.', () => {
        // 특정한 모듈의 함수를 감시합니다.
        spyOn(viewManager, 'updateView');
        viewManager.changeValue();
        // toHaveBeenCalled : 함수가 호출이 된적이 있는지 판별합니다.
        expect(viewManager.updateView).toHaveBeenCalled();
    })
})
