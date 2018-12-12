import React from 'react';

const EqualizeElementsByRow = (elementIdentifier) => {
    const elements = document.getElementsByClassName(elementIdentifier);
    let currentTop = Number.MIN_VALUE
    let sameTopPositionsElementsArr = [];
    for(let current of elements) {
        let tempTop = current.offsetTop;

        if(tempTop > currentTop){
            if(sameTopPositionsElementsArr.length){
                let max = Math.max.apply(Math, sameTopPositionsElementsArr.map((item) => {
                    return ClearPixelMeasure(window.getComputedStyle(item, null).getPropertyValue('height'));
                }));
                SetElementsHeight(sameTopPositionsElementsArr, max);
            }

            sameTopPositionsElementsArr = [];
            currentTop = current.offsetTop;
        }
        sameTopPositionsElementsArr.push(current)
    }
    if(sameTopPositionsElementsArr.length){
        let max = Math.max.apply(Math, sameTopPositionsElementsArr.map((item) => {
            return ClearPixelMeasure(window.getComputedStyle(item, null).getPropertyValue('height'));
        }));
        SetElementsHeight(sameTopPositionsElementsArr, max)
    }

};

let ClearPixelMeasure = (inputValue) => {
    return Number(inputValue.replace('px', ''));
};

let SetElementsHeight = (arrayOfElementsInSameRow, maxHeightValue) => {
    for(let element of arrayOfElementsInSameRow) {
        element.style.height = maxHeightValue.toString() + 'px';
    }
};

export default EqualizeElementsByRow;

